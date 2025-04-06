import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../styles/Gallery.module.css';
// Import personal yoga photos
import personalYoga1 from '../assets/images/personal/8CC9412E-97DA-4A82-A9ED-7F5422D76278.jpeg';
import personalYoga2 from '../assets/images/personal/IMG_9073.jpeg';
import personalYoga3 from '../assets/images/personal/IMG_9228.jpeg';
import personalYoga4 from '../assets/images/personal/IMG_9232.jpeg';
import personalYoga5 from '../assets/images/personal/IMG_9248.jpeg';
import personalYoga6 from '../assets/images/personal/IMG_9256.jpeg';
import personalYoga7 from '../assets/images/personal/IMG_9281.jpeg';
import personalYoga8 from '../assets/images/personal/IMG_9295.jpeg';
import personalYoga9 from '../assets/images/personal/IMG_9383.jpeg';
import personalYogaVideo1 from '../assets/videos/personal/IMG_9242.mp4';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeSection, setActiveSection] = useState('images'); // 'images' or 'videos'
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  
  // Personal yoga practice images
  const personalImages = [
    { id: 1, src: personalYoga1, title: 'Forward Bend Pose', category: 'My Practice' },
    { id: 2, src: personalYoga2, title: 'Balance Pose', category: 'My Practice' },
    { id: 3, src: personalYoga3, title: 'Meditation Posture', category: 'My Practice' },
    { id: 4, src: personalYoga4, title: 'Extended Side Angle', category: 'My Practice' },
    { id: 5, src: personalYoga5, title: 'Seated Twist', category: 'My Practice' },
    { id: 6, src: personalYoga6, title: 'Warrior Pose', category: 'My Practice' },
    { id: 7, src: personalYoga7, title: 'Tree Pose', category: 'My Practice' },
    { id: 8, src: personalYoga8, title: 'Backbend Practice', category: 'My Practice' },
    { id: 9, src: personalYoga9, title: 'Inversions Practice', category: 'My Practice' }
  ];

  // Sample video entries
  const videoPlaceholders = [
    { id: 1, src: personalYogaVideo1, title: 'Morning Flow Routine', category: 'Flow Sequences', type: 'video' },
    { id: 2, title: 'Meditation Practice', category: 'Meditation', type: 'video', placeholder: true },
    { id: 3, title: 'Advanced Poses', category: 'Poses', type: 'video', placeholder: true },
    { id: 4, title: 'Stretching Routine', category: 'Flexibility', type: 'video', placeholder: true },
    { id: 5, title: 'Balance Practice', category: 'Balance', type: 'video', placeholder: true },
    { id: 6, title: 'Core Strength Yoga', category: 'Strength', type: 'video', placeholder: true }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Preload images and reset position on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    
    // Immediately start the animation to ensure content is visible
    controls.start("visible");
    
    // Use a timeout instead of image preloading which might be causing issues
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [controls]);

  // Effect to update animations when tab changes
  useEffect(() => {
    controls.start("visible");
  }, [activeSection, controls]);

  const openModal = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  // Show loading state while images are preloading
  if (isLoading) {
    return (
      <div className={styles.galleryPage}>
        <div className={styles.galleryHero}>
          <div className="container">
            <h1 className={styles.pageTitle}>My Yoga Practice</h1>
          </div>
        </div>

        <section className={styles.gallerySection}>
          <div className="container">
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
              <p>Loading gallery...</p>
            </div>
            
            {/* Always show tabs, even during loading */}
            <div className={styles.galleryTabs}>
              <button 
                className={`${styles.tabButton} ${activeSection === 'images' ? styles.activeTab : ''}`}
                onClick={() => setActiveSection('images')}
                aria-label="View Images"
              >
                My Practice Images
              </button>
              <button 
                className={`${styles.tabButton} ${activeSection === 'videos' ? styles.activeTab : ''}`}
                onClick={() => setActiveSection('videos')}
                aria-label="View Videos"
              >
                Practice Videos
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.galleryPage}>
      <div className={styles.galleryHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>My Yoga Practice</h1>
        </div>
      </div>

      <section className={styles.gallerySection}>
        <div className="container">
          <p className={styles.galleryIntro}>
            Explore moments from my personal yoga journey. These images and videos represent my practice and the harmony of mind, body, and spirit through yoga.
          </p>

          {/* Gallery Navigation Tabs - Simple HTML without motion to ensure visibility */}
          <div className={styles.galleryTabs}>
            <button 
              className={`${styles.tabButton} ${activeSection === 'images' ? styles.activeTab : ''}`}
              onClick={() => setActiveSection('images')}
              aria-label="View Images"
            >
              My Practice Images
            </button>
            <button 
              className={`${styles.tabButton} ${activeSection === 'videos' ? styles.activeTab : ''}`}
              onClick={() => setActiveSection('videos')}
              aria-label="View Videos"
            >
              Practice Videos
            </button>
          </div>

          {/* Images Gallery Section */}
          {activeSection === 'images' && (
            <>
              <p className={styles.sectionIntro}>
                Welcome to my personal yoga journey. These photos showcase my own practice and the poses I've been developing throughout my yoga experience.
              </p>
              <div className={styles.galleryGrid}>
                {personalImages.map((image) => (
                  <div 
                    key={image.id} 
                    className={styles.galleryItem}
                    onClick={() => openModal(image)}
                  >
                    <div className={styles.galleryImage}>
                      <img src={image.src} alt={image.title} />
                      <div className={styles.galleryOverlay}>
                        <h3>{image.title}</h3>
                        <span>{image.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Videos Gallery Section */}
          {activeSection === 'videos' && (
            <>
              <p className={styles.sectionIntro}>
                Explore videos of my yoga practice. Click on any thumbnail to view the full video.
              </p>
              <div className={styles.galleryGrid}>
                {videoPlaceholders.map((video) => (
                  <div 
                    key={video.id} 
                    className={`${styles.galleryItem} ${styles.videoItem}`}
                    onClick={() => video.placeholder ? null : openModal(video)}
                  >
                    <div className={styles.galleryImage}>
                      <div className={styles.videoThumbnail}>
                        <div className={styles.playIcon}>▶</div>
                        {video.placeholder && <p className={styles.placeholderText}>Upload your video here</p>}
                      </div>
                      <div className={styles.galleryOverlay}>
                        <h3>{video.title}</h3>
                        <span>{video.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Modal for both images and videos */}
      {selectedMedia && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeModal} onClick={closeModal} aria-label="Close modal">&times;</span>
            {selectedMedia.type === 'video' ? (
              <video controls autoPlay preload="metadata">
                <source src={selectedMedia.src} type="video/mp4" />
                <track kind="captions" src="" label="English captions" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={selectedMedia.src} alt={selectedMedia.title} />
            )}
            <div className={styles.modalInfo}>
              <h3>{selectedMedia.title}</h3>
              <p>{selectedMedia.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;