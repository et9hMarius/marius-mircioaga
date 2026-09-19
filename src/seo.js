// Per-route <title> and meta description. Every route in App.js needs an
// entry here: the prerender step (scripts/prerender.mjs) fails the build if
// one is missing or duplicated, and builds sitemap.xml from these paths.

export const SITE_URL = "https://mariusmircioaga.com";

export const pageMeta = {
  "/": {
    title:
      "Marius Mircioaga — Full-stack & AI integration developer | Founder, ARCHDEVS",
    description:
      "Full-stack and AI integration developer in Pitești, Romania. White-label overflow development for agencies, audits and upgrades for legacy and AI-built apps. Founder of ARCHDEVS.",
  },
  "/projects": {
    title: "Projects — Marius Mircioaga",
    description:
      "Projects by Marius Mircioaga, full-stack developer and founder of ARCHDEVS: web apps, e-commerce stores, a CRM, data tools and AI chatbots.",
  },
  "/projects/ceoclubscrm": {
    title: "CEO Clubs CRM — Project by Marius Mircioaga",
    description:
      "A CRM built for CEO Clubs to manage members, events and partners, and the backend for its mobile app. Built with .NET, React, Next.js and MySQL.",
  },
  "/projects/zenkoai": {
    title: "Zenko AI — Project by Marius Mircioaga",
    description:
      "Festival chatbot built during a hackathon: answers questions about events and bus and train schedules, with GPS support. React, Node.js, Python and OpenAI.",
  },
  "/articles": {
    title: "Articles — Marius Mircioaga",
    description:
      "Articles by Marius Mircioaga on full-stack web development, custom web solutions, mobile apps and SEO-friendly websites.",
  },
  "/articles/full-stack-web-development-services": {
    title: "Full Stack Web Development Services — Marius Mircioaga",
    description:
      "Choosing the right web development company is crucial for your business. How do you know which one is the best fit for you?",
  },
  "/articles/custom-web-development-solutions": {
    title: "Custom Web Development Solutions — Marius Mircioaga",
    description:
      "Custom web development solutions offer unparalleled flexibility and scalability for businesses of all sizes.",
  },
  "/articles/affordable-web-development-packages": {
    title: "Affordable Web Development Packages — Marius Mircioaga",
    description:
      "Affordable web development packages are a great way to get a high-quality website without breaking the bank.",
  },
  "/articles/innovative-digital-solutions": {
    title: "Innovative Digital Solutions — Marius Mircioaga",
    description:
      "Innovative digital solutions can help your business stand out from the competition and attract more customers.",
  },
  "/articles/mobile-app-development-specialists": {
    title: "Mobile App Development Specialists — Marius Mircioaga",
    description:
      "Mobile app development specialists can help you create a custom app that meets your business needs and goals.",
  },
  "/articles/seo-friendly-website-development": {
    title: "SEO-Friendly Website Development — Marius Mircioaga",
    description:
      "Learn about the importance of SEO-friendly website development and how to optimize your website for search engines.",
  },
  "/articles/high-quality-web-development-services": {
    title: "High-Quality Web Development Services — Marius Mircioaga",
    description:
      "High-quality web development services are essential for creating a professional and functional website that meets your business needs.",
  },
};
