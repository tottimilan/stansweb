import { MetadataRoute } from "next"
import casosData from "../../public/casos/casos-procesados.json"
import seoInfo from "../../public/casos/seo-info.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stansabogados.com"
  const currentDate = new Date()
  
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

  // Páginas de casos individuales (CRÍTICO PARA SEO)
  const casePages = casosData.map((caso: any) => {
    const casoSeoInfo = (seoInfo as any)[caso.id]
    const url = casoSeoInfo?.url ? `${baseUrl}${casoSeoInfo.url}` : `${baseUrl}/casos/${caso.id}`
    
    return {
      url,
      lastModified: currentDate,
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

  return [...mainPages, ...areaPages, ...casePages, ...legalPages]
}
