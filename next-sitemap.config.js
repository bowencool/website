module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'https://neon.tech',
  exclude: [
    '/blog/wp-draft-post-preview-page',
    '/blog/rss.xml',
    '/docs/changelog/rss.xml',
    '/last-week-in-aws',
    '/ping-thing',
    '/all-things-open-2023',
    '/stackoverflow',
    '/cfe',
    '/github',
    '/youtube',
    '/education',
    '/pgt',
    '/fireship',
    '/thank-you',
    '/docs/postgres*',
    '/blog-sitemap.xml',
    '/blog/*',
  ],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: [
          '/blog/wp-draft-post-preview-page$',
          '/last-week-in-aws$',
          '/ping-thing$',
          '/all-things-open-2023$',
          '/stackoverflow$',
          '/github$',
          '/youtube$',
          '/education$',
          '/pgt$',
          '/fireship$',
          '/docs/postgres*',
          '/thank-you$',
          '/cfe$',
        ],
      },
    ],
    additionalSitemaps: [`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/blog-sitemap.xml`],
  },
};
