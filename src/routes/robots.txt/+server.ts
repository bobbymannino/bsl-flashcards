import { PUBLIC_BASE_URL } from "$env/static/public";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${PUBLIC_BASE_URL}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
