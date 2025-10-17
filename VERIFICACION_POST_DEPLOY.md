# ✅ Verificación Post-Deploy - SEO Optimizado

## Checklist de Verificación Después del Deploy

Usa este documento para verificar que todos los cambios SEO funcionan correctamente en producción.

---

## 1. VERIFICACIÓN BÁSICA

### 1.1 Sitio Accesible
- [ ] Homepage: https://stansabogados.com
- [ ] Carga correctamente sin errores

### 1.2 Nueva Página Servicios
- [ ] https://stansabogados.com/servicios
- [ ] Carga correctamente
- [ ] Muestra las 6 áreas de práctica
- [ ] Enlaces funcionan

### 1.3 Blogs Accesibles
Prueba 3 blogs:
- [ ] https://stansabogados.com/blog/defensa-penal-urgente-guia-completa
- [ ] https://stansabogados.com/blog/procedimientos-extradicion-espana
- [ ] https://stansabogados.com/blog/primeros-pasos-comisaria

### 1.4 Casos Accesibles
Prueba 2 casos:
- [ ] https://stansabogados.com/casos/sobreseimiento-queque-abogados-cristianos
- [ ] https://stansabogados.com/casos/operacion-luco-banda-rolex

---

## 2. VERIFICACIÓN DE REDIRECTS

### 2.1 Redirect WWW → No-WWW

Prueba en tu navegador:

**URL a probar:** https://www.stansabogados.com

**Resultado esperado:** Debe redirigir automáticamente a https://stansabogados.com

**Estado:**
- [ ] ✅ Redirige correctamente
- [ ] ❌ No redirige (revisar configuración)

### 2.2 Verificar en DevTools

1. Abre DevTools (F12)
2. Ve a la pestaña "Network"
3. Visita: https://www.stansabogados.com
4. Verifica que el código de estado sea **301** (redirect permanente)

**Status Code esperado:** 301 Moved Permanently

---

## 3. VERIFICACIÓN DE METADATOS

### 3.1 Metadatos de Blog

Visita: https://stansabogados.com/blog/defensa-penal-urgente-guia-completa

**Ver código fuente (Ctrl+U o Click derecho → Ver código fuente)**

Busca y verifica:
- [ ] `<title>` contiene el título del blog + "| STANS ABOGADOS"
- [ ] `<meta name="description"` existe y es único
- [ ] `<meta name="keywords"` contiene tags relevantes
- [ ] `<meta property="og:title"` existe (Open Graph)
- [ ] `<meta property="og:description"` existe
- [ ] `<link rel="canonical"` apunta a la URL correcta
- [ ] `<link rel="alternate" hreflang="es-ES"` existe
- [ ] `<link rel="alternate" hreflang="ar"` existe
- [ ] Schema `BlogPosting` existe en `<script type="application/ld+json">`

### 3.2 Metadatos de Caso

Visita: https://stansabogados.com/casos/sobreseimiento-queque-abogados-cristianos

**Ver código fuente**

Busca y verifica:
- [ ] `<title>` contiene información del caso
- [ ] `<meta name="description"` existe y describe el caso
- [ ] `<link rel="canonical"` apunta a la URL correcta
- [ ] Open Graph tags presentes

### 3.3 Metadatos de Servicios

Visita: https://stansabogados.com/servicios

**Ver código fuente**

Busca y verifica:
- [ ] `<title>` contiene "Servicios de Defensa Penal"
- [ ] `<meta name="description"` describe los servicios
- [ ] `<link rel="canonical"` = `/servicios`

---

## 4. VERIFICACIÓN DE SITEMAP

### 4.1 Acceso al Sitemap

**URL:** https://stansabogados.com/sitemap.xml

**Debe mostrar:**
- [ ] XML válido (sin errores)
- [ ] Homepage (/)
- [ ] /servicios
- [ ] /blog
- [ ] /casos
- [ ] Múltiples blogs individuales
- [ ] Múltiples casos individuales
- [ ] Páginas legales (/legal, /privacidad, etc.)

**NO debe mostrar:**
- [ ] URLs con # (ej: /#areas, /casos#terrorismo)

### 4.2 Validar Sitemap

Usa: https://www.xml-sitemaps.com/validate-xml-sitemap.html

1. Pega: https://stansabogados.com/sitemap.xml
2. Haz clic en "Validate"
3. Verifica: **✅ Valid**

---

## 5. VERIFICACIÓN DE ROBOTS.TXT

