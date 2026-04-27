import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = ({ personal }) => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-20, -100],
                x: Math.random() * 20 - 10,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dot"></span>
          {t('hero.available')}
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {personal?.name?.split(' ')[1] || 'Fenoniaina'}
          <span className="hero-title-accent"> {personal?.name?.split(' ')[0] || 'RATSIMBAHARISOA'}</span>
        </motion.h1>

        <motion.div
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="typing-text">{personal?.title || 'Chef de projet & Développeur Web'}</span>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {personal?.summary}
        </motion.p>

        <motion.div
          className="hero-info"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>{personal?.location || 'Antananarivo, Madagascar'}</span>
          </div>
          <a
            href={`https://wa.me/${personal?.phone?.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="info-item info-link"
          >
            <FaPhone className="info-icon" />
            <span>{personal?.phone}</span>
          </a>
          <a
            href={`mailto:${personal?.email}`}
            className="info-item info-link"
          >
            <FaEnvelope className="info-icon" />
            <span>{personal?.email}</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a
            href={personal?.github || "https://github.com/FenoDevfront/"}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href={personal?.linkedin || "https://mg.linkedin.com/in/feno-niaina-ratsimbaharisoa-b584012a2"}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.viewProjects')}
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.contactMe')}
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">{t('hero.yearsExp')}</span>
          </div>
          <div className="stat">
            <span className="stat-number">8+</span>
            <span className="stat-label">{t('hero.projectsDelivered')}</span>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">{t('hero.satisfaction')}</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
};

export default Hero;
