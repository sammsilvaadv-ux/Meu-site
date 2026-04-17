import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://samuel-martins-advocacia.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE}/previdenciario`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/consumidor`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/imobiliario`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/familia`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/sobre`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/contato`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/blog`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE}/blog/inss-negou-meu-beneficio`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/blog/negativacao-indevida-serasa`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/duque-de-caxias`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/baixada-fluminense`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
  ]
}
