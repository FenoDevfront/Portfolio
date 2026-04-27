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
