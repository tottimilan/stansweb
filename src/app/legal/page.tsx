'use client';

import { motion } from 'framer-motion';
import { Shield, Building, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

export default function LegalPage() {
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
            <Shield className="h-4 w-4 mr-2" />
            {language === 'ar' ? 'إشعار قانوني' : 'Aviso Legal'}
          </div>
          <h1 className="text-3xl font-bold text-gold mb-4">
            {language === 'ar' ? 'إشعار قانوني' : 'Aviso Legal'}
          </h1>
          <p className="text-lg text-offwhite/80">
            {language === 'ar' ? 'شروط الاستخدام والمعلومات القانونية' : 'Términos de uso e información legal'}
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
                {language === 'ar' ? '1. معلومات الشركة' : '1. Información de la empresa'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-offwhite">YELMA ABOGADOS SL</p>
                    <p className="text-offwhite/80 text-sm">
                      {language === 'ar' ? 'شركة محاماة مسجلة في إسبانيا' : 'Sociedad de abogados registrada en España'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-offwhite">Dirección:</p>
                    <p className="text-offwhite/80 text-sm">
                      C. de Abtao, 44, Oficina 7<br />
                      Retiro, 28007 Madrid, España
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-offwhite">Teléfono:</p>
                    <p className="text-offwhite/80 text-sm">+34 611 68 72 26</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-offwhite">Email:</p>
                    <p className="text-offwhite/80 text-sm">info@stansabogados.com</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '2. نطاق الخدمات' : '2. Ámbito de servicios'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar' 
                  ? 'نحن متخصصون في القانون الجنائي ونقدم خدمات الدفاع القانوني في جميع أنحاء إسبانيا. خدماتنا تشمل:'
                  : 'Somos especialistas en Derecho Penal y prestamos servicios de defensa legal en toda España. Nuestros servicios incluyen:'
                }
              </p>
              <ul className="list-disc list-inside text-offwhite/80 space-y-2 ml-4">
                <li>
                  {language === 'ar' ? 'الدفاع الجنائي' : 'Defensa penal'}
                </li>
                <li>
                  {language === 'ar' ? 'تسليم المجرمين' : 'Extradiciones'}
                </li>
                <li>
                  {language === 'ar' ? 'الاستشارة القانونية' : 'Asesoría legal'}
                </li>
                <li>
                  {language === 'ar' ? 'التمثيل في المحاكم' : 'Representación en tribunales'}
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '3. شروط الاستخدام' : '3. Términos de uso'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'باستخدام هذا الموقع، فإنك توافق على هذه الشروط. المعلومات المقدمة على هذا الموقع هي لأغراض إعلامية فقط ولا تشكل استشارة قانونية.'
                  : 'Al utilizar este sitio web, usted acepta estos términos. La información proporcionada en este sitio web es únicamente con fines informativos y no constituye asesoramiento legal.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '4. إخلاء المسؤولية' : '4. Descargo de responsabilidad'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'نحن نبذل قصارى جهدنا لضمان دقة المعلومات، لكننا لا نضمن اكتمالها أو دقتها. لا نتحمل المسؤولية عن أي أضرار ناتجة عن استخدام هذا الموقع.'
                  : 'Hacemos todo lo posible para garantizar la exactitud de la información, pero no garantizamos su integridad o precisión. No nos hacemos responsables de ningún daño derivado del uso de este sitio web.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '5. الملكية الفكرية' : '5. Propiedad intelectual'}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {language === 'ar'
                  ? 'جميع المحتويات والمواد على هذا الموقع محمية بموجب حقوق النشر والملكية الفكرية. يحظر النسخ أو التوزيع أو النشر دون إذن مسبق.'
                  : 'Todo el contenido y materiales en este sitio web están protegidos por derechos de autor y propiedad intelectual. Se prohíbe la copia, distribución o publicación sin autorización previa.'
                }
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gold mb-4">
                {language === 'ar' ? '6. القانون المطبق' : '6. Ley aplicable'}
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
                {language === 'ar' ? '7. التحديثات' : '7. Actualizaciones'}
              </h2>
              <p className="text-offwhite/80">
                {language === 'ar'
                  ? 'نحتفظ بالحق في تحديث هذه الشروط في أي وقت. سيتم نشر التغييرات على هذه الصفحة.'
                  : 'Nos reservamos el derecho de actualizar estos términos en cualquier momento. Los cambios se publicarán en esta página.'
                }
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
