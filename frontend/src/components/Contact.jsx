import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub,
  FaLinkedin, FaPaperPlane
} from 'react-icons/fa';
import './Contact.css';

const Contact = ({ personal }) => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <h2 className="section-title">Me Contacter</h2>
          <p className="section-subtitle">
            Discutons de votre prochain projet
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Travaillons ensemble</h3>
            <p>
              Je suis disponible pour des projets freelance, des opportunités
              d'emploi ou simplement pour discuter. N'hésitez pas à me contacter.
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
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{personal?.email}</span>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personal?.phone}`}
                className="contact-item glass-card"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Téléphone</span>
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
                  <span className="contact-label">Localisation</span>
                  <span className="contact-value">{personal?.location}</span>
                </div>
              </motion.div>
            </div>

            <div className="social-links">
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="#"
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
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sujet de votre message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Décrivez votre projet..."
              />
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane />
              Envoyer le message
            </motion.button>
          </motion.form>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 {personal?.name}. Tous droits réservés.</p>
      </footer>
    </section>
  );
};

export default Contact;
