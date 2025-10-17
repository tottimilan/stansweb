import { MetadataRoute } from "next"
import casosData from "../../public/casos/casos-procesados.json"
import seoInfo from "../../public/casos/seo-info.json"
import { allLawyerSlugs } from "@/data/lawyers"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stansabogados.com"
  const currentDate = new Date()
  
  // Fechas específicas para diferentes tipos de contenido
  const blogContentDate = new Date('2025-01-17') // Última actualización de blogs (hoy)
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

  // Áreas de práctica eliminadas del sitemap - Google no indexa URLs con #
  // Las secciones están en la homepage y página de casos, ya indexadas arriba
  const areaPages: MetadataRoute.Sitemap = []

  // Páginas de miembros del equipo - Alta prioridad para SEO local
  const teamPages = allLawyerSlugs.map(slug => ({
    url: `${baseUrl}/equipo/${slug}`,
    lastModified: currentDate,
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
    "/blog/blanqueo-capitales-detectar-defenderse"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: blogContentDate,
    changeFrequency: "monthly" as const,
    priority: 0.75, // Prioridad mejorada para artículos de blog
  }))

  // Páginas de casos individuales - Prueba social y credibilidad
  // Excluir casos en curso para proteger información confidencial
  const casePages = casosData
    .filter((caso: any) => !caso.caso_en_curso) // Excluir casos en investigación
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

  return [...mainPages, ...teamPages, ...areaPages, ...blogHubPages, ...terrorismBlogPages, ...blogArticlePages, ...casePages, ...legalPages]
}
