import { MetadataRoute } from "next"
import casosData from "../../public/casos/casos-procesados.json"
import seoInfo from "../../public/casos/seo-info.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stansabogados.com"
  const currentDate = new Date()
  
  // Fechas específicas para diferentes tipos de contenido
  const blogContentDate = new Date('2024-12-15') // Fecha de actualización del blog
  const casesContentDate = new Date('2024-12-10') // Fecha de última actualización de casos
  
  // Generar sitemap con estructura optimizada para Google Sitelinks
  // Prioridades basadas en importancia de negocio y búsquedas de usuarios
  
  // Páginas principales - Optimizadas para Sitelinks
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0, // Homepage - máxima prioridad
    },
    {
      url: `${baseUrl}/casos`,
      lastModified: casesContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.95, // Casos de éxito - muy alta prioridad
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogContentDate,
      changeFrequency: "daily" as const,
      priority: 0.9, // Blog - contenido frecuente
    },
    {
      url: `${baseUrl}#areas`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.95, // Servicios/Áreas - crucial para conversión
    },
    {
      url: `${baseUrl}#equipo`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.85, // Equipo - confianza y credibilidad
    },
    {
      url: `${baseUrl}#contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9, // Contacto - conversión directa
    },
  ]

  // Áreas de práctica - En lugar de páginas separadas, apuntamos a la sección de casos
  // ya que todas las áreas están implementadas como secciones en la página principal
  const areaPages = [
    {
      url: `${baseUrl}/casos#libertad-expresion`,
      lastModified: casesContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/casos#terrorismo`,
      lastModified: casesContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/casos#delitos-personas`,
      lastModified: casesContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/casos#patrimonio-crimen-organizado`,
      lastModified: casesContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/casos#delitos-economicos`,
      lastModified: casesContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/casos#orden-publico`,
      lastModified: casesContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8
    }
  ]

  // Páginas del blog (hubs/pillars) - Contenido cornerstone
  const blogHubPages = [
    "/blog/defensa-penal-urgente",
    "/blog/procedimientos-extradicion",
    "/blog/derechos-detenidos"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: blogContentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85, // Mayor prioridad para pillar pages
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
  const casePages = casosData.map((caso: any) => {
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

  // Páginas legales
  const legalPages = [
    "/legal",
    "/privacidad", 
    "/cookies",
    "/terminos"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }))

  return [...mainPages, ...areaPages, ...blogHubPages, ...blogArticlePages, ...casePages, ...legalPages]
}
