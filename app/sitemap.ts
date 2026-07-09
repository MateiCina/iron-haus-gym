import type { MetadataRoute } from 'next'

const siteUrl = 'https://ironhaus.club'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/trainers', '/equipment', '/pricing', '/schedule', '/area', '/privacy']

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
