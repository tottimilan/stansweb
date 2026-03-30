import { MetadataRoute } from "next"
import casosData from "../../public/casos/casos-procesados.json"
import seoInfo from "../../public/casos/seo-info.json"
import { allLawyerSlugs } from "@/data/lawyers"
import { allBlogSlugs, blogPosts } from "@/data/blogPosts"

const BLOG_HUB_SLUGS = new Set([
  'terrorismo-audiencia-nacional',
  'defensa-penal-urgente',
  'procedimientos-extradicion',
  'derechos-detenidos',
])

const TERRORISM_SLUGS = new Set([
  'defensa-penal-terrorismo-audiencia-nacional',
  'enaltecimiento-terrorismo-redes-sociales-defensa',
  'captacion-adoctrinamiento-yihadista-internet',
  'terrorismo-internet-redes-sociales-limites',
  'autoadoctrinamiento-terrorista-defensa-legal',
  'financiacion-terrorismo-tipos-penas-defensa',
  'pertenencia-organizacion-terrorista-defensa',
  'derechos-fundamentales-procedimientos-terrorismo',
  'terrorismo-libertad-expresion-limite-legal',
])

function getBlogPriority(slug: string): number {
  if (BLOG_HUB_SLUGS.has(slug)) return 0.88
  if (TERRORISM_SLUGS.has(slug)) return 0.82
  return 0.75
}

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"

function getBlogChangeFrequency(slug: string): ChangeFreq {
  if (BLOG_HUB_SLUGS.has(slug)) return "weekly"
  return "monthly"
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.stansabogados.com"
  const currentDate = new Date()
  const casesContentDate = new Date('2026-03-30')

  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/casos`,
      lastModified: casesContentDate,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.90,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ]

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
    priority: 0.9,
  }))

  const teamPages = allLawyerSlugs.map(slug => ({
    url: `${baseUrl}/equipo/${slug}`,
    lastModified: new Date('2024-12-09'),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  // Blog: generado dinámicamente desde allBlogSlugs + blogPosts
  // Usa la fecha real de publicación de cada post como lastModified
  const blogPages = allBlogSlugs.map(slug => {
    const post = blogPosts.find(p => p.slug === slug)
    const lastModified = post?.date ? new Date(post.date) : currentDate

    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: getBlogChangeFrequency(slug),
      priority: getBlogPriority(slug),
    }
  })

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

  return [...mainPages, ...servicePages, ...teamPages, ...blogPages, ...casePages, ...legalPages]
}
