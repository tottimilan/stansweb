// Base de datos completa de todas las FAQs
// Categorizadas por tema para fácil filtrado

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  blogSlug?: string; // Link al blog relacionado
  lawyerSlug?: string; // Link al abogado experto
  keywords: string[];
}

export const allFAQs: FAQ[] = [
  // ===== TERRORISMO - Defensa Penal General =====
  {
    id: 'que-es-delito-terrorismo',
    question: '¿Qué es un delito de terrorismo según el Código Penal español?',
    answer: 'Los delitos de terrorismo están regulados en los artículos 571-580 del Código Penal. Se define como la comisión de delitos graves con finalidad de subvertir el orden constitucional o alterar gravemente la paz pública. Incluye: organización terrorista, enaltecimiento, captación, financiación y actos terroristas. Competencia exclusiva de la Audiencia Nacional.',
    category: 'Terrorismo',
    blogSlug: 'defensa-penal-terrorismo-audiencia-nacional',
    lawyerSlug: 'mounir-elyemlahy-chouati',
    keywords: ['delito terrorismo', 'código penal', 'artículo 571']
  },
  {
    id: 'pena-maxima-terrorismo',
    question: '¿Cuál es la pena máxima por terrorismo en España?',
    answer: 'La pena máxima por delitos de terrorismo es de 30 años de prisión para actos terroristas que causen muerte. Las penas varían según el delito: enaltecimiento 1-3 años, captación 2-5 años, pertenencia a organización 6-15 años, actos terroristas 15-30 años.',
    category: 'Terrorismo',
    blogSlug: 'defensa-penal-terrorismo-audiencia-nacional',
    keywords: ['pena terrorismo', 'años prisión terrorismo']
  },
  {
    id: 'quien-juzga-terrorismo',
    question: '¿Quién tiene competencia para juzgar casos de terrorismo?',
    answer: 'La Audiencia Nacional tiene competencia exclusiva sobre todos los delitos de terrorismo en España. Tiene sede en Madrid y está compuesta por jueces especializados. Los procedimientos tienen particularidades específicas como secreto de sumario frecuente y posibilidad de incomunicación.',
    category: 'Terrorismo',
    blogSlug: 'defensa-penal-terrorismo-audiencia-nacional',
    keywords: ['audiencia nacional', 'competencia terrorismo']
  },
  {
    id: 'libertad-provisional-terrorismo',
    question: '¿Puedo obtener libertad provisional en un caso de terrorismo?',
    answer: 'Sí, aunque es difícil. Requiere demostrar: arraigo en España, ausencia de riesgo de fuga, falta de peligrosidad, y ofrecer garantías (fianza, retirada pasaporte, comparecencias). En STANS ABOGADOS hemos logrado libertades provisionales en casos de terrorismo mediante argumentación sólida. Contacta 24/7.',
    category: 'Terrorismo',
    blogSlug: 'derechos-fundamentales-procedimientos-terrorismo',
    lawyerSlug: 'mounir-elyemlahy-chouati',
    keywords: ['libertad provisional terrorismo', 'salir prisión preventiva']
  },
  {
    id: 'duracion-procedimiento-terrorismo',
    question: '¿Cuánto tiempo dura un procedimiento por terrorismo?',
    answer: 'Los procedimientos de terrorismo ante la Audiencia Nacional suelen durar de 2 a 5 años. La fase de instrucción puede extenderse 18-24 meses, con posibles prórrogas. La prisión preventiva puede durar hasta 4 años en total. La complejidad y el secreto de sumario alargan los plazos.',
    category: 'Terrorismo',
    blogSlug: 'defensa-penal-terrorismo-audiencia-nacional',
    keywords: ['duración procedimiento terrorismo', 'cuánto tarda juicio terrorismo']
  },
  
  // ===== ENALTECIMIENTO =====
  {
    id: 'que-es-enaltecimiento',
    question: '¿Qué es el enaltecimiento del terrorismo?',
    answer: 'El artículo 578 CP castiga con 1-3 años de prisión el enaltecimiento o justificación pública de delitos de terrorismo o terroristas, o actos que humillen a víctimas. Debe existir idoneidad para incitar a nuevos delitos. No basta con expresiones ofensivas: debe haber riesgo real de incitación.',
    category: 'Terrorismo',
    blogSlug: 'enaltecimiento-terrorismo-redes-sociales-defensa',
    lawyerSlug: 'mounir-elyemlahy-chouati',
    keywords: ['enaltecimiento terrorismo', 'artículo 578', 'qué es enaltecimiento']
  },
  {
    id: 'carcel-por-tuit',
    question: '¿Puedo ir a la cárcel por un tuit sobre terrorismo?',
    answer: 'Depende del contenido. No todo tuit polémico es delito. Para que sea enaltecimiento debe: 1) Ser público, 2) Ensalzar actos terroristas o terroristas, 3) Ser idóneo para incitar a violencia. El TEDH ha limitado este delito: expresiones artísticas, humor y crítica política están protegidas por libertad de expresión.',
    category: 'Terrorismo',
    blogSlug: 'enaltecimiento-terrorismo-redes-sociales-defensa',
    keywords: ['tuit terrorismo', 'cárcel twitter', 'enaltecimiento redes sociales']
  },
  {
    id: 'pena-enaltecimiento',
    question: '¿Cuántos años de prisión por enaltecimiento del terrorismo?',
    answer: 'La pena por enaltecimiento es de 1 a 3 años de prisión, o alternativamente multa de 12 a 18 meses. Si se comete a través de internet o redes sociales puede aplicarse el agravante de difusión. En casos leves, puede suspenderse la pena si es la primera vez.',
    category: 'Terrorismo',
    blogSlug: 'enaltecimiento-terrorismo-redes-sociales-defensa',
    keywords: ['pena enaltecimiento', 'años prisión enaltecimiento']
  },
  {
    id: 'limite-libertad-expresion',
    question: '¿Dónde está el límite entre libertad de expresión y enaltecimiento?',
    answer: 'El límite es la incitación directa a la violencia. PROTEGIDO: crítica política, expresiones artísticas (rap, humor), mensajes académicos, opiniones polémicas. NO PROTEGIDO: glorificar atentados concretos, llamadas a violencia, humillar víctimas identificables, difundir propaganda oficial terrorista. El TEDH (casos Stern Taulats, Strawberry) ha reforzado la libertad de expresión.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-libertad-expresion-limite-legal',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['libertad expresión terrorismo', 'límite enaltecimiento']
  },
  {
    id: 'que-hacer-investigan-redes',
    question: '¿Qué hacer si la policía me cita por mensajes en redes sociales?',
    answer: '1) NO borres nada (es obstrucción a la justicia), 2) Contacta abogado especializado inmediatamente (24/7 STANS ABOGADOS), 3) NO declares sin abogado, 4) Recopila contexto completo de mensajes, 5) Ejerce tu derecho a no declarar. La defensa temprana es crucial.',
    category: 'Terrorismo',
    blogSlug: 'enaltecimiento-terrorismo-redes-sociales-defensa',
    lawyerSlug: 'mounir-elyemlahy-chouati',
    keywords: ['citación policial redes sociales', 'qué hacer policía mensajes']
  },
  {
    id: 'borrar-tuits-investigacion',
    question: '¿Debo borrar mis tuits si me investigan por enaltecimiento?',
    answer: 'NO. Borrar evidencia puede constituir obstrucción a la justicia y empeorar tu situación. Los mensajes borrados pueden recuperarse mediante peritos informáticos. Además, agravaría la percepción de culpabilidad. Lo correcto es: no borrar nada, documentar el contexto completo, y contactar abogado especializado inmediatamente.',
    category: 'Terrorismo',
    blogSlug: 'enaltecimiento-terrorismo-redes-sociales-defensa',
    keywords: ['borrar tuits', 'eliminar mensajes investigación']
  },
  {
    id: 'rap-humor-enaltecimiento',
    question: '¿El humor o el rap pueden ser enaltecimiento del terrorismo?',
    answer: 'El TEDH (caso Strawberry/Pablo Hasél, 2022) estableció que las expresiones artísticas están protegidas por libertad de expresión. El rap, humor negro y sátira gozan de especial protección constitucional. Solo conductas con incitación directa y real a la violencia pueden castigarse. La mera glorificación de terrorismo pasado sin llamada a violencia futura NO puede ser delito.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-libertad-expresion-limite-legal',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['rap enaltecimiento', 'humor terrorismo', 'caso Strawberry']
  },
  {
    id: 'articulo-578-codigo-penal',
    question: '¿Qué es el artículo 578 del Código Penal?',
    answer: 'El artículo 578 CP tipifica el delito de enaltecimiento del terrorismo. Castiga con 1-3 años de prisión el enaltecimiento o justificación pública de terrorismo o terroristas, o actos que humillen a víctimas. Requiere: expresión pública, contenido que ensalce terrorismo, e idoneidad para incitar a nuevos delitos.',
    category: 'Terrorismo',
    blogSlug: 'enaltecimiento-terrorismo-redes-sociales-defensa',
    keywords: ['artículo 578', 'artículo 578 CP', 'enaltecimiento código penal']
  },
  {
    id: 'like-retweet-enaltecimiento',
    question: '¿Puedo ser condenado por un like o retweet?',
    answer: 'Dar "like" o retweet por sí solos generalmente NO constituyen enaltecimiento, salvo que sean reiterados y formen un patrón de apoyo sistemático al terrorismo con idoneidad para incitar. Un like aislado es insuficiente. Sin embargo, si recibes citación, contacta abogado especializado para valorar tu caso.',
    category: 'Terrorismo',
    blogSlug: 'enaltecimiento-terrorismo-redes-sociales-defensa',
    keywords: ['like terrorismo', 'retweet enaltecimiento']
  },
  {
    id: 'tedh-enaltecimiento-españa',
    question: '¿Qué dice el TEDH sobre enaltecimiento en España?',
    answer: 'El TEDH ha condenado a España en múltiples casos: Stern Taulats (2020) - tuits y performance artística protegidos, Strawberry/Pablo Hasél (2022) - letras de rap protegidas. Doctrina: solo incitación directa a violencia puede castigarse, expresiones ofensivas están protegidas, contexto es crucial. Esta jurisprudencia es vinculante para España.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-libertad-expresion-limite-legal',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['TEDH enaltecimiento', 'Stern Taulats', 'caso Strawberry']
  },
  {
    id: 'compartir-noticia-terrorismo',
    question: '¿Qué pasa si comparto una noticia sobre terrorismo?',
    answer: 'Compartir noticias de medios de comunicación sobre terrorismo NO es delito. Es información legítima. Solo si añades comentarios que glorifiquen el acto o llamen a la violencia podría investigarse. Compartir sin comentar o con crítica al terrorismo está protegido por libertad de información.',
    category: 'Terrorismo',
    blogSlug: 'enaltecimiento-terrorismo-redes-sociales-defensa',
    keywords: ['compartir noticia terrorismo', 'retweet noticia']
  },
  
  // ===== CAPTACIÓN YIHADISTA =====
  {
    id: 'que-es-captacion-yihadista',
    question: '¿Qué es la captación yihadista?',
    answer: 'La captación yihadista (art. 575 CP) es adoctrinar o reclutar personas para que se incorporen a organización terrorista o cometan delitos de terrorismo. Pena: 2-5 años. Requiere: conducta activa de captación, intención de incorporar al terrorismo, idoneidad para lograr captación. No es necesario que la captación tenga éxito.',
    category: 'Terrorismo',
    blogSlug: 'captacion-adoctrinamiento-yihadista-internet',
    lawyerSlug: 'mounir-elyemlahy-chouati',
    keywords: ['captación yihadista', 'qué es captación', 'artículo 575']
  },
  {
    id: 'pena-captacion-terrorista',
    question: '¿Cuál es la pena por captación terrorista?',
    answer: 'La pena por captación terrorista es de 2 a 5 años de prisión, más posible inhabilitación especial. Si las víctimas son menores de edad (art. 579 CP), la pena puede agravarse hasta en grado máximo, llegando a 8 años de prisión. También se aplica inhabilitación para trabajar con menores.',
    category: 'Terrorismo',
    blogSlug: 'captacion-adoctrinamiento-yihadista-internet',
    keywords: ['pena captación', 'años prisión captación terrorista']
  },
  {
    id: 'acusar-videos-religiosos',
    question: '¿Me pueden acusar por enviar vídeos religiosos?',
    answer: 'Enviar vídeos religiosos NO es delito. El delito de captación requiere contenido específicamente yihadista o terrorista, con intención de adoctrinar para el terrorismo. Vídeos sobre islam, predicaciones religiosas o contenido cultural están protegidos por libertad religiosa. Solo si el contenido llama a la yihad violenta y se envía con intención de captar, podría investigarse.',
    category: 'Terrorismo',
    blogSlug: 'captacion-adoctrinamiento-yihadista-internet',
    keywords: ['vídeos religiosos', 'captación islam', 'libertad religiosa']
  },
  {
    id: 'policia-demuestra-captacion',
    question: '¿Cómo demuestra la policía que hubo captación?',
    answer: 'La Policía analiza: mensajes enviados con contenido yihadista, frecuencia y contexto de las comunicaciones, respuestas de la persona contactada, existencia de relación previa, evolución de las conversaciones hacia radicalización, y actos posteriores (viajes, donaciones). La defensa puede cuestionar que se trate de meras conversaciones ideológicas sin intención de captar.',
    category: 'Terrorismo',
    blogSlug: 'captacion-adoctrinamiento-yihadista-internet',
    keywords: ['pruebas captación', 'cómo demuestran captación']
  },
  {
    id: 'diferencia-captacion-autoadoctrinamiento',
    question: '¿Qué diferencia hay entre captación y autoadoctrinamiento?',
    answer: 'CAPTACIÓN (art. 575): adoctrinar a OTROS, conducta activa dirigida a terceros, pena 2-5 años. AUTOADOCTRINAMIENTO (art. 575.2): radicalizarse UNO MISMO, consumir contenido radical sin difundir, pena 2-5 años solo si se combina con preparación de actos. La diferencia está en si hay conducta dirigida a otra persona o es consumo propio.',
    category: 'Terrorismo',
    blogSlug: 'captacion-adoctrinamiento-yihadista-internet',
    keywords: ['diferencia captación autoadoctrinamiento', 'captación vs autoadoctrinamiento']
  },
  {
    id: 'monitoriza-policia-whatsapp',
    question: '¿Monitoriza la policía WhatsApp y Telegram?',
    answer: 'La Policía NO puede acceder a WhatsApp o Telegram sin orden judicial. Estas apps usan cifrado de extremo a extremo. Sin embargo, con autorización del Juez de la Audiencia Nacional, pueden: intervenir comunicaciones, solicitar metadatos a las empresas, o usar infiltrados en grupos. Nunca sin control judicial.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-internet-redes-sociales-limites',
    keywords: ['policía WhatsApp', 'monitorización Telegram']
  },
  {
    id: 'menor-sin-saber',
    question: '¿Qué pasa si capté a un menor sin saber su edad?',
    answer: 'El desconocimiento de la edad puede ser defensa. Debes probar: no había forma de saber que era menor (perfil online no indicaba edad), no preguntaste porque no había sospecha, conversación no sugería minoría de edad. Sin embargo, si había indicios obvios y no verificaste, es más difícil. El art. 579 CP agrava la pena con menores, pero requiere al menos dolo eventual sobre la edad.',
    category: 'Terrorismo',
    blogSlug: 'captacion-adoctrinamiento-yihadista-internet',
    keywords: ['captar menor sin saber', 'desconocimiento edad']
  },
  
  // ===== AUTOADOCTRINAMIENTO =====
  {
    id: 'que-es-autoadoctrinamiento',
    question: '¿Qué es el autoadoctrinamiento terrorista?',
    answer: 'El autoadoctrinamiento (art. 575.2 CP) es tener o adquirir documentos idóneos para capacitación en técnicas terroristas o fabricación de explosivos/armas. Pena: 2-5 años. Conocido como "lobo solitario". No basta tener el material: debe probarse intención de usarlo con fines terroristas. La mera posesión sin actos preparatorios es defendible.',
    category: 'Terrorismo',
    blogSlug: 'autoadoctrinamiento-terrorista-defensa-legal',
    lawyerSlug: 'diego-cardona-valero',
    keywords: ['autoadoctrinamiento terrorista', 'lobo solitario', 'artículo 575.2']
  },
  {
    id: 'delito-ver-videos-yihadistas',
    question: '¿Es delito ver vídeos de propaganda yihadista?',
    answer: 'Ver vídeos yihadistas NO es delito automático. El delito requiere: posesión/adquisición de material, contenido idóneo para capacitación terrorista, y FINALIDAD terrorista (clave). Ver por curiosidad, investigación académica, trabajo periodístico o interés informativo NO es punible. Solo si hay intención de usarlo para terrorismo y actos preparatorios concretos.',
    category: 'Terrorismo',
    blogSlug: 'autoadoctrinamiento-terrorista-defensa-legal',
    keywords: ['ver vídeos yihadistas delito', 'propaganda ISIS delito']
  },
  {
    id: 'que-es-lobo-solitario',
    question: '¿Qué es un "lobo solitario" en terrorismo?',
    answer: 'Lobo solitario es un individuo que comete o planea actos terroristas sin pertenecer a organización terrorista. Se radicaliza online consumiendo propaganda yihadista y actúa por su cuenta. Jurídicamente puede ser acusado de: terrorismo individual (art. 575.2) por autoadoctrinamiento, tentativa si prepara atentado, o delito consumado si lo ejecuta. Penas: 2-30 años.',
    category: 'Terrorismo',
    blogSlug: 'autoadoctrinamiento-terrorista-defensa-legal',
    keywords: ['lobo solitario', 'terrorismo individual', 'qué es lobo solitario']
  },
  {
    id: 'material-yihadista-curiosidad',
    question: '¿Puedo tener material yihadista por curiosidad académica?',
    answer: 'SÍ. La investigación académica, trabajo periodístico o interés informativo son defensas legítimas. El delito requiere FINALIDAD terrorista. Si eres estudiante, investigador o periodista y tienes material por razones profesionales/académicas, NO hay delito. Debes poder acreditar: matrícula universitaria, publicaciones académicas, trabajos de investigación, o actividad periodística.',
    category: 'Terrorismo',
    blogSlug: 'autoadoctrinamiento-terrorista-defensa-legal',
    keywords: ['material yihadista curiosidad', 'investigación académica terrorismo']
  },
  {
    id: 'pensar-radical-delito',
    question: '¿Pensar como radical es delito en España?',
    answer: 'NO. La Constitución (art. 16) garantiza libertad ideológica y religiosa. El derecho penal NO puede castigar pensamientos, solo ACTOS. Simpatizar con causas radicales, tener ideas extremistas o incluso apoyar verbalmente a ISIS NO son delitos si no se traducen en actos materiales. El Tribunal Constitucional es claro: en democracia no se persigue por ideas.',
    category: 'Terrorismo',
    blogSlug: 'autoadoctrinamiento-terrorista-defensa-legal',
    keywords: ['pensar radical delito', 'libertad pensamiento', 'ideas radicales']
  },
  {
    id: 'buscar-google-bomba',
    question: '¿Pueden detenerme por buscar en Google "cómo hacer una bomba"?',
    answer: 'Una búsqueda aislada NO es delito automático. El delito requiere: posesión de material + finalidad terrorista + actos preparatorios. Búsquedas por curiosidad, trabajo académico o periodístico NO son punibles. Solo si se combina con más elementos (descargas, compra de materiales, vigilancia de objetivos) podría investigarse como autoadoctrinamiento.',
    category: 'Terrorismo',
    blogSlug: 'autoadoctrinamiento-terrorista-defensa-legal',
    keywords: ['buscar google bomba', 'búsquedas internet delito']
  },
  {
    id: 'descargar-manuales-isis',
    question: '¿Descargar manuales de ISIS es delito?',
    answer: 'Depende del contexto y finalidad. Es delito (art. 575.2 CP) si: descargas con intención de usarlo para terrorismo, tienes otros elementos (búsquedas de objetivos, compra materiales), no hay justificación legítima. NO es delito si: investigación académica, trabajo periodístico, descarga accidental, finalidad informativa. Clave: probar ausencia de intención terrorista. Guarda evidencia de tu finalidad legítima.',
    category: 'Terrorismo',
    blogSlug: 'autoadoctrinamiento-terrorista-defensa-legal',
    keywords: ['descargar manuales ISIS', 'material ISIS delito']
  },
  
  // ===== FINANCIACIÓN TERRORISMO =====
  {
    id: 'que-es-financiacion-terrorismo',
    question: '¿Qué es la financiación del terrorismo?',
    answer: 'La financiación del terrorismo (art. 576 CP) es proveer, recolectar o facilitar recursos económicos para que se usen en delitos de terrorismo. Pena: 5-15 años. Puede ser directa (a terroristas) o indirecta (a ONGs que financian terrorismo). No es necesario que el dinero se use efectivamente: basta la intención de que se destine a terrorismo.',
    category: 'Terrorismo',
    blogSlug: 'financiacion-terrorismo-tipos-penas-defensa',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['financiación terrorismo', 'qué es financiar terrorismo', 'artículo 576']
  },
  {
    id: 'pena-financiar-terrorismo',
    question: '¿Cuántos años de cárcel por financiar terrorismo?',
    answer: 'La pena base es de 5 a 15 años de prisión. Se agrava si: la cantidad es notoria (puede llegar a 18 años), se utiliza persona jurídica/empresa (hasta 20 años), o el responsable pertenece a organización terrorista. Además: multa hasta el triple del valor, decomiso de bienes, e inhabilitación para administrar bienes ajenos.',
    category: 'Terrorismo',
    blogSlug: 'financiacion-terrorismo-tipos-penas-defensa',
    keywords: ['pena financiación terrorismo', 'años cárcel financiar terrorismo']
  },
  {
    id: 'donar-ongs-conflicto',
    question: '¿Puedo donar a ONGs en zonas de conflicto?',
    answer: 'Sí, siempre que sean ONGs legítimas sin vínculos terroristas. Si donas de buena fe a organización humanitaria que resultó tener vínculos con terrorismo y lo desconocías, NO hay delito (falta dolo). La defensa debe probar: legitimidad aparente de la ONG, finalidad humanitaria, ausencia de contactos con terroristas, y desconocimiento objetivo del destino terrorista.',
    category: 'Terrorismo',
    blogSlug: 'financiacion-terrorismo-tipos-penas-defensa',
    keywords: ['donar ONG zona conflicto', 'donación Siria delito']
  },
  {
    id: 'criptomonedas-terrorismo',
    question: '¿Las criptomonedas se pueden rastrear en casos de terrorismo?',
    answer: 'SÍ. Aunque Bitcoin y otras criptomonedas ofrecen cierto anonimato, NO son anónimas totalmente. La Policía y peritos informáticos pueden: rastrear transacciones en blockchain, identificar wallets vinculadas a terrorismo, analizar patrones de transferencias, y cooperar internacionalmente. La defensa puede alegar: desconocimiento del destino, transacciones legítimas, hackeo de wallet.',
    category: 'Terrorismo',
    blogSlug: 'financiacion-terrorismo-tipos-penas-defensa',
    keywords: ['criptomonedas terrorismo', 'Bitcoin terrorismo', 'rastrear criptomonedas']
  },
  {
    id: 'enviar-dinero-sin-saber',
    question: '¿Qué pasa si envié dinero sin saber que era para terrorismo?',
    answer: 'Si puedes probar que NO sabías ni podías saber que el dinero se destinaría a terrorismo, NO hay delito (falta dolo). Situaciones defendibles: envío a familiares en zona de conflicto, donación a ONG aparentemente legítima, inversión en negocio que financiaba terrorismo. La carga de probar que SÍ sabías corresponde a la acusación.',
    category: 'Terrorismo',
    blogSlug: 'financiacion-terrorismo-tipos-penas-defensa',
    keywords: ['enviar dinero sin saber', 'desconocimiento financiación']
  },
  {
    id: 'cantidad-financiacion-terrorismo',
    question: '¿A partir de qué cantidad se considera financiación del terrorismo?',
    answer: 'No hay cantidad mínima establecida. Cualquier cantidad puede ser financiación si hay dolo (conocimiento del destino terrorista). Importa más: el destino del dinero, tu conocimiento de la finalidad, pruebas de la intención. Una donación de €50 con conocimiento puede ser delito. Una de €10,000 sin conocimiento, no. "Notoria importancia" (agravante) se valora caso por caso.',
    category: 'Terrorismo',
    blogSlug: 'financiacion-terrorismo-tipos-penas-defensa',
    keywords: ['cantidad financiación terrorismo', 'cuánto dinero financiación']
  },
  {
    id: 'donar-ong-permitido',
    question: '¿Puedo donar a cualquier ONG humanitaria?',
    answer: 'Puedes donar a ONGs legítimas y reconocidas. Precauciones: verifica que la ONG esté registrada oficialmente, comprueba que no aparece en listas de organizaciones vinculadas a terrorismo (UE, ONU, GAFI), pide recibo oficial, investiga sus actividades. Si donas de buena fe y luego resulta tener vínculos terroristas que desconocías, es defendible. Guarda toda la documentación.',
    category: 'Terrorismo',
    blogSlug: 'financiacion-terrorismo-tipos-penas-defensa',
    keywords: ['donar ONG seguro', 'ONG permitidas']
  },
  
  // ===== ORGANIZACIÓN TERRORISTA =====
  {
    id: 'pertenecer-organizacion-terrorista',
    question: '¿Qué significa pertenecer a una organización terrorista?',
    answer: 'Pertenecer (art. 572 CP, 6-15 años) es integrarse activamente en organización con finalidad terrorista. Requiere: participación en reuniones, aceptación de órdenes, realización de funciones dentro del grupo, y voluntad de contribuir a sus fines. No basta con simpatizar: debe haber integración EFECTIVA y actos materiales de contribución.',
    category: 'Terrorismo',
    blogSlug: 'pertenencia-organizacion-terrorista-defensa',
    lawyerSlug: 'diego-cardona-valero',
    keywords: ['pertenecer organización terrorista', 'pertenencia ISIS']
  },
  {
    id: 'simpatizar-isis-delito',
    question: '¿Simpatizar con ISIS es delito?',
    answer: 'NO. Simpatizar ideológicamente, expresar apoyo verbal o tener ideas radicales NO son delitos. Solo son punibles: PERTENENCIA (integrarse en la organización), COLABORACIÓN (ayudar materialmente), o ENALTECIMIENTO (glorificar públicamente). La libertad de pensamiento está garantizada. Solo actos materiales pueden ser delito.',
    category: 'Terrorismo',
    blogSlug: 'pertenencia-organizacion-terrorista-defensa',
    keywords: ['simpatizar ISIS delito', 'apoyar ISIS']
  },
  {
    id: 'diferencia-pertenencia-colaboracion',
    question: '¿Cuál es la diferencia entre pertenencia y colaboración con terrorismo?',
    answer: 'PERTENENCIA (art. 572, 6-15 años): integrarse en la organización, ser miembro activo. COLABORACIÓN (art. 577, 5-10 años): ayuda puntual sin integrarse (ocultar miembros, facilitar medios, proporcionar información). SIMPATÍA: compartir ideología sin actos, NO ES DELITO. La frontera es la integración vs ayuda externa.',
    category: 'Terrorismo',
    blogSlug: 'pertenencia-organizacion-terrorista-defensa',
    keywords: ['diferencia pertenencia colaboración', 'pertenencia vs colaboración']
  },
  {
    id: 'viajar-siria-delito',
    question: '¿Viajar a Siria o Irak es delito?',
    answer: 'Viajar NO es delito per se. El delito depende del PROPÓSITO: viajar como turista, periodista o por razones humanitarias es legal. Es delito si viajas para: unirte a ISIS/organización terrorista, recibir entrenamiento militar, participar en conflicto armado con grupo terrorista. La Fiscalía debe probar la finalidad terrorista del viaje.',
    category: 'Terrorismo',
    blogSlug: 'pertenencia-organizacion-terrorista-defensa',
    keywords: ['viajar Siria delito', 'viajar Irak terrorismo']
  },
  {
    id: 'mezquita-radical-pertenencia',
    question: '¿Ir a una mezquita radical puede considerarse pertenencia a organización?',
    answer: 'NO. Asistir a mezquita es libertad religiosa (art. 16 CE) constitucionalmente protegida. Para que haya pertenencia a organización terrorista se requieren actos materiales de integración: participar en reuniones de planificación, aceptar órdenes, realizar funciones dentro del grupo, actos de financiación o apoyo material. Mera asistencia a rezos NO es pertenencia.',
    category: 'Terrorismo',
    blogSlug: 'pertenencia-organizacion-terrorista-defensa',
    keywords: ['ir mezquita radical delito', 'mezquita yihadista']
  },
  {
    id: 'bandera-isis-casa',
    question: '¿Tener bandera de ISIS en casa es pertenencia a organización?',
    answer: 'Por sí sola, NO. La mera posesión de símbolos no acredita pertenencia. Puede ser prueba JUNTO CON otros elementos: viajes a zona conflicto, transferencias de dinero, comunicaciones con miembros, participación en actividades. La Fiscalía debe probar integración activa. Tener bandera puede investigarse como indicio, pero requiere más pruebas para condena.',
    category: 'Terrorismo',
    blogSlug: 'pertenencia-organizacion-terrorista-defensa',
    keywords: ['bandera ISIS delito', 'símbolos terroristas casa']
  },
  {
    id: 'cuantas-personas-organizacion',
    question: '¿Cuántas personas forman una organización terrorista?',
    answer: 'Mínimo 2 personas según jurisprudencia. La ley no especifica número exacto. Requisitos: pluralidad de personas (2+), permanencia en el tiempo, reparto de funciones (aunque sea mínimo), finalidad terrorista común, medios para ejecutar planes. Puede ser: célula de 3 personas que planea atentado, red de 5 que reclutan, o grupo grande estructurado. La Fiscalía tiende a calificar grupos pequeños como "organización".',
    category: 'Terrorismo',
    blogSlug: 'pertenencia-organizacion-terrorista-defensa',
    keywords: ['cuántas personas organización', 'mínimo organización terrorista']
  },
  {
    id: 'abandonar-organizacion',
    question: '¿Puedo alegar que abandoné la organización terrorista?',
    answer: 'SÍ, es atenuante específico. Requisitos: abandono voluntario y activo (no por detención), antes de que se cometan delitos, comunicación a autoridades (opcional pero refuerza), no participación en actos posteriores. Puede reducir pena significativamente o incluso eximir si se colabora activamente con la justicia. Debe probarse el abandono real, no mera inactividad temporal.',
    category: 'Terrorismo',
    blogSlug: 'pertenencia-organizacion-terrorista-defensa',
    keywords: ['abandonar organización terrorista', 'atenuante abandono']
  },
  
  // ===== DERECHOS FUNDAMENTALES =====
  {
    id: 'derechos-acusado-terrorismo',
    question: '¿Pierdo mis derechos si me acusan de terrorismo?',
    answer: 'NO. Mantienes TODOS tus derechos fundamentales: asistencia letrada, presunción de inocencia, no declarar contra ti mismo, intérprete, acceso al expediente (salvo secreto), tutela judicial efectiva, recurrir resoluciones. Aunque hay restricciones posibles (incomunicación, secreto de sumario), están limitadas por el TC y TEDH.',
    category: 'Terrorismo',
    blogSlug: 'derechos-fundamentales-procedimientos-terrorismo',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['derechos acusado terrorismo', 'garantías terrorismo']
  },
  {
    id: 'que-es-incomunicacion',
    question: '¿Qué es la incomunicación y cuánto dura?',
    answer: 'La incomunicación impide al detenido comunicarse con terceros (excepto su abogado). Solo en terrorismo y crimen organizado. Duración: máximo 5 días prorrogables otros 5 (total 10 días). Durante incomunicación: no eliges abogado, no avisas a familia, no te reconoce médico de tu elección. El TC limita su uso: debe ser proporcional y excepcional.',
    category: 'Terrorismo',
    blogSlug: 'derechos-fundamentales-procedimientos-terrorismo',
    keywords: ['incomunicación', 'qué es incomunicación', 'cuánto dura incomunicación']
  },
  {
    id: 'elegir-abogado-incomunicado',
    question: '¿Puedo elegir a mi abogado si estoy incomunicado?',
    answer: 'NO durante la incomunicación. Durante ese periodo (máximo 5+5 días) solo puedes tener el abogado designado por el turno. Una vez levantada la incomunicación, puedes elegir abogado de confianza. La incomunicación es medida excepcional que requiere autorización judicial motivada.',
    category: 'Terrorismo',
    blogSlug: 'derechos-fundamentales-procedimientos-terrorismo',
    keywords: ['elegir abogado incomunicación', 'abogado turno']
  },
  {
    id: 'secreto-sumario-terrorismo',
    question: '¿Qué es el secreto de sumario en casos de terrorismo?',
    answer: 'El secreto de sumario impide conocer el contenido de la investigación. En terrorismo puede durar hasta 1 mes prorrogable. Significa que no sabrás qué pruebas hay hasta que se levante. Límites: debe estar motivado, no puede ser indefinido, se levanta antes de declarar, el abogado tiene derecho a conocer diligencias esenciales para la defensa.',
    category: 'Terrorismo',
    blogSlug: 'derechos-fundamentales-procedimientos-terrorismo',
    keywords: ['secreto sumario', 'qué es secreto de sumario']
  },
  {
    id: 'prision-preventiva-legal',
    question: '¿Cuánto tiempo de prisión preventiva es legal en terrorismo?',
    answer: 'Prisión preventiva: inicialmente hasta 2 años, prorrogable otros 2 años (máximo 4 años en instrucción). Si la pena previsible es menor de 2 años, no puede haber prisión preventiva. Alternativas: libertad con fianza, retirada pasaporte, comparecencias periódicas, prohibición salir de España. Obtener libertad requiere argumentación sólida sobre arraigo y falta de peligrosidad.',
    category: 'Terrorismo',
    blogSlug: 'derechos-fundamentales-procedimientos-terrorismo',
    keywords: ['prisión preventiva terrorismo', 'cuánto dura prisión preventiva']
  },
  {
    id: 'interprete-idioma',
    question: '¿Tengo derecho a intérprete en mi idioma si me acusan de terrorismo?',
    answer: 'SÍ, es un derecho fundamental. Si no hablas español, tienes derecho a intérprete en todas las fases: detención, declaraciones, juicio, lectura de sentencia. El intérprete debe ser oficial y jurado. En STANS ABOGADOS ofrecemos atención en 5 idiomas: español, inglés, árabe, francés e italiano.',
    category: 'Terrorismo',
    blogSlug: 'derechos-fundamentales-procedimientos-terrorismo',
    lawyerSlug: 'mounir-elyemlahy-chouati',
    keywords: ['derecho intérprete', 'abogado árabe', 'intérprete árabe']
  },
  {
    id: 'recurrir-tedh',
    question: '¿Cómo recurrir al TEDH si me condenan por terrorismo en España?',
    answer: 'Para recurrir al Tribunal Europeo de Derechos Humanos (TEDH) en Estrasburgo debes: 1) Agotar todos los recursos en España (apelación, casación, amparo), 2) Presentar demanda dentro de 6 meses desde sentencia definitiva, 3) Alegar vulneración de derechos CEDH. España ha sido condenada en casos de enaltecimiento. Requiere abogado especializado.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-libertad-expresion-limite-legal',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['recurrir TEDH', 'tribunal europeo derechos humanos', 'Estrasburgo']
  },
  {
    id: 'indemnizacion-prision-indebida',
    question: '¿Puedo reclamar indemnización por prisión preventiva indebida?',
    answer: 'SÍ. Si eres absuelto o se sobresee tu causa tras sufrir prisión preventiva, puedes reclamar indemnización al Estado. Requisitos: haber estado en prisión preventiva, absolución o sobreseimiento firme, no haber provocado la situación. La cuantía se calcula por días de prisión indebida. Plazo: 1 año desde la absolución.',
    category: 'Terrorismo',
    blogSlug: 'derechos-fundamentales-procedimientos-terrorismo',
    keywords: ['indemnización prisión preventiva', 'compensación prisión indebida']
  },
  
  // ===== LIBERTAD DE EXPRESIÓN =====
  {
    id: 'limite-expresion-terrorismo',
    question: '¿Dónde está el límite entre libertad de expresión y terrorismo?',
    answer: 'El límite es la incitación DIRECTA y REAL a la violencia. Protegido: crítica política, expresiones artísticas, humor, sátira, opiniones polémicas, debate académico. NO protegido: glorificar atentados concretos, llamar a cometer atentados, humillar víctimas identificables, difundir propaganda oficial terrorista con fin de captación. El TEDH exige que el peligro sea claro y presente.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-libertad-expresion-limite-legal',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['límite libertad expresión', 'libertad expresión vs terrorismo']
  },
  {
    id: 'caso-strawberry-hasel',
    question: '¿Qué pasó en el caso Strawberry (Pablo Hasél)?',
    answer: 'En 2022, el TEDH condenó a España por encarcelar al rapero Pablo Hasél (Strawberry) por letras de canciones. Estableció que: la mera glorificación de terrorismo pasado sin llamada a violencia futura NO puede ser delito, las expresiones artísticas están especialmente protegidas, y solo la incitación directa justifica restricción penal. Sentencia vinculante para España.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-libertad-expresion-limite-legal',
    keywords: ['caso Strawberry', 'Pablo Hasél', 'TEDH rapero']
  },
  {
    id: 'criticar-gobierno-terrorismo',
    question: '¿Criticar al gobierno puede considerarse terrorismo?',
    answer: 'NO. La crítica política está máximamente protegida por la libertad de expresión (art. 20 CE). Puedes: criticar políticas antiterroristas, cuestionar intervenciones militares, denunciar abusos policiales, expresar desacuerdo con gobierno. Solo si la crítica se combina con: llamadas directas a violencia, instrucciones para atentar, o apología de actos terroristas concretos, podría investigarse. La mera crítica dura NO es delito.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-libertad-expresion-limite-legal',
    keywords: ['criticar gobierno terrorismo', 'crítica política delito']
  },
  {
    id: 'españa-condenada-tedh',
    question: '¿España ha sido condenada por limitar libertad de expresión?',
    answer: 'SÍ, múltiples veces por el TEDH: Caso Stern Taulats (2020) - tuits y performance protegidos, Caso Strawberry/Pablo Hasél (2022) - letras de rap protegidas, Caso Otegi (2011) - expresiones políticas protegidas. El TEDH ha establecido que España aplica el delito de enaltecimiento de forma excesivamente amplia, vulnerando el artículo 10 CEDH (libertad de expresión). Estas sentencias son vinculantes.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-libertad-expresion-limite-legal',
    keywords: ['España condenada TEDH', 'TEDH libertad expresión']
  },
  {
    id: 'expresiones-privadas-protegidas',
    question: '¿Las expresiones en contexto privado están protegidas?',
    answer: 'SÍ, generalmente. Expresiones en: conversaciones privadas, mensajes directos no compartidos, grupos cerrados pequeños (familia, amigos), están más protegidas que expresiones públicas. Sin embargo, si la conversación privada incluye planificación real de actos terroristas, puede ser prueba. Diferencia clave: opinión privada (protegida) vs conspiración/planificación (punible).',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-libertad-expresion-limite-legal',
    keywords: ['expresiones privadas protegidas', 'mensajes privados delito']
  },
  
  // ===== TERRORISMO INTERNET =====
  {
    id: 'instagram-tiktok-monitorizados',
    question: '¿Instagram y TikTok también se monitorizan por terrorismo?',
    answer: 'SÍ. La Policía monitoriza TODAS las redes sociales: Instagram, TikTok, Facebook, Twitter/X, Telegram, YouTube, etc. Usan: rastreo de hashtags, análisis de metadatos, colaboración con las plataformas, e inteligencia artificial. TikTok es especialmente vigilado por contenido viral. Cualquier red social es susceptible de monitorización si hay indicios de actividad terrorista.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-internet-redes-sociales-limites',
    keywords: ['Instagram monitorizado', 'TikTok terrorismo', 'policía redes sociales']
  },
  {
    id: 'alegar-hackeo-cuenta',
    question: '¿Puedo alegar que hackearon mi cuenta de redes sociales?',
    answer: 'SÍ, es una defensa posible pero requiere pruebas. Debes acreditar: denuncia por hackeo presentada antes de la investigación, peritaje informático que demuestre acceso no autorizado, IP diferentes a las habituales, mensajes inconsistentes con tu historial, cambios de contraseña no realizados por ti. Sin pruebas sólidas, es difícil de sostener. La Fiscalía verificará si es alegación creíble o excusa.',
    category: 'Terrorismo',
    blogSlug: 'terrorismo-internet-redes-sociales-limites',
    keywords: ['hackeo cuenta defensa', 'cuenta hackeada terrorismo']
  },
  
  // ===== EXTRADICIONES =====
  {
    id: 'que-es-extradicion',
    question: '¿Qué es una extradición?',
    answer: 'La extradición es el procedimiento por el cual un país entrega a una persona acusada o condenada a otro país para ser juzgada o cumplir condena. En España, la Audiencia Nacional decide sobre extradiciones. Existen dos tipos: pasiva (otro país pide a España) y activa (España pide a otro país). Rigen tratados internacionales y la OEDE en la UE.',
    category: 'Extradición',
    blogSlug: 'procedimientos-extradicion-espana',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['qué es extradición', 'extradición definición']
  },
  {
    id: 'evitar-extradicion',
    question: '¿Puedo evitar ser extraditado?',
    answer: 'Sí, existen causas para oponerse: 1) Riesgo de trato degradante en país solicitante, 2) Delito político, 3) Prescripción del delito, 4) Doble incriminación (no es delito en ambos países), 5) Ciudadanía española (limitaciones), 6) Non bis in idem (ya juzgado). Requiere defensa técnica especializada. En STANS tenemos experiencia en extradiciones.',
    category: 'Extradición',
    blogSlug: 'procedimientos-extradicion-espana',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['evitar extradición', 'oposición extradición']
  },
  {
    id: 'duracion-extradicion',
    question: '¿Cuánto tarda un proceso de extradición?',
    answer: 'OEDE (Unión Europea): 60-90 días. Extradición internacional: 6-18 meses. Los plazos dependen de: complejidad del caso, país solicitante, recursos presentados, prisión preventiva o libertad provisional. La Audiencia Nacional debe resolver en plazos establecidos por tratados internacionales. Pueden solicitarse prórrogas en casos complejos.',
    category: 'Extradición',
    blogSlug: 'procedimientos-extradicion-espana',
    keywords: ['cuánto tarda extradición', 'plazos extradición']
  },
  {
    id: 'que-es-oede',
    question: '¿Qué es la OEDE?',
    answer: 'La Orden Europea de Detención y Entrega (OEDE) es un procedimiento simplificado de extradición entre países de la UE. Más rápido que extradición tradicional: plazos de 60-90 días. Se basa en reconocimiento mutuo de resoluciones judiciales. Menos causas de denegación. Aplicable a delitos con pena superior a 1 año. Regulada por Decisión Marco 2002/584/JAI.',
    category: 'Extradición',
    blogSlug: 'procedimientos-extradicion-espana',
    keywords: ['qué es OEDE', 'orden europea detención']
  },
  {
    id: 'extradicion-marruecos',
    question: '¿Cómo funciona la extradición entre España y Marruecos?',
    answer: 'España y Marruecos tienen tratado bilateral de extradición. Procedimiento: solicitud formal, audiencia del reclamado ante Audiencia Nacional, decisión judicial, autorización gubernamental. Particularidades: posible denegación si delito político, requisito de doble incriminación, garantías de proceso justo. Nuestro abogado Mounir Elyemlahy es especialista en extradiciones España-Marruecos.',
    category: 'Extradición',
    blogSlug: 'procedimientos-extradicion-espana',
    lawyerSlug: 'mounir-elyemlahy-chouati',
    keywords: ['extradición Marruecos', 'extradición España Marruecos', 'abogado extradición Marruecos']
  },
  {
    id: 'extradicion-sin-tratado',
    question: '¿Pueden extraditarme a un país sin tratado con España?',
    answer: 'SÍ, mediante reciprocidad. Aunque no haya tratado bilateral, la extradición puede concederse si el país solicitante garantiza reciprocidad (extraditará a españoles en futuro). Requisitos más estrictos: garantías de proceso justo, pena no superior a cadena perpetua, delito también punible en España. La Audiencia Nacional valora caso por caso.',
    category: 'Extradición',
    blogSlug: 'tipos-extradicion-espana',
    keywords: ['extradición sin tratado', 'reciprocidad extradición']
  },
  {
    id: 'extradicion-español',
    question: '¿Pueden extraditar a un ciudadano español?',
    answer: 'La Constitución Española (art. 13.3) prohíbe la extradición de ciudadanos españoles, SALVO por delitos de terrorismo según tratados internacionales. Para la OEDE (UE), sí es posible extraditar españoles. Importante: tener nacionalidad española es defensa en extradiciones extracomunitarias, pero NO en OEDE.',
    category: 'Extradición',
    blogSlug: 'requisitos-extradicion-espana',
    keywords: ['extraditar español', 'extradición ciudadano español']
  },
  {
    id: 'defenderme-extradicion',
    question: '¿Cómo puedo defenderme en un proceso de extradición?',
    answer: 'Defensas posibles: 1) Delito político (no extraditable), 2) Riesgo de tortura/trato degradante, 3) Non bis in idem (ya juzgado), 4) Prescripción, 5) Ciudadanía española (extracomunitaria), 6) Garantías insuficientes en país solicitante, 7) Proporcionalidad (delito leve). Cada defensa requiere prueba documental. Abogado especializado es fundamental.',
    category: 'Extradición',
    blogSlug: 'recursos-contra-extradicion',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['defensa extradición', 'oponerse extradición']
  },
  {
    id: 'audiencia-extradicion',
    question: '¿Qué pasa en la audiencia de extradición?',
    answer: 'En la audiencia ante la Audiencia Nacional: 1) Se te informa de la solicitud de extradición, 2) Puedes alegar causas de denegación, 3) Tu abogado expone defensas, 4) Fiscalía informa, 5) Juez resuelve en días/semanas. Derechos: asistencia letrada, intérprete, no declarar contra ti, aportar pruebas. La decisión judicial puede recurrirse en apelación.',
    category: 'Extradición',
    blogSlug: 'audiencia-extradicion-espana',
    keywords: ['audiencia extradición', 'qué pasa audiencia extradición']
  },
  {
    id: 'libertad-extradicion',
    question: '¿Puedo estar en libertad durante el proceso de extradición?',
    answer: 'Depende. Opciones: 1) Prisión preventiva (frecuente por riesgo de fuga), 2) Libertad provisional con medidas (fianza elevada, retirada pasaporte, comparecencias), 3) Libertad sin medidas (excepcional). Factores: gravedad delito, arraigo en España, riesgo de fuga, país solicitante. En OEDE, prisión preventiva es muy habitual.',
    category: 'Extradición',
    blogSlug: 'procedimientos-extradicion-espana',
    keywords: ['libertad extradición', 'prisión extradición']
  },
  
  // ===== DEFENSA URGENTE =====
  {
    id: 'que-hacer-si-me-detienen',
    question: '¿Qué hacer si me detienen?',
    answer: 'Si te detienen: 1) Mantén la calma, 2) NO resistas físicamente, 3) Pide identificación de los agentes, 4) Pregunta el motivo de la detención, 5) Solicita abogado INMEDIATAMENTE, 6) NO declares NADA sin abogado, 7) Pide llamar a familiar, 8) No firmes documentos sin leer. Contacta STANS ABOGADOS 24/7: +34 611 68 72 26.',
    category: 'Defensa Urgente',
    blogSlug: 'defensa-penal-urgente-guia-completa',
    keywords: ['qué hacer si me detienen', 'me han detenido qué hago']
  },
  {
    id: 'llamar-familia-detencion',
    question: '¿Puedo llamar a mi familia si me detienen?',
    answer: 'SÍ, es un derecho fundamental (art. 520 LECrim). Puedes comunicar tu detención a familiar o persona de tu elección. La policía debe facilitarlo sin dilaciones indebidas. Excepción: si estás incomunicado (solo en terrorismo/crimen organizado), no puedes avisar durante la incomunicación. En casos normales, derecho garantizado.',
    category: 'Defensa Urgente',
    blogSlug: 'derechos-inmediatos-detenido',
    keywords: ['llamar familia detenido', 'avisar familiar detención']
  },
  {
    id: 'declarar-comisaria',
    question: '¿Tengo que declarar en comisaría?',
    answer: 'NO estás obligado. Tienes derecho constitucional a NO declarar (art. 24 CE). Puedes: 1) No declarar absolutamente nada, 2) Declarar solo tu identidad, 3) Declarar sobre los hechos SI tu abogado lo aconseja. NUNCA declares sin abogado presente. Cualquier declaración puede usarse en tu contra. Ejercer el derecho a no declarar NO puede perjudicarte.',
    category: 'Defensa Urgente',
    blogSlug: 'primeros-pasos-comisaria',
    keywords: ['tengo que declarar comisaría', 'derecho no declarar']
  },
  {
    id: 'tiempo-maximo-detenido',
    question: '¿Cuánto tiempo puedo estar detenido sin ver al juez?',
    answer: 'Máximo 72 horas en delitos graves, 24 horas en delitos menos graves. Pasado ese tiempo debes ser: puesto en libertad, o llevado ante el juez (puesta a disposición judicial). Si te mantienen más tiempo es detención ilegal. Puedes solicitar habeas corpus. Contacta abogado urgente si superan los plazos.',
    category: 'Defensa Urgente',
    blogSlug: 'puesta-disposicion-judicial',
    keywords: ['cuánto tiempo detenido', 'máximo 72 horas']
  },
  {
    id: 'firmar-declaracion',
    question: '¿Debo firmar mi declaración en comisaría?',
    answer: 'SOLO si estás de acuerdo con lo escrito y tu abogado lo recomienda. Antes de firmar: 1) Lee TODO detenidamente, 2) Asegúrate de que refleja exactamente lo dicho, 3) Consulta con tu abogado, 4) Si hay errores, corrígelos ANTES de firmar, 5) Puedes negarte a firmar si no estás conforme. Nunca firmes sin leer.',
    category: 'Defensa Urgente',
    blogSlug: 'primeros-pasos-comisaria',
    keywords: ['firmar declaración', 'firmar en comisaría']
  },
  {
    id: 'puesta-disposicion-judicial',
    question: '¿Qué es la puesta a disposición judicial?',
    answer: 'Es cuando la policía te lleva ante el juez (en 24-72h desde detención). El juez decide: 1) Libertad sin medidas, 2) Libertad con medidas (comparecencias, fianza), 3) Prisión preventiva. Es el momento clave del procedimiento. Tu abogado debe estar presente, solicitar libertad y aportar arraigo. Preparación es crucial.',
    category: 'Defensa Urgente',
    blogSlug: 'puesta-disposicion-judicial',
    keywords: ['puesta disposición judicial', 'qué es puesta disposición']
  },
  
  // ===== DERECHOS FUNDAMENTALES =====
  {
    id: 'pueden-registrar-movil',
    question: '¿Pueden revisar mi móvil sin orden judicial?',
    answer: 'NO, salvo consentimiento expreso o situación de riesgo inminente. Para acceder al contenido de tu móvil se requiere autorización judicial específica. Pueden: requisar el móvil (no revisarlo), evitar que borres datos, solicitar PIN/huella (controvertido). NO pueden: leer mensajes, ver fotos, acceder a apps sin orden del juez. Si lo hacen sin autorización, prueba es ilegal.',
    category: 'Derechos Fundamentales',
    blogSlug: 'derechos-detenidos-garantias-procesales',
    keywords: ['revisar móvil sin orden', 'registro teléfono móvil']
  },
  {
    id: 'registro-domicilio-detencion',
    question: '¿Pueden registrar mi casa al detenerme?',
    answer: 'Para entrar en domicilio se requiere: consentimiento del titular, flagrante delito (delincuente perseguido entra en domicilio), o autorización judicial (la más común). Sin estos requisitos, la entrada es ilegal y las pruebas nulas. Si te detienen fuera de casa y quieren registrarla, tienen que pedir orden al juez salvo que consientas.',
    category: 'Derechos Fundamentales',
    blogSlug: 'registro-dependencias-detenido',
    keywords: ['registro domicilio', 'entrada casa sin orden']
  },
  {
    id: 'habeas-corpus-cuando',
    question: '¿Qué es el habeas corpus y cuándo solicitarlo?',
    answer: 'El habeas corpus es un procedimiento urgente para que un detenido sea llevado ante un juez inmediatamente si considera que su detención es ilegal. Cuándo solicitarlo: detención sin informar motivos, superados plazos legales (72h), condiciones inhumanas de detención, vulneración de derechos. Se presenta ante juez de guardia y debe resolverse en 24 horas.',
    category: 'Derechos Fundamentales',
    blogSlug: 'habeas-corpus-recurso-amparo',
    keywords: ['habeas corpus', 'qué es habeas corpus', 'cuándo solicitar habeas corpus']
  },
  {
    id: 'medidas-cautelares-terrorismo',
    question: '¿Qué medidas cautelares pueden imponerme en un caso de terrorismo?',
    answer: 'Medidas posibles: 1) Prisión preventiva (la más frecuente en terrorismo), 2) Libertad provisional con fianza, 3) Retirada de pasaporte, 4) Obligación de comparecer en juzgado periódicamente, 5) Prohibición de salir de España, 6) Alejamiento de víctimas/testigos, 7) Prohibición de comunicarse con coimputados. El juez decide según gravedad y circunstancias.',
    category: 'Terrorismo',
    blogSlug: 'medidas-cautelares-procesos-penales',
    keywords: ['medidas cautelares terrorismo', 'prisión preventiva']
  },
  {
    id: 'comunicar-familia-desde-prision',
    question: '¿Puedo comunicar con mi familia si estoy en prisión preventiva?',
    answer: 'SÍ. En prisión preventiva (no en comisaría) tienes derecho a: comunicaciones con familiares (vis a vis), llamadas telefónicas (con limitaciones), correspondencia escrita. Excepciones: si estás incomunicado (máximo 13 días), las comunicaciones pueden suspenderse temporalmente. Una vez en centro penitenciario, se restablecen progresivamente.',
    category: 'Derechos Fundamentales',
    blogSlug: 'comunicacion-familiares-detenido',
    keywords: ['comunicar familia prisión', 'vis a vis prisión preventiva']
  },
  {
    id: 'condiciones-calabozo',
    question: '¿Qué condiciones mínimas debe tener el calabozo?',
    answer: 'Mínimos legales: espacio 4m² por persona, ventilación adecuada, temperatura 15-25°C, luz natural o artificial suficiente, camastro/colchón, aseo, agua potable. Derechos: 3 comidas al día, medicamentos si necesitas, asistencia médica 24h. Si las condiciones son inhumanas, puede alegarse trato degradante (vulneración CEDH art. 3).',
    category: 'Derechos Fundamentales',
    blogSlug: 'proteccion-torturas-tratos-inhumanos',
    keywords: ['condiciones calabozo', 'calabozo comisaría']
  },
  {
    id: 'grupos-vulnerables-derechos',
    question: '¿Qué derechos adicionales tienen menores o personas con discapacidad?',
    answer: 'MENORES: asistencia obligatoria de Fiscal de Menores, presencia de padres/tutores en declaración, procedimiento específico (Ley Penal del Menor), medidas educativas vs pena. DISCAPACIDAD: adaptaciones necesarias (intérprete lengua de signos, lectura fácil), evaluación capacidad, asistencia especializada. Protección reforzada en ambos casos.',
    category: 'Derechos Fundamentales',
    blogSlug: 'derechos-grupos-vulnerables-detenidos',
    keywords: ['derechos menores', 'derechos discapacidad detenido']
  },
  {
    id: 'recurso-amparo',
    question: '¿Qué es el recurso de amparo y cuándo se usa?',
    answer: 'El recurso de amparo es el mecanismo para reclamar vulneración de derechos fundamentales ante el Tribunal Constitucional. Cuándo: si se violan derechos constitucionales (libertad, defensa, presunción inocencia) y has agotado recursos ordinarios. Plazo: 30 días desde notificación. Complejo: requiere abogado especializado. Rubén Vaquero tiene experiencia en recursos de amparo.',
    category: 'Derechos Fundamentales',
    blogSlug: 'habeas-corpus-recurso-amparo',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['recurso amparo', 'qué es amparo', 'tribunal constitucional']
  },
  {
    id: 'diferencia-habeas-amparo',
    question: '¿Cuál es la diferencia entre habeas corpus y recurso de amparo?',
    answer: 'HABEAS CORPUS: procedimiento urgente (24h) para detenciones ilegales, se presenta ante juez de guardia, resuelve inmediato. AMPARO: recurso ante Tribunal Constitucional, solo tras agotar recursos ordinarios, plazo 30 días, tarda meses/años. Habeas = urgente y detención. Amparo = derechos fundamentales y tras sentencia.',
    category: 'Derechos Fundamentales',
    blogSlug: 'habeas-corpus-recurso-amparo',
    keywords: ['diferencia habeas amparo', 'habeas vs amparo']
  },
  {
    id: 'vulneracion-derechos-que-hacer',
    question: '¿Qué hacer si vulneran mis derechos durante el procedimiento?',
    answer: 'Acciones inmediatas: 1) Documentar la vulneración (testigos, grabaciones si es legal), 2) Informar a tu abogado INMEDIATAMENTE, 3) Presentar queja formal ante el juez, 4) Solicitar nulidad de actuaciones, 5) Recurrir decisiones judiciales, 6) Si procede, recurso de amparo o TEDH. Las vulneraciones probadas pueden anular pruebas o llevar a absolución.',
    category: 'Derechos Fundamentales',
    blogSlug: 'derechos-fundamentales-procedimientos-terrorismo',
    keywords: ['vulneración derechos qué hacer', 'vulneran mis derechos']
  },
  {
    id: 'diferencia-detencion-prision',
    question: '¿Cuál es la diferencia entre detención y prisión preventiva?',
    answer: 'DETENCIÓN: custodia policial temporal (máx 72h), en comisaría, sin decisión judicial previa (salvo flagrante delito). PRISIÓN PREVENTIVA: medida cautelar ordenada por juez, en centro penitenciario, puede durar años, tras puesta a disposición judicial. Detención es pre-judicial, prisión preventiva es durante el proceso.',
    category: 'Derechos Fundamentales',
    blogSlug: 'derechos-detenidos-garantias-procesales',
    keywords: ['diferencia detención prisión', 'detención vs prisión preventiva']
  },
  {
    id: 'fianza-cuanto',
    question: '¿Cuánto es la fianza en casos penales?',
    answer: 'Varía enormemente según: gravedad delito (de €500 a €500,000+), patrimonio del acusado, riesgo de fuga, daños causados. En delitos económicos puede ser muy elevada. En terrorismo, a menudo la fianza es inaccesible o directamente se deniega libertad. El juez tiene amplia discrecionalidad. Puede ser en metálico, aval bancario o hipoteca.',
    category: 'Derechos Fundamentales',
    blogSlug: 'medidas-cautelares-procesos-penales',
    keywords: ['cuánto es fianza', 'fianza delito']
  },
  
  // ===== BLANQUEO Y DELITOS ECONÓMICOS =====
  {
    id: 'que-es-blanqueo-capitales',
    question: '¿Qué es el blanqueo de capitales?',
    answer: 'Blanqueo de capitales (art. 301 CP) es ocultar o encubrir el origen ilícito de dinero procedente de delitos. Conductas típicas: adquirir, convertir, transferir bienes sabiendo que proceden de delito. Pena: 6 meses a 6 años, multa triple del valor blanqueado. No confundir con financiación terrorismo (el dinero va A terrorismo, no viene DE delito).',
    category: 'Derechos Fundamentales',
    blogSlug: 'blanqueo-capitales-detectar-defenderse',
    lawyerSlug: 'ruben-vaquero-arribas',
    keywords: ['qué es blanqueo capitales', 'blanqueo de capitales definición']
  },
  {
    id: 'indicios-blanqueo',
    question: '¿Qué indicios usa la fiscalía para acusar de blanqueo?',
    answer: 'Indicios comunes: discrepancia entre ingresos declarados y patrimonio/gastos, uso de testaferros o sociedades pantalla, operaciones en paraísos fiscales, fraccionamiento de operaciones (smurfing), uso de criptomonedas sin justificar, compras en efectivo de alto valor. La defensa debe justificar origen lícito del dinero con documentación (contratos, facturas, declaraciones fiscales).',
    category: 'Derechos Fundamentales',
    blogSlug: 'blanqueo-capitales-detectar-defenderse',
    keywords: ['indicios blanqueo', 'cómo demuestran blanqueo']
  },
  
  // ===== DROGAS Y SALUD PÚBLICA =====
  {
    id: 'pena-trafico-drogas',
    question: '¿Cuál es la pena por tráfico de drogas en España?',
    answer: 'Depende de la sustancia y cantidad. Drogas que causan GRAVE daño a salud (heroína, cocaína): 3-6 años (cantidad pequeña) hasta 9-13 años (notoria importancia). Drogas que NO causan grave daño (cannabis): 1-3 años. Agravantes: organización, menores, centros educativos. Atenuantes: cantidad pequeña, drogadicción del autor.',
    category: 'Defensa Urgente',
    blogSlug: 'delitos-salud-publica-drogas-consecuencias',
    keywords: ['pena tráfico drogas', 'años cárcel drogas']
  },
  {
    id: 'diferencia-trafico-consumo',
    question: '¿Cuál es la diferencia entre tráfico y consumo de drogas?',
    answer: 'CONSUMO/TENENCIA PROPIA: no es delito, es infracción administrativa (multa €601-30,000). TRÁFICO: delito penal, vender/distribuir drogas, pena 3-13 años. Diferencia clave: cantidad (más de dosis diarias), envoltorio (varias bolsitas), báscula, dinero en efectivo, mensajes de venta. Criterio jurisprudencial: lo que excede consumo propio de 5 días es tráfico.',
    category: 'Defensa Urgente',
    blogSlug: 'delitos-salud-publica-drogas-consecuencias',
    keywords: ['diferencia tráfico consumo', 'tráfico vs consumo drogas']
  },
  
  // ===== MÁS PROCEDIMIENTO =====
  {
    id: 'necesito-abogado-especializado',
    question: '¿Necesito un abogado especializado en Audiencia Nacional?',
    answer: 'SÍ, altamente recomendable. La Audiencia Nacional tiene procedimientos específicos muy diferentes a juzgados ordinarios: secreto de sumario frecuente, plazos más largos, incomunicación posible, complejidad jurídica mayor. Un abogado especializado conoce: jurisprudencia específica, funcionamiento interno del tribunal, estrategias defensivas efectivas. En STANS tenemos experiencia directa ante AN.',
    category: 'Terrorismo',
    blogSlug: 'defensa-penal-terrorismo-audiencia-nacional',
    lawyerSlug: 'mounir-elyemlahy-chouati',
    keywords: ['abogado audiencia nacional', 'abogado especializado terrorismo']
  },
  {
    id: 'coste-abogado-terrorismo',
    question: '¿Cuánto cuesta un abogado para caso de terrorismo?',
    answer: 'Los honorarios varían según complejidad. Factores: fase del procedimiento (instrucción, juicio oral, recursos), duración estimada (casos de terrorismo pueden durar 2-5 años), número de sesiones, complejidad técnica. En STANS ABOGADOS ofrecemos primera consulta para valorar tu caso y presupuesto transparente. Contacta 24/7.',
    category: 'Terrorismo',
    blogSlug: 'defensa-penal-terrorismo-audiencia-nacional',
    keywords: ['cuánto cuesta abogado terrorismo', 'precio abogado audiencia nacional']
  },
  {
    id: 'coste-primera-consulta',
    question: '¿Cuánto cuesta la primera consulta?',
    answer: 'Ofrecemos primera consulta para valorar tu caso y explicarte opciones. El coste varía según complejidad. Contacta al +34 611 68 72 26 o WhatsApp 24/7 para discutir tu situación específica y presupuesto personalizado. Transparencia total en honorarios.',
    category: 'Defensa Urgente',
    keywords: ['cuánto cuesta consulta', 'precio primera consulta', 'coste abogado']
  },
  {
    id: 'duracion-procedimiento-penal',
    question: '¿Cuánto dura un procedimiento penal?',
    answer: 'Depende de la complejidad del caso: procedimientos simples (juicio rápido) 6-12 meses, casos complejos 1-3 años, casos ante Audiencia Nacional (terrorismo, crimen organizado) 2-5 años, recursos ante tribunales superiores +1-2 años. Tu abogado te mantendrá informado del estado en cada fase. Los plazos pueden variar según carga judicial.',
    category: 'Derechos Fundamentales',
    blogSlug: 'derechos-detenidos-garantias-procesales',
    keywords: ['cuánto dura procedimiento penal', 'duración juicio penal']
  },
  
  // TOTAL: 99 FAQs optimizadas para featured snippets - Cubriendo TODOS los temas
];

// Helper para obtener FAQs por categoría
export function getFAQsByCategory(category: string): FAQ[] {
  if (category === 'Todas') return allFAQs;
  return allFAQs.filter(faq => faq.category === category);
}

// Helper para buscar en FAQs
export function searchFAQs(searchTerm: string): FAQ[] {
  if (!searchTerm.trim()) return allFAQs;
  
  const term = searchTerm.toLowerCase();
  return allFAQs.filter(faq =>
    faq.question.toLowerCase().includes(term) ||
    faq.answer.toLowerCase().includes(term) ||
    faq.keywords.some(k => k.toLowerCase().includes(term))
  );
}

// Categorías disponibles
export const faqCategories = [
  'Todas',
  'Terrorismo',
  'Extradición',
  'Defensa Urgente',
  'Derechos Fundamentales'
];

