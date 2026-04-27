import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/portfolio');
        setPortfolioData(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        // Données par défaut en cas d'erreur
        setPortfolioData({
          personal: {
            name: "RATSIMBAHARISOA Fenoniaina",
            title: "Chef de projet & Développeur Web Full-Stack",
            phone: "+261 34 44 164 05",
            email: "sabmistar@gmail.com",
            location: "Antananarivo, Madagascar",
            github: "https://github.com/FenoDevfront/",
            linkedin: "https://mg.linkedin.com/in/feno-niaina-ratsimbaharisoa-b584012a2",
            summary: "+8 sites web livrés avec un taux de satisfaction client de 95%. Chef de projet et développeur full-stack avec 3+ ans d'expérience, je pilote des projets web de A à Z : de la conception technique au déploiement en production. Expert WordPress/WooCommerce et Python/Flask, j'applique les méthodologies Agile/Scrum pour livrer des solutions performantes dans les délais."
          },
          experiences: [
            {
              id: 1,
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
              id: 2,
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
              id: 3,
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
          projects: [
            {
              id: 1,
              name: "Portfolio Personnel",
              type: "Application Web",
              github: "https://github.com/FenoDevfront/Portfolio",
              description: "Portfolio moderne avec React et Vite. Design glassmorphism, animations Framer Motion, responsive.",
              technologies: ["React", "Vite", "Framer Motion", "CSS3"],
              image: "portfolio",
              imageUrl: "/images/portfolio.svg"
            },
            {
              id: 2,
              name: "TastyCrave CRM",
              type: "Application Web",
              url: "https://tastycrave-crm.onrender.com",
              description: "CRM full-stack gérant +500 clients et commandes. Tableau de bord analytics, gestion des rôles, API REST sécurisée.",
              technologies: ["Python", "Flask", "API REST", "MySQL", "JavaScript", "Docker"],
              image: "crm",
              imageUrl: "/images/tastycrave.svg"
            },
            {
              id: 3,
              name: "MGB Enveloppe",
              type: "Site Vitrine",
              url: "https://www.mgbenveloppe.com/",
              description: "Site corporate pour entreprise industrielle française spécialisée en enveloppes de bâtiment. Design moderne, responsive.",
              technologies: ["WordPress", "Elementor", "PHP", "SEO"],
              image: "industrial",
              imageUrl: "/images/mgb.svg"
            },
            {
              id: 4,
              name: "Madabio",
              type: "E-commerce",
              url: "https://codal-madagascar.com/madabio",
              description: "Boutique en ligne produits bio malgaches. Catalogue +200 produits, paiement sécurisé, gestion stocks.",
              technologies: ["WordPress", "WooCommerce", "ACF", "E-commerce"],
              image: "ecommerce",
              imageUrl: "/images/madabio.svg"
            }
          ],
          skills: {
            frontend: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "TypeScript (notions)"],
            backend: ["PHP", "Python (Flask)", "MySQL", "API REST", "Node.js (notions)"],
            cms: ["WordPress", "Elementor", "WooCommerce", "ACF", "Plugins sur mesure"],
            devops: ["Git/GitHub", "CI/CD (GitHub Actions)", "Docker", "Linux", "SSH", "cPanel"],
            methodologies: ["Agile/Scrum", "Revue de code", "Tests fonctionnels", "SEO technique"],
            tools: ["Jira", "Trello", "Slack", "Discord", "Sentry", "Google Sheets"]
          },
          education: [
            {
              id: 1,
              school: "Ecole Supérieure de Multimédia",
              period: "2021 – 2023",
              location: "Antananarivo, Madagascar"
            },
            {
              id: 2,
              school: "Lycée Saint-Michel Itaosy",
              period: "2018 – 2021",
              location: "Antananarivo, Madagascar"
            }
          ],
          languages: [
            { name: "Malgache", level: "Langue maternelle", percentage: 100 },
            { name: "Français", level: "Courant", percentage: 90 },
            { name: "Anglais", level: "Technique", percentage: 70 }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-inner"></div>
        </div>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-animation"></div>
      <div className="noise"></div>
      <Navbar />
      <main>
        <Hero personal={portfolioData?.personal} />
        <About
          personal={portfolioData?.personal}
          education={portfolioData?.education}
          languages={portfolioData?.languages}
        />
        <Experience experiences={portfolioData?.experiences} />
        <Projects projects={portfolioData?.projects} />
        <Skills skills={portfolioData?.skills} />
        <Contact personal={portfolioData?.personal} />
      </main>
    </>
  );
}

export default App;
