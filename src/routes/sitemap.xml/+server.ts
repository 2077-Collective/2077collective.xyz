import type { RequestHandler } from "@sveltejs/kit";
import { SITE_URL } from "$env/static/private";

export const GET: RequestHandler = async ({ request }) => {
  const url = new URL(request.url);
  const baseURL = import.meta.env.PROD
    ? SITE_URL
    : `${url.protocol}//${url.host}`;
  const researchURL = import.meta.env.PROD
    ? `https://research.${SITE_URL.replace('https://', '')}`
    : `${url.protocol}//research.${url.host}`;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Homepage -->
        <url>
            <loc>${baseURL}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>

        <!-- Research subdomain -->
        <url>
            <loc>${researchURL}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.9</priority>
        </url>

        <!-- Static pages -->
        <url>
            <loc>${baseURL}/about</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>

        <url>
            <loc>${baseURL}/support</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>

        <url>
            <loc>${baseURL}/values</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};