// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // La URL base de tu sitio en Vercel
  const baseUrl = 'https://u-e-cuatricentenaria-pi.vercel.app'

  // Lista de todas las rutas (páginas) de tu sitio
  const routes: MetadataRoute.Sitemap = [  // ← Agrega el tipo aquí también
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,  // ← Agrega 'as const'
      priority: 1.0,
    },
    {
      url: `${baseUrl}/inicio`,  // ← Quita el # si lo tenías
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,  // ← Agrega 'as const'
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galeria`,  // ← Quita el # si lo tenías
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,  // ← Agrega 'as const'
      priority: 0.7,
    },
    {
      url: `${baseUrl}/calendario`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/horario`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  return routes
}