### 5.1 Acceso a Robots.txt

**URL:** https://stansabogados.com/robots.txt

**Debe contener:**
- [ ] `User-agent: *`
- [ ] `Sitemap: https://stansabogados.com/sitemap.xml`
- [ ] `Disallow: /*?*` (bloquear parámetros)
- [ ] `Disallow: /*#*` (bloquear fragmentos)
- [ ] `Allow: /blog/`
- [ ] `Allow: /casos/`
- [ ] `Disallow` para bots: SemrushBot, AhrefsBot, MJ12bot, DotBot

---

## 6. VERIFICACIÓN DE SCHEMA MARKUP

### 6.1 Rich Results Test

Usa: https://search.google.com/test/rich-results

**Páginas a probar:**

#### Homepage
**URL:** https://stansabogados.com

- [ ] Click "Test URL"
- [ ] Resultado: Schema válido
- [ ] Tipo detectado: **LegalService**
- [ ] Sin errores críticos

#### Blog Post
**URL:** https://stansabogados.com/blog/defensa-penal-urgente-guia-completa

- [ ] Click "Test URL"
- [ ] Resultado: Schema válido
- [ ] Tipo detectado: **BlogPosting**
- [ ] Sin errores críticos

#### Caso
**URL:** https://stansabogados.com/casos/sobreseimiento-queque-abogados-cristianos

- [ ] Click "Test URL"
- [ ] Resultado: Schema válido
- [ ] Sin errores críticos

**Advertencias (warnings) son aceptables, errores (errors) NO.**

---

## 7. VERIFICACIÓN DE ENLACES INTERNOS

### 7.1 Footer - Recursos Destacados

Visita: https://stansabogados.com

**Scroll al footer**

**Verifica que exista sección "Recursos Destacados" con:**

Artículos del Blog:
- [ ] → Defensa Penal Urgente: Guía Completa
- [ ] → Procedimientos de Extradición en España
- [ ] → Derechos de Detenidos y Garantías
- [ ] Ver todos los artículos →

Casos de Éxito:
- [ ] → Caso Queque: Libertad de Expresión
- [ ] → Operación Luco: Libertad Provisional
- [ ] → Academia Yihad: Modificación Medida
- [ ] Ver todos los casos →

**Haz clic en cada enlace para verificar que funcionan:**
- [ ] Todos los enlaces funcionan
- [ ] Llevan a las páginas correctas

---

## 8. VERIFICACIÓN DE PERFORMANCE

### 8.1 PageSpeed Insights

Usa: https://pagespeed.web.dev/

**Páginas a probar:**
1. Homepage: https://stansabogados.com
2. Blog: https://stansabogados.com/blog/defensa-penal-urgente-guia-completa
3. Servicios: https://stansabogados.com/servicios

**Métricas objetivo:**
- [ ] Performance: >80 (móvil) / >90 (desktop)
- [ ] SEO: >90
- [ ] Best Practices: >85
- [ ] Accessibility: >85

**Si alguna métrica es baja, anota los issues principales pero no te preocupes demasiado en esta fase inicial.**

---

## 9. VERIFICACIÓN GOOGLE SEARCH CONSOLE

### 9.1 Sitemap Enviado

1. Ve a: https://search.google.com/search-console
2. Selecciona propiedad: stansabogados.com
3. Menú lateral → **Sitemaps**

**Verifica:**
- [ ] Sitemap `sitemap.xml` aparece
- [ ] Estado: "Correcto" o "Procesando"
- [ ] Número de URLs detectadas (debe ser ~35)

### 9.2 Indexación de Páginas

1. En GSC → **Páginas** (menú lateral)

**Verifica:**
- [ ] Al menos 10-15 páginas en "Indexadas"
- [ ] Número creciente día a día

**Nota:** Es normal que tome 2-7 días para que las páginas se indexen después del sitemap.

---

## 10. PRUEBAS DE USUARIO

### 10.1 Navegación

Desde la homepage:
- [ ] Click en "Servicios" → lleva a /servicios
- [ ] Click en "Blog" → lleva a /blog
- [ ] Click en "Casos" → lleva a /casos
- [ ] Click en un caso → abre página del caso
- [ ] Click en un blog → abre página del blog

### 10.2 Móvil

Abre el sitio en un móvil o usa DevTools (F12) → Toggle device toolbar

- [ ] Homepage se ve bien
- [ ] /servicios se ve bien
- [ ] Blogs se ven bien
- [ ] Footer con recursos se ve bien

