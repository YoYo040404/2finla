import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://2tjewelers.com'
  return [
    { url: base,                                  changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/collections`,                 changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/grillz`,                      changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/watches`,                     changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/custom`,                      changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/collections/chains`,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/collections/pendants`,        changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/collections/rings`,           changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/collections/bracelets`,       changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/collections/earrings`,        changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`,                       changeFrequency: 'yearly',  priority: 0.5 },
    // /collections/best-sellers and /collections/new-arrivals are noindex — excluded from sitemap
  ]
}
