import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaWordpress,
  FaLinux, FaGitAlt, FaGithub, FaServer, FaDatabase,
  FaFigma, FaSearch, FaCode, FaRocket, FaDocker, FaNodeJs,
  FaTrello, FaSlack, FaDiscord, FaUsers, FaCheckCircle
} from 'react-icons/fa';
import {
  SiElementor, SiWoocommerce, SiFlask, SiMysql, SiTypescript, SiJira
} from 'react-icons/si';
import './Skills.css';

const skillIcons = {
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
  'JavaScript': FaJs,
  'Responsive Design': FaCode,
  'TypeScript (notions)': FaCode,
  'PHP': FaPhp,
  'Python (Flask)': FaPython,
  'MySQL': FaDatabase,
  'API REST': FaServer,
  'Node.js (notions)': FaNodeJs,
  'WordPress': FaWordpress,
  'Elementor': FaCode,
  'WooCommerce': FaCode,
  'ACF': FaCode,
  'Plugins sur mesure': FaCode,
  'Git/GitHub': FaGithub,
  'CI/CD (GitHub Actions)': FaRocket,
  'Docker': FaDocker,
  'Linux': FaLinux,
  'SSH': FaServer,
  'cPanel': FaServer,
  'Agile/Scrum': FaUsers,
  'Revue de code': FaCheckCircle,
  'Tests fonctionnels': FaCheckCircle,
  'SEO technique': FaSearch,
  'Jira': FaCode,
  'Trello': FaTrello,
  'Slack': FaSlack,
  'Discord': FaDiscord,
  'Sentry': FaCode,
  'Google Sheets': FaCode,
  'Figma': FaFigma,
  'Optimisation performances': FaRocket,
};

const categoryLabels = {
  frontend: 'Front-end',
  backend: 'Back-end',
  cms: 'CMS & E-commerce',
  devops: 'DevOps & Outils',
  methodologies: 'Méthodologies',
  tools: 'Suivi & Collaboration',
};

const categoryColors = {
  frontend: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  backend: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  cms: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  devops: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  methodologies: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  tools: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
};

const Skills = ({ skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Compétences Techniques</h2>
          <p className="section-subtitle">
            Les technologies et outils que je maîtrise
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills && Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div
                className="category-header"
                style={{ background: categoryColors[category] }}
              >
                <h3>{categoryLabels[category]}</h3>
              </div>
              <div className="skills-list">
                {skillList.map((skill, index) => {
                  const IconComponent = skillIcons[skill] || FaCode;
                  return (
                    <motion.div
                      key={skill}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <IconComponent className="skill-icon" />
                      <span className="skill-name">{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