---

## 11. PRUEBAS DE IDIOMA

### 11.1 Cambio de Idioma

1. Visita homepage
2. Haz clic en selector de idioma (ES / عربي)
3. Cambia a árabe

**Verifica:**
- [ ] Contenido cambia a árabe
- [ ] Dirección del texto cambia (RTL)
- [ ] Enlaces siguen funcionando

4. Cambia de vuelta a español

**Verifica:**
- [ ] Todo vuelve a español
- [ ] Dirección LTR

---

## 12. CHECKLIST FINAL

### Crítico (DEBE funcionar):
- [ ] Homepage accesible
- [ ] /servicios accesible
- [ ] Blogs accesibles
- [ ] Casos accesibles
- [ ] Redirect www → no-www funciona
- [ ] Sitemap accesible y válido
- [ ] Robots.txt accesible
- [ ] Metadatos presentes en blogs
- [ ] Schema markup válido (sin errores)
- [ ] Enlaces footer funcionan

### Importante (Debería funcionar):
- [ ] Rich Results Test pasa
- [ ] PageSpeed >80
- [ ] GSC muestra sitemap correcto
- [ ] Hreflang tags presentes
- [ ] Open Graph completo

### Opcional (Nice to have):
- [ ] Todas las páginas ya indexadas en Google
- [ ] Performance >90
- [ ] 0 warnings en Rich Results Test

---

## 13. PROBLEMAS COMUNES

### Problema: Redirect www no funciona

**Posible causa:** El cambio aún no está deployed.

**Solución:**
1. Verifica que hiciste deploy después de los cambios
2. Espera 5-10 minutos (caché de CDN)
3. Prueba en modo incógnito

### Problema: Sitemap da error 404

**Posible causa:** Next.js no generó el sitemap.

**Solución:**
1. Verifica que `src/app/sitemap.ts` existe
2. Haz rebuild: `npm run build`
3. Deploy nuevamente

### Problema: Metadatos no aparecen

**Posible causa:** Caché del navegador.

**Solución:**
1. Abre en modo incógnito
2. O usa Ctrl+F5 para hard refresh
3. Verifica código fuente (no inspector de elementos)

### Problema: Rich Results Test da error

**Posible causa:** Error en Schema JSON.

**Solución:**
1. Copia el JSON del schema desde el código fuente
2. Valida en: https://validator.schema.org/
3. Corrige errores si los hay

---

## 14. REPORTE DE VERIFICACIÓN

### Template de Reporte

```
FECHA: ______________
VERIFICADOR: ______________

RESULTADOS:

✅ Críticos: ____ / 10
✅ Importantes: ____ / 10
✅ Opcionales: ____ / 3

ISSUES ENCONTRADOS:
- Issue 1: ___________________
- Issue 2: ___________________

NOTAS:
________________________
________________________
```

---

## 15. PRÓXIMOS PASOS DESPUÉS DE VERIFICACIÓN

Si TODO está ✅:
1. Continuar con acciones en Google Search Console
2. Ver: `GOOGLE_SEARCH_CONSOLE_ACTIONS.md`
3. Solicitar indexación de páginas prioritarias
4. Monitorear progreso semanalmente

Si HAY ISSUES ❌:
1. Documentar issues encontrados
2. Priorizar por criticidad
3. Corregir issues críticos primero
4. Re-deploy
5. Re-verificar

---

## 📞 AYUDA

Si encuentras problemas que no puedes resolver:

1. **Revisa la documentación:**
   - `SEO_NEXT_STEPS.md`
   - `GOOGLE_SEARCH_CONSOLE_ACTIONS.md`
   - `IMPLEMENTACION_COMPLETA_SEO.md`

2. **Recursos externos:**
   - [Google Search Console Help](https://support.google.com/webmasters)
   - [Next.js Documentation](https://nextjs.org/docs)
   - [Schema.org Validator](https://validator.schema.org/)

3. **Herramientas de debug:**
   - Browser DevTools (F12)
   - View Page Source (Ctrl+U)
   - Network Tab para ver redirects

---

**🎯 OBJETIVO:** Todas las casillas críticas marcadas ✅

**⏱️ TIEMPO ESTIMADO:** 30-45 minutos

**📅 RECOMENDACIÓN:** Hacer esta verificación inmediatamente después del deploy y luego semanalmente durante el primer mes.

---

_Última actualización: Post-implementación SEO_  
_Versión: 1.0_

