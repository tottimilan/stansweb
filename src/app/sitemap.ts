import { MetadataRoute } from "next"
import casosData from "../../public/casos/casos-procesados.json"
import seoInfo from "../../public/casos/seo-info.json"
import { allLawyerSlugs } from "@/data/lawyers"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.stansabogados.com"
  const currentDate = new Date()
  
  // Fechas específicas para diferentes tipos de contenido
  const blogContentDate = new Date('2025-11-30') // Última actualización de blogs (hoy)
  const casesContentDate = new Date('2025-01-15') // Fecha de última actualización de casos
  
  // Generar sitemap con estructura optimizada para Google Sitelinks
  // Prioridades basadas en importancia de negocio y búsquedas de usuarios
  
  // Páginas principales - Optimizadas para Sitelinks
  // NOTA: URLs con fragmentos (#) eliminadas - Google no las indexa
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0, // Homepage - máxima prioridad
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.95, // Servicios - muy alta prioridad para sitelinks
    },
    {
      url: `${baseUrl}/casos`,
      lastModified: casesContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.95, // Casos de éxito - muy alta prioridad
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.90, // FAQ - alta prioridad para featured snippets
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogContentDate,
      changeFrequency: "daily" as const,
      priority: 0.9, // Blog - contenido frecuente
    },
  ]

  // Páginas de servicios individuales - Alta prioridad para SEO de servicios
  const servicePages = [
    "/servicios/libertad-expresion",
    "/servicios/terrorismo-audiencia-nacional",
    "/servicios/delitos-personas",
    "/servicios/robos-patrimonio",
    "/servicios/delitos-economicos",
    "/servicios/orden-publico-drogas",
    "/servicios/extradiciones",
    "/servicios/violencia-genero",
    "/servicios/procedimiento-penal"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.9, // Alta prioridad para páginas de servicios
  }))

  // Páginas de miembros del equipo - Alta prioridad para SEO local
  // Última actualización: Sección de medios y navegación rápida (Dic 2024)
  const teamPages = allLawyerSlugs.map(slug => ({
    url: `${baseUrl}/equipo/${slug}`,
    lastModified: new Date('2024-12-09'), // Actualizado con medios y navegación
    changeFrequency: "monthly" as const,
    priority: 0.85, // Alta prioridad - búsquedas por nombre de abogado
  }))

  // Páginas del blog (hubs/pillars) - Contenido cornerstone
  const blogHubPages = [
    "/blog/terrorismo-audiencia-nacional", // Hub de Terrorismo - NUEVO
    "/blog/defensa-penal-urgente",
    "/blog/procedimientos-extradicion",
    "/blog/derechos-detenidos"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: blogContentDate,
    changeFrequency: "weekly" as const,
    priority: 0.88, // Mayor prioridad para pillar pages (subida de 0.85 a 0.88)
  }))

  // Artículos del blog sobre Terrorismo - ALTA PRIORIDAD
  const terrorismBlogPages = [
    "/blog/defensa-penal-terrorismo-audiencia-nacional",
    "/blog/enaltecimiento-terrorismo-redes-sociales-defensa",
    "/blog/captacion-adoctrinamiento-yihadista-internet",
    "/blog/terrorismo-internet-redes-sociales-limites",
    "/blog/autoadoctrinamiento-terrorista-defensa-legal",
    "/blog/financiacion-terrorismo-tipos-penas-defensa",
    "/blog/pertenencia-organizacion-terrorista-defensa",
    "/blog/derechos-fundamentales-procedimientos-terrorismo",
    "/blog/terrorismo-libertad-expresion-limite-legal"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date('2025-01-15'),
    changeFrequency: "monthly" as const,
    priority: 0.82, // Alta prioridad - nicho especializado con alta conversión
  }))

  // Artículos del blog (spokes) - Contenido de apoyo
  const blogArticlePages = [
    // Hub: Defensa Penal Urgente (8 artículos)
    "/blog/defensa-penal-urgente-guia-completa",
    "/blog/derechos-inmediatos-detenido",
    "/blog/primeros-pasos-comisaria",
    "/blog/asistencia-letrada-urgencia",
    "/blog/puesta-disposicion-judicial",
    "/blog/habeas-corpus-recurso-amparo",
    "/blog/medidas-cautelares-procesos-penales",
    "/blog/comunicacion-familiares-detenido",
    "/blog/registro-dependencias-detenido",
    
    // Hub: Procedimientos de Extradición (5 artículos)
    "/blog/procedimientos-extradicion-espana",
    "/blog/tipos-extradicion-espana",
    "/blog/requisitos-extradicion-espana",
    "/blog/audiencia-extradicion-espana",
    "/blog/recursos-contra-extradicion",
    "/blog/derechos-extraditado",
    
    // Hub: Derechos de Detenidos (6 artículos)
    "/blog/derechos-detenidos-garantias-procesales",
    "/blog/derechos-constitucionales-detenido",
    "/blog/derecho-asistencia-letrada-detenido",
    "/blog/proteccion-torturas-tratos-inhumanos",
    "/blog/derechos-grupos-vulnerables-detenidos",
    "/blog/derechos-dependencias-policiales",
    "/blog/derechos-procesales-recursos-detenido",
    
    // Artículos especializados adicionales
    "/blog/delitos-salud-publica-drogas-consecuencias",
    "/blog/terrorismo-internet-enaltecimiento-captacion",
    "/blog/blanqueo-capitales-detectar-defenderse",
    
    // NUEVOS BLOGS 2025 - Reformas Penales (10 artículos)
    "/blog/nuevos-delitos-codigo-penal-2025",
    "/blog/cambios-ley-enjuiciamiento-criminal-2025",
    "/blog/justicia-restaurativa-penal-espana",
    "/blog/delitos-odio-marco-penal-jurisprudencia",
    "/blog/ciberincidentes-ciberdelitos-espana",
    "/blog/reformas-delitos-sexuales-espana",
    "/blog/violencia-vicaria-tipificacion-penal",
    "/blog/deepfakes-grooming-delitos-digitales",
    "/blog/digitalizacion-procedimientos-penales",
    "/blog/financiacion-ilegal-inhabilitacion",

    // ===== NUEVOS BLOGS ENERO 2026 - ARTÍCULOS ESPECIALIZADOS =====
    // Hub: Defensa Penal Urgente (7 nuevos)
    "/blog/delito-lesiones-puedo-ir-carcel-pelea",
    "/blog/medidas-cautelares-puedo-irme-pais-esperando-juicio",
    "/blog/defraudacion-seguridad-social-es-delito-no-pagar",
    "/blog/triple-de-la-mayor-limite-cumplimiento-condenas",
    "/blog/blanqueo-capitales-puedo-acabar-carcel",
    "/blog/revelacion-secretos-empresariales-puedo-ir-prision",
    "/blog/acuerdos-abusivos-socio-minoritario-defensa-legal",

    // Hub: Derechos de Detenidos (4 nuevos)
    "/blog/recurso-apelacion-prision-provisional-como-recuperar-libertad",
    "/blog/que-hacer-si-me-detienen-madrid-guia-derechos",
    "/blog/orden-busqueda-captura-que-puedo-hacer",
    "/blog/antecedentes-policiales-como-limpiarlos"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: blogContentDate,
    changeFrequency: "monthly" as const,
    priority: 0.75, // Prioridad mejorada para artículos de blog
  }))

  // Páginas de casos individuales - Prueba social y credibilidad
  // Incluir TODOS los casos (incluidos los en curso) para posicionamiento SEO
  const casePages = casosData
    .map((caso: any) => {
      const casoSeoInfo = (seoInfo as any)[caso.id]
      const url = casoSeoInfo?.url ? `${baseUrl}${casoSeoInfo.url}` : `${baseUrl}/casos/${caso.id}`
      
      // Casos favorables tienen mayor prioridad
      const priority = caso.favorabilidad === "Favorable" ? 0.8 : 0.75
      
      return {
        url,
        lastModified: casesContentDate,
        changeFrequency: "monthly" as const,
        priority,
      }
    })

  // Páginas legales - Prioridad baja para evitar que aparezcan en sitelinks
  const legalPages = [
    "/legal",
    "/privacidad", 
    "/cookies",
    "/terminos"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "yearly" as const,
    priority: 0.1, // Prioridad reducida de 0.3 a 0.1
  }))

  return [...mainPages, ...servicePages, ...teamPages, ...blogHubPages, ...terrorismBlogPages, ...blogArticlePages, ...casePages, ...legalPages]
}
