# Configuración de STANS ABOGADOS

## Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Resend API Key (obtener en https://resend.com)
RESEND_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxx

# Email de destino para leads
LEADS_TO=tu-correo@stansabogados.com

# Email de origen (debe estar verificado en Resend)
FROM_EMAIL=leads@stansabogados.com

# Webhook de Google Sheets (Apps Script)
SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/......../exec

# Número de WhatsApp (formato: 34XXXXXXXXX)
WHATSAPP_NUMBER=34XXXXXXXXX
```

## Configuración de Resend

1. Ve a https://resend.com
2. Crea una cuenta gratuita
3. Verifica tu dominio o usa el dominio de prueba
4. Obtén tu API key
5. Configura el email de origen

## Configuración de Google Sheets

1. Crea una hoja de cálculo llamada "Leads"
2. Añade las columnas: timestamp | email | mensaje | idioma | utm | ip
3. Ve a Extensiones → Apps Script
4. Pega el siguiente código:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.email || '',
    data.mensaje || '',
    data.idioma || 'es',
    data.utm || '',
    data.ip || ''
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Despliega como Web App
6. Copia la URL y añádela a SHEETS_WEBHOOK_URL

## Fuentes

Asegúrate de tener las fuentes en `/public/fonts/`:
- HelveticaNeue.woff2
- AdobeArabic-Regular.woff2

## Número de WhatsApp

Cambia el número en `src/app/page.tsx` línea 8:
```typescript
const WHATSAPP = '34XXXXXXXXX'; // Tu número real
```
