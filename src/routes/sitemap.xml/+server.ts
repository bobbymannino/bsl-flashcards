import { PUBLIC_BASE_URL } from "$env/static/public";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${PUBLIC_BASE_URL}/</loc>
		<lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
	</url>
	<url>
		<loc>${PUBLIC_BASE_URL}/conversations/</loc>
		<lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
	</url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
