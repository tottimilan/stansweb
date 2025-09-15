# 📋 TRADUCCIONES PENDIENTES - ANÁLISIS DETALLADO

**Fecha:** 15 de Septiembre de 2025  
**Estado:** Análisis completo de elementos no traducidos

## 🚨 RESUMEN EJECUTIVO

Tras un análisis exhaustivo, se han identificado **7 áreas críticas** que requieren traducción o corrección:

1. **"Contacto" en navegación** - Bug menor, fácil de corregir
2. **Tarjetas de casos destacados** - No muestran traducciones en home
3. **Bug crítico en /casos** - Las tarjetas desaparecen al cambiar a árabe
4. **Traducción de tarjetas de casos** - Información estática sin traducir
5. **Traducción completa de casos** - 28 casos individuales pendientes
6. **Tarjetas del blog** - No muestran traducciones dinámicas
7. **Otros elementos menores** - Varios componentes con texto hardcodeado

---

## 🔍 ANÁLISIS DETALLADO

### 1. ❌ **"Contacto" en navegación**

**Problema:** En `Navigation.tsx` línea 27, "Contacto" está hardcodeado:
```typescript
{ name: 'Contacto', href: '#contacto' },
```

**Solución requerida:**
```typescript
{ name: t.nav.contacto, href: '#contacto' },
```

**Nota:** La traducción YA EXISTE en `translations/index.ts`:
- Español: `contacto: 'Contacto'`
- Árabe: `contacto: 'اتصل بنا'`

---

### 2. ❌ **Tarjetas de casos destacados en home**

**Ubicación:** `src/components/CaseCard.tsx`

**Problemas identificados:**
- Los títulos, categorías y descripciones están tomándose directamente del JSON
- No hay sistema de traducción implementado para el contenido de casos
- El badge "FAVORABLE" está hardcodeado (línea 84)
- La categoría se muestra sin traducir (línea 90)

**Elementos que necesitan traducción:**
```typescript
// Línea 90: Categoría sin traducir
{caso.categoria}

// Línea 95: Título del caso sin traducir  
{caso.nombre.replace(/^CASO\s*-?\s*/, '')}

// Líneas 101-106: Información del caso
Órgano: {caso.organo}
Resultado: {caso.resultado}
```

---

### 3. 🚨 **BUG CRÍTICO: Casos desaparecen en árabe**

**Ubicación:** `src/app/casos/page.tsx`

**Causa del bug:** El sistema de mapeo de categorías (líneas 54-62) está roto:

```typescript
const categoriaMap: Record<string, string> = {
    [t.casos.filtros.todos]: 'Todos',
    [t.casos.categorias.delitosOdio]: 'Delitos de odio y libertad de expresión',
    // ...
};
```

**Problema:** Cuando el idioma es árabe:
- `t.casos.filtros.todos` = 'الجميع' 
- Pero el mapeo busca 'Todos' en el JSON
- No encuentra coincidencias → muestra 0 casos

**Solución necesaria:** Implementar un sistema de traducción independiente del idioma

---

### 4. ❌ **Traducción de tarjetas de casos**

**Archivos afectados:**
- `src/components/CaseCard.tsx`
- `src/app/casos/page.tsx` (líneas 220-305)

**Textos hardcodeados:**
```typescript
// Badge FAVORABLE (línea 230)
'FAVORABLE'

// Información del caso (líneas 665-698)
'Categoría'
'Delito Principal'
'Resultado'
'Tipo de Resolución'
'Medidas Cautelares'
'Observaciones'
```

---

### 5. ❌ **Traducción completa de 28 casos**

**Ubicación:** `public/casos/casos-procesados.json`

**Estado actual:**
- Existe un archivo `src/translations/cases.ts` pero está INCOMPLETO
- Solo tiene traducciones parciales para 2 casos
- Las traducciones árabes están mal formateadas

**Requerimientos:**
1. Traducir todos los campos de cada caso:
   - nombre
   - delito_principal
   - resultado
   - tipo_resolucion
   - organo
   - contenido.resumen
   - contenido.hechos
   - contenido.estrategia
   - contenido.pruebas
   - contenido.resolucion
   - contenido.marco_legal

---

### 6. ❌ **Tarjetas del blog no traducidas**

**Ubicación:** `src/app/blog/page.tsx`

**Problema:** Las tarjetas muestran información estática del array `blogPosts`

**Elementos sin traducir:**
- Títulos de posts
- Excerpts/resúmenes
- Categorías
- Fechas (formato)
- Tags

---

### 7. ❌ **Otros elementos pendientes**

**Componentes con texto hardcodeado:**

1. **StatsSection.tsx**
   - Aria-label en línea 81 (parcialmente traducido)

2. **SchemaMarkup.tsx**
   - Necesita verificar que use traducciones dinámicas

3. **CasosPage títulos de sección**
   - "Ficha Técnica"
   - "Enlaces de Prensa"
   - Etiquetas varias

---

## 📋 PLAN DE ACCIÓN RECOMENDADO

### PRIORIDAD ALTA 🚨
1. **Corregir bug de categorías en /casos**
2. **Implementar sistema de traducción para casos**
3. **Traducir navegación "Contacto"**

### PRIORIDAD MEDIA ⚠️
4. **Traducir tarjetas de casos (home y /casos)**
5. **Implementar traducciones dinámicas en blog**
6. **Completar traducciones de 28 casos**

