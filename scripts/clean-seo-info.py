import json
import re

# Leer el archivo JSON existente
with open('public/casos/casos-procesados.json', 'r', encoding='utf-8') as f:
    casos = json.load(f)

# Diccionario para almacenar la información SEO extraída
seo_info = {}

print("🔄 Limpiando información SEO de los casos...\n")

casos_limpiados = 0

for caso in casos:
    caso_id = caso['id']
    
    if 'contenido' in caso and 'marco_legal' in caso['contenido']:
        marco_legal = caso['contenido']['marco_legal']
        
        # Buscar la sección SEO y anclas
        seo_match = re.search(r'SEO y anclas \(web\)(.*?)(?=\n\n|\Z)', marco_legal, re.DOTALL)
        
        if seo_match:
            seo_content = seo_match.group(1).strip()
            
            # Extraer información SEO
            url_match = re.search(r'URL propuesta: (.+)', seo_content)
            title_match = re.search(r'SEO title: (.+)', seo_content)
            description_match = re.search(r'Meta description: (.+)', seo_content)
            keywords_match = re.search(r'Frases clave \(SEO\): (.+)', seo_content)
            anchors_match = re.search(r'Anclas: (.+)', seo_content)
            tags_match = re.search(r'Tags: (.+)', seo_content)
            
            # Guardar información SEO
            seo_info[caso_id] = {
                'url': url_match.group(1).strip() if url_match else f"/casos/{caso_id}",
                'title': title_match.group(1).strip() if title_match else caso['nombre'],
                'description': description_match.group(1).strip() if description_match else "",
                'keywords': keywords_match.group(1).strip() if keywords_match else "",
                'anchors': anchors_match.group(1).strip() if anchors_match else "",
                'tags': tags_match.group(1).strip() if tags_match else ""
            }
            
            # Limpiar marco_legal eliminando la sección SEO
            marco_legal_limpio = re.sub(r'\nSEO y anclas \(web\).*?(?=\n\n|\Z)', '', marco_legal, flags=re.DOTALL).strip()
            caso['contenido']['marco_legal'] = marco_legal_limpio
            
            casos_limpiados += 1
            print(f"✅ Caso {caso_id}: Información SEO extraída y marco_legal limpiado")
        else:
            print(f"⚠️  Caso {caso_id}: No se encontró información SEO")

# Guardar los casos limpiados
with open('public/casos/casos-procesados.json', 'w', encoding='utf-8') as f:
    json.dump(casos, f, ensure_ascii=False, indent=2)

# Guardar la información SEO extraída
with open('public/casos/seo-info.json', 'w', encoding='utf-8') as f:
    json.dump(seo_info, f, ensure_ascii=False, indent=2)

print("\n" + "="*70)
print(f"📊 RESUMEN:")
print(f"   • Casos limpiados: {casos_limpiados}")
print(f"   • Total casos: {len(casos)}")
print(f"\n✅ Casos limpiados guardados en: public/casos/casos-procesados.json")
print(f"✅ Información SEO guardada en: public/casos/seo-info.json")

# Mostrar información SEO extraída
print(f"\n📋 Información SEO extraída:")
for caso_id, info in seo_info.items():
    print(f"\nCaso {caso_id}:")
    print(f"   URL: {info['url']}")
    print(f"   Title: {info['title'][:60]}...")
    print(f"   Description: {info['description'][:80]}...")
    print(f"   Keywords: {info['keywords']}")
    print(f"   Tags: {info['tags']}")
