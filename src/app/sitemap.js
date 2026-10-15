import { absoluteUrl } from "../lib/site";

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/website-development-vizag"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/ecommerce-website-development"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/mobile-app-development-vizag"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/seo-services-vizag"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/pricing"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/portfolio"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
