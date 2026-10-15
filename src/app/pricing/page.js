import Pricing from "../../Components/Pricing/Pricing";
import JsonLd from "../../Components/SEO/JsonLd";
import { buildMetadata } from "../../lib/site";
import { breadcrumbSchema, faqSchema, pricingSchema } from "../../lib/schema";
import { PLANS, PRICING_FAQS } from "../../lib/pricing";

export const metadata = buildMetadata({
  title: "Website Development Price in Vizag | Plans from ₹12,000",
  description:
    "Website and ecommerce development cost in Visakhapatnam. Business websites from ₹12,000, online stores from ₹30,000. Clear quotes within 24 hours.",
  path: "/pricing",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <JsonLd data={pricingSchema(PLANS, "/pricing")} />
      <JsonLd data={faqSchema(PRICING_FAQS)} />
      <Pricing />
    </>
  );
}
