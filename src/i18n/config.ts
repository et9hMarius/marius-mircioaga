// Core i18next library.
import i18n from "i18next";
// Bindings for React: allow components to
// re-render when language changes.
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",

  debug: true,

  interpolation: {
    escapeValue: false,
  },

  // Translation messages. Add any languages
  // you want here.
  resources: {
    // English
    en: {
      translation: {
        flag: "/images/uk.png",
        switch: "ro",
        //SECTION_ONE
        hi: "Hi",
        im: "I'm",
        versatile: "Versatile",
        full_stack_web: "Full-Stack Web",
        software: "Software",
        developer: "Developer",
        description:
          "Dedicated student and open-minded developer, committed to lifelong learning, ensuring client satisfaction through unyielding persistence.",
        //SECTION_TWO
        mele: "My",
        skills: "Skills",
        whatido: "What I do",
        title1: "Full-Stack Web Developer",
        description1:
          "Building websites and web applications using JavaScript, React, HTML, CSS, Node.js, Express and more.",
        title2: "Database Administrator",
        description2:
          "Designing and maintaining databases using SQL and NoSQL. Comfotable with MySQL, PostgreSQL, MongoDB and more.",

        title3: "Cloud Architect",
        description3:
          "Deploying and maintaining applications in the cloud using AWS, GCP and Azure. Can configure a Linux server from scratch.",
        title4: "AI Prompt Engineer",
        description4:
          "Integration ChatGPT and other AI models into your applications. Can train and fine-tune models for your specific use case.",
        title5: "Data Scientist & Scripting",
        //Python, NumPy, Pandas, Matplotlib, Scikit-Learn
        description5:
          "Analyzing data and creating visualizations; training machine learning models & automating repetitive tasks with Python.",
        title6: "Mobile Developer",
        description6:
          "Building responsive mobile applications for iOS and Android using React Native, Flutter and other frameworks.",
        //SECTION_FOUR
        title41: "Academic Background",
        description41:
          "I am a student at the University Politehnica of Bucharest. Starting as a self-taught programmer, I have since completed serveral courses and certifications.",
        title42: "Work Experience",
        description42:
          "Over the years,I have gained valuable work experience as a software developer with companies from both local and European markets.",
        title43: "Extra-Curricular Activities",
        description43:
          "In addition to my work experience, I've been actively involved in extracurricular activities, both within and outside the IT domain, including hackathons, volunteering and being part of the students' league.",
        title44: "Phylosophy",
        description44:
          "I believe that the key to success is to never stop learning. I love embracing new technologies and innovative problem-solving techniques.",
        meu: "My",
        about: "about",
        whoami: "Who am I",
        //CONTACT
        contact: "Contact",
        me: "me",
        getintouch: "Let's get in touch",
        foranyinquiries:
          "For any inquiries, website development, or project collaboration, feel free to contact me. ",
        emailaddress: "Email Address",
        phonenum: "Phone Number",
        orthrough: "or through",
        //SECTIONSIX
        service1: "Full-stack Web Design & Development",
        service2: "E-commerce Development",
        service3: "Mobile App Development (iOS & Android)",
        service4: "Fully Customizable Solutions",
        service5: "Server Management & Maintenance",
        service6: "Migration Services",
        service7: "Enhancements and Additions to Existing Code",
        service8: "Third-party API Integration",
        service9: "Need something more specific? Let's talk!",
        servicesoffered: "Services Offered",
        worldwide: "Serving clients worldwide.",
        //SECTION_FIVE
        quote1:
          "Any request or issue I had was resolved quickly and professionally. He moves fast and is very reliable. Cool guy to work with, highly recommended.",
        quote2:
          "Marius is a very talented developer and a pleasure to work with. He is extremely flexible, having worked on a variety of projects for us. He is very professional and always delivers on time.",
        quote3:
          "Pleasure to work with. Extremely broad skill set and very reliable.",
        quote4:
          "Professionalism, integrity and pasion. Marius is a great developer and a great person to work with. His work is always top-notch and he is always willing to go the extra mile to make sure the project is a success.",
        testim: "Testim",
        onials: "onials",
        whatpartnerssay: "What partners say",
      },
    },
    // Romanian
    ro: {
      translation: {
        flag: "/images/romania.png",
        switch: "en",
        //SECTION_ONE
        hi: "Salut",
        im: "Sunt",
        versatile: "Dezvoltator",
        full_stack_web: "Web Full-Stack",
        software: "Software",
        developer: "Senior",
        description:
          "Student dedicat și programator flexibil. Mereu pun în prim-plan nevoile clientului și calitatea produsului final. Hai să îți facem următorul proiect o realitate!",
        //SECTION_TWO
        mele: "Skill-urile",
        skills: "mele",
        whatido: "Ce stiu sa fac",
        title1: "Dezvoltator Web Full-Stack",
        description1:
          "Construiesc site-uri și aplicații web folosind JavaScript, React, HTML, CSS, Node.js, Express și altele.",
        title2: "Administrator de Baze de Date",
        description2:
          "Proiectez și întrețin baze de date folosind SQL și NoSQL. Mă descurc cu MySQL, PostgreSQL, MongoDB și altele.",
        title3: "Arhitect Cloud",
        description3:
          "Implementez și întrețin aplicații în cloud folosind AWS, GCP și Azure. Pot configura un server Linux de la zero.",
        title4: "Inginer AI",
        description4:
          "Integrez ChatGPT și alte modele AI în aplicațiile tale. Pot antrena și optimiza modele pentru cazuri specifice.",
        title5: "Stiința Datelor și Automatizare",
        description5:
          "Analizez și vizualizez date; antrenez modele de machine learning și automatizez task-uri repetitive cu Python.",
        title6: "Dezvoltator Aplicații Mobile",
        description6:
          "Construiesc aplicații mobile responsive pentru iOS și Android folosind React Native, Flutter și alte framework-uri.",
        //SECTION_FOUR
        title41: "Parcurs Academic",
        description41:
          "Sunt student la Universitatea Politehnica din București. Am început ca programator autodidact și am absolvit de atunci mai multe cursuri și certificări.",
        title42: "Experiența Profesionala",
        description42:
          "De-a lungul anilor, am acumulat experiență valoroasă ca dezvoltator software cu companii din piețele locale și europene.",
        title43: "Activitați Extra-Curriculare",
        description43:
          "În plus față de experiența mea de muncă, am fost activ implicat în activități extra-curriculare, atât în domeniul IT, cât și în afara acestuia, incluzând hackathoane, voluntariat și fac parte din liga studenților.",
        title44: "Filosofie",
        description44:
          "Sunt de părere că cheia succesului este să nu încetezi niciodată să înveți. Îmi place să adopt tehnologii noi și tehnici inovative de rezolvare a problemelor.",
        meu: "Despre",
        about: "mine",
        whoami: "Cine sunt eu",
        //CONTACT
        contact: "Contacteaza-",
        me: "ma",
        getintouch: "Hai să colaborăm",
        foranyinquiries:
          "Pentru orice întrebări, dezvoltari de site-uri sau colaborări proiecte, nu ezita să mă contactezi.",
        emailaddress: "Adresa Email",
        phonenum: "Numar Telefon",
        orthrough: "sau prin",
        //SECTIONSIX
        service1: "Design și Dezvoltare Aplicații Web Full-Stack",
        service2: "Dezvoltare E-commerce",
        service3: "Dezvoltare Aplicații Mobile (iOS & Android)",
        service4: "Soluții Complet Personalizabile",
        service5: "Management și Mentenanță Server",
        service6: "Servicii de Migrare Servere, Găzduire și Baze de Date",
        service7: "Revizuiri și Adăugari la Proiecte Existente",
        service8: "Integrare API-uri Terțe",
        service9: "Ai nevoie de ceva mai specific? Hai să discutăm!",
        servicesoffered: "Servicii Oferite",
        worldwide: "Clienti din întreaga lume.",
        //SECTION_FIVE
        quote1:
          "Orice solicitare sau problemă pe care am avut-o a fost rezolvată rapid și profesional. Se mișcă repede și este foarte de încredere. Un tip fain cu care să lucrezi, recomand cu încredere.",
        quote2:
          "Marius este un programator foarte talentat și o plăcere să lucrezi cu el. Este extrem de flexibil, lucrand la o varietate de proiecte pentru noi. Este foarte profi și întotdeauna livrează la timp.",
        quote3:
          "Plăcere să lucrezi cu el. Set de abilități extrem de larg și foarte de încredere.",
        quote4:
          "Profesionalism, integritate și pasiune. Marius este un mare dezvoltator și o persoană minunată cu care să lucrezi. Munca sa este întotdeauna de top și este întotdeauna dispus să meargă un pas în plus pentru a se asigura că proiectul este un succes.",
        testim: "Testim",
        onials: "oniale",
        whatpartnerssay: "Ce spun clienții",
      },
    },
  },
});

export default i18n;
