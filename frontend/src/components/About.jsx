import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaLanguage } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = ({ personal, education, languages }) => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const translatedEducation = t('education');
  const translatedLanguages = t('langList');
  const percentages = [100, 90, 70];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text glass-card"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>{t('about.journey')}</h3>
            <p>{t('personal.summary')}</p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">{t('about.yearsExp')}</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">8+</span>
                <span className="highlight-text">{t('about.sitesDelivered')}</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">2</span>
                <span className="highlight-text">{t('about.companies')}</span>
              </div>
            </div>
          </motion.div>

          <div className="about-sidebar">
            <motion.div
              className="education-card glass-card"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="card-header">
                <FaGraduationCap className="card-icon" />
                <h3>{t('about.education')}</h3>
              </div>
              <div className="education-list">
                {translatedEducation?.map((edu, index) => (
                  <div key={index} className="education-item">
                    <span className="edu-period">{edu.period}</span>
                    <h4>{edu.school}</h4>
                    {edu.degree && <p className="edu-degree">{edu.degree}</p>}
                    <p>{edu.location}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="languages-card glass-card"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="card-header">
                <FaLanguage className="card-icon" />
                <h3>{t('about.languages')}</h3>
              </div>
              <div className="languages-list">
                {translatedLanguages?.map((lang, index) => (
                  <div key={index} className="language-item">
                    <div className="language-info">
                      <span className="language-name">{lang.name}</span>
                      <span className="language-level">{lang.level}</span>
                    </div>
                    <div className="language-bar">
                      <motion.div
                        className="language-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${percentages[index]}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
