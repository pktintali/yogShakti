import React, { useState, useEffect } from 'react';
import styles from '../styles/FormPopup.module.css';

const FormPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if popup has been shown this session
    const hasShownPopup = sessionStorage.getItem('popupShown');
    
    if (!hasShownPopup) {
      // Show popup after a longer delay (5 seconds instead of 1)
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark that we've shown the popup
        sessionStorage.setItem('popupShown', 'true');
      }, 5000); // Show popup after 5 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const closePopup = () => {
    setIsOpen(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your interest! We will get back to you soon.');
    closePopup();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={closePopup}>
          <i className="fas fa-times"></i>
        </button>
        <div className={styles.popupContent}>
          <h2>Start Your Wellness Journey Today!</h2>
          <p>Sign up to receive information about our classes and exclusive offers.</p>
          
          <form onSubmit={handleSubmit} className={styles.popupForm}>
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
            <button type="submit" className={styles.submitBtn}>Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;