/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.aadeshgulumbe.me', // Your website URL
  generateRobotsTxt: true, // Automatically generate a robots.txt file
  sitemapSize: 7000, // Split sitemap if you have many pages (default is 5000)
  changefreq: 'daily', // Suggest how often Google should revisit pages
  priority: 0.7, // Default priority of pages

  // Additional URLs for better SEO
  additionalPaths: async (config) => {
    return [
      { loc: '/aadesh0706', changefreq: 'weekly', priority: 0.8 }, // GitHub username
      { loc: '/linkedin-profile', changefreq: 'monthly', priority: 0.8 }, // LinkedIn
      { loc: '/projects', changefreq: 'weekly', priority: 0.9 }, // Highlighted Projects
    ];
  },

  // Define excluded paths if needed
  exclude: ['/admin', '/secret-page'], // Exclude private routes from the sitemap

  // Robots.txt options
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }, // Allow all bots to crawl all pages
      { userAgent: 'Googlebot', allow: '/' }, // Specific bot rules
    ],
    additionalSitemaps: [
      'https://www.aadeshgulumbe.me/sitemap.xml',
      'https://www.aadeshgulumbe.me/sitemap-1.xml',
    ],
  },
};

module.exports = config;
