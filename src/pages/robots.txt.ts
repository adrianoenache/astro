// @ts-check
// API route to serve the robots.txt file.
import type { APIRoute } from 'astro';

// Base URL for constructing links dynamically
const base = import.meta.env.BASE_URL;

// Function to generate the content of robots.txt with the sitemap URL.
const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

// Generate robots.txt for the site, including the sitemap URL.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(`${base}sitemap-index.xml`, site);
  return new Response(getRobotsTxt(sitemapURL));
};
