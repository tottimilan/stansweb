'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

export default function PrivacyPage() {
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
            <Lock className="h-4 w-4 mr-2" />
            {language === 'ar' ? 'سياسة الخصوصية' : 'Política de Privacidad'}
          </div>
          <h1 className="text-3xl font-bold text-gold mb-4">
            {language === 'ar' ? 'سياسة الخصوصية' : 'Política de Privacidad'}
          </h1>
          <p className="text-lg text-offwhite/80">
            {language === 'ar' ? 'حماية بياناتك الشخصية' : 'Protección de sus datos personales'}
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
                {language === 'ar' ? '1. مقدمة' : '1. Introducción'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'في YELMA ABOGADOS SL، نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. هذه السياسة توضح كيف نجمع ونستخدم ونحمي معلوماتك.'
                  : 'En YELMA ABOGADOS SL, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política explica cómo recopilamos, utilizamos y protegemos su información.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '2. البيانات التي نجمعها' : '2. Datos que recopilamos'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-offwhite mb-2">
                      {language === 'ar' ? 'البيانات الشخصية:' : 'Datos personales:'}
                    </h3>
                    <ul className="list-disc list-inside text-offwhite/80 space-y-1 ml-4">
                      <li>{language === 'ar' ? 'الاسم الكامل' : 'Nombre completo'}</li>
                      <li>{language === 'ar' ? 'عنوان البريد الإلكتروني' : 'Dirección de correo electrónico'}</li>
                      <li>{language === 'ar' ? 'رقم الهاتف' : 'Número de teléfono'}</li>
                      <li>{language === 'ar' ? 'الرسائل والاستفسارات' : 'Mensajes y consultas'}</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-offwhite mb-2">
                      {language === 'ar' ? 'بيانات التصفح:' : 'Datos de navegación:'}
                    </h3>
                    <ul className="list-disc list-inside text-offwhite/80 space-y-1 ml-4">
                      <li>{language === 'ar' ? 'عنوان IP' : 'Dirección IP'}</li>
                      <li>{language === 'ar' ? 'نوع المتصفح' : 'Tipo de navegador'}</li>
                      <li>{language === 'ar' ? 'الصفحات المزورة' : 'Páginas visitadas'}</li>
                      <li>{language === 'ar' ? 'وقت الزيارة' : 'Tiempo de visita'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '3. كيفية استخدام البيانات' : '3. Cómo utilizamos los datos'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'نستخدم بياناتك الشخصية للأغراض التالية:'
                  : 'Utilizamos sus datos personales para los siguientes fines:'
                }
              </p>
              <ul className="list-disc list-inside text-offwhite/80 space-y-2 ml-4">
                <li>
                  {language === 'ar' ? 'الرد على استفساراتك وطلباتك' : 'Responder a sus consultas y solicitudes'}
                </li>
                <li>
                  {language === 'ar' ? 'تقديم خدماتنا القانونية' : 'Prestar nuestros servicios legales'}
                </li>
                <li>
                  {language === 'ar' ? 'تحسين تجربة المستخدم على موقعنا' : 'Mejorar la experiencia del usuario en nuestro sitio'}
                </li>
                <li>
                  {language === 'ar' ? 'الامتثال للالتزامات القانونية' : 'Cumplir con obligaciones legales'}
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '4. أساس قانوني للعلاج' : '4. Base legal del tratamiento'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'نعالج بياناتك على أساس:'
                  : 'Tratamos sus datos sobre la base de:'
                }
              </p>
              <ul className="list-disc list-inside text-offwhite/80 space-y-2 ml-4">
                <li>
                  {language === 'ar' ? 'موافقتك الصريحة' : 'Su consentimiento expreso'}
                </li>
                <li>
                  {language === 'ar' ? 'تنفيذ العقد أو التدابير السابقة للعقد' : 'Ejecución del contrato o medidas precontractuales'}
                </li>
                <li>
                  {language === 'ar' ? 'الالتزام القانوني' : 'Obligación legal'}
                </li>
                <li>
                  {language === 'ar' ? 'المصلحة المشروعة' : 'Interés legítimo'}
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '5. مشاركة البيانات' : '5. Compartir datos'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'لا نبيع أو نؤجر أو نشارك بياناتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:'
                  : 'No vendemos, alquilamos ni compartimos sus datos personales con terceros, excepto en los siguientes casos:'
                }
              </p>
              <ul className="list-disc list-inside text-offwhite/80 space-y-2 ml-4">
                <li>
                  {language === 'ar' ? 'بموافقتك الصريحة' : 'Con su consentimiento expreso'}
                </li>
                <li>
                  {language === 'ar' ? 'للتزام قانوني' : 'Para cumplir una obligación legal'}
                </li>
                <li>
                  {language === 'ar' ? 'لحماية حقوقنا أو سلامة الآخرين' : 'Para proteger nuestros derechos o la seguridad de otros'}
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '6. أمان البيانات' : '6. Seguridad de datos'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'نطبق تدابير أمنية تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية ضد الوصول غير المصرح به أو التغيير أو الكشف أو التدمير.'
                  : 'Aplicamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra acceso, alteración, divulgación o destrucción no autorizados.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '7. حقوقك' : '7. Sus derechos'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar' ? 'لديك الحق في:' : 'Tiene derecho a:'}
              </p>
              <ul className="list-disc list-inside text-offwhite/80 space-y-2 ml-4">
                <li>
                  {language === 'ar' ? 'الوصول إلى بياناتك الشخصية' : 'Acceder a sus datos personales'}
                </li>
                <li>
                  {language === 'ar' ? 'تصحيح البيانات غير الدقيقة' : 'Rectificar datos inexactos'}
                </li>
                <li>
                  {language === 'ar' ? 'حذف بياناتك' : 'Suprimir sus datos'}
                </li>
                <li>
                  {language === 'ar' ? 'تقييد المعالجة' : 'Limitar el tratamiento'}
                </li>
                <li>
                  {language === 'ar' ? 'الاحتجاج على المعالجة' : 'Oponerse al tratamiento'}
                </li>
                <li>
                  {language === 'ar' ? 'قابلية النقل' : 'Portabilidad'}
                </li>
                <li>
                  {language === 'ar' ? 'سحب الموافقة' : 'Retirar el consentimiento'}
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '8. مدة الاحتفاظ' : '8. Período de conservación'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'نحتفظ ببياناتك الشخصية طالما كانت ضرورية للغرض الذي تم جمعها من أجله، أو طالما كانت هناك أساس قانوني للاحتفاظ بها.'
                  : 'Conservamos sus datos personales mientras sean necesarios para el propósito para el que fueron recopilados, o mientras exista una base legal para conservarlos.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '9. ملفات تعريف الارتباط' : '9. Cookies'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح. يمكنك إدارة إعدادات ملفات تعريف الارتباط في متصفحك.'
                  : 'Utilizamos cookies para mejorar la experiencia de navegación. Puede gestionar la configuración de cookies en su navegador.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '10. التغييرات في السياسة' : '10. Cambios en la política'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'قد نحدث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على موقعنا.'
                  : 'Podemos actualizar esta política de vez en cuando. Le notificaremos cualquier cambio sustancial por correo electrónico o aviso en nuestro sitio web.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '11. الاتصال' : '11. Contacto'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'إذا كان لديك أي أسئلة حول هذه السياسة أو ممارساتنا في مجال الخصوصية، يمكنك الاتصال بنا:'
                  : 'Si tiene alguna pregunta sobre esta política o nuestras prácticas de privacidad, puede contactarnos:'
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
