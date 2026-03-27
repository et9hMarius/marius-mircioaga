import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        // NAVIGATION
        nav_home: "home",
        nav_projects: "projects",
        nav_contact: "contact",
        // SECTION ONE
        hi: "Hi",
        im: "I'm",
        versatile: "Versatile",
        full_stack_web: "Full-Stack Web",
        software: "Software",
        developer: "Developer",
        description:
          "Full-stack developer based in Bucharest. I build web applications, manage infrastructure, and deliver software that solves real problems.",
        // SECTION TWO
        mele: "My",
        skills: "Skills",
        whatido: "What I do",
        title1: "Full-Stack Web Developer",
        description1:
          "Websites and web applications with JavaScript, React, Node.js, and modern CSS. From prototype to production.",
        title2: "Database Administrator",
        description2:
          "Database design and management with MySQL, PostgreSQL, and MongoDB. Schema design, optimization, and migrations.",
        title3: "Cloud Architect",
        description3:
          "Application deployment on AWS, GCP, and Azure. Linux server configuration, CI/CD pipelines, and infrastructure management.",
        title4: "AI Engineer",
        description4:
          "Integrating AI models into applications — ChatGPT, custom models, prompt engineering, and fine-tuning.",
        title5: "Data Science & Scripting",
        description5:
          "Data analysis, visualization, and machine learning with Python. Workflow automation and data pipeline development.",
        title6: "Mobile Developer",
        description6:
          "Cross-platform mobile applications for iOS and Android with React Native and Flutter.",
        // SECTION FOUR
        title41: "Academic Background",
        description41:
          "Studying at Politehnica University of Bucharest. Started as a self-taught programmer, now backed by formal education and industry certifications.",
        title42: "Work Experience",
        description42:
          "Built production software for companies across Romania and Europe. Currently leading development at ArchDevs.",
        title43: "Extracurriculars",
        description43:
          "Active in hackathons, student organizations, and volunteer work — in tech and beyond.",
        title44: "Philosophy",
        description44:
          "Stay current, adopt what works, keep learning. Good software comes from clear thinking and solid fundamentals.",
        meu: "My",
        about: "about",
        whoami: "Who am I",
        // CONTACT
        contact: "Contact",
        me: "me",
        getintouch: "Get in touch",
        foranyinquiries:
          "Reach out for project discussions, collaborations, or general inquiries.",
        emailaddress: "Email Address",
        orthrough: "or find me on",
        // SECTION SIX
        service1: "Full-Stack Web Design & Development",
        service2: "E-Commerce Development",
        service3: "Mobile App Development (iOS & Android)",
        service4: "Fully Customizable Solutions",
        service5: "Server Management & Maintenance",
        service6: "Migration Services",
        service7: "Enhancements and Additions to Existing Code",
        service8: "Third-Party API Integration",
        service9: "Something specific in mind? Let's discuss.",
        servicesoffered: "Services Offered",
        worldwide: "Serving clients worldwide.",
        // SECTION FIVE
        quote1:
          "Any request or issue I had was resolved quickly and professionally. He moves fast and is very reliable. Cool guy to work with, highly recommended.",
        quote2:
          "Marius is a very talented developer and a pleasure to work with. He is extremely flexible, having worked on a variety of projects for us. He is very professional and always delivers on time.",
        quote3:
          "Pleasure to work with. Extremely broad skill set and very reliable.",
        quote4:
          "Professionalism, integrity and passion. Marius is a great developer and a great person to work with. His work is always top-notch and he is always willing to go the extra mile to make sure the project is a success.",
        testim: "Testim",
        onials: "onials",
        whatpartnerssay: "What partners say",
        // SECTION THREE
        mea: "My",
        work: "Work",
        someofmyprojects: "Some of my projects",
        seemore: "See more",
        allprojects: "View more projects",
        // PROJECTS
        all: "All",
        mele2: "my",
        projects: "Projects",
        // ARCHDEVS SECTION
        archdevs_subtitle: "Meet me at",
        archdevs_desc:
          "I currently lead ArchDevs as CEO — a software development company focused on delivering high-quality digital products for clients worldwide.",
        archdevs_cta: "Visit ArchDevs",
      },
    },
    ro: {
      translation: {
        // NAVIGATION
        nav_home: "acasă",
        nav_projects: "proiecte",
        nav_contact: "contact",
        // SECTION ONE
        hi: "Salut",
        im: "Sunt",
        versatile: "Dezvoltator",
        full_stack_web: "Web Full-Stack",
        software: "Software",
        developer: "Senior",
        description:
          "Dezvoltator full-stack din București. Construiesc aplicații web, gestionez infrastructura și livrez software care rezolvă probleme reale.",
        // SECTION TWO
        mele: "Skill-urile",
        skills: "mele",
        whatido: "Ce știu să fac",
        title1: "Dezvoltator Web Full-Stack",
        description1:
          "Site-uri și aplicații web cu JavaScript, React, Node.js și CSS modern. De la prototip la producție.",
        title2: "Administrator de Baze de Date",
        description2:
          "Proiectare și administrare baze de date cu MySQL, PostgreSQL și MongoDB. Design de scheme, optimizare și migrări.",
        title3: "Arhitect Cloud",
        description3:
          "Deployarea aplicațiilor pe AWS, GCP și Azure. Configurare servere Linux, pipelines CI/CD și managementul infrastructurii.",
        title4: "Inginer AI",
        description4:
          "Integrarea modelelor AI în aplicații — ChatGPT, modele custom, prompt engineering și fine-tuning.",
        title5: "Știința Datelor și Automatizare",
        description5:
          "Analiză de date, vizualizare și machine learning cu Python. Automatizarea fluxurilor de lucru și dezvoltarea pipeline-urilor de date.",
        title6: "Dezvoltator Aplicații Mobile",
        description6:
          "Aplicații mobile cross-platform pentru iOS și Android cu React Native și Flutter.",
        // SECTION FOUR
        title41: "Parcurs Academic",
        description41:
          "Student la Universitatea Politehnica din București. Am început ca programator autodidact, acum susținut de educație formală și certificări din industrie.",
        title42: "Experiență Profesională",
        description42:
          "Am dezvoltat software de producție pentru companii din România și Europa. Conduc în prezent dezvoltarea la ArchDevs.",
        title43: "Activități Extra-Curriculare",
        description43:
          "Activ în hackathoane, organizații studențești și voluntariat — în tech și nu numai.",
        title44: "Filosofie",
        description44:
          "Rămâi la curent, adoptă ce funcționează, continuă să înveți. Software-ul bun vine din gândire clară și fundamente solide.",
        meu: "Despre",
        about: "mine",
        whoami: "Cine sunt eu",
        // CONTACT
        contact: "Contactează-",
        me: "mă",
        getintouch: "Hai să colaborăm",
        foranyinquiries:
          "Contactează-mă pentru discuții de proiecte, colaborări sau întrebări generale.",
        emailaddress: "Adresa Email",
        orthrough: "sau pe",
        // SECTION SIX
        service1: "Design și Dezvoltare Web Full-Stack",
        service2: "Dezvoltare E-Commerce",
        service3: "Dezvoltare Aplicații Mobile (iOS & Android)",
        service4: "Soluții Complet Personalizabile",
        service5: "Management și Mentenanță Server",
        service6: "Servicii de Migrare",
        service7: "Îmbunătățiri și Adăugări la Cod Existent",
        service8: "Integrare API-uri Terțe",
        service9: "Ai nevoie de ceva specific? Hai să discutăm.",
        servicesoffered: "Servicii Oferite",
        worldwide: "Clienți din întreaga lume.",
        // SECTION FIVE
        quote1:
          "Orice solicitare sau problemă pe care am avut-o a fost rezolvată rapid și profesional. Se mișcă repede și este foarte de încredere. Un tip fain cu care să lucrezi, recomand cu încredere.",
        quote2:
          "Marius este un programator foarte talentat și o plăcere să lucrezi cu el. Este extrem de flexibil, lucrând la o varietate de proiecte pentru noi. Este foarte profesionist și întotdeauna livrează la timp.",
        quote3:
          "O plăcere să lucrezi cu el. Set de abilități extrem de larg și foarte de încredere.",
        quote4:
          "Profesionalism, integritate și pasiune. Marius este un dezvoltator excelent și o persoană minunată cu care să lucrezi. Munca sa este întotdeauna de top și este mereu dispus să depună efort suplimentar pentru succesul proiectului.",
        testim: "Testim",
        onials: "oniale",
        whatpartnerssay: "Ce spun clienții",
        // SECTION THREE
        mea: "Munca",
        work: "Mea",
        someofmyprojects: "Câteva proiecte",
        seemore: "Vezi mai mult",
        allprojects: "Vezi toate proiectele",
        // PROJECTS
        all: "Toate",
        mele2: "proiectele",
        projects: "Mele",
        // ARCHDEVS SECTION
        archdevs_subtitle: "Găsește-mă la",
        archdevs_desc:
          "Conduc ArchDevs în calitate de CEO — o companie de dezvoltare software axată pe livrarea de produse digitale de calitate pentru clienți din toată lumea.",
        archdevs_cta: "Vizitează ArchDevs",
      },
    },
    fr: {
      translation: {
        // NAVIGATION
        nav_home: "accueil",
        nav_projects: "projets",
        nav_contact: "contact",
        // SECTION ONE
        hi: "Bonjour",
        im: "Je suis",
        versatile: "Développeur",
        full_stack_web: "Web Full-Stack",
        software: "Logiciel",
        developer: "Polyvalent",
        description:
          "Développeur full-stack basé à Bucarest. Je conçois des applications web, gère l'infrastructure et livre des logiciels qui résolvent des problèmes concrets.",
        // SECTION TWO
        mele: "Mes",
        skills: "Compétences",
        whatido: "Ce que je fais",
        title1: "Développeur Web Full-Stack",
        description1:
          "Sites web et applications avec JavaScript, React, Node.js et CSS moderne. Du prototype à la production.",
        title2: "Administrateur de Bases de Données",
        description2:
          "Conception et gestion de bases de données avec MySQL, PostgreSQL et MongoDB. Modélisation, optimisation et migrations.",
        title3: "Architecte Cloud",
        description3:
          "Déploiement d'applications sur AWS, GCP et Azure. Configuration de serveurs Linux, pipelines CI/CD et gestion d'infrastructure.",
        title4: "Ingénieur IA",
        description4:
          "Intégration de modèles IA dans les applications — ChatGPT, modèles personnalisés, prompt engineering et fine-tuning.",
        title5: "Science des Données et Scripting",
        description5:
          "Analyse de données, visualisation et machine learning avec Python. Automatisation de flux de travail et pipelines de données.",
        title6: "Développeur Mobile",
        description6:
          "Applications mobiles multiplateformes pour iOS et Android avec React Native et Flutter.",
        // SECTION FOUR
        title41: "Parcours Académique",
        description41:
          "Étudiant à l'Université Politehnica de Bucarest. Autodidacte au départ, maintenant soutenu par une formation académique et des certifications professionnelles.",
        title42: "Expérience Professionnelle",
        description42:
          "Développement de logiciels en production pour des entreprises en Roumanie et en Europe. Actuellement à la tête du développement chez ArchDevs.",
        title43: "Activités Extrascolaires",
        description43:
          "Actif dans les hackathons, les organisations étudiantes et le bénévolat — dans le domaine tech et au-delà.",
        title44: "Philosophie",
        description44:
          "Rester à jour, adopter ce qui fonctionne, continuer à apprendre. Un bon logiciel naît d'une réflexion claire et de bases solides.",
        meu: "À",
        about: "propos",
        whoami: "Qui suis-je",
        // CONTACT
        contact: "Contactez-",
        me: "moi",
        getintouch: "Prenons contact",
        foranyinquiries:
          "N'hésitez pas à me contacter pour des projets, collaborations ou questions générales.",
        emailaddress: "Adresse Email",
        orthrough: "ou sur",
        // SECTION SIX
        service1: "Conception et Développement Web Full-Stack",
        service2: "Développement E-Commerce",
        service3: "Développement d'Applications Mobiles (iOS & Android)",
        service4: "Solutions Entièrement Personnalisables",
        service5: "Gestion et Maintenance de Serveurs",
        service6: "Services de Migration",
        service7: "Améliorations et Ajouts au Code Existant",
        service8: "Intégration d'API Tierces",
        service9: "Un besoin spécifique ? Discutons-en.",
        servicesoffered: "Services Proposés",
        worldwide: "Au service de clients dans le monde entier.",
        // SECTION FIVE
        quote1:
          "Chaque demande ou problème a été résolu rapidement et professionnellement. Il travaille vite et est très fiable. Excellent collaborateur, je le recommande vivement.",
        quote2:
          "Marius est un développeur très talentueux et c'est un plaisir de travailler avec lui. Extrêmement flexible, ayant travaillé sur divers projets pour nous. Très professionnel et toujours ponctuel.",
        quote3:
          "Un plaisir de collaborer. Compétences très larges et extrêmement fiable.",
        quote4:
          "Professionnalisme, intégrité et passion. Marius est un excellent développeur et une personne formidable. Son travail est toujours de premier ordre et il fait toujours le maximum pour assurer le succès du projet.",
        testim: "Témoig",
        onials: "nages",
        whatpartnerssay: "Ce que disent nos partenaires",
        // SECTION THREE
        mea: "Mon",
        work: "Travail",
        someofmyprojects: "Quelques-uns de mes projets",
        seemore: "Voir plus",
        allprojects: "Voir tous les projets",
        // PROJECTS
        all: "Tous",
        mele2: "mes",
        projects: "Projets",
        // ARCHDEVS SECTION
        archdevs_subtitle: "Retrouvez-moi chez",
        archdevs_desc:
          "Je dirige ArchDevs en tant que CEO — une entreprise de développement logiciel axée sur la livraison de produits numériques de qualité pour des clients du monde entier.",
        archdevs_cta: "Visiter ArchDevs",
      },
    },
  },
});

export default i18n;
