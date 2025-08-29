'use client';

import { motion } from 'framer-motion';
import { Shield, Cookie, Settings, Eye, Database } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

export default function CookiesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-black text-offwhite">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
            <Cookie className="h-4 w-4 mr-2" />
            {language === 'ar' ? 'سياسة ملفات تعريف الارتباط' : 'Política de Cookies'}
          </div>
          <h1 className="text-3xl font-bold text-gold mb-4">
            {language === 'ar' ? 'سياسة ملفات تعريف الارتباط' : 'Política de Cookies'}
          </h1>
          <p className="text-lg text-offwhite/80">
            {language === 'ar' ? 'استخدام ملفات تعريف الارتباط على موقعنا' : 'Uso de cookies en nuestro sitio web'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-gold max-w-none"
        >
          <div className="bg-charleston rounded-2xl p-6 sm:p-8 border border-gold/20">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '1. ما هي ملفات تعريف الارتباط؟' : '1. ¿Qué son las cookies?'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهاز الكمبيوتر أو الجهاز المحمول عند زيارة موقع ويب. تساعد هذه الملفات في تحسين تجربة التصفح وتوفير معلومات مفيدة لمالكي المواقع.'
                  : 'Las cookies son pequeños archivos de texto que se almacenan en su computadora o dispositivo móvil cuando visita un sitio web. Estos archivos ayudan a mejorar la experiencia de navegación y proporcionan información útil a los propietarios de sitios web.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '2. أنواع ملفات تعريف الارتباط التي نستخدمها' : '2. Tipos de cookies que utilizamos'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-offwhite mb-2">
                      {language === 'ar' ? 'ملفات تعريف الارتباط الضرورية:' : 'Cookies necesarias:'}
                    </h3>
                    <p className="text-offwhite/80 mb-2">
                      {language === 'ar'
                        ? 'هذه الملفات ضرورية لعمل الموقع بشكل صحيح. لا يمكن تعطيلها.'
                        : 'Estas cookies son esenciales para el funcionamiento correcto del sitio web. No se pueden desactivar.'
                      }
                    </p>
                    <ul className="list-disc list-inside text-offwhite/80 space-y-1 ml-4">
                      <li>
                        {language === 'ar' ? 'ملفات تعريف الارتباط الأمنية' : 'Cookies de seguridad'}
                      </li>
                      <li>
                        {language === 'ar' ? 'ملفات تعريف الارتباط للجلسة' : 'Cookies de sesión'}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-offwhite mb-2">
                      {language === 'ar' ? 'ملفات تعريف الارتباط التحليلية:' : 'Cookies analíticas:'}
                    </h3>
                    <p className="text-offwhite/80 mb-2">
                      {language === 'ar'
                        ? 'تساعدنا في فهم كيفية استخدام الزوار لموقعنا.'
                        : 'Nos ayudan a entender cómo los visitantes utilizan nuestro sitio web.'
                      }
                    </p>
                    <ul className="list-disc list-inside text-offwhite/80 space-y-1 ml-4">
                      <li>
                        {language === 'ar' ? 'إحصائيات الزيارات' : 'Estadísticas de visitas'}
                      </li>
                      <li>
                        {language === 'ar' ? 'الصفحات الأكثر زيارة' : 'Páginas más visitadas'}
                      </li>
                      <li>
                        {language === 'ar' ? 'وقت البقاء على الموقع' : 'Tiempo de permanencia'}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-offwhite mb-2">
                      {language === 'ar' ? 'ملفات تعريف الارتباط الوظيفية:' : 'Cookies funcionales:'}
                    </h3>
                    <p className="text-offwhite/80 mb-2">
                      {language === 'ar'
                        ? 'تحسن تجربة المستخدم من خلال تذكر تفضيلاتك.'
                        : 'Mejoran la experiencia del usuario recordando sus preferencias.'
                      }
                    </p>
                    <ul className="list-disc list-inside text-offwhite/80 space-y-1 ml-4">
                      <li>
                        {language === 'ar' ? 'تفضيلات اللغة' : 'Preferencias de idioma'}
                      </li>
                      <li>
                        {language === 'ar' ? 'إعدادات العرض' : 'Configuración de visualización'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '3. ملفات تعريف الارتباط من أطراف ثالثة' : '3. Cookies de terceros'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'قد نستخدم خدمات من أطراف ثالثة مثل Google Analytics لتحليل استخدام الموقع. هذه الخدمات قد تستخدم ملفات تعريف الارتباط الخاصة بها.'
                  : 'Podemos utilizar servicios de terceros como Google Analytics para analizar el uso del sitio web. Estos servicios pueden utilizar sus propias cookies.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '4. مدة الاحتفاظ بملفات تعريف الارتباط' : '4. Duración de las cookies'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-offwhite mb-2">
                    {language === 'ar' ? 'ملفات تعريف الارتباط الجلسة:' : 'Cookies de sesión:'}
                  </h3>
                  <p className="text-offwhite/80">
                    {language === 'ar'
                      ? 'تُحذف تلقائياً عند إغلاق المتصفح.'
                      : 'Se eliminan automáticamente al cerrar el navegador.'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-offwhite mb-2">
                    {language === 'ar' ? 'ملفات تعريف الارتباط الدائمة:' : 'Cookies persistentes:'}
                  </h3>
                  <p className="text-offwhite/80">
                    {language === 'ar'
                      ? 'تبقى على جهازك لفترة محددة أو حتى تحذفها يدوياً.'
                      : 'Permanecen en su dispositivo durante un período determinado o hasta que las elimine manualmente.'
                    }
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '5. إدارة ملفات تعريف الارتباط' : '5. Gestión de cookies'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك:'
                  : 'Puede controlar las cookies a través de la configuración de su navegador:'
                }
              </p>
              <ul className="list-disc list-inside text-offwhite/80 space-y-2 ml-4">
                <li>
                  {language === 'ar' ? 'إيقاف تشغيل جميع ملفات تعريف الارتباط' : 'Desactivar todas las cookies'}
                </li>
                <li>
                  {language === 'ar' ? 'إيقاف تشغيل ملفات تعريف الارتباط من أطراف ثالثة' : 'Desactivar cookies de terceros'}
                </li>
                <li>
                  {language === 'ar' ? 'حذف ملفات تعريف الارتباط الموجودة' : 'Eliminar cookies existentes'}
                </li>
                <li>
                  {language === 'ar' ? 'تلقي تنبيه عند إرسال ملفات تعريف الارتباط' : 'Recibir alertas cuando se envíen cookies'}
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '6. كيفية تعطيل ملفات تعريف الارتباط' : '6. Cómo desactivar las cookies'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-offwhite mb-2">Chrome:</h3>
                  <p className="text-offwhite/80 text-sm">
                    {language === 'ar'
                      ? 'الإعدادات > الخصوصية والأمان > ملفات تعريف الارتباط وبيانات الموقع الأخرى'
                      : 'Configuración > Privacidad y seguridad > Cookies y datos del sitio'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-offwhite mb-2">Firefox:</h3>
                  <p className="text-offwhite/80 text-sm">
                    {language === 'ar'
                      ? 'الإعدادات > الخصوصية والأمان > ملفات تعريف الارتباط وبيانات الموقع'
                      : 'Configuración > Privacidad y seguridad > Cookies y datos del sitio'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-offwhite mb-2">Safari:</h3>
                  <p className="text-offwhite/80 text-sm">
                    {language === 'ar'
                      ? 'التفضيلات > الخصوصية > ملفات تعريف الارتباط وبيانات الموقع'
                      : 'Preferencias > Privacidad > Cookies y datos del sitio'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-offwhite mb-2">Edge:</h3>
                  <p className="text-offwhite/80 text-sm">
                    {language === 'ar'
                      ? 'الإعدادات > ملفات تعريف الارتباط وبيانات الموقع'
                      : 'Configuración > Cookies y datos del sitio'
                    }
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '7. تأثير تعطيل ملفات تعريف الارتباط' : '7. Efectos de desactivar las cookies'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'قد يؤثر تعطيل ملفات تعريف الارتباط على وظائف معينة في موقعنا. قد لا تعمل بعض الميزات بشكل صحيح.'
                  : 'Desactivar las cookies puede afectar ciertas funcionalidades de nuestro sitio web. Es posible que algunas características no funcionen correctamente.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '8. التحديثات على سياسة ملفات تعريف الارتباط' : '8. Actualizaciones de la política de cookies'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'قد نحدث هذه السياسة من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أخرى.'
                  : 'Podemos actualizar esta política de vez en cuando para reflejar cambios en nuestras prácticas o por otras razones operativas o legales.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '9. الاتصال' : '9. Contacto'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'إذا كان لديك أي أسئلة حول استخدامنا لملفات تعريف الارتباط، يمكنك الاتصال بنا:'
                  : 'Si tiene alguna pregunta sobre nuestro uso de cookies, puede contactarnos:'
                }
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-offwhite/80">Email: info@stansabogados.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-offwhite/80">Teléfono: +34 611 68 72 26</span>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
