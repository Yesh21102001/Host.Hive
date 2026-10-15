import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import JsonLd from "../Components/SEO/JsonLd";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, GEO } from "../lib/site";
import { organizationSchema, websiteSchema } from "../lib/schema";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Host Hive | Web Design & App Development in Vizag",
    template: "%s | Host Hive",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Visakhapatnam, Andhra Pradesh, India",
    "geo.position": `${GEO.latitude};${GEO.longitude}`,
    ICBM: `${GEO.latitude}, ${GEO.longitude}`,
  },
};

export const viewport = {
  themeColor: "#0a2540",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <div className="App">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
