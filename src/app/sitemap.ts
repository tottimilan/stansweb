import { MetadataRoute } from "next"
import casosData from "../../public/casos/casos-procesados.json"
import seoInfo from "../../public/casos/seo-info.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stansabogados.com"
  const currentDate = new Date()
  
  // Fechas específicas para diferentes tipos de contenido
  const blogContentDate = new Date('2024-12-15') // Fecha de actualización del blog
  const casesContentDate = new Date('2024-12-10') // Fecha de última actualización de casos
  
  // Páginas principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/casos`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogContentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/equipo`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Áreas de práctica
  const areaPages = [
    "/areas/libertad-expresion-delitos-odio",
    "/areas/terrorismo-audiencia-nacional",
    "/areas/delitos-contra-las-personas",
    "/areas/robos-patrimonio-crimen-organizado",
    "/areas/delitos-economicos-laborales",
    "/areas/orden-publico-drogas-ejecucion-penal"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  // Páginas del blog (hubs/pillars)
  const blogHubPages = [
    "/blog/defensa-penal-urgente",
    "/blog/procedimientos-extradicion",
    "/blog/derechos-detenidos"
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: blogContentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Artículos del blog (spokes) - COMPLETO Y ACTUALIZADO
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
    priority: 0.7,
  }))

  // Páginas de casos individuales (CRÍTICO PARA SEO)
  const casePages = casosData.map((caso: any) => {
    const casoSeoInfo = (seoInfo as any)[caso.id]
    const url = casoSeoInfo?.url ? `${baseUrl}${casoSeoInfo.url}` : `${baseUrl}/casos/${caso.id}`
    
    return {
      url,
      lastModified: casesContentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
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
