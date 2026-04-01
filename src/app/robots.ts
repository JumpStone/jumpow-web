import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://jumpstone4477.de";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/contact/verify",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
