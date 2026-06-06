import { Helmet } from "react-helmet";

const SEO = ({ 
  title = "HostHive - Web Development Company in Vizag",
  description = "Professional website development, ecommerce, and mobile app development in Visakhapatnam (Vizag). Expert React.js and Next.js developers.",
  keywords = "website development vizag, web developers visakhapatnam, ecommerce development, app development",
  ogTitle,
  ogDescription,
  ogImage = "https://hosthive.in/logo.png",
  ogUrl = "https://hosthive.in",
  canonicalUrl,
  schema
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0a0a0f" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="HostHive" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Local Business SEO */}
      <meta name="geo.position" content="17.6869;83.2185" />
      <meta name="ICBM" content="17.6869, 83.2185" />
      <meta name="geo.placename" content="Visakhapatnam, Andhra Pradesh, India" />
      <meta name="geo.region" content="IN-AP" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
