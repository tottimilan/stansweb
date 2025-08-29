# STANS ABOGADOS - Defensa Penal 24/7

Sitio web oficial de STANS ABOGADOS, especialistas en defensa penal en Madrid y España. Desarrollado con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- **Defensa Penal Especializada**: Abogados penalistas con más de 15 años de experiencia
- **Atención 24/7**: Respuesta en menos de 15 minutos para urgencias
- **Multilingüe**: Soporte completo en Español y Árabe
- **SEO Optimizado**: Implementación completa de mejores prácticas de SEO
- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **Animaciones Fluidas**: Interacciones suaves con Framer Motion
- **Formularios Inteligentes**: Integración con Google Sheets para leads

## 🛠️ Tecnologías

- **Framework**: Next.js 15.5.2
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Deployment**: Vercel

## 📁 Estructura del Proyecto

```
stans-web/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── api/            # API Routes
│   │   ├── globals.css     # Estilos globales
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Página principal
│   ├── components/         # Componentes React
│   │   ├── Hero.tsx        # Sección principal
│   │   ├── Navigation.tsx  # Navegación
│   │   ├── Team.tsx        # Sección equipo
│   │   ├── Areas.tsx       # Áreas de práctica
│   │   ├── Stats.tsx       # Estadísticas
│   │   ├── Contact.tsx     # Formulario de contacto
│   │   └── Footer.tsx      # Pie de página
│   ├── contexts/           # Contextos de React
│   │   ├── LanguageContext.tsx
│   │   └── ContactContext.tsx
│   └── translations/       # Traducciones
│       └── index.ts
├── public/                 # Archivos estáticos
│   ├── images/            # Imágenes
│   └── videos/            # Videos
└── package.json
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd stans-web
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

Editar `.env.local` con tus configuraciones:
```env
SHEETS_WEBHOOK_URL=tu_url_de_google_apps_script
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🌍 Características Multilingües

El sitio soporta dos idiomas:
- **Español** (por defecto)
- **Árabe** (con soporte RTL)

### Cambiar idioma
- Selector en la navegación
- Selector en el footer
- Cambio automático de dirección de texto

## 📊 SEO y Performance

### Optimizaciones implementadas:
- ✅ Meta tags completos
- ✅ Open Graph y Twitter Cards
- ✅ Schema.org structured data
- ✅ Sitemap.xml automático
- ✅ Robots.txt
- ✅ PWA manifest
- ✅ Favicons dinámicos
- ✅ Optimización de imágenes
- ✅ Lazy loading
- ✅ Core Web Vitals optimizados

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Móvil**: < 768px

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo local
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting
npm run type-check   # Verificación de tipos
```

## 🚀 Deployment en Vercel

### Configuración automática:
1. Conectar repositorio a Vercel
2. Configurar variables de entorno en Vercel Dashboard
3. Deploy automático en cada push a main

### Variables de entorno en Vercel:
- `SHEETS_WEBHOOK_URL`: URL del Google Apps Script

## 📞 Contacto y Soporte

- **Teléfono**: +34 611 68 72 26
- **Email**: info@stansabogados.com
- **Ubicación**: Madrid, España

## 📄 Licencia

© 2024 STANS ABOGADOS. Todos los derechos reservados.

---

**Desarrollado con ❤️ para STANS ABOGADOS**
