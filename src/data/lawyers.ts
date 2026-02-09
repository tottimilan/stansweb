// Base de datos de abogados del equipo
// Centraliza información para SEO y generación de páginas individuales

export interface Lawyer {
  id: string;
  slug: string;
  name: string;
  role: string;
  summary: string;
  longBio: string;
  specializations: string[];
  languages: string[];
  languageLabels: string[];
  education: string[];
  achievements: string[];
  practiceAreas: string[];
  notableCases: number[]; // IDs de casos destacados
  image: string;
  hoverImage: string;
  backgroundImage: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  caseTypes: string[];
}

export const lawyers: Lawyer[] = [
  {
    id: '1',
    slug: 'ruben-vaquero-arribas',
    name: 'Rubén Vaquero Arribas',
    role: 'Socio Director',
    summary: 'Abogado colegiado ICAM especializado en Derecho Penal, Penal Económico y Derechos Fundamentales. Graduado en Derecho (UCM) y Ciencias Políticas (UNED). Experto en OEDE y extradiciones.',
    longBio: 'Rubén Vaquero Arribas es Socio Director de STANS ABOGADOS y abogado colegiado en el Ilustre Colegio de Abogados de Madrid (ICAM). Con una sólida formación jurídica, cursó sus estudios de Derecho en la Universidad Complutense de Madrid (UCM) y Ciencias Políticas en la UNED, lo que le proporciona una visión amplia y multidisciplinar del sistema legal español. Acredita un profundo conocimiento y amplia experiencia en Derecho Penal, Derecho Penal Económico y Derechos Fundamentales, destacando especialmente en procedimientos relacionados con la Orden Europea de Detención y Entrega (OEDE) y las extradiciones internacionales. Ejerce habitualmente en todo tipo de procedimientos penales ante cualquier tribunal o instancia, desde juzgados de instrucción hasta la Audiencia Nacional y el Tribunal Supremo. Su práctica abarca casos de alta complejidad en delitos económicos, blanqueo de capitales, estafa, criminalidad organizada, así como la defensa de derechos fundamentales y recursos de casación. Su enfoque técnico-jurídico riguroso, combinado con una estrategia procesal personalizada, le ha permitido obtener resultados favorables en casos de gran relevancia mediática y jurídica.',
    specializations: [
      'Derecho Penal',
      'Derecho Penal Económico',
      'Derechos Fundamentales',
      'OEDE (Orden Europea de Detención y Entrega)',
      'Extradiciones Internacionales',
      'Recursos de Casación'
    ],
    languages: ['ES', 'EN'],
    languageLabels: ['Español', 'Inglés'],
    education: [
      'Licenciatura en Derecho - Universidad Complutense de Madrid (UCM)',
      'Ciencias Políticas - UNED',
      'Colegiado Ilustre Colegio de Abogados de Madrid (ICAM)'
    ],
    achievements: [
      'Ejercicio ante todos los tribunales e instancias judiciales',
      'Especialista en procedimientos ante Audiencia Nacional',
      'Recursos exitosos ante el Tribunal Supremo',
      'Experto en OEDE y extradiciones internacionales',
      'Defensa en casos de alta complejidad y relevancia mediática'
    ],
    practiceAreas: [
      'Derecho Penal Económico',
      'Blanqueo de Capitales',
      'Estafa y Fraudes',
      'Delitos Societarios',
      'Extradiciones Internacionales',
      'OEDE',
      'Homicidio',
      'Crimen Organizado',
      'Derechos Fundamentales',
      'Recursos y Casación'
    ],
    notableCases: [1, 7, 10], // Caso Queque, Estafa Jaén, Blanqueo
    image: '/images/Equipo-optimized/Ruben1.webp?v=4',
    hoverImage: '/images/Equipo-optimized/Ruben4.webp?v=4',
    backgroundImage: '/images/Equipo-optimized/Ruben3.webp?v=4',
    email: 'info@stansabogados.com',
    caseTypes: [
      'Delitos económicos y contra el patrimonio',
      'Delitos de odio y libertad de expresión',
      'Delitos contra la vida'
    ]
  },
  {
    id: '2',
    slug: 'mounir-elyemlahy-chouati',
    name: 'Mounir Elyemlahy Chouati',
    role: 'Socio Abogado',
    summary: 'Abogado colegiado ICAM, graduado en Derecho por la UCM. Especialista en Derecho Penal y Derecho Administrativo. Experto en Derecho marroquí, extradiciones y asesoramiento a empresas. Trilingüe: castellano, inglés y árabe.',
    longBio: 'Mounir Elyemlahy Chouati es Socio de STANS ABOGADOS y abogado colegiado en el Ilustre Colegio de Abogados de Madrid (ICAM). Graduado en Derecho por la Universidad Complutense de Madrid (UCM), cuenta con el Máster de Acceso a la Abogacía por la Universidad Rey Juan Carlos (URJC). Especialista en Derecho Penal y Derecho Administrativo, destaca por su alta cualificación en el asesoramiento a empresas y particulares en cuestiones relacionadas con el Derecho marroquí. Su dominio del idioma árabe (además del castellano e inglés) y su profundo conocimiento del derecho marroquí le convierten en un referente para clientes de origen árabe y en procedimientos de cooperación judicial internacional entre España y Marruecos. Ejerce la defensa letrada en procedimientos penales de alta complejidad, incluyendo casos ante la Audiencia Nacional, con especial experiencia en terrorismo, delitos contra derechos fundamentales, extradiciones internacionales y órdenes europeas de detención y entrega (OEDE). Su perfil multicultural y multilingüe permite ofrecer una defensa integral que comprende tanto los aspectos legales como los matices culturales de cada caso, siendo especialmente valorado en asuntos que requieren coordinación entre sistemas jurídicos español y marroquí.',
    specializations: [
      'Derecho Penal',
      'Derecho Administrativo',
      'Derecho Marroquí',
      'Extradiciones España-Marruecos',
      'OEDE (Orden Europea de Detención y Entrega)',
      'Asesoramiento a Empresas'
    ],
    languages: ['ES', 'EN', 'AR'],
    languageLabels: ['Castellano', 'Inglés', 'Árabe'],
    education: [
      'Grado en Derecho - Universidad Complutense de Madrid (UCM)',
      'Máster de Acceso a la Abogacía - Universidad Rey Juan Carlos (URJC)',
      'Especialización en Derecho Marroquí',
      'Colegiado Ilustre Colegio de Abogados de Madrid (ICAM)'
    ],
    achievements: [
      'Especialista en Derecho Penal y Administrativo',
      'Experto en Derecho marroquí aplicado',
      'Referente en extradiciones España-Marruecos',
      'Asesoramiento jurídico trilingüe (castellano, inglés, árabe)',
      'Defensa ante Audiencia Nacional en casos complejos'
    ],
    practiceAreas: [
      'Terrorismo (Audiencia Nacional)',
      'Enaltecimiento del Terrorismo',
      'Captación y Adoctrinamiento',
      'Extradiciones Internacionales',
      'OEDE',
      'Derecho Administrativo',
      'Delitos contra Derechos Fundamentales',
      'Asistencia a Clientes Árabe-Parlantes'
    ],
    notableCases: [4, 5, 2], // Academia Yihad, Nordin Workout, Luco
    image: '/images/Equipo-optimized/Mounir1.webp?v=4',
    hoverImage: '/images/Equipo-optimized/Mounir4.webp?v=4',
    backgroundImage: '/images/Equipo-optimized/Mounir3.webp?v=4',
    email: 'info@stansabogados.com',
    caseTypes: [
      'Terrorismo y Audiencia Nacional',
      'Robos con violencia y grupo criminal',
      'Delitos contra las personas'
    ]
  },
  {
    id: '3',
    slug: 'diego-cardona-valero',
    name: 'Diego Cardona Valero',
    role: 'Socio Abogado',
    summary: 'Abogado colegiado ICAM (nº 135715), graduado en Derecho. Máster de Especialista en Derecho Penal (CEIJ). Dedicación preferente al Derecho Penal, con experiencia en causas de especial complejidad ante órganos jurisdiccionales nacionales.',
    longBio: 'Diego Cardona Valero es Socio de STANS ABOGADOS y abogado colegiado en el Ilustre Colegio de Abogados de Madrid (ICAM), con número de colegiado 135715. Graduado en Derecho y especializado en Derecho Penal, cuenta con el título de Máster de Especialista en Derecho Penal por el Centro de Estudios e Investigaciones Jurídicas (CEIJ). Desarrolla su actividad profesional con dedicación preferente al Derecho Penal, ejerciendo la defensa letrada en procedimientos seguidos ante órganos jurisdiccionales de ámbito nacional. Cuenta con amplia experiencia en causas de especial complejidad, así como en la preparación de estrategias procesales en contextos de alta exigencia técnica. Su práctica se orienta particularmente a los delitos contra las personas, la criminalidad organizada, delitos relacionados con el terrorismo y a la tutela de las garantías procesales durante todas las fases del procedimiento penal. Su conocimiento profundo del derecho procesal penal le permite identificar vulneraciones procesales, diseñar estrategias de defensa técnicamente sólidas y preparar recursos de apelación y casación con fundamento jurídico riguroso. Ha participado en operaciones policiales de gran envergadura y casos mediáticos, logrando sentencias absolutorias y sobreseimientos en procedimientos de alta complejidad.',
    specializations: [
      'Derecho Penal',
      'Derecho Procesal Penal',
      'Criminalidad Organizada',
      'Delitos contra las Personas',
      'Terrorismo',
      'Garantías Procesales'
    ],
    languages: ['ES'],
    languageLabels: ['Castellano'],
    education: [
      'Grado en Derecho',
      'Máster de Especialista en Derecho Penal - Centro de Estudios e Investigaciones Jurídicas (CEIJ)',
      'Colegiado Ilustre Colegio de Abogados de Madrid (ICAM) - Nº 135715'
    ],
    achievements: [
      'Dedicación preferente al Derecho Penal',
      'Experiencia en causas de especial complejidad',
      'Estrategias procesales en contextos de alta exigencia técnica',
      'Defensa ante órganos jurisdiccionales de ámbito nacional',
      'Tutela de garantías procesales en todas las fases'
    ],
    practiceAreas: [
      'Delincuencia Organizada',
      'Terrorismo',
      'Robos con Violencia',
      'Tráfico de Drogas',
      'Grupos Criminales',
      'Recursos Penales',
      'Audiencia Nacional',
      'Procedimientos de Alta Complejidad'
    ],
    notableCases: [3, 11, 9], // DDP, Robo violencia absolución, Robo absolución
    image: '/images/Equipo-optimized/Diego1.webp?v=3',
    hoverImage: '/images/Equipo-optimized/Diego4.webp?v=3',
    backgroundImage: '/images/Equipo-optimized/Diego3.webp?v=3',
    email: 'info@stansabogados.com',
    caseTypes: [
      'Robos con violencia y grupo criminal',
      'Terrorismo y Audiencia Nacional',
      'Delitos contra la salud pública'
    ]
  }
];

// Slugs de todos los abogados para generateStaticParams
export const allLawyerSlugs = lawyers.map(l => l.slug);

// Función helper para obtener un abogado por slug
export function getLawyerBySlug(slug: string): Lawyer | undefined {
  return lawyers.find(lawyer => lawyer.slug === slug);
}

// Función helper para verificar si un slug existe
export function isValidLawyerSlug(slug: string): boolean {
  return allLawyerSlugs.includes(slug);
}

// Función para obtener abogados por área de práctica
export function getLawyersByPracticeArea(area: string): Lawyer[] {
  return lawyers.filter(lawyer => 
    lawyer.practiceAreas.some(pa => 
      pa.toLowerCase().includes(area.toLowerCase())
    )
  );
}

