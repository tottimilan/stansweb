# 🚀 Deploy Rápido - Comandos

## ✅ ERROR CORREGIDO

El error de TypeScript en `blog/[slug]/layout.tsx` y `casos/[id]/layout.tsx` ha sido corregido.

**Problema:** Next.js 15 requiere que `params` sea una Promise.  
**Solución:** Cambiado a `params: Promise<{ slug: string }>` y añadido `await params`.

---

## 🔧 COMANDOS PARA DEPLOY

### Opción 1: Deploy con Vercel CLI (Recomendado)

```bash
cd stans-web
vercel --prod
```

### Opción 2: Push a Git (si tienes auto-deploy configurado)

```bash
cd stans-web
git add .
git commit -m "fix: corregir tipos de params para Next.js 15"
git push origin main
```

### Opción 3: Build local primero (para verificar)

```bash
cd stans-web
npm run build
```

Si el build es exitoso (sin errores), entonces:

```bash
vercel --prod
```

---

## ✅ VERIFICACIÓN POST-DEPLOY

Una vez completado el deploy:

1. **Verifica que el sitio funciona:**
   - https://stansabogados.com

2. **Verifica la nueva página servicios:**
   - https://stansabogados.com/servicios

3. **Verifica que el redirect www funciona:**
   - https://www.stansabogados.com → debe redirigir a https://stansabogados.com

4. **Verifica el sitemap:**
   - https://stansabogados.com/sitemap.xml

---

## 📋 SIGUIENTE PASO: GOOGLE SEARCH CONSOLE

Una vez que el deploy esté completo y verificado, continúa con:

**Archivo:** `GOOGLE_SEARCH_CONSOLE_ACTIONS.md`

**Acciones principales:**
1. Subir sitemap
2. Solicitar indexación de 15 URLs prioritarias
3. Verificar propiedad www
4. Revisar errores 404

**Tiempo estimado:** 1-1.5 horas

---

## 🆘 SI HAY ERRORES EN EL DEPLOY

Si el deploy falla nuevamente:

1. **Copia el error completo**
2. **Busca el archivo mencionado en el error**
3. **Avísame para corregirlo**

---

**Estado actual:** ✅ Errores de TypeScript corregidos  
**Listo para:** Deploy a producción  
**Próximo paso:** `vercel --prod`

