# 🔍 Acciones en Google Search Console - Guía Paso a Paso

## ⚠️ IMPORTANTE: Estas acciones las debes hacer TÚ en Google Search Console

Este documento contiene instrucciones detalladas para completar la optimización SEO desde Google Search Console.

---

## 1. SUBIR SITEMAP ACTUALIZADO

### Paso 1: Acceder a Google Search Console
1. Ve a [https://search.google.com/search-console](https://search.google.com/search-console)
2. Inicia sesión con tu cuenta de Google
3. Selecciona la propiedad: **stansabogados.com**

### Paso 2: Eliminar Sitemap Antiguo (si existe)
1. En el menú lateral, haz clic en **Sitemaps**
2. Si aparece `sitemap.xml` en la lista, haz clic en los tres puntos (⋮)
3. Selecciona **Eliminar sitemap**
4. Confirma la eliminación

### Paso 3: Subir Nuevo Sitemap
1. En el campo "Añadir un nuevo sitemap", escribe: `sitemap.xml`
2. Haz clic en **ENVIAR**
3. Espera 1-2 minutos
4. Refresca la página
5. Verifica que el estado sea: **Correcto** o **Procesando**

**✅ Sitemap enviado:** `https://stansabogados.com/sitemap.xml`

---

## 2. SOLICITAR INDEXACIÓN DE PÁGINAS PRIORITARIAS

### Instrucciones Generales:
1. En Google Search Console, usa la barra de búsqueda superior (icono de lupa)
2. Pega la URL completa
3. Presiona Enter
4. Espera a que GSC inspeccione la URL
5. Si aparece "La URL no está en Google", haz clic en **Solicitar indexación**
6. Espera la confirmación (puede tardar 1-2 minutos)
7. Repite para cada URL

### Top 15 URLs a Indexar (Por orden de prioridad)

#### Páginas Principales (ALTA PRIORIDAD)
```
https://stansabogados.com
https://stansabogados.com/servicios
https://stansabogados.com/blog
https://stansabogados.com/casos
```

#### Top Blogs (ALTA PRIORIDAD)
```
https://stansabogados.com/blog/defensa-penal-urgente-guia-completa
https://stansabogados.com/blog/procedimientos-extradicion-espana
https://stansabogados.com/blog/derechos-detenidos-garantias-procesales
https://stansabogados.com/blog/primeros-pasos-comisaria
https://stansabogados.com/blog/delitos-salud-publica-drogas-consecuencias
https://stansabogados.com/blog/terrorismo-internet-enaltecimiento-captacion
https://stansabogados.com/blog/blanqueo-capitales-detectar-defenderse
```

#### Hubs de Blog (PRIORIDAD MEDIA)
```
https://stansabogados.com/blog/defensa-penal-urgente
https://stansabogados.com/blog/procedimientos-extradicion
https://stansabogados.com/blog/derechos-detenidos
```

#### Top Casos (PRIORIDAD MEDIA)
```
https://stansabogados.com/casos/sobreseimiento-queque-abogados-cristianos
https://stansabogados.com/casos/operacion-luco-banda-rolex
https://stansabogados.com/casos/academia-yihad-libertad-provisional
```

**⏱️ Tiempo estimado:** 20-30 minutos para todas las URLs

**💡 Consejo:** Puedes hacer esto en 2-3 sesiones si es muy tedioso.

---

## 3. RESOLVER ERRORES 404

### Paso 1: Identificar Páginas con 404
1. En GSC, ve a **Páginas** (menú lateral)
2. Desplázate a la sección "Por qué las páginas no se indexan"
3. Haz clic en **No encontrado (404)**
4. Verás la lista completa de URLs con error 404

### Paso 2: Analizar Cada URL

Para cada URL con 404, decide:

**Opción A: La página debería existir**
→ Crear la página o verificar que exista

**Opción B: La URL cambió**
→ Añadir redirect 301 (ver sección 4)

**Opción C: La URL es inválida/antigua**
→ No hacer nada, Google dejará de intentar rastrearla

### Paso 3: Marcar como Corregido

Una vez que hayas creado la página o añadido el redirect:
1. Vuelve a GSC → Páginas → No encontrado (404)
2. Haz clic en **Validar corrección**
3. GSC volverá a rastrear las URLs en unos días

---

## 4. AÑADIR REDIRECTS 301 PARA URLs QUE CAMBIARON

Si una URL en la lista de 404 cambió de nombre, añade un redirect en `vercel.json`:

### Ejemplo de Redirect

```json
{
  "source": "/casos/old-url-name",
  "destination": "/casos/new-url-name",
  "permanent": true
}
```

### URLs Problemáticas Conocidas (de tus errores GSC)

Basándonos en tus errores, probablemente necesites:

```json
{
  "source": "/casos/operacion-luco-banda-rolex",
  "destination": "/casos/operacion-luco-banda-rolex-libertad-provisional",
  "permanent": true
},
{
  "source": "/casos/sobreseimiento-derechos-trabajadores",
  "destination": "/casos/delito-derechos-trabajadores-sobreseimiento",
  "permanent": true
},
{
  "source": "/casos/caso-robo-violencia-absolucion",
  "destination": "/casos/robo-violencia-absolucion",
  "permanent": true
}
```

**⚠️ IMPORTANTE:** Verifica las URLs correctas antes de añadir redirects. Las URLs de arriba son ejemplos.

### Dónde Añadir los Redirects

**Archivo:** `stans-web/vercel.json`

**Ubicación:** Dentro del array `"redirects": [...]`

**Después de añadir:** Haz deploy para que los cambios surtan efecto.

---

## 5. VERIFICAR PROPIEDAD WWW

### Paso 1: Añadir Propiedad WWW
1. En GSC, haz clic en el selector de propiedades (esquina superior izquierda)
2. Haz clic en **+ Añadir propiedad**
3. Selecciona **Prefijo de URL**
4. Introduce: `https://www.stansabogados.com`
5. Haz clic en **Continuar**

### Paso 2: Verificar Propiedad
Opciones para verificar:
- **Archivo HTML** (más fácil): Descarga el archivo y súbelo a `/public/`
- **Etiqueta HTML**: Ya tienes Google Tag Manager, debería auto-verificarse
- **Google Analytics**: Si ya está conectado

### Paso 3: Marcar Propiedad Preferida
1. Una vez verificadas ambas propiedades (www y no-www)
2. En la propiedad **sin www** (stansabogados.com)
3. Ve a **Configuración** → **Configuración de propiedad**
4. Marca como **Dominio preferido**

Esto le indica a Google que prefieres la versión sin www.

---

## 6. MONITOREAR INDEXACIÓN

### Qué revisar semanalmente (primeras 4 semanas):

#### Semana 1:
- [ ] Verificar que el sitemap se procesó correctamente
- [ ] Comprobar que al menos 50% de URLs solicitadas están indexadas
- [ ] Revisar que no hay nuevos errores 404

#### Semana 2:
- [ ] Verificar que 70-80% de URLs están indexadas
- [ ] Comprobar que los redirects funcionan (0 errores 404 para URLs redirigidas)
- [ ] Revisar métricas de impresiones (deben empezar a subir)

#### Semana 3:
- [ ] Verificar que 90%+ de URLs importantes están indexadas
- [ ] Analizar primeras posiciones en búsquedas
- [ ] Identificar keywords que generan impresiones

#### Semana 4:
- [ ] Informe completo de progreso
- [ ] Identificar blogs/casos con mejor rendimiento
- [ ] Planificar próximas optimizaciones

---

## 7. MÉTRICAS CLAVE A SEGUIR

### En Google Search Console:

**Rendimiento (Menú lateral)**
- **Clics totales**: Objetivo inicial 50-100/mes, crecer a 500+/mes en 3 meses
- **Impresiones totales**: Objetivo inicial 1,000/mes, crecer a 10,000+/mes
- **CTR promedio**: Objetivo 2-4%
- **Posición promedio**: Objetivo <30 (mejorar a <20 en 3 meses)

**Cobertura (Menú lateral → Páginas)**
- **Páginas indexadas**: Objetivo 80-90% de las páginas enviadas
- **Páginas excluidas**: Mantener <10%
- **Errores**: Mantener en 0

### En Google Analytics (si está configurado):

- **Usuarios orgánicos**: Rastrear crecimiento semanal
- **Páginas vistas de blog**: Objetivo 500+/mes
- **Tiempo promedio en página**: Objetivo >2 minutos para blogs
- **Tasa de rebote**: Objetivo <60%

---

## 8. RICH RESULTS TEST

### Verificar Schema Markup:

1. Ve a [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. Prueba estas URLs:
   - Homepage: `https://stansabogados.com`
   - Blog post: `https://stansabogados.com/blog/defensa-penal-urgente-guia-completa`
   - Caso: `https://stansabogados.com/casos/sobreseimiento-queque-abogados-cristianos`

3. Verifica que aparezcan:
   - **LegalService** (Homepage)
   - **BlogPosting** (Blog posts)
   - Sin errores críticos

---

## 9. CHECKLIST FINAL

Marca cuando completes cada acción:

### Acciones Obligatorias:
- [ ] Sitemap subido a GSC
- [ ] Top 15 URLs solicitadas para indexación
- [ ] Propiedad www verificada
- [ ] Redirect www → no-www funcionando
- [ ] Errores 404 revisados y corregidos
- [ ] Rich Results Test pasado sin errores críticos

### Acciones de Monitoreo (Continuas):
- [ ] Revisar GSC semanalmente
- [ ] Volver a solicitar indexación si URLs no se indexan en 2 semanas
- [ ] Actualizar sitemap si añades nuevas páginas
- [ ] Responder a mensajes de GSC (si los hay)

---

## 10. PROBLEMAS COMUNES Y SOLUCIONES

### "La URL está en Google pero no aparece en búsquedas"

**Causa:** La página está indexada pero no rankea aún.

**Solución:** 
- Normal en las primeras semanas
- Sigue creando contenido y enlaces internos
- Mejora el contenido de la página

### "Sitemap no se puede leer"

**Causa:** Error en el formato XML del sitemap.

**Solución:**
- Verifica que el sitemap sea accesible: https://stansabogados.com/sitemap.xml
- Si hay error, revisa el archivo `src/app/sitemap.ts`
- Haz un nuevo deploy

### "Muchas páginas con etiqueta 'noindex'"

**Causa:** Alguna configuración bloqueando indexación.

**Solución:**
- Verifica que no hay `<meta name="robots" content="noindex">` en las páginas
- Revisa el archivo `robots.txt`
- Comprueba los metadatos en `layout.tsx`

### "URLs duplicadas sin canonical"

**Causa:** Ya lo resolvimos con los redirects www → no-www.

**Solución:**
- Espera 2-4 semanas para que Google actualice
- Verifica que el redirect funciona: https://www.stansabogados.com → https://stansabogados.com

---

## 📞 SOPORTE

Si tienes dudas sobre alguna acción:

1. **Busca en la documentación de GSC**: [https://support.google.com/webmasters](https://support.google.com/webmasters)
2. **Revisa el archivo SEO_NEXT_STEPS.md** en el proyecto
3. **Consulta los logs de errores** en GSC

---

## ✅ RESUMEN

**Tiempo total estimado:** 1-2 horas (primera vez)

**Acciones críticas (hoy):**
1. Subir sitemap nuevo ✓
2. Solicitar indexación de top 15 URLs ✓
3. Verificar propiedad www ✓

**Acciones semanales:**
- Revisar indexación
- Monitorear métricas
- Re-solicitar URLs no indexadas

**Resultado esperado en 4 semanas:**
- 80-90% de páginas indexadas
- Primeras posiciones en búsquedas long-tail
- Tráfico orgánico creciendo 20-50%/semana

---

**🚀 ¡Todo listo para que Google indexe tu sitio correctamente!**

