import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactHero}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.pageTitle}
          >
            Connect With Me
          </motion.h1>
        </div>
      </div>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactContent}>
            <motion.div 
              className={styles.contactInfo}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>Let's Talk</h2>
              <p>
                Have questions about my yoga and fitness classes? Want to book a private session or simply want to learn more? Feel free to reach out to me.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className={styles.contactText}>
                    <p>727-827-9648</p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className={styles.contactText}>
                    <p>Rajeshwari Gupta</p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className={styles.contactText}>
                    <p>Monday - Friday: Group Classes<br />Saturday - Sunday: Private Sessions</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.socialLinks}>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.contactForm}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className={styles.formContainer}>
                <h2>Send a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <input type="tel" placeholder="Your Phone (Optional)" />
                  </div>
                  <div className={styles.formGroup}>
                    <select required>
                      <option value="">Select Subject</option>
                      <option value="GroupClasses">Weekday Group Classes</option>
                      <option value="PrivateSessions">Weekend Private Sessions</option>
                      <option value="Strength">Strength Training</option>
                      <option value="Mobility">Mobility Conditioning</option>
                      <option value="Yoga">Yoga & Meditation</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <textarea placeholder="Your Message" rows="6" required></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;