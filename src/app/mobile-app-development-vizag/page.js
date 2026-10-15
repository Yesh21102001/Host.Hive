import ServicePage from "../../Components/Service/ServicePage";
import JsonLd from "../../Components/SEO/JsonLd";
import { buildMetadata } from "../../lib/site";
import { getService } from "../../lib/services";
import { serviceSchema, faqSchema, breadcrumbSchema } from "../../lib/schema";

const service = getService("mobile-app-development-vizag");

export const metadata = buildMetadata({
  title: service.title,
  description: service.description,
  path: service.path,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: service.breadcrumb, path: service.path },
        ])}
      />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <ServicePage service={service} />
    </>
  );
}
