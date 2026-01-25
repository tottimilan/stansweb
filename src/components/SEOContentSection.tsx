'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

export default function SEOContentSection() {
  const { language } = useLanguage();
  const t = translations[language];

  if (language === 'ar') {
    return (
      <section className="bg-white py-16 sm:py-20" dir="rtl">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none text-right">
            <h2 className="text-3xl font-bold text-gold mb-6">محامو الجنايات في مدريد: دفاع متخصص على مدار 24/7</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              ستانس للمحاماة هو مكتب محاماة متخصص حصرياً في <strong>القانون الجنائي</strong> في مدريد، إسبانيا. نحن نقدم خدمات الدفاع الجنائي على مدار الساعة طوال أيام الأسبوع، مع <strong>استجابة في أقل من 15 دقيقة</strong> لحالات الطوارئ. فريقنا من المحامين الجنائيين المسجلين في نقابة المحامين في مدريد (ICAM) لديه خبرة واسعة في المحكمة الوطنية، المحكمة العليا، والمحكمة الدستورية.
            </p>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">لماذا تختار ستانس للمحاماة؟</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              نحن متخصصون في <strong>القضايا المعقدة والحساسة</strong> التي تتطلب معرفة عميقة بالقانون الجنائي والإجراءات القضائية. ميزتنا التنافسية تكمن في:
            </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 mr-6">
              <li><strong>التوفر الدائم 24/7:</strong> نحن متاحون كل يوم من أيام السنة، بما في ذلك عطلات نهاية الأسبوع والأعياد</li>
              <li><strong>فريق متعدد اللغات:</strong> خدمات بالإسبانية والإنجليزية والعربية والفرنسية والإيطالية</li>
              <li><strong>تخصص حقيقي:</strong> نحن نعمل فقط في القانون الجنائي، مما يضمن خبرة عميقة</li>
              <li><strong>خبرة دولية:</strong> تسليم المطلوبين إسبانيا-المغرب، الأوامر الأوروبية للاعتقال، التعاون القضائي الدولي</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">مجالات التخصص الرئيسية</h3>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">الإرهاب والمحكمة الوطنية</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              لدينا خبرة واسعة في الدفاع عن المتهمين في <strong>قضايا الإرهاب</strong> أمام المحكمة الوطنية في مدريد. نحن ندافع في حالات التمجيد، التجنيد، الانتماء لمنظمات إرهابية، وتمويل الإرهاب. فريقنا يفهم التعقيدات القانونية لهذه القضايا ويعمل على حماية حقوقك الأساسية طوال الإجراءات.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">تسليم المطلوبين الدولي (إسبانيا ⇄ المغرب)</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              نحن متخصصون في <strong>إجراءات تسليم المطلوبين</strong> بين إسبانيا والمغرب. محامينا يجيدون اللغة العربية ولديهم معرفة بالقانون المغربي، مما يمنحنا ميزة فريدة في هذا النوع من القضايا. ندافع عن حقوقك في جميع مراحل الإجراءات ونقدم الموارد اللازمة ضد قرارات التسليم.
            </p>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">اتصل بنا على الفور</h3>
            <p className="text-black/80 leading-relaxed mb-4">
              إذا كنت أنت أو أحد أفراد عائلتك <strong>محتجزاً أو قيد التحقيق</strong>، فلا تتردد في الاتصال بنا. الوقت حاسم في القضايا الجنائية. نحن نقدم <strong>استشارة أولية</strong> لتقييم حالتك وشرح خياراتك القانونية.
            </p>
          </article>
        </div>
      </section>
    );
  }

  if (language === 'en') {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gold mb-6">Criminal Lawyers in Madrid: Specialized Defense 24/7</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              <strong>STANS ABOGADOS</strong> is a law firm exclusively specialized in <strong>Criminal Law</strong> with headquarters in Madrid, Spain. We provide criminal defense services 24 hours a day, 7 days a week, with <strong>response in less than 1 hour</strong> for emergency cases. Our team of criminal lawyers registered with the Madrid Bar Association (ICAM) has extensive experience in the National High Court, Supreme Court, and Constitutional Court.
            </p>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Why Choose STANS ABOGADOS as Your Criminal Lawyer?</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              We specialize in <strong>complex and sensitive cases</strong> that require deep knowledge of criminal law and judicial procedures. Our competitive advantage lies in:
            </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
              <li><strong>Real 24/7 availability:</strong> We are available every day of the year, including weekends and holidays</li>
              <li><strong>Quick response:</strong> We answer in less than 1 hour and travel immediately to police stations in Madrid</li>
              <li><strong>Multilingual team:</strong> Services in Spanish, English, Arabic, French and Italian</li>
              <li><strong>Real specialization:</strong> We only work in criminal law, ensuring deep experience in each case</li>
              <li><strong>International experience:</strong> Extraditions between Spain and Morocco, European Arrest Warrants, international judicial cooperation</li>
              <li><strong>Verifiable results:</strong> Multiple acquittals, dismissals and successful appeals</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Main Areas of Criminal Law Specialization</h3>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Terrorism and National High Court</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              We have extensive experience in <strong>defending terrorism cases</strong> before the National High Court in Madrid. We defend in cases of terrorism exaltation, recruitment, belonging to terrorist organizations, and terrorism financing. Our team understands the legal complexities of these cases and works tirelessly to protect your fundamental rights throughout the proceedings.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">International Extraditions (Spain ⇄ Morocco)</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              We specialize in <strong>extradition procedures</strong> between Spain and Morocco. Our lawyers speak Arabic and have knowledge of Moroccan law, giving us a unique advantage in this type of cases. We defend your rights at all stages of the proceedings and provide the necessary resources against extradition decisions.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Economic Criminal Law</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              We defend in <strong>complex economic crimes</strong> including money laundering (articles 301-304 of the Criminal Code), fraud, corporate crimes, breach of trust, tax fraud, punishable insolvencies and criminal execution. We have experience in cases with international ramifications and in procedures before specialized economic courts. Our approach combines technical financial knowledge with criminal procedural strategy.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Organized Crime</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              Experience in defending cases of <strong>organized crime</strong> (article 570 bis CP), large-scale drug trafficking, armed robbery groups, and association for illicit purposes. We have participated in high-complexity police operations, including Operation LUCO (Rolex Gang) and the Dominican Don't Play (DDP) case.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Freedom of Expression and Hate Crimes</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              We defend in <strong>hate crimes</strong> (article 510 CP) with special attention to the balance between freedom of expression and criminal limits. We have experience in high-profile cases where artistic, political or humorous freedom of expression conflicts with criminal types. Our most famous case is the dismissal in the Queque case (Abogados Cristianos), where the Madrid Provincial Court recognized the constitutional protection of political humor.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Urgent Criminal Defense (Police Station Assistance)</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              We offer <strong>immediate legal assistance</strong> in police facilities and on-duty courts in accordance with article 520 of the Criminal Procedure Law. Our 24/7 emergency service guarantees that you will have a specialized lawyer by your side from the first moment of detention. We travel immediately to any police station in Madrid and prepare the defense strategy from the first statement.
            </p>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Scope of Action: Madrid, National and International</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Although our main office is in <strong>Madrid city center</strong> (Calle de Abtao, 44, Office 7, 28007 Madrid), we act throughout the national territory and in international procedures:
            </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
              <li><strong>National High Court:</strong> Exclusive jurisdiction in terrorism, organized crime and serious economic crimes</li>
              <li><strong>Supreme Court:</strong> Cassation appeals and procedures before the Second Chamber (Criminal)</li>
              <li><strong>Constitutional Court:</strong> Amparo appeals for violation of fundamental rights</li>
              <li><strong>European Court of Human Rights (ECHR):</strong> Cases before Strasbourg-based European instances</li>
              <li><strong>All Spain:</strong> Travel to any point in the territory for assistance in serious cases</li>
              <li><strong>International extraditions:</strong> Especially Spain-Morocco and European judicial cooperation</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Our Team of Specialized Criminal Lawyers</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              The STANS ABOGADOS team is composed of four criminal lawyers registered with ICAM, each with complementary specializations that allow us to offer <strong>comprehensive defense</strong> in any type of criminal procedure:
            </p>

            <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
              <p className="font-semibold text-black mb-2 text-base">Rubén Vaquero Arribas - Managing Partner</p>
              <p className="text-black/70 text-sm">
                Specialist in economic criminal law, extraditions, EAW and fundamental rights. Training at Complutense University of Madrid and Master's in Economic Criminal Law from UNED. Has litigated before the Constitutional Court and ECHR.
              </p>
            </div>

            <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
              <p className="font-semibold text-black mb-2 text-base">Mounir Elyemlahy Chouati - Partner Lawyer</p>
              <p className="text-black/70 text-sm">
                Native Arabic-speaking lawyer specialized in terrorism, Moroccan law and Spain-Morocco extraditions. Unique competitive advantage in Madrid: combines knowledge of Moroccan law with experience before the National High Court. Trilingual (Spanish, Arabic, English).
              </p>
            </div>

            <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
              <p className="font-semibold text-black mb-2 text-base">Diego Cardona Valero - Partner Lawyer</p>
              <p className="text-black/70 text-sm">
                Specialist in criminal procedural law, organized crime and terrorism. High strategic capacity in litigation and preparation of appeals before higher courts. Specialized training at the Centro de Estudios de Investigación Jurídica (CEIJ).
              </p>
            </div>

            <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
              <p className="font-semibold text-black mb-2 text-base">Ada de Blas Pascual - Lawyer</p>
              <p className="text-black/70 text-sm">
                International training with LL.M. from the University of Cambridge (United Kingdom). Specialist in international criminal law and economic criminal law. Quadrilingual (Spanish, English, French, Italian) with experience in complex cases of international dimension.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Verifiable Success Cases</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Our experience is backed by <strong>real and verifiable results</strong>. Among our most outstanding cases are:
            </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
              <li><strong>Dismissal in Queque case (Abogados Cristianos):</strong> Freedom of expression vs. hate crimes - Auto 379/2025 of the Madrid Provincial Court</li>
              <li><strong>Dismissal in Nordin Workout case:</strong> Jihadist terrorism before the National High Court</li>
              <li><strong>Provisional release in Academia Jihad case:</strong> Modification of precautionary measures in terrorist indoctrination case</li>
              <li><strong>Absolution for money laundering by imprudence:</strong> Sentence 19/2025 of the Criminal Court nº 3 of Jaén</li>
              <li><strong>Operation LUCO - Rolex Gang:</strong> Defense in organized crime procedure</li>
              <li><strong>Archiving in fraud and money laundering case:</strong> Auto 642/2024 of the Madrid Provincial Court estimating appeal</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Contact Procedure and First Consultation</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Contacting STANS ABOGADOS is simple and fast. If you face an <strong>urgent criminal situation</strong>, follow these steps:
            </p>

            <ol className="list-decimal list-inside text-black/80 space-y-3 mb-6 ml-4">
              <li>
                <strong>Call +34 611 68 72 26</strong> - Available 24/7 every day of the year. We will respond to you in less than 1 hour.
              </li>
              <li>
                <strong>WhatsApp emergencies:</strong> Send a message to our WhatsApp for quick contact.
              </li>
              <li>
                <strong>First evaluation:</strong> We assess your case and explain the available legal options.
              </li>
              <li>
                <strong>Transparent budget:</strong> Before starting the defense, we provide a clear budget of fees.
              </li>
              <li>
                <strong>Immediate start:</strong> Once contracted, we start working on your defense immediately.
              </li>
            </ol>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Fees and Payment Methods</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Our <strong>professional fees</strong> adapt to the complexity of each case. We offer different payment modalities and work with total transparency from the first moment. Criminal urgency should not be an economic obstacle - we study each case individually to find the best solution.
            </p>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Detainee Rights: What You Should Know</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              If you have been <strong>detained or are being investigated</strong>, it is essential that you know your rights from the first moment:
            </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
              <li><strong>Right to remain silent:</strong> You are not obligated to declare against yourself</li>
              <li><strong>Right to a lawyer:</strong> You can choose your own lawyer or request a court-appointed one</li>
              <li><strong>Right to interpreter:</strong> If you do not speak Spanish, you have the right to a free interpreter</li>
              <li><strong>Right to communicate detention:</strong> You can notify a family member or person of your choice</li>
              <li><strong>Right to medical recognition:</strong> You can request medical assistance if needed</li>
              <li><strong>Right to know the reasons:</strong> The police must inform you why you are detained</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Frequently Asked Questions about Criminal Defense</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-charleston/5 p-6 rounded-lg">
                <p className="font-semibold text-black mb-2 text-base">How long does a criminal procedure take in Spain?</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  The duration depends on the type of crime and case complexity. An abbreviated procedure can take between 12-18 months, while complex causes before the National High Court can extend 2-4 years. We work to speed up times through appeals and procedural strategies.
                </p>
              </div>

              <div className="bg-charleston/5 p-6 rounded-lg">
                <p className="font-semibold text-black mb-2 text-base">Can I obtain provisional release if I am accused of a serious crime?</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  Yes, provisional release is possible even in serious crimes. It requires demonstrating roots in Spain, absence of flight risk, lack of dangerousness and offering procedural guarantees. We have achieved provisional releases in cases of terrorism, organized crime and serious economic crimes.
                </p>
              </div>

              <div className="bg-charleston/5 p-6 rounded-lg">
                <p className="font-semibold text-black mb-2 text-base">What is the difference between a private lawyer and a court-appointed lawyer?</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  The court-appointed lawyer is assigned by the duty rota and is free if you have no resources. A private lawyer allows you to choose a specialist in your type of crime, guarantees exclusive dedication to your case and greater availability. In complex cases, specialization marks the difference in the outcome.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Commitment to Legal Excellence</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              At STANS ABOGADOS we understand that facing a <strong>criminal procedure is one of the most stressful experiences</strong> a person can live. For this reason, our commitment goes beyond technical defense: we accompany you, explain each step of the process in a language you can understand and keep you informed at all times.
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              Our fundamental values are <strong>professional excellence, total dedication to the client and unwavering defense of fundamental rights</strong>. We believe that every person deserves quality defense, regardless of the accusation they face.
            </p>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-8 mt-10">
              <p className="text-xl font-semibold text-gold mb-4">Do You Need a Criminal Lawyer Now?</p>
              <p className="text-black/80 mb-6">
                Do not wait. In criminal cases, <strong>time is crucial</strong>. Contact us now for a valuation of your case. We are available 24 hours a day, 7 days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+34611687226"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Call Now: +34 611 68 72 26
                </a>
                <a
                  href={`https://wa.me/34611687226?text=${encodeURIComponent('Hello, I need urgent criminal help.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  WhatsApp Emergencies
                </a>
              </div>
            </div>

            <p className="text-black/60 text-sm mt-8 italic">
              STANS ABOGADOS - Criminal lawyers firm in Madrid. ICAM registered. Specialists in National High Court, extraditions, terrorism, organized crime and economic criminal law. Services in Spanish, English, Arabic, French and Italian. Office: Calle de Abtao, 44, Office 7, 28007 Madrid.
            </p>
          </article>
        </div>
      </section>
    );
  }

  if (language === 'fr') {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gold mb-6">Avocats Pénaux à Madrid: Défense Spécialisée 24/7</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              <strong>STANS ABOGADOS</strong> est un cabinet d'avocats exclusivement spécialisé en <strong>Droit Pénal</strong> avec siège à Madrid, Espagne. Nous fournissons des services de défense pénale 24 heures sur 24, 7 jours sur 7, avec <strong>réponse en moins d'1 heure</strong> pour les cas d'urgence. Notre équipe d'avocats pénalistes inscrits au Barreau de Madrid (ICAM) possède une vaste expérience devant l'Audience Nationale, la Cour Suprême et la Cour Constitutionnelle.
            </p>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Pourquoi Choisir STANS ABOGADOS comme votre Avocat Pénaliste?</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Nous nous spécialisons dans les <strong>affaires complexes et sensibles</strong> qui nécessitent une connaissance approfondie du droit pénal et des procédures judiciaires. Notre avantage concurrentiel réside dans:
            </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
              <li><strong>Disponibilité réelle 24/7:</strong> Nous sommes disponibles tous les jours de l'année, y compris les week-ends et jours fériés</li>
              <li><strong>Réponse rapide:</strong> Nous répondons en moins d'1 heure et nous nous déplaçons immédiatement aux commissariats de Madrid</li>
              <li><strong>Équipe multilingue:</strong> Services en espagnol, anglais, arabe, français et italien</li>
              <li><strong>Spécialisation réelle:</strong> Nous travaillons uniquement en droit pénal, garantissant une expérience profonde dans chaque affaire</li>
              <li><strong>Expérience internationale:</strong> Extraditions entre l'Espagne et le Maroc, Mandats d'Arrêt Européens, coopération judiciaire internationale</li>
              <li><strong>Résultats vérifiables:</strong> Multiples acquittements, non-lieux et recours réussis</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Domaines Principaux de Spécialisation en Droit Pénal</h3>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Terrorisme et Audience Nationale</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              Nous possédons une vaste expérience dans la <strong>défense des affaires de terrorisme</strong> devant l'Audience Nationale de Madrid. Nous défendons dans les affaires d'exaltation du terrorisme, recrutement, appartenance à des organisations terroristes et financement du terrorisme. Notre équipe comprend les complexités juridiques de ces procédures et travaille sans relâche pour protéger vos droits fondamentaux tout au long du processus judiciaire.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Extraditions Internationales (Espagne ⇄ Maroc)</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              Nous nous spécialisons dans les <strong>procédures d'extradition</strong> entre l'Espagne et le Maroc. Nos avocats parlent arabe et connaissent le droit marocain, nous donnant un avantage unique dans ce type d'affaires. Nous défendons vos droits à toutes les étapes des procédures et fournissons les ressources nécessaires contre les décisions d'extradition.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Droit Pénal Économique</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              Nous défendons dans les <strong>crimes économiques complexes</strong> incluant le blanchiment d'argent (articles 301-304 du Code Pénal), l'escroquerie, les crimes d'entreprise, l'abus de confiance, la fraude fiscale, les insolvabilités punissables et l'exécution pénale. Nous avons de l'expérience dans les affaires avec ramifications internationales et dans les procédures devant les tribunaux économiques spécialisés. Notre approche combine la connaissance technique financière avec la stratégie procédurale pénale.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Crime Organisé</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              Expérience dans la défense d'affaires de <strong>crime organisé</strong> (article 570 bis CP), trafic de drogue à grande échelle, groupes de vol à main armée et association de malfaiteurs. Nous avons participé à des opérations policières de haute complexité, incluant l'Opération LUCO (Gang du Rolex) et l'affaire Dominican Don't Play (DDP).
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Liberté d'Expression et Crimes de Haine</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              Nous défendons dans les <strong>crimes de haine</strong> (article 510 CP) avec une attention particulière à l'équilibre entre liberté d'expression et limites pénales. Nous avons de l'expérience dans les affaires médiatiques où la liberté d'expression artistique, politique ou humoristique entre en conflit avec les types pénaux. Notre affaire la plus connue est le non-lieu dans l'affaire Queque (Abogados Cristianos), où l'Audience Provinciale de Madrid a reconnu la protection constitutionnelle de l'humour politique.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">Défense Pénale d'Urgence (Assistance en Commissariat)</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              Nous offrons une <strong>assistance juridique immédiate</strong> dans les locaux de police et tribunaux de garde conformément à l'article 520 de la Loi de Procédure Pénale. Notre service d'urgence 24/7 garantit que vous aurez un avocat spécialisé à vos côtés dès le premier moment de la détention. Nous nous déplaçons immédiatement dans n'importe quel commissariat de Madrid et préparons la stratégie de défense dès la première déclaration.
            </p>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Champ d'Action: Madrid, National et International</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Bien que notre bureau principal soit au <strong>centre-ville de Madrid</strong> (Calle de Abtao, 44, Bureau 7, 28007 Madrid), nous intervenons sur tout le territoire national et dans les procédures internationales:
            </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
              <li><strong>Audience Nationale:</strong> Compétence exclusive en terrorisme, crime organisé et crimes économiques graves</li>
              <li><strong>Cour Suprême:</strong> Pourvois en cassation et procédures devant la Deuxième Chambre (Pénale)</li>
              <li><strong>Cour Constitutionnelle:</strong> Recours en amparo pour violation des droits fondamentaux</li>
              <li><strong>Cour Européenne des Droits de l'Homme (CEDH):</strong> Affaires devant les instances européennes à Strasbourg</li>
              <li><strong>Toute l'Espagne:</strong> Déplacement vers n'importe quel point du territoire pour assistance dans les affaires graves</li>
              <li><strong>Extraditions internationales:</strong> Particulièrement Espagne-Maroc et coopération judiciaire européenne</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Notre Équipe d'Avocats Pénalistes Spécialisés</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              L'équipe de STANS ABOGADOS est composée de quatre avocats pénalistes inscrits à l'ICAM, chacun avec des spécialisations complémentaires qui nous permettent d'offrir une <strong>défense intégrale</strong> dans tout type de procédure pénale:
            </p>

            <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
              <p className="font-semibold text-black mb-2 text-base">Rubén Vaquero Arribas - Associé Gérant</p>
              <p className="text-black/70 text-sm">
                Spécialiste en droit pénal économique, extraditions, MAE et droits fondamentaux. Formation à l'Université Complutense de Madrid et Master en Droit Pénal Économique de l'UNED. A plaidé devant la Cour Constitutionnelle et la CEDH.
              </p>
            </div>

            <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
              <p className="font-semibold text-black mb-2 text-base">Mounir Elyemlahy Chouati - Associé Avocat</p>
              <p className="text-black/70 text-sm">
                Avocat arabophone natif spécialisé en terrorisme, droit marocain et extraditions Espagne-Maroc. Avantage concurrentiel unique à Madrid: combine la connaissance du droit marocain avec l'expérience devant l'Audience Nationale. Trilingue (espagnol, arabe, anglais).
              </p>
            </div>

            <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
              <p className="font-semibold text-black mb-2 text-base">Diego Cardona Valero - Associé Avocat</p>
              <p className="text-black/70 text-sm">
                Spécialiste en droit procédural pénal, crime organisé et terrorisme. Grande capacité stratégique en litige et préparation des recours devant les juridictions supérieures. Formation spécialisée au Centro de Estudios de Investigación Jurídica (CEIJ).
              </p>
            </div>

            <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
              <p className="font-semibold text-black mb-2 text-base">Ada de Blas Pascual - Avocate</p>
              <p className="text-black/70 text-sm">
                Formation internationale avec LL.M. de l'Université de Cambridge (Royaume-Uni). Spécialiste en droit pénal international et droit pénal économique. Quadrilingue (espagnol, anglais, français, italien) avec expérience dans les affaires complexes de dimension internationale.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Cas de Succès Vérifiables</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Notre expérience est étayée par des <strong>résultats réels et vérifiables</strong>. Parmi nos affaires les plus remarquables figurent:
            </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
              <li><strong>Non-lieu dans l'affaire Queque (Abogados Cristianos):</strong> Liberté d'expression vs. crimes de haine - Ordonnance 379/2025 de l'Audience Provinciale de Madrid</li>
              <li><strong>Non-lieu dans l'affaire Nordin Workout:</strong> Terrorisme djihadiste devant l'Audience Nationale</li>
              <li><strong>Liberté provisoire dans l'affaire Academia Jihad:</strong> Modification des mesures précautionnelles dans l'affaire d'endoctrinement terroriste</li>
              <li><strong>Acquittement pour blanchiment par imprudence:</strong> Sentence 19/2025 du Tribunal Pénal nº 3 de Jaén</li>
              <li><strong>Opération LUCO - Gang du Rolex:</strong> Défense dans la procédure de crime organisé</li>
              <li><strong>Classement dans l'affaire d'escroquerie et blanchiment:</strong> Ordonnance 642/2024 de l'Audience Provinciale de Madrid faisant droit au recours</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Procédure de Contact et Première Consultation</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Contacter STANS ABOGADOS est simple et rapide. Si vous faites face à une <strong>situation pénale urgente</strong>, suivez ces étapes:
            </p>

            <ol className="list-decimal list-inside text-black/80 space-y-3 mb-6 ml-4">
              <li>
                <strong>Appelez le +34 611 68 72 26</strong> - Disponible 24/7 tous les jours de l'année. Nous vous répondrons en moins d'1 heure.
              </li>
              <li>
                <strong>WhatsApp urgences:</strong> Envoyez un message sur notre WhatsApp pour un contact rapide.
              </li>
              <li>
                <strong>Première évaluation:</strong> Nous évaluons votre affaire et vous expliquons les options juridiques disponibles.
              </li>
              <li>
                <strong>Budget transparent:</strong> Avant de commencer la défense, nous vous fournissons un budget clair d'honoraires.
              </li>
              <li>
                <strong>Démarrage immédiat:</strong> Une fois contractés, nous commençons à travailler sur votre défense immédiatement.
              </li>
            </ol>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Honoraires et Modes de Paiement</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Nos <strong>honoraires professionnels</strong> s'adaptent à la complexité de chaque affaire. Nous proposons différentes modalités de paiement et travaillons avec une transparence totale dès le premier instant. L'urgence pénale ne doit pas être un obstacle économique - nous étudions chaque cas individuellement pour trouver la meilleure solution.
            </p>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Droits du Détenu: Ce que Vous Devez Savoir</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Si vous avez été <strong>arrêté ou êtes sous enquête</strong>, il est essentiel que vous connaissiez vos droits dès le premier instant:
            </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
              <li><strong>Droit au silence:</strong> Vous n'êtes pas obligé de vous déclarer contre vous-même</li>
              <li><strong>Droit à un avocat:</strong> Vous pouvez choisir votre propre avocat ou en demander un commis d'office</li>
              <li><strong>Droit à un interprète:</strong> Si vous ne parlez pas espagnol, vous avez droit à un interprète gratuit</li>
              <li><strong>Droit de communiquer l'arrestation:</strong> Vous pouvez prévenir un membre de votre famille ou une personne de votre choix</li>
              <li><strong>Droit à la reconnaissance médicale:</strong> Vous pouvez demander une assistance médicale si nécessaire</li>
              <li><strong>Droit de connaître les motifs:</strong> La police doit vous informer de pourquoi vous êtes arrêté</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Questions Fréquemment Posées sur la Défense Pénale</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-charleston/5 p-6 rounded-lg">
                <p className="font-semibold text-black mb-2 text-base">Combien de temps dure une procédure pénale en Espagne?</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  La durée dépend du type de crime et de la complexité de l'affaire. Une procédure abrégée peut durer entre 12-18 mois, tandis que les causes complexes devant l'Audience Nationale peuvent s'étendre sur 2-4 ans. Nous travaillons pour accélérer les délais par le biais de recours et stratégies procédurales.
                </p>
              </div>

              <div className="bg-charleston/5 p-6 rounded-lg">
                <p className="font-semibold text-black mb-2 text-base">Puis-je obtenir une liberté provisoire si je suis accusé d'un crime grave?</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  Oui, la liberté provisoire est possible même dans les crimes graves. Elle nécessite de démontrer des attaches en Espagne, l'absence de risque de fuite, le manque de dangerosité et d'offrir des garanties procédurales. Nous avons obtenu des libertés provisoires dans des affaires de terrorisme, crime organisé et crimes économiques graves.
                </p>
              </div>

              <div className="bg-charleston/5 p-6 rounded-lg">
                <p className="font-semibold text-black mb-2 text-base">Quelle est la différence entre un avocat privé et un avocat commis d'office?</p>
                <p className="text-black/70 text-sm leading-relaxed">
                  L'avocat commis d'office est désigné par le roulement de permanence et est gratuit si vous n'avez pas de ressources. Un avocat privé vous permet de choisir un spécialiste dans votre type de crime, garantit une dédicace exclusive à votre affaire et une plus grande disponibilité. Dans les affaires complexes, la spécialisation fait la différence dans le résultat.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Engagement envers l'Excellence Juridique</h3>

            <p className="text-black/80 leading-relaxed mb-4">
              Chez STANS ABOGADOS nous comprenons que faire face à une <strong>procédure pénale est l'une des expériences les plus stressantes</strong> qu'une personne puisse vivre. Pour cette raison, notre engagement va au-delà de la défense technique: nous vous accompagnons, expliquons chaque étape du processus dans un langage que vous pouvez comprendre et vous tenons informé en permanence.
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              Nos valeurs fondamentales sont <strong>l'excellence professionnelle, la dédicace totale au client et la défense inébranlable des droits fondamentaux</strong>. Nous croyons que toute personne mérite une défense de qualité, indépendamment de l'accusation qu'elle affronte.
            </p>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-8 mt-10">
              <p className="text-xl font-semibold text-gold mb-4">Avez-vous Besoin d'un Avocat Pénaliste Maintenant?</p>
              <p className="text-black/80 mb-6">
                N'attendez pas. Dans les affaires pénales, <strong>le temps est crucial</strong>. Contactez-nous maintenant pour une évaluation de votre affaire. Nous sommes disponibles 24 heures sur 24, 7 jours sur 7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+34611687226"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Appeler Maintenant: +34 611 68 72 26
                </a>
                <a
                  href={`https://wa.me/34611687226?text=${encodeURIComponent('Bonjour, j\'ai besoin d\'aide pénale urgente.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  WhatsApp Urgences
                </a>
              </div>
            </div>

            <p className="text-black/60 text-sm mt-8 italic">
              STANS ABOGADOS - Cabinet d'avocats pénalistes à Madrid. Inscrits ICAM. Spécialistes en Audience Nationale, extraditions, terrorisme, crime organisé et droit pénal économique. Services en espagnol, anglais, arabe, français et italien. Bureau: Calle de Abtao, 44, Bureau 7, 28007 Madrid.
            </p>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gold mb-6">Abogados Penalistas en Madrid: Defensa Especializada 24/7</h2>
          
            <p className="text-black/80 leading-relaxed mb-6">
              <strong>STANS ABOGADOS</strong> es un despacho de abogados especializado exclusivamente en <strong>Derecho Penal</strong> con sede en Madrid, España. Ofrecemos servicios de defensa penal las 24 horas del día, los 7 días de la semana, con <strong>respuesta rápida en menos de 1 hora</strong> para casos urgentes. Nuestro equipo de abogados penalistas colegiados en el Ilustre Colegio de Abogados de Madrid (ICAM) cuenta con amplia experiencia en la Audiencia Nacional, Tribunal Supremo y Tribunal Constitucional.
            </p>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">¿Por Qué Elegir a STANS ABOGADOS como tu Abogado Penalista?</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Somos especialistas en <strong>casos complejos y de alta sensibilidad</strong> que requieren un conocimiento profundo del derecho penal y los procedimientos judiciales. Nuestra ventaja competitiva radica en:
          </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
              <li><strong>Disponibilidad real 24/7:</strong> Estamos disponibles todos los días del año, incluidos fines de semana y festivos</li>
              <li><strong>Respuesta rápida:</strong> Contestamos en menos de 1 hora y nos desplazamos de inmediato a comisarías en Madrid</li>
              <li><strong>Equipo multilingüe:</strong> Servicios en español, inglés, árabe, francés e italiano</li>
              <li><strong>Especialización real:</strong> Solo trabajamos derecho penal, lo que garantiza experiencia profunda en cada caso</li>
              <li><strong>Experiencia internacional:</strong> Extradiciones internacionales (con especialización en España-Marruecos), Órdenes Europeas de Detención, cooperación judicial europea</li>
              <li><strong>Resultados comprobables:</strong> Múltiples absoluciones, sobreseimientos y recursos exitosos</li>
            </ul>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Áreas Principales de Especialización en Derecho Penal</h3>

          <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">1. Terrorismo ante la Audiencia Nacional</h4>
          <p className="text-black/80 leading-relaxed mb-4">
            Contamos con experiencia directa en la <strong>defensa de casos de terrorismo</strong> ante la Audiencia Nacional de Madrid. Defendemos en casos de enaltecimiento del terrorismo, captación yihadista, pertenencia a organización terrorista, financiación del terrorismo y autoadoctrinamiento. Nuestro equipo comprende la complejidad jurídica de estos procedimientos y trabaja incansablemente para proteger tus derechos fundamentales durante todo el proceso judicial.
          </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">2. Extradiciones Internacionales</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              Somos especialistas en <strong>procedimientos de extradición internacional</strong>, con experiencia destacada en extradiciones entre España y Marruecos. Nuestro equipo incluye un abogado árabe nativo con conocimientos de derecho marroquí. Defendemos en extradiciones activas y pasivas, Órdenes Europeas de Detención y Entrega (OEDE), y recursos contra la extradición ante tribunales españoles y europeos.
            </p>

          <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">3. Derecho Penal Económico</h4>
          <p className="text-black/80 leading-relaxed mb-4">
            Defendemos en <strong>delitos económicos complejos</strong> incluyendo blanqueo de capitales (artículos 301-304 del Código Penal), estafa, delitos societarios, administración desleal, fraude fiscal, insolvencias punibles y alzamiento de bienes. Tenemos experiencia en casos con ramificaciones internacionales y en procedimientos ante tribunales económicos especializados. Nuestro enfoque combina conocimiento técnico financiero con estrategia procesal penal.
          </p>

          <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">4. Criminalidad Organizada</h4>
          <p className="text-black/80 leading-relaxed mb-4">
            Experiencia en defensa de casos de <strong>organización criminal</strong> (artículo 570 bis CP), tráfico de drogas a gran escala, bandas organizadas, robos con violencia en grupo y asociación ilícita. Hemos participado en operaciones policiales de alta complejidad, incluyendo la Operación LUCO (Banda del Rolex) y el caso Dominican Don't Play (DDP).
          </p>

          <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">5. Libertad de Expresión y Delitos de Odio</h4>
          <p className="text-black/80 leading-relaxed mb-4">
            Defendemos en <strong>delitos de odio</strong> (artículo 510 CP) con especial atención al equilibrio entre libertad de expresión y los límites penales. Tenemos experiencia en casos mediáticos donde la libertad de expresión artística, política o humorística entra en conflicto con tipos penales. Nuestro caso más conocido es el sobreseimiento en el caso Queque (Abogados Cristianos), donde conseguimos que la Audiencia Provincial reconociera la protección constitucional del humor político.
          </p>

          <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">6. Defensa Penal de Urgencia (Asistencia en Comisaría)</h4>
          <p className="text-black/80 leading-relaxed mb-4">
            Ofrecemos <strong>asistencia letrada inmediata</strong> en dependencias policiales y juzgados de guardia conforme al artículo 520 de la Ley de Enjuiciamiento Criminal. Nuestro servicio de urgencias 24/7 garantiza que tendrás un abogado especializado a tu lado desde el primer momento de la detención. Nos desplazamos inmediatamente a cualquier comisaría de Madrid y preparamos la estrategia de defensa desde la primera declaración.
          </p>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Ámbito de Actuación: Madrid, Nacional e Internacional</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Aunque nuestra sede principal está en <strong>Madrid capital</strong> (Calle de Abtao, 44), actuamos en todo el territorio nacional y en procedimientos internacionales:
          </p>

          <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
            <li><strong>Audiencia Nacional:</strong> Competencia exclusiva en terrorismo, criminalidad organizada y delitos económicos graves</li>
            <li><strong>Tribunal Supremo:</strong> Recursos de casación y procedimientos ante la Sala Segunda (Penal)</li>
            <li><strong>Tribunal Constitucional:</strong> Recursos de amparo por vulneración de derechos fundamentales</li>
            <li><strong>Tribunal Europeo de Derechos Humanos (TEDH):</strong> Casos ante instancias europeas en Estrasburgo</li>
            <li><strong>Toda España:</strong> Desplazamiento a cualquier punto del territorio para asistencia en casos graves</li>
            <li><strong>Extradiciones internacionales:</strong> Especialmente España-Marruecos y cooperación judicial europea</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Nuestro Equipo de Abogados Penalistas Especializados</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            El equipo de STANS ABOGADOS está compuesto por cuatro abogados penalistas colegiados, cada uno con especialidades complementarias que nos permiten ofrecer una <strong>defensa integral</strong> en cualquier tipo de procedimiento penal:
          </p>

          <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
            <p className="font-semibold text-black mb-2 text-base">Rubén Vaquero Arribas - Socio Director</p>
            <p className="text-black/70 text-sm">
              Especialista en derecho penal económico, extradiciones, OEDE y derechos fundamentales. Formación en la Universidad Complutense de Madrid y Máster en Derecho Penal Económico por la UNED. Ha litigado ante el Tribunal Constitucional y el TEDH.
            </p>
          </div>

          <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
            <p className="font-semibold text-black mb-2 text-base">Mounir Elyemlahy Chouati - Socio Abogado</p>
            <p className="text-black/70 text-sm">
              Abogado árabe nativo especializado en terrorismo, derecho marroquí y extradiciones España-Marruecos. Única ventaja competitiva en Madrid: combina conocimiento del derecho marroquí con experiencia ante la Audiencia Nacional. Trilingüe (español, árabe, inglés).
            </p>
          </div>

          <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
            <p className="font-semibold text-black mb-2 text-base">Diego Cardona Valero - Socio Abogado</p>
            <p className="text-black/70 text-sm">
              Especialista en derecho procesal penal, criminalidad organizada y terrorismo. Alta capacidad estratégica en litigación y preparación de recursos ante instancias superiores. Formación especializada en el Centro de Estudios de Investigación Jurídica (CEIJ).
            </p>
          </div>

          <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
            <p className="font-semibold text-black mb-2 text-base">Ada de Blas Pascual - Abogada</p>
            <p className="text-black/70 text-sm">
              Formación internacional con LL.M. por la University of Cambridge (Reino Unido). Especialista en derecho penal internacional y derecho penal económico. Cuatrilingüe (español, inglés, francés, italiano) con experiencia en causas complejas de dimensión internacional.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Casos de Éxito Comprobables</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Nuestra experiencia está respaldada por <strong>resultados reales y verificables</strong>. Entre nuestros casos más destacados se encuentran:
          </p>

          <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
            <li><strong>Sobreseimiento en caso Queque (Abogados Cristianos):</strong> Libertad de expresión vs. delitos de odio - Auto 379/2025 de la Audiencia Provincial de Madrid</li>
            <li><strong>Sobreseimiento en caso Nordin Workout:</strong> Terrorismo yihadista ante Audiencia Nacional</li>
            <li><strong>Libertad provisional en Academia Yihad:</strong> Modificación de medidas cautelares en caso de adoctrinamiento terrorista</li>
            <li><strong>Absolución por blanqueo de capitales por imprudencia:</strong> Sentencia 19/2025 del Juzgado de lo Penal nº 3 de Jaén</li>
            <li><strong>Operación LUCO - Banda del Rolex:</strong> Defensa en procedimiento por organización criminal</li>
            <li><strong>Archivo en caso de estafa y blanqueo:</strong> Auto 642/2024 de la Audiencia Provincial de Jaén estimando recurso</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Procedimiento de Contacto y Primera Consulta</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Contactar con STANS ABOGADOS es simple y rápido. Si te enfrentas a una <strong>situación penal urgente</strong>, sigue estos pasos:
          </p>

          <ol className="list-decimal list-inside text-black/80 space-y-3 mb-6 ml-4">
            <li>
              <strong>Llama al +34 611 68 72 26</strong> - Disponible 24/7 todos los días del año. Te responderemos en menos de 1 hora.
            </li>
            <li>
              <strong>WhatsApp urgencias:</strong> Envía un mensaje a nuestro WhatsApp para contacto rápido.
            </li>
            <li>
              <strong>Primera valoración:</strong> Evaluamos tu caso y te explicamos las opciones legales disponibles.
            </li>
            <li>
              <strong>Presupuesto transparente:</strong> Antes de iniciar la defensa, te proporcionamos un presupuesto claro de honorarios.
            </li>
            <li>
              <strong>Inicio inmediato:</strong> Una vez contratados, comenzamos a trabajar en tu defensa de inmediato.
            </li>
          </ol>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Honorarios y Formas de Pago</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Nuestros <strong>honorarios profesionales</strong> se adaptan a la complejidad de cada caso. Ofrecemos diferentes modalidades de pago y trabajamos con transparencia total desde el primer momento. La urgencia penal no debe ser un obstáculo económico - estudiamos cada caso individualmente para encontrar la mejor solución.
          </p>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Derechos del Detenido: Lo que Debes Saber</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Si has sido <strong>detenido o estás siendo investigado</strong>, es fundamental que conozcas tus derechos desde el primer momento:
          </p>

          <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
            <li><strong>Derecho a guardar silencio:</strong> No estás obligado a declarar contra ti mismo</li>
            <li><strong>Derecho a un abogado:</strong> Puedes elegir tu propio abogado</li>
            <li><strong>Derecho a intérprete:</strong> Si no hablas español, tienes derecho a un intérprete</li>
            <li><strong>Derecho a comunicar la detención:</strong> Puedes avisar a un familiar o persona de tu elección</li>
            <li><strong>Derecho a reconocimiento médico:</strong> Puedes solicitar asistencia médica si lo necesitas</li>
            <li><strong>Derecho a conocer los motivos:</strong> La policía debe informarte de por qué estás detenido</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Preguntas Frecuentes sobre Defensa Penal</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-charleston/5 p-6 rounded-lg">
              <p className="font-semibold text-black mb-2 text-base">¿Cuánto tiempo tarda un procedimiento penal en España?</p>
              <p className="text-black/70 text-sm leading-relaxed">
                La duración depende del tipo de delito y la complejidad del caso. Un procedimiento abreviado puede durar entre 12-18 meses, mientras que causas complejas ante la Audiencia Nacional pueden extenderse 2-4 años. Trabajamos para acelerar los tiempos mediante recursos y estrategias procesales.
              </p>
            </div>

            <div className="bg-charleston/5 p-6 rounded-lg">
              <p className="font-semibold text-black mb-2 text-base">¿Puedo obtener libertad provisional si me acusan de un delito grave?</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Sí, la libertad provisional es posible incluso en delitos graves. Requiere demostrar arraigo en España, ausencia de riesgo de fuga, falta de peligrosidad y ofrecer garantías procesales. Hemos conseguido libertades provisionales en casos de terrorismo, criminalidad organizada y delitos económicos graves.
              </p>
            </div>

            <div className="bg-charleston/5 p-6 rounded-lg">
              <p className="font-semibold text-black mb-2 text-base">¿Por qué elegir un abogado especializado?</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Un abogado particular especializado te permite elegir un profesional experto en tu tipo de delito, garantiza dedicación exclusiva a tu caso y mayor disponibilidad. En casos complejos ante la Audiencia Nacional, extradiciones o delitos económicos, la especialización marca la diferencia en el resultado.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Compromiso con la Excelencia Legal</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            En STANS ABOGADOS entendemos que enfrentarse a un <strong>procedimiento penal es una de las experiencias más estresantes</strong> que una persona puede vivir. Por eso, nuestro compromiso va más allá de la defensa técnica: te acompañamos, te explicamos cada paso del proceso en un lenguaje que puedas entender y te mantenemos informado en todo momento.
          </p>

          <p className="text-black/80 leading-relaxed mb-4">
            Nuestros valores fundamentales son la <strong>excelencia profesional, la dedicación total al cliente y la defensa inquebrantable de los derechos fundamentales</strong>. Creemos que toda persona merece una defensa de calidad, independientemente de la acusación que enfrente.
          </p>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-8 mt-10">
              <p className="text-xl font-semibold text-gold mb-4">¿Necesitas un Abogado Penalista Ahora?</p>
              <p className="text-black/80 mb-6">
                No esperes. En casos penales, <strong>el tiempo es crucial</strong>. Contacta con nosotros ahora mismo para una valoración de tu caso. Estamos disponibles 24 horas al día, 7 días a la semana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+34611687226"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Llamar Ahora: +34 611 68 72 26
                </a>
                <a 
                  href={`https://wa.me/34611687226?text=${encodeURIComponent('Hola, necesito ayuda penal urgente.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  WhatsApp Urgencias
                </a>
              </div>
            </div>

          <p className="text-black/60 text-sm mt-8 italic">
            STANS ABOGADOS - Despacho de abogados penalistas en Madrid. Colegiados ICAM. Especialistas en Audiencia Nacional, extradiciones, terrorismo, criminalidad organizada y derecho penal económico. Servicios en español, inglés, árabe, francés e italiano. Oficina: Calle de Abtao, 44, Oficina 7, 28007 Madrid.
          </p>
        </article>
      </div>
    </section>
  );
}

