import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaBuilding, FaShoppingCart, FaChartLine, FaCode, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const projectIcons = {
  portfolio: FaCode,
  architecture: FaBuilding,
  industrial: FaBuilding,
  ecommerce: FaShoppingCart,
  crm: FaChartLine,
};

const Projects = ({ projects }) => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const translatedProjects = t('projectsList');

  const getGradient = (index) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects?.map((project, index) => {
            const IconComponent = projectIcons[project.image] || FaCode;
            const translated = translatedProjects?.[index] || {};
            return (
              <motion.div
                key={project.id}
                className="project-card glass-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div
                  className="project-image"
                  style={{ background: getGradient(index) }}
                >
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={translated.name || project.name}
                      className="project-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <IconComponent className="project-icon" style={{ display: project.imageUrl ? 'none' : 'block' }} />
                  <span className="project-type">{translated.type || project.type}</span>
                </div>
                <div className="project-content">
                  <h3 className="project-name">{translated.name || project.name}</h3>
                  <p className="project-description">{translated.description || project.description}</p>
                  <div className="project-technologies">
                    {project.technologies?.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {t('projects.viewProject')} <FaExternalLinkAlt />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {t('projects.sourceCode')} <FaGithub />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
