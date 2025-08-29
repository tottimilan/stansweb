'use client';

import { motion } from 'framer-motion';
import { Shield, FileText, CheckCircle, AlertTriangle, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

export default function TerminosPage() {
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
            <FileText className="h-4 w-4 mr-2" />
            {language === 'ar' ? 'شروط الاستخدام' : 'Términos de Uso'}
          </div>
          <h1 className="text-3xl font-bold text-gold mb-4">
            {language === 'ar' ? 'شروط الاستخدام' : 'Términos de Uso'}
          </h1>
          <p className="text-lg text-offwhite/80">
            {language === 'ar' ? 'الشروط والأحكام لاستخدام موقعنا' : 'Términos y condiciones para el uso de nuestro sitio web'}
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
                {language === 'ar' ? '1. قبول الشروط' : '1. Aceptación de términos'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'باستخدام هذا الموقع الإلكتروني، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام موقعنا.'
                  : 'Al utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, por favor no utilice nuestro sitio.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '2. استخدام الموقع' : '2. Uso del sitio'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-offwhite mb-2">
                      {language === 'ar' ? 'الاستخدام المسموح:' : 'Uso permitido:'}
                    </h3>
                    <ul className="list-disc list-inside text-offwhite/80 space-y-1 ml-4">
                      <li>
                        {language === 'ar' ? 'الوصول إلى المعلومات القانونية' : 'Acceder a información legal'}
                      </li>
                      <li>
                        {language === 'ar' ? 'التواصل معنا للحصول على استشارة' : 'Contactarnos para consultas'}
                      </li>
                      <li>
                        {language === 'ar' ? 'استخدام الخدمات المتاحة' : 'Utilizar los servicios disponibles'}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-offwhite mb-2">
                      {language === 'ar' ? 'الاستخدام المحظور:' : 'Uso prohibido:'}
                    </h3>
                    <ul className="list-disc list-inside text-offwhite/80 space-y-1 ml-4">
                      <li>
                        {language === 'ar' ? 'الاستخدام لأغراض غير قانونية' : 'Uso para fines ilegales'}
                      </li>
                      <li>
                        {language === 'ar' ? 'إلحاق الضرر بالموقع أو أنظمته' : 'Dañar el sitio o sus sistemas'}
                      </li>
                      <li>
                        {language === 'ar' ? 'محاولة الوصول غير المصرح به' : 'Intentar acceso no autorizado'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '3. الخدمات القانونية' : '3. Servicios legales'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'نحن نقدم خدمات الدفاع الجنائي في إسبانيا. المعلومات على هذا الموقع هي لأغراض إعلامية فقط ولا تشكل استشارة قانونية رسمية.'
                  : 'Prestamos servicios de defensa penal en España. La información en este sitio web es únicamente con fines informativos y no constituye asesoramiento legal formal.'
                }
              </p>
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                <p className="text-offwhite/90 text-sm">
                  {language === 'ar'
                    ? '⚠️ ملاحظة مهمة: للحصول على استشارة قانونية رسمية، يرجى الاتصال بنا مباشرة.'
                    : '⚠️ Nota importante: Para asesoramiento legal formal, por favor contáctenos directamente.'
                  }
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '4. الملكية الفكرية' : '4. Propiedad intelectual'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'جميع المحتويات والمواد على هذا الموقع، بما في ذلك النصوص والصور والشعارات، محمية بموجب حقوق النشر والملكية الفكرية.'
                  : 'Todo el contenido y materiales en este sitio web, incluyendo textos, imágenes y logotipos, están protegidos por derechos de autor y propiedad intelectual.'
                }
              </p>
              <ul className="list-disc list-inside text-offwhite/80 space-y-2 ml-4">
                <li>
                  {language === 'ar' ? 'يحظر النسخ أو التوزيع دون إذن' : 'Se prohíbe la copia o distribución sin autorización'}
                </li>
                <li>
                  {language === 'ar' ? 'يحظر الاستخدام التجاري' : 'Se prohíbe el uso comercial'}
                </li>
                <li>
                  {language === 'ar' ? 'يحظر التعديل أو التحوير' : 'Se prohíbe la modificación o alteración'}
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '5. إخلاء المسؤولية' : '5. Descargo de responsabilidad'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'نحن نبذل قصارى جهدنا لضمان دقة المعلومات، لكننا لا نضمن اكتمالها أو دقتها. لا نتحمل المسؤولية عن:'
                  : 'Hacemos todo lo posible para garantizar la exactitud de la información, pero no garantizamos su integridad o precisión. No nos hacemos responsables de:'
                }
              </p>
              <ul className="list-disc list-inside text-offwhite/80 space-y-2 ml-4">
                <li>
                  {language === 'ar' ? 'أي أضرار ناتجة عن استخدام الموقع' : 'Cualquier daño derivado del uso del sitio'}
                </li>
                <li>
                  {language === 'ar' ? 'فقدان البيانات أو المعلومات' : 'Pérdida de datos o información'}
                </li>
                <li>
                  {language === 'ar' ? 'انقطاع الخدمة أو عدم توفرها' : 'Interrupciones o falta de disponibilidad del servicio'}
                </li>
                <li>
                  {language === 'ar' ? 'أي قرارات تتخذ بناءً على المعلومات المقدمة' : 'Cualquier decisión tomada basada en la información proporcionada'}
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '6. الخصوصية والأمان' : '6. Privacidad y seguridad'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'نحن نلتزم بحماية خصوصيتك وأمان بياناتك. يرجى مراجعة سياسة الخصوصية الخاصة بنا للحصول على معلومات مفصلة.'
                  : 'Nos comprometemos a proteger su privacidad y la seguridad de sus datos. Por favor, revise nuestra política de privacidad para información detallada.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '7. الروابط الخارجية' : '7. Enlaces externos'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'قد يحتوي موقعنا على روابط لمواقع خارجية. نحن لا نتحمل المسؤولية عن محتوى أو ممارسات هذه المواقع.'
                  : 'Nuestro sitio puede contener enlaces a sitios externos. No nos hacemos responsables del contenido o prácticas de estos sitios.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '8. التعديلات على الشروط' : '8. Modificaciones de términos'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التغييرات على هذه الصفحة وسيستمر استخدامك للموقع بعد التعديلات يعني قبولك للشروط الجديدة.'
                  : 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios se publicarán en esta página y su uso continuado del sitio después de las modificaciones constituye su aceptación de los nuevos términos.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '9. القانون المطبق' : '9. Ley aplicable'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'تخضع هذه الشروط لقانون إسبانيا. أي نزاع سيتم حله في محاكم مدريد.'
                  : 'Estos términos se rigen por la ley española. Cualquier disputa será resuelta en los tribunales de Madrid.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '10. الاتصال' : '10. Contacto'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'إذا كان لديك أي أسئلة حول هذه الشروط، يمكنك الاتصال بنا:'
                  : 'Si tiene alguna pregunta sobre estos términos, puede contactarnos:'
                }
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gold" />
                  <span className="text-offwhite/80">info@stansabogados.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gold" />
                  <span className="text-offwhite/80">+34 611 68 72 26</span>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
