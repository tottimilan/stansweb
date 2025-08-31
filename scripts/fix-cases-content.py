import json
import pandas as pd
import re
import os

# Leer el archivo JSON existente
with open('public/casos/casos-procesados.json', 'r', encoding='utf-8') as f:
    casos = json.load(f)

# Leer el archivo Excel para obtener los links correctos
df = pd.read_excel('public/casos/casos.xlsx')

# Crear diccionario de noticias y links por ID de caso
noticias_dict = {}
links_dict = {}
for index, row in df.iterrows():
    caso_id = index + 1  # Los casos empiezan en 1
    
    # Obtener noticias
    noticias = row.get('Noticias (enlaces)', '')
    if pd.notna(noticias) and noticias.strip():
        noticias_dict[caso_id] = noticias.strip()
    
    # Obtener links
    links = row.get('Links', '')
    if pd.notna(links) and links.strip():
        links_dict[caso_id] = links.strip()

# Leer información SEO para las URLs correctas
with open('public/casos/seo-info.json', 'r', encoding='utf-8') as f:
    seo_info = json.load(f)

print("🔄 Corrigiendo contenido de los casos...\n")

casos_corregidos = 0

for caso in casos:
    caso_id = caso['id']
    
    if 'contenido' in caso:
        contenido = caso['contenido']
        
        # 1. Limpiar referencias 【】
        for key in contenido:
            if isinstance(contenido[key], str):
                contenido[key] = re.sub(r'【[^】]*】', '', contenido[key]).strip()
        
        # 2. Extraer secciones de marco_legal
        if 'marco_legal' in contenido:
            marco_legal = contenido['marco_legal']
            
            # Extraer sección de imágenes
            imagenes_match = re.search(r'Imágenes \(anexos del expediente\)(.*?)(?=\n\n|\Z)', marco_legal, re.DOTALL)
            if imagenes_match:
                imagenes_content = imagenes_match.group(1).strip()
                contenido['imagenes'] = imagenes_content
                # Limpiar marco_legal
                marco_legal = re.sub(r'\nImágenes \(anexos del expediente\).*?(?=\n\n|\Z)', '', marco_legal, flags=re.DOTALL)
            
            # Extraer sección de enlaces y notas
            enlaces_match = re.search(r'Enlaces y notas \(citas\)(.*?)(?=\n\n|\Z)', marco_legal, re.DOTALL)
            if enlaces_match:
                enlaces_content = enlaces_match.group(1).strip()
                contenido['enlaces'] = enlaces_content
                # Limpiar marco_legal
                marco_legal = re.sub(r'\nEnlaces y notas \(citas\).*?(?=\n\n|\Z)', '', marco_legal, flags=re.DOTALL)
            
            # Actualizar marco_legal limpio
            contenido['marco_legal'] = marco_legal.strip()
        
        # 3. Extraer secciones de imagenes (por si están ahí)
        if 'imagenes' in contenido:
            imagenes = contenido['imagenes']
            
            # Extraer sección de enlaces y notas desde imagenes
            enlaces_match = re.search(r'Enlaces y notas \(citas\)(.*?)(?=\n\n|\Z)', imagenes, re.DOTALL)
            if enlaces_match:
                enlaces_content = enlaces_match.group(1).strip()
                contenido['enlaces'] = enlaces_content
                # Limpiar imagenes
                imagenes = re.sub(r'\nEnlaces y notas \(citas\).*?(?=\n\n|\Z)', '', imagenes, flags=re.DOTALL)
                contenido['imagenes'] = imagenes.strip()
        
        # 4. Agregar imagen correspondiente
        if caso_id in seo_info and seo_info[str(caso_id)].get('url'):
            # Buscar imagen correspondiente
            image_dir = 'public/images/case_images'
            if os.path.exists(image_dir):
                # Buscar por ID primero
                for filename in os.listdir(image_dir):
                    if filename.endswith('.png') and f"CASO {caso_id}" in filename:
                        caso['imagen'] = f'/images/case_images/{filename}'
                        break
                else:
                    # Buscar por nombre del caso
                    nombre_caso = caso['nombre'].replace(' ', '_').replace('-', '_')
                    for filename in os.listdir(image_dir):
                        if filename.endswith('.png') and any(word in filename.upper() for word in nombre_caso.split('_')):
                            caso['imagen'] = f'/images/case_images/{filename}'
                            break
        
        # 5. Actualizar noticias y links del Excel
        if caso_id in noticias_dict:
            caso['noticias'] = noticias_dict[caso_id]
        else:
            caso['noticias'] = ''
            
        if caso_id in links_dict:
            caso['links'] = links_dict[caso_id]
        else:
            caso['links'] = ''
        
        casos_corregidos += 1
        print(f"✅ Caso {caso_id}: Corregido")
        print(f"   → Imagen: {caso.get('imagen', 'No encontrada')}")
        print(f"   → Noticias: {caso.get('noticias', 'Sin noticias')[:50]}...")
        print(f"   → Links: {caso.get('links', 'Sin links')[:50]}...")
        if 'imagenes' in contenido:
            print(f"   → Sección imágenes extraída")
        if 'enlaces' in contenido:
            print(f"   → Sección enlaces extraída")
        print()

# Guardar los casos corregidos
with open('public/casos/casos-procesados.json', 'w', encoding='utf-8') as f:
    json.dump(casos, f, ensure_ascii=False, indent=2)

print("="*70)
print(f"📊 RESUMEN:")
print(f"   • Casos corregidos: {casos_corregidos}")
print(f"   • Total casos: {len(casos)}")
print(f"\n✅ Casos corregidos guardados en: public/casos/casos-procesados.json")

# Mostrar información de noticias y links del Excel
print(f"\n📋 Noticias del Excel encontradas:")
for caso_id, noticias in noticias_dict.items():
    print(f"   Caso {caso_id}: {noticias[:80]}...")

print(f"\n📋 Links del Excel encontrados:")
for caso_id, link in links_dict.items():
    print(f"   Caso {caso_id}: {link[:80]}...")
