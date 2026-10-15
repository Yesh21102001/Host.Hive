import Contact from "../../Components/Contact/Contact";
import JsonLd from "../../Components/SEO/JsonLd";
import { buildMetadata } from "../../lib/site";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = buildMetadata({
  title: "Contact Host Hive | Web Design & App Development in Vizag",
  description:
    "Contact Host Hive in Visakhapatnam for website design, ecommerce and mobile app development. Send us your project details and we reply within 24 hours.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Contact />
    </>
  );
}
