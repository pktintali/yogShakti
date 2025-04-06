import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>Yoga<span>Shakti</span></h1>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>About Me</Link></li>
            <li><Link to="/classes" className={location.pathname === '/classes' ? styles.active : ''}>Classes</Link></li>
            <li><Link to="/gallery" className={location.pathname === '/gallery' ? styles.active : ''}>Gallery</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;