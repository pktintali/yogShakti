import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import yoga1 from '../assets/images/yoga1.jpg';
import yoga2 from '../assets/images/yoga2.jpg';
import yoga3 from '../assets/images/yoga3.jpg';
import FormPopup from '../components/FormPopup';

const Home = () => {
  // Refs for section headings
  const aboutHeadingRef = useRef(null);
  const servicesHeadingRef = useRef(null);
  const classesHeadingRef = useRef(null);
  const contactHeadingRef = useRef(null);
  
  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  // Scroll to top on page load and setup scroll event for heading animations
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Function to check if element is in viewport and needs animation
    const handleScroll = () => {
      const headingRefs = [aboutHeadingRef, servicesHeadingRef, classesHeadingRef, contactHeadingRef];
      
      headingRefs.forEach(ref => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInViewport = 
            rect.top >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7;
          
          if (isInViewport) {
            ref.current.classList.add(styles.animated);
          } else {
            ref.current.classList.remove(styles.animated);
          }
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <strong>Discover Inner Peace Through</strong> <span>Yoga</span> <strong>and</strong> <span>Fitness</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Embrace the ancient practice of yoga with traditional Indian techniques for mind, body, and soul harmony.
          </motion.p>
          <motion.div
            className={styles.heroBtns}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/classes" className="btn">Explore Classes</Link>
            <Link to="/contact" className={styles.secondaryBtn}>Contact Me</Link>
          </motion.div>
        </div>
        <div className={styles.mandalaOverlay}></div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            ref={aboutHeadingRef}
          >
            <h2 className="decorative-title">About Me</h2>
            <div className={styles.decorativeLine}></div>
          </motion.div>

          <div className={styles.aboutContent}>
            <motion.div 
              className={styles.aboutImage}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleUp}
            >
              <img src={yoga1} alt="Yoga Practice" loading="lazy" />
              <div className={styles.aboutImageDecoration}></div>
            </motion.div>
            
            <motion.div 
              className={styles.aboutText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h3>My Yoga Journey</h3>
              <p>As a software developer who discovered the transformative power of yoga during my 200-hour teacher training in Rishikesh, India, I bring a unique perspective that blends technology with ancient wellness traditions.</p>
              <p>My approach combines traditional yoga practices with modern calisthenics and fitness principles, creating a holistic experience that strengthens both body and mind.</p>
              <Link to="/about" className={styles.aboutBtn}>Learn More About My Journey</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            ref={servicesHeadingRef}
          >
            <h2 className="decorative-title">What I Offer</h2>
            <div className={styles.decorativeLine}></div>
          </motion.div>
          
          <motion.div 
            className={styles.servicesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className={styles.serviceCard} variants={fadeIn}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-dumbbell"></i>
              </div>
              <h3>Strength Training</h3>
              <p>Build functional strength, enhance muscle tone and improve overall body composition.</p>
            </motion.div>
            
            <motion.div className={styles.serviceCard} variants={fadeIn}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-running"></i>
              </div>
              <h3>Mobility Conditioning</h3>
              <p>Enhance flexibility, joint health and functional movement patterns for daily activities.</p>
            </motion.div>
            
            <motion.div className={styles.serviceCard} variants={fadeIn}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-spa"></i>
              </div>
              <h3>Hatha Yoga</h3>
              <p>Traditional postures and breathing techniques to build strength and flexibility.</p>
            </motion.div>
            
            <motion.div className={styles.serviceCard} variants={fadeIn}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-lungs"></i>
              </div>
              <h3>Pranayama</h3>
              <p>Ancient breathing techniques to increase vital energy and focus.</p>
            </motion.div>
            
            <motion.div className={styles.serviceCard} variants={fadeIn}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-brain"></i>
              </div>
              <h3>Meditation</h3>
              <p>Mindfulness practices to calm the mind and enhance mental clarity.</p>
            </motion.div>
            
            <motion.div className={styles.serviceCard} variants={fadeIn}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-users"></i>
              </div>
              <h3>Private Sessions</h3>
              <p>One-on-one instruction customized to address your specific goals.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Classes Preview Section */}
      <section className={styles.classesSection}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            ref={classesHeadingRef}
          >
            <h2 className="decorative-title">Class Schedule</h2>
            <div className={styles.decorativeLine}></div>
          </motion.div>
          
          <div className={styles.classesGrid}>
            <motion.div 
              className={styles.classCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleUp}
            >
              <div className={styles.classImage}>
                <img src={yoga2} alt="Strength Training" />
                <div className={styles.classOverlay}>
                  <span>All Levels</span>
                </div>
              </div>
              <div className={styles.classInfo}>
                <h3>Group Classes</h3>
                <p>Weekdays, Various Programs Available</p>
                <Link to="/classes" className={styles.classLink}>View Details <i className="fas fa-arrow-right"></i></Link>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.classCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleUp}
            >
              <div className={styles.classImage}>
                <img src={yoga3} alt="Private Sessions" />
                <div className={styles.classOverlay}>
                  <span>Personalized</span>
                </div>
              </div>
              <div className={styles.classInfo}>
                <h3>Weekend Private Sessions</h3>
                <p>Saturday & Sunday, By Appointment</p>
                <Link to="/classes" className={styles.classLink}>View Details <i className="fas fa-arrow-right"></i></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            ref={contactHeadingRef}
          >
            <h2 className="decorative-title">Get In Touch</h2>
            <div className={styles.decorativeLine}></div>
          </motion.div>
          
          <motion.div 
            className={styles.contactContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          > 
            <div className={styles.contactFormContainer}>
              <h3>Start Your Wellness Journey Today!</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
              
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className={styles.formGroup}>
                  <select required>
                    <option value="">I'm Interested In...</option>
                    <option value="GroupClasses">Weekday Group Classes</option>
                    <option value="PrivateSessions">Weekend Private Sessions</option>
                    <option value="Strength">Strength Training</option>
                    <option value="Mobility">Mobility Conditioning</option>
                    <option value="Yoga">Yoga & Meditation</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>Send Message</button>
              </form>
            </div>
          </motion.div>
        </div>
        <div className={styles.contactDecoration}></div>
      </section>
    </div>
  );
};

export default Home;