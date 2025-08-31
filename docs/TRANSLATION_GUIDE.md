# Guía de Traducciones - STANS ABOGADOS

## 📋 Resumen

Esta guía documenta las mejores prácticas implementadas para la traducción completa de la página de casos y casos individuales, siguiendo estándares SEO y organización de archivos.

## 🏗️ Arquitectura de Traducciones

### 1. Estructura de Archivos

```
src/
├── translations/
│   ├── index.ts          # Traducciones principales
│   └── cases.ts          # Traducciones de casos
├── hooks/
│   └── useCaseTranslation.ts  # Hook para traducciones de casos
├── utils/
│   ├── urlTranslations.ts     # Manejo de URLs traducidas
│   └── seoConfig.ts           # Configuración SEO
└── scripts/
    └── translate-cases.py     # Script de traducción automática
```

### 2. Componentes Principales

#### Hook de Traducción de Casos
```typescript
import { useCaseTranslation } from '@/hooks/useCaseTranslation';

const { getField, getContent, language } = useCaseTranslation(caseId);
const nombre = getField('nombre');
const resumen = getContent('resumen');
```

#### Configuración SEO
```typescript
import { generateCaseSEO } from '@/utils/seoConfig';

const seoMetadata = generateCaseSEO(caseId, caseData, translation, language);
```

## 🌐 Idiomas Soportados

- **Español (es)**: Idioma principal
- **Árabe (ar)**: Idioma secundario

## 📝 Proceso de Traducción

### 1. Traducción Automática

El script `translate-cases.py` automatiza el proceso:

```bash
cd scripts
python translate-cases.py
```

**Características:**
- Usa Google Translate API
- Genera traducciones para todos los campos
- Crea archivos JSON estructurados
- Genera URLs SEO-friendly

### 2. Campos Traducibles

#### Campos Principales
- `nombre`: Nombre del caso
- `delito_principal`: Tipo de delito
- `resultado`: Resultado del caso
- `tipo_resolucion`: Tipo de resolución
- `organo`: Órgano judicial
- `seccion`: Sección judicial
- `localidad`: Ubicación
- `parte`: Parte en el proceso
- `medidas_cautelares`: Medidas cautelares
- `observaciones`: Observaciones adicionales
- `noticias`: Enlaces a noticias
- `links`: Enlaces oficiales

#### Contenido Estructurado
- `resumen`: Resumen del caso
- `hechos`: Hechos del caso
- `estrategia`: Estrategia de defensa
- `pruebas`: Pruebas clave
- `resolucion`: Resolución
- `marco_legal`: Marco legal
- `imagenes`: Descripción de imágenes
- `enlaces`: Enlaces y notas

## 🔗 URLs y SEO

### Estructura de URLs

#### Español
```
/casos/1
/casos/2
/casos/3
```

#### Árabe
```
/ar/casos/1-nombre-del-caso
/ar/casos/2-otro-caso
/ar/casos/3-caso-mas
```

### Metadatos SEO

Cada caso incluye metadatos completos:

```typescript
{
  title: "Nombre del Caso - STANS ABOGADOS",
  description: "Caso resuelto por STANS ABOGADOS...",
  keywords: "delito, categoría, abogados penalistas...",
  ogTitle: "Título para redes sociales",
  ogDescription: "Descripción para redes sociales",
  canonicalUrl: "URL canónica"
}
```

## 🎯 Mejores Prácticas Implementadas

### 1. SEO
- ✅ URLs amigables y traducidas
- ✅ Metadatos completos en ambos idiomas
- ✅ Estructura de datos semántica
- ✅ Canonical URLs
- ✅ Open Graph y Twitter Cards

### 2. Organización de Archivos
- ✅ Separación clara de responsabilidades
- ✅ Hooks reutilizables
- ✅ Utilidades modulares
- ✅ Scripts automatizados

### 3. Performance
- ✅ Traducciones lazy-loaded
- ✅ Caché de traducciones
- ✅ Optimización de bundles

### 4. Mantenibilidad
- ✅ Tipado TypeScript completo
- ✅ Interfaces bien definidas
- ✅ Documentación clara
- ✅ Scripts automatizados

## 🚀 Uso en Componentes

### Página de Casos
```typescript
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const { language } = useLanguage();
const t = translations[language];

return (
  <h1>{t.casos.title}</h1>
  <p>{t.casos.subtitle}</p>
);
```

### Caso Individual
```typescript
import { useCaseTranslation } from '@/hooks/useCaseTranslation';

const { getField, getContent } = useCaseTranslation(caseId);

return (
  <h1>{getField('nombre')}</h1>
  <p>{getContent('resumen')}</p>
);
```

## 📊 Monitoreo y Analytics

### Métricas a Seguir
- Tiempo de carga de traducciones
- Tasa de error en traducciones
- Uso de idiomas por región
- Performance de SEO

### Herramientas Recomendadas
- Google Analytics (idiomas)
- Google Search Console (SEO)
- Lighthouse (performance)

## 🔄 Actualización de Traducciones

### Proceso Automatizado
1. Ejecutar script de traducción
2. Revisar traducciones generadas
3. Ajustar manualmente si es necesario
4. Actualizar archivos de traducción
5. Deploy de cambios

### Validación
- ✅ Revisión de calidad de traducciones
- ✅ Verificación de URLs
- ✅ Comprobación de metadatos SEO
- ✅ Testing en ambos idiomas

## 📞 Soporte

Para preguntas o problemas con las traducciones:
- Revisar esta documentación
- Consultar logs del script de traducción
- Verificar configuración de idiomas
- Contactar al equipo de desarrollo

---

**Última actualización**: Diciembre 2024
**Versión**: 1.0.0
