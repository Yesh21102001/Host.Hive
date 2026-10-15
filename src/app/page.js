import Home from "../Components/Home";
import JsonLd from "../Components/SEO/JsonLd";
import { buildMetadata } from "../lib/site";
import { localBusinessSchema, faqSchema } from "../lib/schema";
import { faqs } from "../lib/faqs";

export const metadata = buildMetadata({
  title: "Host Hive | Website Development Company in Vizag",
  description:
    "Host Hive is a web design and app development company in Visakhapatnam. We build websites, ecommerce stores and mobile apps that rank and convert.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema(faqs)} />
      <Home />
    </>
  );
}
