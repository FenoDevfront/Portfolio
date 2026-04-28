import { createContext, useContext, useState } from 'react';

const translations = {
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
    },
    // Personal
    personal: {
      title: 'Chef de projet & Développeur Web Full-Stack',
      summary: "+8 sites web livrés avec un taux de satisfaction client de 95%. Chef de projet et développeur full-stack avec 3+ ans d'expérience, je pilote des projets web de A à Z : de la conception technique au déploiement en production. Spécialisé en WordPress/WooCommerce et Python/Flask, j'applique les méthodologies Agile/Scrum pour livrer des solutions performantes dans les délais.",
    },
    // Experiences
    experiences: [
      {
        title: "Chef de Projet & Validateur Web",
        company: "Tsarajoro",
        period: "Déc 2024 – Présent",
        tasks: [
          "Supervision technique d'une équipe de 4 développeurs, 3 techniciens et 5 VA pour un site blog multi-auteurs",
          "Pilotage Agile (sprints de 2 semaines) : 100% des livrables dans les délais",
          "Déploiement serveur et optimisation SEO : +40% de trafic organique en 2 mois",
          "Mise en place de revues de code et CI/CD avec GitHub Actions"
        ]
      },
      {
        title: "Développeur Front-end",
        company: "Tsarajoro",
        period: "Mai 2024 – Nov 2024",
        tasks: [
          "Développement d'interfaces responsive (HTML5, CSS3, JavaScript) avec intégration pixel-perfect",
          "Optimisation performances web (Performance, Accessibilité, SEO)",
          "Intégration d'API REST pour le système de commentaires et authentification",
          "Réduction du temps de chargement de 3.2s à 1.4s via lazy loading et compression"
        ]
      },
      {
        title: "Intégrateur WordPress",
        company: "Netykom",
        period: "Avr 2023 – Avr 2024",
        tasks: [
          "Conception et livraison de +8 sites WordPress (vitrines et e-commerce WooCommerce)",
          "Développement de thèmes et plugins personnalisés en PHP : 95% de satisfaction client",
          "Gestion hébergements (cPanel), déploiement FTP/SSH, configuration serveurs Linux",
          "Formation clients à l'administration WordPress : 100% autonomes après livraison"
        ]
      }
    ],
    // Projects
    projectsList: [
      {
        name: "Portfolio Personnel",
        type: "Application Web",
        description: "Portfolio moderne avec React et Vite. Design glassmorphism, animations Framer Motion, responsive.",
      },
      {
        name: "TastyCrave CRM",
        type: "Application Web",
        description: "CRM full-stack gérant +500 clients et commandes. Tableau de bord analytics, gestion des rôles, API REST sécurisée.",
      },
      {
        name: "MGB Enveloppe",
        type: "Site Vitrine",
        description: "Site corporate pour entreprise industrielle française spécialisée en enveloppes de bâtiment. Design moderne, responsive.",
      },
      {
        name: "Madabio",
        type: "E-commerce",
        description: "Boutique en ligne produits bio malgaches. Catalogue +200 produits, paiement sécurisé, gestion stocks.",
      }
    ],
    // Education
    education: [
      { school: "École Supérieure de Multimédia", degree: "DTS (Diplôme de Technicien Supérieur)", period: "2021 – 2023", location: "Antananarivo, Madagascar" },
      { school: "Lycée Saint-Michel Itaosy", period: "2018 – 2021", location: "Baccalauréat" }
    ],
    // Languages
    langList: [
      { name: "Malgache", level: "Langue maternelle" },
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Technique" }
    ],
    // Hero
    hero: {
      available: 'Disponible pour de nouveaux projets',
      viewProjects: 'Voir mes projets',
      contactMe: 'Me contacter',
      yearsExp: "Années d'expérience",
      projectsDelivered: 'Projets livrés',
      satisfaction: 'Clients satisfaits',
    },
    // About
    about: {
      title: 'À propos de moi',
      subtitle: 'Passionné par le développement web et la gestion de projets',
      journey: 'Mon parcours',
      yearsExp: "Années d'expérience",
      sitesDelivered: 'Sites livrés',
      companies: 'Entreprises',
      education: 'Formation',
      languages: 'Langues',
    },
    // Experience
    experience: {
      title: 'Expérience Professionnelle',
      subtitle: 'Mon parcours et mes réalisations',
    },
    // Projects
    projects: {
      title: 'Projets Réalisés',
      subtitle: 'Une sélection de mes meilleurs projets web',
      viewProject: 'Voir le projet',
      sourceCode: 'Code source',
    },
    // Skills
    skills: {
      title: 'Compétences Techniques',
      subtitle: 'Les technologies et outils que je maîtrise',
      frontend: 'Front-end',
      backend: 'Back-end',
      cms: 'CMS & E-commerce',
      devops: 'DevOps & Outils',
      methodologies: 'Méthodologies',
      tools: 'Suivi & Collaboration',
    },
    // Contact
    contact: {
      title: 'Me Contacter',
      subtitle: 'Discutons de votre prochain projet',
      workTogether: 'Travaillons ensemble',
      description: "Je suis disponible pour des projets freelance, des opportunités d'emploi ou simplement pour discuter. N'hésitez pas à me contacter.",
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Localisation',
      fullName: 'Nom complet',
      yourName: 'Votre nom',
      yourEmail: 'votre@email.com',
      subject: 'Sujet',
      subjectPlaceholder: 'Sujet de votre message',
      message: 'Message',
      messagePlaceholder: 'Décrivez votre projet...',
      send: 'Envoyer le message',
      emailError: 'Format email invalide. Exemple: votre@gmail.com',
      domainError: 'Domaine email invalide. Exemple: @gmail.com, @yahoo.com',
    },
    // Footer
    footer: {
      rights: 'Tous droits réservés',
    },
  },
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    // Personal
    personal: {
      title: 'Project Manager & Full-Stack Web Developer',
      summary: "+8 websites delivered with 95% client satisfaction rate. Project manager and full-stack developer with 3+ years of experience, I manage web projects from A to Z: from technical design to production deployment. Specialized in WordPress/WooCommerce and Python/Flask, I apply Agile/Scrum methodologies to deliver high-performance solutions on time.",
    },
    // Experiences
    experiences: [
      {
        title: "Project Manager & Web Validator",
        company: "Tsarajoro",
        period: "Dec 2024 – Present",
        tasks: [
          "Technical supervision of a team of 4 developers, 3 technicians and 5 VAs for a multi-author blog site",
          "Agile management (2-week sprints): 100% of deliverables on time",
          "Server deployment and SEO optimization: +40% organic traffic in 2 months",
          "Implementation of code reviews and CI/CD with GitHub Actions"
        ]
      },
      {
        title: "Front-end Developer",
        company: "Tsarajoro",
        period: "May 2024 – Nov 2024",
        tasks: [
          "Development of responsive interfaces (HTML5, CSS3, JavaScript) with pixel-perfect integration",
          "Web performance optimization (Performance, Accessibility, SEO)",
          "REST API integration for comments and authentication system",
          "Load time reduction from 3.2s to 1.4s via lazy loading and compression"
        ]
      },
      {
        title: "WordPress Integrator",
        company: "Netykom",
        period: "Apr 2023 – Apr 2024",
        tasks: [
          "Design and delivery of 8+ WordPress sites (showcases and WooCommerce e-commerce)",
          "Development of custom themes and plugins in PHP: 95% client satisfaction",
          "Hosting management (cPanel), FTP/SSH deployment, Linux server configuration",
          "Client training in WordPress administration: 100% autonomous after delivery"
        ]
      }
    ],
    // Projects
    projectsList: [
      {
        name: "Personal Portfolio",
        type: "Web Application",
        description: "Modern portfolio with React and Vite. Glassmorphism design, Framer Motion animations, responsive.",
      },
      {
        name: "TastyCrave CRM",
        type: "Web Application",
        description: "Full-stack CRM managing 500+ clients and orders. Analytics dashboard, role management, secure REST API.",
      },
      {
        name: "MGB Enveloppe",
        type: "Showcase Website",
        description: "Corporate website for French industrial company specialized in building envelopes. Modern design, responsive.",
      },
      {
        name: "Madabio",
        type: "E-commerce",
        description: "Online store for Malagasy organic products. Catalog of 200+ products, secure payment, stock management.",
      }
    ],
    // Education
    education: [
      { school: "Multimedia Higher School", degree: "DTS (Higher Technician Diploma)", period: "2021 – 2023", location: "Antananarivo, Madagascar" },
      { school: "Saint-Michel Itaosy High School", period: "2018 – 2021", location: "Baccalaureate" }
    ],
    // Languages
    langList: [
      { name: "Malagasy", level: "Native language" },
      { name: "French", level: "Fluent" },
      { name: "English", level: "Technical" }
    ],
    // Hero
    hero: {
      available: 'Available for new projects',
      viewProjects: 'View my projects',
      contactMe: 'Contact me',
      yearsExp: 'Years of experience',
      projectsDelivered: 'Projects delivered',
      satisfaction: 'Client satisfaction',
    },
    // About
    about: {
      title: 'About me',
      subtitle: 'Passionate about web development and project management',
      journey: 'My journey',
      yearsExp: 'Years of experience',
      sitesDelivered: 'Sites delivered',
      companies: 'Companies',
      education: 'Education',
      languages: 'Languages',
    },
    // Experience
    experience: {
      title: 'Professional Experience',
      subtitle: 'My career path and achievements',
    },
    // Projects
    projects: {
      title: 'Completed Projects',
      subtitle: 'A selection of my best web projects',
      viewProject: 'View project',
      sourceCode: 'Source code',
    },
    // Skills
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I master',
      frontend: 'Front-end',
      backend: 'Back-end',
      cms: 'CMS & E-commerce',
      devops: 'DevOps & Tools',
      methodologies: 'Methodologies',
      tools: 'Tracking & Collaboration',
    },
    // Contact
    contact: {
      title: 'Contact Me',
      subtitle: "Let's discuss your next project",
      workTogether: "Let's work together",
      description: "I'm available for freelance projects, job opportunities, or just to chat. Feel free to contact me.",
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Location',
      fullName: 'Full name',
      yourName: 'Your name',
      yourEmail: 'your@email.com',
      subject: 'Subject',
      subjectPlaceholder: 'Subject of your message',
      message: 'Message',
      messagePlaceholder: 'Describe your project...',
      send: 'Send message',
      emailError: 'Invalid email format. Example: your@gmail.com',
      domainError: 'Invalid email domain. Example: @gmail.com, @yahoo.com',
    },
    // Footer
    footer: {
      rights: 'All rights reserved',
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
