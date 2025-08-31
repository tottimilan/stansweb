import json

# Leer los archivos
with open('public/casos/seo-info.json', 'r', encoding='utf-8') as f:
    seo_info = json.load(f)

with open('public/casos/casos-procesados.json', 'r', encoding='utf-8') as f:
    casos = json.load(f)

print("🔍 Verificando URLs SEO...\n")

# Crear mapeo de URLs a IDs
url_to_id_map = {}
id_to_url_map = {}

for caso_id, info in seo_info.items():
    if info.get('url'):
        # Extraer la parte final de la URL
        url_path = info['url'].split('/')[-1]
        url_to_id_map[url_path] = int(caso_id)
        id_to_url_map[int(caso_id)] = url_path

print("📋 Mapeo de URLs SEO:")
print("=" * 60)
for url_path, caso_id in url_to_id_map.items():
    caso = next((c for c in casos if c['id'] == caso_id), None)
    nombre_corto = caso['nombre'][:40] + "..." if caso and len(caso['nombre']) > 40 else caso['nombre'] if caso else "No encontrado"
    print(f"🔗 {url_path}")
    print(f"   → ID: {caso_id}")
    print(f"   → Caso: {nombre_corto}")
    print()

print("📊 Estadísticas:")
print(f"   • Total casos en SEO info: {len(seo_info)}")
print(f"   • URLs configuradas: {len(url_to_id_map)}")
print(f"   • Casos sin URL SEO: {len(seo_info) - len(url_to_id_map)}")

# Verificar casos sin URL SEO
casos_sin_url = []
for caso_id in seo_info:
    if not seo_info[caso_id].get('url'):
        casos_sin_url.append(caso_id)

if casos_sin_url:
    print(f"\n⚠️  Casos sin URL SEO configurada:")
    for caso_id in casos_sin_url:
        caso = next((c for c in casos if c['id'] == int(caso_id)), None)
        nombre = caso['nombre'] if caso else "No encontrado"
        print(f"   • Caso {caso_id}: {nombre}")

# Verificar que todos los casos tengan su correspondiente en SEO info
casos_sin_seo = []
for caso in casos:
    if str(caso['id']) not in seo_info:
        casos_sin_seo.append(caso['id'])

if casos_sin_seo:
    print(f"\n⚠️  Casos sin información SEO:")
    for caso_id in casos_sin_seo:
        caso = next((c for c in casos if c['id'] == caso_id), None)
        nombre = caso['nombre'] if caso else "No encontrado"
        print(f"   • Caso {caso_id}: {nombre}")

print(f"\n✅ Verificación completada!")
print(f"\n🌐 URLs de ejemplo para probar:")
print("=" * 60)
for i, (url_path, caso_id) in enumerate(list(url_to_id_map.items())[:5]):
    print(f"   http://localhost:3000/casos/{url_path}")
    if i >= 4:  # Mostrar solo los primeros 5
        break
