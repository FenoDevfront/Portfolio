import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub,
  FaLinkedin, FaPaperPlane
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = ({ personal }) => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'mail.com', 'protonmail.com'];

    if (!email) {
      return '';
    }

    if (!emailRegex.test(email)) {
      return t('contact.emailError');
    }

    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain || domain.length < 4) {
      return t('contact.domainError');
    }

    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      setEmailError(validateEmail(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateEmail(formData.email);
    if (error) {
      setEmailError(error);
      return;
    }

    const mailtoLink = `mailto:${personal?.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>{t('contact.workTogether')}</h3>
            <p>
              {t('contact.description')}
            </p>

            <div className="contact-details">
              <motion.a
                href={`mailto:${personal?.email}`}
                className="contact-item glass-card"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <span className="contact-label">{t('contact.email')}</span>
                  <span className="contact-value">{personal?.email}</span>
                </div>
              </motion.a>

              <motion.a
                href={`https://wa.me/${personal?.phone?.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item glass-card"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <span className="contact-label">{t('contact.whatsapp')}</span>
                  <span className="contact-value">{personal?.phone}</span>
                </div>
              </motion.a>

              <motion.div
                className="contact-item glass-card"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <span className="contact-label">{t('contact.location')}</span>
                  <span className="contact-value">{personal?.location}</span>
                </div>
              </motion.div>
            </div>

            <div className="social-links">
              <motion.a
                href={personal?.github || "https://github.com/FenoDevfront/"}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href={personal?.linkedin || "https://mg.linkedin.com/in/feno-niaina-ratsimbaharisoa-b584012a2"}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t('contact.fullName')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.yourName')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.yourEmail')}
                  className={emailError ? 'input-error' : ''}
                />
                {emailError && (
                  <span className="error-message">{emailError}</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t('contact.subjectPlaceholder')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane />
              {t('contact.send')}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Portfolio | {personal?.name}. {t('footer.rights')}.</p>
      </footer>
    </section>
  );
};

export default Contact;
