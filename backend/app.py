from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Données du portfolio
portfolio_data = {
    "personal": {
        "name": "RATSIMBAHARISOA Fenoniaina",
        "title": "Chef de projet & Développeur Web",
        "phone": "+261 34 44 164 05",
        "email": "sabmistar@gmail.com",
        "location": "Antananarivo, Madagascar",
        "summary": "Développeur web front-end et chef de projet avec plus de 3 ans d'expérience dans la conception, l'intégration et la supervision de projets web. Spécialisé en WordPress, HTML/CSS, JavaScript et PHP, je conçois des solutions performantes, modernes et adaptées aux besoins clients — des sites vitrines aux applications web full-stack."
    },
    "experiences": [
        {
            "id": 1,
            "title": "Chef de Projet & Validateur Web",
            "company": "Tsarajoro",
            "period": "Déc 2024 – Présent",
            "tasks": [
                "Supervision et validation technique du développement d'un site blog multi-auteurs",
                "Pilotage de la mise en ligne : déploiement serveur, tests de performance et SEO",
                "Coordination de l'équipe technique et communication avec les parties prenantes",
                "Mise en place de processus qualité et de revue de code"
            ]
        },
        {
            "id": 2,
            "title": "Développeur Front-end",
            "company": "Tsarajoro",
            "period": "Mai 2024 – Nov 2024",
            "tasks": [
                "Conception et développement d'interfaces web (HTML5, CSS3, JS) pour un site blog",
                "Intégration pixel-perfect de maquettes Figma, animations CSS et optimisation mobile",
                "Optimisation des performances (Lighthouse 90+) et de l'accessibilité"
            ]
        },
        {
            "id": 3,
            "title": "Intégrateur WordPress",
            "company": "Netykom",
            "period": "Avr 2023 – Avr 2024",
            "tasks": [
                "Conception et intégration de sites WordPress vitrines et e-commerce WooCommerce",
                "Développement de thèmes et plugins personnalisés en PHP",
                "Gestion des hébergements (cPanel), déploiement via FTP/SSH sous Linux",
                "Mise en ligne et suivi de +8 sites clients"
            ]
        }
    ],
    "projects": [
        {
            "id": 1,
            "name": "Kolore Architecture",
            "type": "Site Vitrine",
            "url": "https://kolore-architecture.fr",
            "description": "Site institutionnel pour un cabinet d'architecture français. Conception et intégration avec WordPress et Elementor, galerie de réalisations dynamique et formulaire de contact.",
            "technologies": ["WordPress", "Elementor", "cPanel"],
            "image": "architecture"
        },
        {
            "id": 2,
            "name": "MGB Enveloppe",
            "type": "Site Vitrine",
            "url": "https://mgbenveloppe.com",
            "description": "Site corporate pour une entreprise industrielle. Conception et intégration avec WordPress et Divi, présentation des produits et services.",
            "technologies": ["WordPress", "Divi", "JavaScript", "jQuery", "cPanel"],
            "image": "industrial"
        },
        {
            "id": 3,
            "name": "Madabio (Codal Madagascar)",
            "type": "Site E-commerce",
            "url": "https://codal-madagascar.com/taxibe-divers/madabio/",
            "description": "Boutique en ligne pour une marque de produits bio malgaches. Développé avec WordPress, Elementor et plugin e-commerce, gestion du catalogue via ACF.",
            "technologies": ["WordPress", "Elementor", "JavaScript", "jQuery", "E-commerce", "ACF", "cPanel"],
            "image": "ecommerce"
        },
        {
            "id": 4,
            "name": "TastyCrave CRM",
            "type": "Application Web",
            "url": "https://tastycrave-crm.onrender.com",
            "description": "CRM full-stack développé en Python/Flask pour la gestion de clients, commandes et suivi commercial. Tableau de bord statistiques, gestion des utilisateurs et des rôles.",
            "technologies": ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
            "image": "crm"
        }
    ],
    "skills": {
        "frontend": ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        "backend": ["PHP", "Python (Flask)", "MySQL"],
        "cms": ["WordPress", "WooCommerce", "ACF", "Divi", "Kubio", "Page Builder", "Oxygen", "Thème Personnalisé", "Plugin Personnalisé"],
        "tools": ["Linux", "SSH", "cPanel", "Git", "GitHub"],
        "other": ["SEO technique", "Figma", "Optimisation performances"]
    },
    "education": [
        {
            "id": 1,
            "school": "Ecole Supérieure de Multimédia",
            "degree": "DTS (Diplôme de Technicien Supérieur)",
            "period": "2021 – 2023",
            "location": "Antananarivo, Madagascar"
        },
        {
            "id": 2,
            "school": "Lycée Saint-Michel Itaosy",
            "period": "2018 – 2021",
            "location": "Antananarivo, Madagascar"
        }
    ],
    "languages": [
        {"name": "Malgache", "level": "Langue maternelle", "percentage": 100},
        {"name": "Français", "level": "Courant — niveau professionnel", "percentage": 90},
        {"name": "Anglais", "level": "Intermédiaire — technique", "percentage": 60}
    ]
}


@app.route('/api/portfolio', methods=['GET'])
def get_portfolio():
    return jsonify(portfolio_data)


@app.route('/api/personal', methods=['GET'])
def get_personal():
    return jsonify(portfolio_data['personal'])


@app.route('/api/experiences', methods=['GET'])
def get_experiences():
    return jsonify(portfolio_data['experiences'])


@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify(portfolio_data['projects'])


@app.route('/api/skills', methods=['GET'])
def get_skills():
    return jsonify(portfolio_data['skills'])


@app.route('/api/education', methods=['GET'])
def get_education():
    return jsonify(portfolio_data['education'])


@app.route('/api/languages', methods=['GET'])
def get_languages():
    return jsonify(portfolio_data['languages'])


if __name__ == '__main__':
    app.run(debug=True, port=5000)