### PRIORIDAD BAJA ℹ️
7. **Revisar y completar elementos menores**

---

## 💡 SOLUCIONES PROPUESTAS

### Para el bug de categorías:
```typescript
// Usar IDs en lugar de nombres traducidos
const categoriaIds = {
  'todos': 'Todos',
  'delitos-odio': 'Delitos de odio y libertad de expresión',
  'terrorismo': 'Terrorismo y Audiencia Nacional',
  // ...
};
```

### Para traducciones de casos:
```typescript
// Extender translations/index.ts con:
caseFields: {
  categoria: 'Categoría',
  delitoPrincipal: 'Delito Principal',
  resultado: 'Resultado',
  // ... en español y árabe
}
```

### Para blog dinámico:
```typescript
// Usar el slug para buscar traducciones
const getBlogTranslation = (slug: string, language: string) => {
  return blogTranslations[language][slug] || defaultTranslation;
};
```

---

## 📊 ESTIMACIÓN DE TRABAJO

- **Correcciones de bugs:** 2-3 horas
- **Sistema de traducción casos:** 4-5 horas  
- **Traducción de 28 casos:** 8-10 horas
- **Blog dinámico:** 3-4 horas
- **Elementos menores:** 1-2 horas

**TOTAL ESTIMADO:** 18-24 horas de trabajo

---

## 🆕 NUEVOS PROBLEMAS ENCONTRADOS

### 8. ❌ **Tags HTML visibles en blogs (strong, etc.)**

**Problema:** Los tags HTML como `<strong>` aparecen literalmente en el texto
**Ubicación:** Todos los blogs que usan contenido traducido
**Ejemplo:** En `terrorismo-internet-enaltecimiento-captacion/page.tsx`:
```typescript
// Línea 195-196
parrafo1: 'El terrorismo en Internet... <strong>Ley Orgánica 2/2015</strong>...'
// El strong se muestra como texto, no como formato
```

**Causa:** Se está usando `{contentTranslations.introduccion.parrafo1}` directamente, no `dangerouslySetInnerHTML`

**Solución requerida:**
```jsx
<p dangerouslySetInnerHTML={{ __html: contentTranslations.introduccion.parrafo1 }} />
```

---

### 9. ❌ **Contenido hardcodeado en blogs no traducido**

**Ubicación:** `src/app/blog/terrorismo-internet-enaltecimiento-captacion/page.tsx`

**Elementos completamente hardcodeados (líneas 317-359):**
```typescript
// Línea 317-321
<h3>Ley Orgánica 2/2015</h3>
<p>Reforma integral del Código Penal para delitos de terrorismo en Internet</p>

// Líneas 326-342
<h4>Delitos Tipificados</h4>
• Enaltecimiento del terrorismo (art. 578)
• Captación y reclutamiento (art. 579.2)
• Financiación terrorista (art. 576)
• Instrucciones para cometer delitos (art. 579.1)

<h4>Agravantes Digitales</h4>
• Uso de Internet o redes sociales
• Alcance masivo del contenido
• Viralización del mensaje
• Uso de plataformas extranjeras
```

**Arrays de datos sin traducir:**
- `tiposTerrorismoInternet` (líneas 52-81)
- `casosReales` (líneas 83-102)
- `plataformasSociales` (líneas 104-125)
- `terrorismoFAQ` (líneas 17-50)
- `relatedArticles` (líneas 127-143)

---

### 10. ❌ **Títulos de secciones sin traducir en blogs**

**Ejemplo en línea 372:**
```typescript
<h2>Tipos de Delitos de Terrorismo en Internet</h2>
```

**Problema:** Está hardcodeado, no usa el sistema de traducciones

---

## ✅ CHECKLIST FINAL ACTUALIZADO

- [ ] Corregir "Contacto" en navegación
- [ ] Arreglar bug de categorías en /casos
- [ ] Implementar sistema de traducción para casos
- [ ] Traducir todas las tarjetas de casos
- [ ] Traducir los 28 casos completos
- [ ] Implementar traducciones dinámicas en blog
- [ ] **NUEVO:** Corregir renderizado de HTML en blogs (strong tags)
- [ ] **NUEVO:** Traducir todo el contenido hardcodeado en blogs
- [ ] **NUEVO:** Traducir arrays de datos (FAQ, casos, tipos, etc.)
- [ ] Revisar elementos menores
- [ ] Testing completo en ambos idiomas
- [ ] Verificar build sin errores

---

## 📊 ESTIMACIÓN DE TRABAJO ACTUALIZADA

- **Correcciones de bugs:** 2-3 horas
- **Sistema de traducción casos:** 4-5 horas  
- **Traducción de 28 casos:** 8-10 horas
- **Blog dinámico:** 3-4 horas
- **NUEVO - Corregir HTML rendering:** 2 horas
- **NUEVO - Traducir contenido hardcodeado blogs:** 6-8 horas
- **Elementos menores:** 1-2 horas

**TOTAL ESTIMADO:** 26-34 horas de trabajo

---

## 🎯 OBJETIVO FINAL

Lograr que TODA la web funcione perfectamente en español y árabe, sin ningún texto hardcodeado, con formato HTML correcto y navegación fluida entre idiomas.
