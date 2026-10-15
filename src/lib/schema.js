import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, PHONE_E164, SOCIAL_PROFILES, GEO, SERVICE_NAMES, absoluteUrl, OG_IMAGE } from "./site";

// JSON-LD helpers. Each returns a plain object; render with <JsonLd />.

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/icon-512.png"),
  image: absoluteUrl(OG_IMAGE),
  telephone: PHONE_E164,
  sameAs: SOCIAL_PROFILES,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  image: absoluteUrl(OG_IMAGE),
  description: SITE_DESCRIPTION,
  telephone: PHONE_E164,
  areaServed: { "@type": "City", name: "Visakhapatnam" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  sameAs: SOCIAL_PROFILES,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital services",
    itemListElement: SERVICE_NAMES.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, provider: { "@id": `${SITE_URL}/#localbusiness` } },
    })),
  },
};

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// Plans as Offer + Service markup. Only plans with a real starting price get
// a "price"; custom-quote plans are listed without one, so no price is invented.
export function pricingSchema(plans, pagePath) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Host Hive website and app pricing",
    itemListElement: plans.map((plan, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Offer",
        name: plan.name,
        description: plan.audience,
        url: absoluteUrl(pagePath),
        priceCurrency: "INR",
        ...(plan.startingPrice ? { price: plan.startingPrice } : {}),
        seller: { "@id": `${SITE_URL}/#organization` },
        itemOffered: {
          "@type": "Service",
          name: plan.name,
          provider: { "@id": `${SITE_URL}/#localbusiness` },
          areaServed: { "@type": "City", name: "Visakhapatnam" },
        },
      },
    })),
  };
}

// One service page, as Service markup tied to the local business.
export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.serviceType,
    serviceType: service.serviceType,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: { "@type": "City", name: "Visakhapatnam" },
  };
}
