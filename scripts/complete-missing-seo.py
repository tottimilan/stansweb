import json

# Leer los archivos
with open('public/casos/seo-info.json', 'r', encoding='utf-8') as f:
    seo_info = json.load(f)

with open('public/casos/casos-procesados.json', 'r', encoding='utf-8') as f:
    casos = json.load(f)

# Información SEO faltante
missing_seo = {
    "3": {
        "url": "/casos/operacion-luco-banda-rolex",
        "title": "Operación LUCO – Banda del Rolex – defensa en causa por organización criminal",
        "description": "El despacho defiende a un investigado en la operación LUCO contra la banda del Rolex. Conoce los hechos y la estrategia procesal.",
        "keywords": "operación LUCO, banda del Rolex, organización criminal, defensa penal, Audiencia Nacional",
        "anchors": "#luco-resumen, #hechos, #estrategia, #pruebas, #resolucion, #prensa",
        "tags": "Organización criminal, Banda del Rolex, Audiencia Nacional, 2025"
    },
    "11": {
        "url": "/casos/absolucion-robo-violencia-juzgado-22",
        "title": "Absolución por robo con violencia – Juzgado nº 22 de Madrid",
        "description": "El Juzgado nº 22 de Madrid absuelve a los acusados de robo con violencia por falta de pruebas. Conoce los motivos de la sentencia.",
        "keywords": "robo con violencia absolución, Juzgado 22 Madrid, falta de pruebas, presunción de inocencia",
        "anchors": "#robo-violencia-juzgado22-resumen, #hechos, #estrategia, #pruebas, #resolucion, #prensa",
        "tags": "Robo con violencia, Absolución, Madrid, Juzgado 22, 2024"
    },
    "12": {
        "url": "/casos/sobreseimiento-amenazas-coacciones-extorsion",
        "title": "Sobreseimiento por amenazas, coacciones y extorsión",
        "description": "El Juzgado archiva las diligencias por amenazas, coacciones y extorsión contra nuestro cliente ante la falta de indicios.",
        "keywords": "amenazas coacciones extorsión, sobreseimiento, falta de indicios, presunción de inocencia",
        "anchors": "#amenazas-coacciones-resumen, #hechos, #estrategia, #pruebas, #resolucion, #prensa",
        "tags": "Amenazas, Coacciones, Extorsión, Sobreseimiento, 2024"
    },
    "13": {
        "url": "/casos/sobreseimiento-delito-salud-publica",
        "title": "Sobreseimiento por delito contra la salud pública",
        "description": "El Juzgado archiva las diligencias por delito contra la salud pública contra nuestro cliente ante la falta de indicios.",
        "keywords": "delito salud pública, sobreseimiento, falta de indicios, presunción de inocencia",
        "anchors": "#salud-publica-resumen, #hechos, #estrategia, #pruebas, #resolucion, #prensa",
        "tags": "Delito contra la salud pública, Sobreseimiento, 2024"
    }
}

print("🔄 Completando información SEO faltante...\n")

# Agregar información SEO faltante
for caso_id, info in missing_seo.items():
    seo_info[caso_id] = info
    caso = next((c for c in casos if c['id'] == int(caso_id)), None)
    nombre = caso['nombre'] if caso else "No encontrado"
    print(f"✅ Caso {caso_id}: {nombre[:50]}...")
    print(f"   → URL: {info['url']}")
    print(f"   → Title: {info['title'][:60]}...")
    print()

# Guardar el archivo actualizado
with open('public/casos/seo-info.json', 'w', encoding='utf-8') as f:
    json.dump(seo_info, f, ensure_ascii=False, indent=2)

print("=" * 60)
print(f"📊 RESUMEN:")
print(f"   • Información SEO agregada: {len(missing_seo)} casos")
print(f"   • Total casos con SEO: {len(seo_info)}")
print(f"\n✅ Archivo actualizado: public/casos/seo-info.json")

# Verificar que todos los casos tengan SEO
casos_sin_seo = []
for caso in casos:
    if str(caso['id']) not in seo_info:
        casos_sin_seo.append(caso['id'])

if casos_sin_seo:
    print(f"\n⚠️  Casos aún sin información SEO:")
    for caso_id in casos_sin_seo:
        caso = next((c for c in casos if c['id'] == caso_id), None)
        nombre = caso['nombre'] if caso else "No encontrado"
        print(f"   • Caso {caso_id}: {nombre}")
else:
    print(f"\n🎉 ¡Todos los casos tienen información SEO!")
