// Site-wide facts and per-route metadata: the single source of truth for the
// head tags (src/components/seo.jsx), JSON-LD (src/structuredData.js), the
// article index and headers (blogPage.jsx, ArticleLayout.jsx) and the
// sitemap, RSS feed and llms.txt (scripts/prerender.mjs). Every route in
// App.js needs an entry here; the prerender step fails the build otherwise.
//
// Dates are calendar dates (YYYY-MM-DD). `dateModified` is the last
// significant content change of the page and feeds sitemap <lastmod>, so
// bump it when the page's content changes, not for cosmetic edits.

export const SITE_URL = "https://mariusmircioaga.com";
export const SITE_NAME = "Marius Mircioaga";
export const SITE_DESCRIPTION =
  "Full-stack and AI integration developer in Pitești, Romania. White-label overflow development for agencies, audits and upgrades for legacy and AI-built apps. Founder of ARCHDEVS.";
// First commit of the site; used as the profile page's dateCreated.
export const SITE_CREATED = "2023-10-06";

export const absoluteUrl = (p) => (/^https?:\/\//.test(p) ? p : SITE_URL + p);

export const DEFAULT_IMAGE = {
  src: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Marius Mircioaga — full-stack & AI integration developer",
};

// Facts below appear on the home page; structured data must match what
// visitors can see.
export const PERSON = {
  "@id": `${SITE_URL}/#person`,
  name: "Marius Mircioaga",
  givenName: "Marius",
  familyName: "Mircioaga",
  jobTitle: "Full-Stack Software Developer & Founder",
  description:
    "Full-stack developer based in Pitești, Romania, and founder of ARCHDEVS SRL. Builds web applications and e-commerce stores, manages cloud infrastructure and databases, integrates AI models into products, and develops cross-platform mobile apps for clients worldwide.",
  url: SITE_URL,
  image: {
    src: "/images/marius.png",
    width: 349,
    height: 436,
    alt: "Portrait of Marius Mircioaga",
  },
  email: "mariusmircioaga@gmail.com",
  address: { locality: "Pitești", country: "RO" },
  // Only the person's own profiles; the company is linked through worksFor.
  sameAs: [
    "https://www.linkedin.com/in/marius-mircioaga-b92307299/",
    "https://github.com/et9hMarius",
  ],
  knowsAbout: [
    "Full-stack web development",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    ".NET",
    "Python",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Google Cloud",
    "Microsoft Azure",
    "Linux server administration",
    "CI/CD pipelines",
    "AI integration",
    "ChatGPT integration",
    "Prompt engineering",
    "Machine learning",
    "Data analysis",
    "React Native",
    "Flutter",
    "E-commerce development",
    "CRM development",
  ],
};

export const ORGANIZATION = {
  "@id": `${SITE_URL}/#organization`,
  name: "ARCHDEVS SRL",
  alternateName: "ArchDevs",
  url: "https://www.archdevs.org/",
  description:
    "Software development company founded by Marius Mircioaga, delivering web, mobile and AI products for clients worldwide.",
};

const image = (src, width, height, alt) => ({ src, width, height, alt });

export const pageMeta = {
  "/": {
    type: "profile",
    title:
      "Marius Mircioaga — Full-stack & AI integration developer | Founder, ARCHDEVS",
    description: SITE_DESCRIPTION,
    dateModified: "2026-09-19",
  },
  "/projects": {
    type: "collection",
    headline: "Projects",
    navName: "Projects",
    title: "Projects — Marius Mircioaga",
    description:
      "Projects by Marius Mircioaga, full-stack developer and founder of ARCHDEVS: web apps, e-commerce stores, a CRM, data tools and AI chatbots.",
    dateModified: "2026-09-19",
  },
  "/projects/ceoclubscrm": {
    type: "project",
    headline: "CEO Clubs CRM",
    title: "CEO Clubs CRM — Project by Marius Mircioaga",
    description:
      "A CRM built for CEO Clubs to manage members, events and partners, and the backend for its mobile app. Built with .NET, React, Next.js and MySQL.",
    image: image(
      "/images/projects/ceoclubs/main.png",
      1789,
      870,
      "CEO Clubs CRM dashboard with member statistics and gender and nationality charts"
    ),
    keywords: [".NET", "React", "Next.js", "MySQL", "Ant Design", "CRM"],
    datePublished: "2024-01-09",
    dateModified: "2026-09-19",
  },
  "/projects/zenkoai": {
    type: "project",
    headline: "Zenko AI",
    title: "Zenko AI — Project by Marius Mircioaga",
    description:
      "Festival chatbot built during a hackathon: answers questions about events and bus and train schedules, with GPS support. React, Node.js, Python and OpenAI.",
    image: image(
      "/images/projects/zenkoai/4.png",
      1849,
      832,
      "Zenko AI chat window answering questions about a festival, next to a meditating robot illustration"
    ),
    keywords: ["React", "Node.js", "Python", "OpenAI", "Chatbot", "Hackathon"],
    datePublished: "2024-06-22",
    dateModified: "2026-09-19",
  },
  "/articles": {
    type: "collection",
    // headline is the visible <h1>; navName is the short label breadcrumbs use.
    headline: "Latest Articles",
    navName: "Articles",
    title: "Articles — Marius Mircioaga",
    description:
      "Articles by Marius Mircioaga on full-stack web development, custom web solutions, mobile apps and SEO-friendly websites.",
    dateModified: "2026-09-19",
  },
  "/articles/full-stack-web-development-services": {
    type: "article",
    headline: "Full Stack Web Development Services",
    title: "Full Stack Web Development Services — Marius Mircioaga",
    description:
      "Choosing the right web development company is crucial for your business. How do you know which one is the best fit for you?",
    image: image(
      "/images/article/full-stack-web-development-services.jpg",
      1600,
      1059,
      "Developer's hand typing CSS code on a laptop keyboard"
    ),
    keywords: ["Full stack development", "Web development services", "Front-end", "Back-end"],
    datePublished: "2024-01-01",
    dateModified: "2026-09-19",
  },
  "/articles/custom-web-development-solutions": {
    type: "article",
    headline:
      "Custom Web Development Solutions: Crafting Your Unique Online Presence",
    title: "Custom Web Development Solutions — Marius Mircioaga",
    description:
      "Custom web development solutions offer unparalleled flexibility and scalability for businesses of all sizes.",
    image: image(
      "/images/article/custom-web-development-solutions.jpg",
      1600,
      1068,
      "Developer holding a phone next to a laptop showing Android Studio code, with a coffee cup on the table"
    ),
    keywords: ["Custom web development", "Bespoke websites", "Scalability", "Web design"],
    datePublished: "2024-01-13",
    dateModified: "2026-09-19",
  },
  "/articles/affordable-web-development-packages": {
    type: "article",
    headline:
      "Affordable Web Development Packages: Building Your Online Presence Without Breaking the Bank",
    title: "Affordable Web Development Packages — Marius Mircioaga",
    description:
      "Affordable web development packages are a great way to get a high-quality website without breaking the bank.",
    image: image(
      "/images/article/affordable-web-development-packages.jpg",
      1600,
      1143,
      "Developer at a desk reviewing an e-commerce web page on a large monitor"
    ),
    keywords: ["Affordable web development", "Website packages", "Small business websites", "Pricing"],
    datePublished: "2024-01-19",
    dateModified: "2026-09-19",
  },
  "/articles/innovative-digital-solutions": {
    type: "article",
    headline: "Innovative Digital Solutions",
    title: "Innovative Digital Solutions — Marius Mircioaga",
    description:
      "Innovative digital solutions can help your business stand out from the competition and attract more customers.",
    image: image(
      "/images/article/innovative-digital-solutions.jpg",
      1600,
      1063,
      "Close-up of a code editor showing a Ruby test configuration file"
    ),
    keywords: ["Digital solutions", "Digital transformation", "Innovation", "Business technology"],
    datePublished: "2024-01-23",
    dateModified: "2026-09-19",
  },
  "/articles/mobile-app-development-specialists": {
    type: "article",
    headline: "Mobile App Development Specialists",
    title: "Mobile App Development Specialists — Marius Mircioaga",
    description:
      "Mobile app development specialists can help you create a custom app that meets your business needs and goals.",
    image: image(
      "/images/article/mobile-app-development-specialists.jpg",
      1600,
      1063,
      "Desk with an iMac, a MacBook Pro and an iPad showing a business website"
    ),
    keywords: ["Mobile app development", "iOS", "Android", "Cross-platform apps"],
    datePublished: "2024-01-29",
    dateModified: "2026-09-19",
  },
  "/articles/seo-friendly-website-development": {
    type: "article",
    headline: "SEO-Friendly Website Development",
    title: "SEO-Friendly Website Development — Marius Mircioaga",
    description:
      "Learn about the importance of SEO-friendly website development and how to optimize your website for search engines.",
    image: image(
      "/images/article/seo-friendly-website-development.jpg",
      1600,
      1067,
      "iMac on a white desk showing an SEO analytics dashboard with a visibility graph"
    ),
    keywords: ["SEO", "Website development", "Search engine optimization", "Technical SEO"],
    datePublished: "2024-02-03",
    dateModified: "2026-09-19",
  },
  "/articles/high-quality-web-development-services": {
    type: "article",
    headline: "High-Quality Web Development Services",
    title: "High-Quality Web Development Services — Marius Mircioaga",
    description:
      "High-quality web development services are essential for creating a professional and functional website that meets your business needs.",
    image: image(
      "/images/article/high-quality-web-development-services.jpg",
      1600,
      1066,
      "Smiling developer at a desk with several monitors holding an open notebook"
    ),
    keywords: ["Web development services", "Quality assurance", "Professional websites", "Web agencies"],
    datePublished: "2024-02-11",
    dateModified: "2026-09-19",
  },
};

export const articlePaths = Object.keys(pageMeta).filter(
  (path) => pageMeta[path].type === "article"
);
export const projectPaths = Object.keys(pageMeta).filter(
  (path) => pageMeta[path].type === "project"
);
