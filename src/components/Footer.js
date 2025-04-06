import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mandalaPattern}></div>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>YogaShakti</h3>
            <p>Bringing peace, balance and strength through the ancient practice of yoga.</p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Classes</h4>
            <ul>
              <li>Strength Training</li>
              <li>Mobility Conditioning</li>
              <li>Hatha Yoga</li>
              <li>Pranayama</li>
              <li>Meditation</li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <ul className={styles.contactInfo}>
              <li><i className="fas fa-phone"></i> 727-827-9648</li>
              <li><i className="fas fa-envelope"></i> Rajeshwari Gupta</li>
              <li><i className="fas fa-laptop"></i> Online Classes Only</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} YogaShakti. All rights reserved.</p>
          <p>Designed with <span>♥</span> and positive energy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;