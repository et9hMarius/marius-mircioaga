const projects = [
  {
    keyId: 1,
    show: true,
    id: "importdinchina",
    image: "/images/projects/1.png",
    title: "Landing Page",
    title_ro: "Pagina de Prezentare",
    title_fr: "Page d'Atterrissage",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS"],
    description:
      "A well-crafted landing page turns visitors into customers. Custom-built to reflect your brand identity, it drives attention and builds trust in your services.",
    description_ro:
      "Un site de prezentare bine realizat transformă vizitatorii în clienți. Personalizat pentru a reflecta identitatea brandului, atrage atenția și crește încrederea în serviciile oferite.",
    description_fr:
      "Une page d'atterrissage bien conçue convertit les visiteurs en clients. Construite sur mesure pour refléter l'identité de votre marque et renforcer la confiance.",
    tags: [
      "Sleek Design",
      "User-Centric UI",
      "Optimized Performance",
      "Responsive",
    ],
    link: "https://import-din-china.vercel.app",
  },
  {
    keyId: 2,
    show: true,
    id: "attiva",
    image: "/images/projects/2.png",
    title: "Data Management Application",
    title_ro: "Aplicație de Management al Datelor",
    title_fr: "Application de Gestion de Données",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS", "Python", "MySQL"],
    description:
      "Centralized data management with a clean control panel and fast database. Intuitive interface for creating, reading, updating, and deleting records in one place.",
    description_ro:
      "Gestiune centralizată a datelor cu un panou de control curat și o bază de date rapidă. Interfață intuitivă pentru crearea, citirea, actualizarea și ștergerea înregistrărilor.",
    description_fr:
      "Gestion centralisée des données avec un panneau de contrôle clair et une base de données rapide. Interface intuitive pour créer, lire, modifier et supprimer des enregistrements.",
    tags: [
      "CRUD",
      "Responsive",
      "Interactive",
      "Admin Panel",
      "Database Integration",
    ],
    link: "https://attiva.ro",
  },
  {
    keyId: 3,
    show: true,
    id: "vintello",
    image: "/images/projects/3.png",
    title: "E-Commerce Application",
    title_ro: "Aplicație de Comerț Electronic",
    title_fr: "Application E-Commerce",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS", "CSharp", "MySQL"],
    description:
      "According to the ITU, approximately 60% of online customers spend more money online than in-store. An e-commerce platform digitizes your business and offers customers a secure, seamless shopping experience.",
    description_ro:
      "Conform ITU, aproximativ 60% din clienții online cheltuiesc mai mulți bani online decât în magazin. O platformă e-commerce digitalizează afacerea și oferă clienților o experiență de cumpărare sigură.",
    description_fr:
      "Selon l'UIT, environ 60% des clients en ligne dépensent plus qu'en magasin. Une plateforme e-commerce numérise votre activité et offre une expérience d'achat sécurisée.",
    tags: [
      "E-Commerce",
      "User Friendly",
      "Integrated Services",
      "Responsive",
      "Admin Panel",
    ],
    link: "https://vintello.ro",
  },
  {
    keyId: 4,
    show: true,
    id: "ceoclubscrm",
    image: "/images/projects/4.png",
    title: "CRM App",
    title_ro: "Aplicație de CRM",
    title_fr: "Application CRM",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS", "CSharp", "MySQL"],
    description:
      "Centralize customer information in one place. By tracking visitor interactions through graphs and analytics, the CRM provides a clear overview of customer behavior and boosts team efficiency.",
    description_ro:
      "Centralizează informațiile despre clienți într-un singur loc. Prin urmărirea interacțiunilor prin grafice și analize, CRM-ul oferă o imagine de ansamblu asupra comportamentului clienților și crește eficiența.",
    description_fr:
      "Centralisez les informations clients en un seul endroit. En suivant les interactions via des graphiques et analyses, le CRM offre une vue d'ensemble du comportement client et améliore l'efficacité.",
    tags: [
      "CRM",
      "User Friendly",
      "Admin Panel",
      "Responsive",
      "Data Management",
    ],
  },
  {
    keyId: 11,
    id: "norisorumidificator",
    image: "/images/projects/11.png",
    link: "https://umidificator-mario-et9hmarius.vercel.app/",
  },
  {
    keyId: 5,
    show: true,
    id: "pathfinder",
    image: "/images/projects/5.png",
    title: "Data Visualizer",
    title_ro: "Vizualizarea Datelor",
    title_fr: "Visualiseur de Données",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS", "Python"],
    description:
      "Interactive data visualizations that turn complex datasets into clear insights. A tool for spotting trends, understanding patterns, and making informed decisions through charts and graphs.",
    description_ro:
      "Vizualizări interactive de date care transformă seturi complexe în informații clare. Un instrument pentru identificarea tendințelor și luarea deciziilor informate prin diagrame și grafice.",
    description_fr:
      "Visualisations de données interactives qui transforment des ensembles complexes en informations claires. Un outil pour identifier les tendances et prendre des décisions éclairées.",
    tags: ["Data Visualization", "Interactive", "Responsive"],
    link: "https://maps-pathfinding-visualiser-ag5r.vercel.app",
  },
  {
    keyId: 6,
    id: "portfolio",
    image: "/images/projects/6.png",
    link: "https://portofolio-fe.vercel.app/",
  },
  {
    keyId: 7,
    id: "nolimits",
    image: "/images/projects/7.png",
    link: "https://portofolio-fe.vercel.app/project/0",
  },
  {
    keyId: 8,
    id: "masinide16ani",
    image: "/images/projects/8.png",
    link: "https://mario-masini-fe.vercel.app",
  },
  {
    keyId: 9,
    id: "intelliv",
    image: "/images/projects/12.png",
    link: "https://intelliv.ro",
  },
  {
    keyId: 10,
    id: "unicornit",
    image: "/images/projects/13.png",
    link: "https://unicorn-tech.org",
  },
  {
    keyId: 20,
    show: true,
    id: "zenkoai",
    image: "/images/projects/9.png",
    title: "AI Chatbot",
    title_ro: "Chatbot AI",
    title_fr: "Chatbot IA",
    tech_icons: ["OpenAI", "HTML", "React", "JS", "CSS", "SASS", "Python"],
    description:
      "An AI chatbot tailored to your business needs. Available 24/7, it handles multiple customer queries simultaneously, automating support and reducing response times.",
    description_ro:
      "Un chatbot AI adaptat nevoilor afacerii tale. Disponibil 24/7, gestionează mai multe cereri simultan, automatizând suportul și reducând timpii de răspuns.",
    description_fr:
      "Un chatbot IA adapté aux besoins de votre entreprise. Disponible 24h/24, il gère plusieurs demandes simultanément, automatisant le support et réduisant les délais de réponse.",
    tags: ["AI", "Chatbot", "Responsive", "Interactive"],
  },
  {
    keyId: 21,
    id: "selfit",
    image: "/images/projects/10.png",
    link: "https://selfit.app",
  },
];
export default projects;
