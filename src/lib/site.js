// Single source of truth for site-wide SEO facts.
// Change the domain or contact details here only.
export const SITE_URL = "https://hosthive.online";
export const SITE_NAME = "Host Hive";
export const SITE_DESCRIPTION =
  "Professional website development, ecommerce, and mobile app development in Visakhapatnam (Vizag). Expert React.js and Next.js developers.";

export const PHONE_E164 = "+916301253364";
export const PHONE_DISPLAY = "+91 63012 53364";

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/in/host-hive-892b24410/",
  "https://www.instagram.com/host.hive/",
];

export const GEO = { latitude: 17.6869, longitude: 83.2185 };

export const SERVICE_NAMES = [
  "Website Design",
  "E-Commerce Development",
  "Mobile App Development",
  "SEO & Growth",
];

export const OG_IMAGE = "/og-image.jpg";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

// Builds the metadata object for one page: title, description, canonical URL,
// Open Graph and Twitter tags. Every page calls this so no page inherits
// another page's canonical URL.
export function buildMetadata({ title, description, path = "/" }) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(OG_IMAGE);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// One contact email for the whole site. Change it here only.
export const EMAIL = "hosthive01@gmail.com";
export const ADDRESS_LINE = "Visakhapatnam, Andhra Pradesh, India";
export const HOURS_LINE = "Mon–Fri, 10 AM – 6 PM IST";

// Headline numbers shown on the home and portfolio pages.
export const STATS = [
  { value: "2+", label: "Years of experience" },
  { value: "10+", label: "Team members" },
  { value: "16+", label: "Happy clients" },
  { value: "18+", label: "Projects delivered" },
];
