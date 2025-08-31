import json

# Leer el archivo JSON generado
with open('public/casos/casos-procesados.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"📊 Total casos en JSON: {len(data)}")
print("\n✅ Casos CON contenido:")
casos_con_contenido = 0
for caso in data:
    if 'contenido' in caso:
        casos_con_contenido += 1
        print(f"   Caso {caso['id']}: {caso['nombre'][:50]}...")

print(f"\n❌ Casos SIN contenido:")
for caso in data:
    if 'contenido' not in caso:
        print(f"   Caso {caso['id']}: {caso['nombre'][:50]}...")

print(f"\n📈 Resumen: {casos_con_contenido}/{len(data)} casos tienen contenido completo")
