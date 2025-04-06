import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Classes.module.css';
import yoga1 from '../assets/images/yoga1.jpg';
import yoga3 from '../assets/images/yoga3.jpg';

const Classes = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Handle class booking
  const handleBooking = (className) => {
    alert(`Thank you for booking ${className}! We'll contact you shortly to confirm your booking.`);
  };

  return (
    <div className={styles.classesPage}>
      <div className={styles.classesHero}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.pageTitle}
          >
            Yoga & Fitness Classes
          </motion.h1>
        </div>
      </div>

      <section className={styles.classesSection}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="decorative-title">Find Your Practice</h2>
            <p className={styles.sectionIntro}>
              Discover a variety of yoga and fitness classes designed to nurture your body, mind, and spirit. Whether you're a beginner or an advanced practitioner, there's a class that's perfect for your journey.
            </p>
          </motion.div>

          <div className={styles.classesGrid}>
            <motion.div 
              className={styles.classCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className={styles.classImage}>
                <img src={yoga1} alt="Strength Training" />
                <div className={styles.classLevel}>All Levels</div>
              </div>
              <div className={styles.classContent}>
                <h3>Strength Training</h3>
                <p>Build functional strength and improve overall body composition with targeted exercises.</p>
                <div className={styles.classDetails}>
                  <div className={styles.classDetail}>
                    <i className="fas fa-clock"></i>
                    <span>60 min</span>
                  </div>
                  <div className={styles.classDetail}>
                    <i className="fas fa-calendar-alt"></i>
                    <span>Weekdays</span>
                  </div>
                  <div className={styles.classDetail}>
                    <i className="fas fa-users"></i>
                    <span>Group Class</span>
                  </div>
                </div>
                <button className={styles.bookBtn} onClick={() => handleBooking('Strength Training')}>Book Now</button>
              </div>
            </motion.div>

            <motion.div 
              className={styles.classCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className={styles.classImage}>
                <img src={yoga3} alt="Mobility Conditioning" />
                <div className={styles.classLevel}>All Levels</div>
              </div>
              <div className={styles.classContent}>
                <h3>Mobility Conditioning</h3>
                <p>Enhance flexibility, joint health and functional movement patterns for daily activities.</p>
                <div className={styles.classDetails}>
                  <div className={styles.classDetail}>
                    <i className="fas fa-clock"></i>
                    <span>75 min</span>
                  </div>
                  <div className={styles.classDetail}>
                    <i className="fas fa-calendar-alt"></i>
                    <span>Weekdays</span>
                  </div>
                  <div className={styles.classDetail}>
                    <i className="fas fa-users"></i>
                    <span>Group Class</span>
                  </div>
                </div>
                <button className={styles.bookBtn} onClick={() => handleBooking('Mobility Conditioning')}>Book Now</button>
              </div>
            </motion.div>

            <motion.div 
              className={styles.classCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className={styles.classImage}>
                <img src={yoga1} alt="Hatha Yoga" />
                <div className={styles.classLevel}>All Levels</div>
              </div>
              <div className={styles.classContent}>
                <h3>Hatha Yoga</h3>
                <p>Traditional postures and breathing techniques to build strength and flexibility.</p>
                <div className={styles.classDetails}>
                  <div className={styles.classDetail}>
                    <i className="fas fa-clock"></i>
                    <span>90 min</span>
                  </div>
                  <div className={styles.classDetail}>
                    <i className="fas fa-calendar-alt"></i>
                    <span>Weekends</span>
                  </div>
                  <div className={styles.classDetail}>
                    <i className="fas fa-user"></i>
                    <span>Private Session</span>
                  </div>
                </div>
                <button className={styles.bookBtn} onClick={() => handleBooking('Hatha Yoga')}>Book Now</button>
              </div>
            </motion.div>

            <motion.div 
              className={styles.classCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className={styles.classImage}>
                <img src={yoga3} alt="Personalized Fitness" />
                <div className={styles.classLevel}>Personalized</div>
              </div>
              <div className={styles.classContent}>
                <h3>Personalized Fitness</h3>
                <p>Custom-tailored workouts designed to meet your specific goals and fitness level.</p>
                <div className={styles.classDetails}>
                  <div className={styles.classDetail}>
                    <i className="fas fa-clock"></i>
                    <span>60 min</span>
                  </div>
                  <div className={styles.classDetail}>
                    <i className="fas fa-calendar-alt"></i>
                    <span>Weekends</span>
                  </div>
                  <div className={styles.classDetail}>
                    <i className="fas fa-user"></i>
                    <span>Private Session</span>
                  </div>
                </div>
                <button className={styles.bookBtn} onClick={() => handleBooking('Personalized Fitness')}>Book Now</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.scheduleSection}>
        <div className="container">
          <motion.h2 
            className="decorative-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Class Schedule Overview
          </motion.h2>

          <motion.div 
            className={styles.scheduleTable}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className={styles.scheduleHeader}>
              <div className={styles.scheduleCell}>Session Type</div>
              <div className={styles.scheduleCell}>Monday</div>
              <div className={styles.scheduleCell}>Tuesday</div>
              <div className={styles.scheduleCell}>Wednesday</div>
              <div className={styles.scheduleCell}>Thursday</div>
              <div className={styles.scheduleCell}>Friday</div>
              <div className={styles.scheduleCell}>Saturday</div>
              <div className={styles.scheduleCell}>Sunday</div>
            </div>
            
            <div className={styles.scheduleRow}>
              <div className={styles.scheduleCell}>Morning</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Private Sessions</div>
              <div className={styles.scheduleCell}>Private Sessions</div>
            </div>
            
            <div className={styles.scheduleRow}>
              <div className={styles.scheduleCell}>Afternoon</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Private Sessions</div>
              <div className={styles.scheduleCell}>Private Sessions</div>
            </div>
            
            <div className={styles.scheduleRow}>
              <div className={styles.scheduleCell}>Evening</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Group Classes</div>
              <div className={styles.scheduleCell}>Private Sessions</div>
              <div className={styles.scheduleCell}>Private Sessions</div>
            </div>
          </motion.div>

          <motion.p
            className={styles.sectionIntro}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            style={{ marginTop: '30px', fontSize: '1rem', textAlign: 'center' }}
          >
            Contact me for specific class timings and availability. Group classes are offered on weekdays, while weekends are reserved for private sessions to provide you with personalized attention.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Classes;