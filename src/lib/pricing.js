// Pricing data for /pricing. Numbers marked "startingPrice" come from the
// existing site copy. Anything without a number is a custom quote.
// Edit here only; the page and the structured data both read this file.

export const PLANS = [
  {
    name: "Starter Website",
    audience: "Business sites, portfolios and landing pages",
    startingPrice: 12000,
    priceLabel: "₹12,000",
    priceNote: "starting price, + GST",
    timeline: "3–6 weeks",
    features: [
      "Custom design that matches your brand",
      "Mobile-friendly and fast-loading build",
      "SEO-ready page structure and metadata",
      "Contact form and WhatsApp enquiries",
    ],
    featured: false,
  },
  {
    name: "E-Commerce Store",
    audience: "Online shops that sell products and take payments",
    startingPrice: 30000,
    priceLabel: "₹30,000",
    priceNote: "starting price, + GST",
    timeline: "6–12 weeks",
    features: [
      "Product catalogue and inventory management",
      "Payment gateway integration",
      "Secure, mobile-first checkout",
      "SEO-ready product pages",
    ],
    featured: true,
  },
  {
    name: "Mobile App",
    audience: "Android and iOS apps for customers or staff",
    startingPrice: null,
    priceLabel: "Custom quote",
    priceNote: "based on features",
    timeline: "6–12 weeks",
    features: [
      "Native or cross-platform (React Native)",
      "Launch QA and performance tuning",
      "Store submission support",
    ],
    featured: false,
  },
  {
    name: "Care Plan",
    audience: "Ongoing updates and growth after launch",
    startingPrice: null,
    priceLabel: "Custom quote",
    priceNote: "monthly, based on scope",
    timeline: "Monthly",
    features: [
      "Updates and security patches",
      "Performance monitoring",
      "Priority support",
      "Growth support and small changes",
    ],
    featured: false,
  },
];

export const PRICE_FACTORS = [
  {
    title: "Number of pages and features",
    text: "A five-page brochure site costs less than a site with booking, login or a custom dashboard.",
  },
  {
    title: "Design work",
    text: "A design built from scratch takes more time than one that follows your existing brand guide.",
  },
  {
    title: "Integrations",
    text: "Payment gateways, shipping, CRMs and third-party APIs each add build and testing time.",
  },
  {
    title: "Content and product data",
    text: "Product photos, descriptions and page copy can come from you or from us. Ready content keeps the timeline short.",
  },
];

export const PRICING_FAQS = [
  {
    q: "How much does a website cost in Vizag?",
    a: "A business website from Host Hive starts at ₹12,000. An e-commerce store starts at ₹30,000. Mobile apps and care plans are quoted after we understand your scope.",
  },
  {
    q: "How much does an ecommerce website cost in India?",
    a: "Our e-commerce stores start at ₹30,000 and include the catalogue, inventory, payment gateway and secure checkout. Larger catalogues, marketplace sync or custom integrations are quoted separately.",
  },
  {
    q: "Is GST included in your prices?",
    a: "The prices on this page do not include GST. GST is added to the invoice as per the law at the time of billing.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Business websites usually take 3–6 weeks. E-commerce stores and mobile apps take 6–12 weeks, depending on complexity. We give you a clear timeline before we start.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Our care plans cover updates, security patches, performance monitoring and priority support. You can choose a plan that fits how often your site changes.",
  },
  {
    q: "How do I get an exact quote?",
    a: "Tell us about your business and what you need on the contact page. We reply within 24 hours with a written quote based on your requirements.",
  },
];
