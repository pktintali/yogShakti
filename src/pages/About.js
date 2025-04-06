import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';
import personalImg from '../assets/images/personal/IMG_9232.jpeg';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutHero}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.pageTitle}
          >
            About Me
          </motion.h1>
        </div>
      </div>

      <section className={styles.journeySection}>
        <div className="container">
          <div className={styles.journeyContent}>
            <motion.div 
              className={styles.journeyImage}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img src={personalImg} alt="My Yoga & Fitness Journey" />
              <div className={styles.journeyImageDecoration}></div>
            </motion.div>
            
            <motion.div 
              className={styles.journeyText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>My Yoga & Fitness Journey</h2>
              <p>I'm a software developer who recently discovered the transformative power of yoga during my immersive 200-hour teacher training in Rishikesh, India. My training encompassed a diverse blend of practices including Hatha Vinyasa, aerial yoga, meditation, pranayama, body anatomy, and physiology.</p>
              
              <p>My unique journey bridges the analytical world of software development with the mindful practices of yoga and the disciplined approach of calisthenics. This combination allows me to offer a tech-savvy yet deeply authentic approach to wellness that speaks to modern lifestyles.</p>
              
              <p>While I may be newer to teaching yoga, my passion for fitness and calisthenics has been a cornerstone of my life for years. I bring the same dedication and precision to yoga that I apply to my code and my calisthenics practice, creating an experience that builds both physical strength and mental clarity.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.philosophySection}>
        <div className="container">
          <motion.h2 
            className={styles.sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            My Teaching Philosophy
          </motion.h2>
          
          <motion.div 
            className={styles.philosophyContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className={styles.philosophyItem}>
              <div className={styles.philosophyIcon}>
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Technical Precision</h3>
              <p>My background as a software developer gives me a unique analytical approach to yoga, focusing on alignment details and the science behind each practice.</p>
            </div>
            
            <div className={styles.philosophyItem}>
              <div className={styles.philosophyIcon}>
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Balance in Practice</h3>
              <p>I emphasize finding equilibrium between strength and flexibility, focused effort and mindful surrender, blending traditional wisdom with modern fitness science.</p>
            </div>
            
            <div className={styles.philosophyItem}>
              <div className={styles.philosophyIcon}>
                <i className="fas fa-dumbbell"></i>
              </div>
              <h3>Strength Integration</h3>
              <p>Drawing from my calisthenics background, I incorporate bodyweight strength training principles that complement yoga for a more comprehensive approach to fitness.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.credentialsSection}>
        <div className="container">
          <motion.h2 
            className={styles.sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Credentials & Training
          </motion.h2>
          
          <motion.ul 
            className={styles.credentialsList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <li>
              <span className={styles.year}>2023</span>
              <div className={styles.credential}>
                <h3>200-Hour Yoga Teacher Training</h3>
                <p>Multi-style Certification, Rishikesh, India</p>
              </div>
            </li>
            <li>
              <span className={styles.year}>2022</span>
              <div className={styles.credential}>
                <h3>Advanced Calisthenics Training</h3>
                <p>Bodyweight Strength Development Program</p>
              </div>
            </li>
            <li>
              <span className={styles.year}>2021</span>
              <div className={styles.credential}>
                <h3>Software Development Certification</h3>
                <p>Full Stack Web Development</p>
              </div>
            </li>
          </motion.ul>
        </div>
      </section>
    </div>
  );
};

export default About;