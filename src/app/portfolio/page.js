import Portfolio from "../../Components/Portfolio/Portfolio";
import JsonLd from "../../Components/SEO/JsonLd";
import { buildMetadata } from "../../lib/site";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = buildMetadata({
  title: "Portfolio | Website & E-Commerce Projects | Host Hive",
  description:
    "See Host Hive's web and ecommerce work, including a multi-category retail store and a China-India B2B trade platform. Built in Visakhapatnam.",
  path: "/portfolio",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <Portfolio />
    </>
  );
}
