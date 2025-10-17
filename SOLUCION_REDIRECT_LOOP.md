# 🔧 Solución al Error ERR_TOO_MANY_REDIRECTS

## ❌ Problema
El error "ERR_TOO_MANY_REDIRECTS" ocurría porque teníamos el redirect www → no-www configurado en DOS lugares:
- `next.config.ts`
- `vercel.json`

Esto causaba un loop infinito de redirecciones.

---

## ✅ Solución Aplicada

### Paso 1: Eliminar redirects conflictivos
- ✅ Eliminado redirect de `next.config.ts`
- ✅ Eliminado redirect de `vercel.json`

### Paso 2: Configurar en Vercel Dashboard (Mejor método)

**Debes hacer esto MANUALMENTE en Vercel:**

1. **Ve a Vercel Dashboard:**
   - https://vercel.com/
   - Selecciona tu proyecto: `stans-web`

2. **Ve a Settings → Domains:**
   - Click en **"Settings"** (arriba)
   - Click en **"Domains"** (menú lateral)

3. **Configura los dominios:**
   
   **Dominio principal (sin www):**
   - Si no está añadido: Click "Add" 
   - Añade: `stansabogados.com`
   - Marca como "Primary Domain" (dominio principal)

   **Dominio con www:**
   - Click "Add"
   - Añade: `www.stansabogados.com`
   - Vercel automáticamente lo configurará para redirigir al dominio principal

4. **Verifica la configuración:**
   - `stansabogados.com` debe aparecer con badge **"Primary"**
   - `www.stansabogados.com` debe aparecer con badge **"Redirect to stansabogados.com"**

---

## 🚀 Deploy Ahora

Con los cambios aplicados (redirects eliminados de código), haz deploy:

```bash
cd stans-web
vercel --prod
```

O si prefieres:

```bash
git add .
git commit -m "fix: eliminar redirects conflictivos que causaban loop"
git push origin main
```

---

## ✅ Verificación Post-Deploy

1. **Espera 2-3 minutos** después del deploy

2. **Limpia caché del navegador:**
   - Chrome: Ctrl + Shift + Delete → "Cookies e imágenes en caché"
   - O abre en **modo incógnito**

3. **Prueba las URLs:**
   - https://stansabogados.com → ✅ Debe cargar normalmente
   - https://www.stansabogados.com → ✅ Debe redirigir a versión sin www (sin loop)

4. **Verifica en DevTools (F12):**
   - Red/Network → Visita www.stansabogados.com
   - Debe ver: 308 redirect → stansabogados.com
   - NO debe haber múltiples redirects en cadena

---

## 🔍 Si el Problema Persiste

### Opción A: Configuración DNS (Recomendado)

Si el redirect sigue causando problemas, configura en tu proveedor DNS:

1. **Solo apunta el dominio SIN www:**
   - `A Record`: `stansabogados.com` → IP de Vercel
   - `CNAME`: `stansabogados.com` → `cname.vercel-dns.com`

2. **Para www, usa CNAME que apunte al principal:**
   - `CNAME`: `www.stansabogados.com` → `stansabogados.com`

3. **Deja que Vercel maneje el redirect**

### Opción B: Usar solo Vercel DNS

Si estás usando otro proveedor DNS (GoDaddy, Cloudflare, etc.):

1. Cambia los nameservers a Vercel
2. Deja que Vercel gestione TODO el DNS
3. Más simple y sin conflictos

---

## 📋 Resumen de Cambios Realizados

### Archivo: `next.config.ts`
**ANTES:**
```typescript
async redirects() {
  return [{
    source: '/:path*',
    has: [{ type: 'host', value: 'www.stansabogados.com' }],
    destination: 'https://stansabogados.com/:path*',
    permanent: true,
  }];
}
```

**DESPUÉS:**
```typescript
const nextConfig: NextConfig = {
  /* config options here */
  // Redirect configurado en Vercel Dashboard
};
```

### Archivo: `vercel.json`
**ANTES:**
```json
{
  "source": "/:path(.*)",
  "has": [{ "type": "host", "value": "www.stansabogados.com" }],
  "destination": "https://stansabogados.com/:path",
  "permanent": true
}
```

**DESPUÉS:**
```json
// Eliminado - se gestiona desde Vercel Dashboard
```

---

## ⚠️ IMPORTANTE: Para SEO

Aunque el redirect automático no esté en el código, **Google Search Console** necesita que tengas ambas propiedades verificadas:

1. **Propiedad principal:** `stansabogados.com`
2. **Propiedad secundaria:** `www.stansabogados.com`

Ambas deben estar verificadas para que Google sepa que son el mismo sitio y no te penalice por contenido duplicado.

---

## 🎯 Próximo Paso

Una vez que el deploy funcione y www.stansabogados.com redirija correctamente:

1. ✅ Verifica que no hay loop
2. ✅ Limpia cookies y prueba en incógnito
3. ✅ Continúa con Google Search Console
4. ✅ Abre: `GOOGLE_SEARCH_CONSOLE_ACTIONS.md`

---

**Estado:** ✅ Cambios aplicados, listo para re-deploy  
**Acción:** `vercel --prod` o push a git

