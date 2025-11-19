import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unleash-lab.tech'
  const currentDate = new Date()
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'fr': `${baseUrl}/fr`,
          'en': `${baseUrl}/en`,
        }
      }
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'fr': `${baseUrl}/fr/about`,
          'en': `${baseUrl}/en/about`,
        }
      }
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'fr': `${baseUrl}/fr/contact`,
          'en': `${baseUrl}/en/contact`,
        }
      }
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: {
          'fr': `${baseUrl}/fr/blog`,
          'en': `${baseUrl}/en/blog`,
        }
      }
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2025-03-13'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2025-03-13'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}