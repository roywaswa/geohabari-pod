'use client';

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './HeroSection.module.scss';

const CITY_IMAGES = [
  { src: '/images/nairobi.png', alt: 'Nairobi city map', className: styles.nairobi_map },
  { src: '/images/kampala.png', alt: 'Kampala city map', className: styles.kampala_map },
  { src: '/images/dar_es_salaam.png', alt: 'Dar es Salaam city map', className: styles.dar_map }
];

const HOST_IMAGES = [
  { src: '/stock/woman_2.jpg', alt: 'Main podcast host - professional woman', className: `${styles.host_image} ${styles.main_host}` },
  { src: '/stock/man_1.jpg', alt: 'Podcast co-host - professional man', className: `${styles.host_image} ${styles.second_host}` },
  { src: '/stock/woman_1.jpg', alt: 'Podcast guest - tech professional', className: `${styles.host_image} ${styles.third_host}` },
  { src: '/stock/man_2.jpg', alt: 'Podcast contributor - tech expert', className: `${styles.host_image} ${styles.fourth_host}` }
];

const HeroContent = () => (
  <div className={styles.hook_container}>
    <header>
      <h1 className={styles.hook_text}>
        <span>Amplifying African tech stories </span>
        <span className={styles.green_text} aria-label="and">&amp;</span>
        <span> building tech brilliance.</span>
      </h1>
      
      <div className={styles.themes} role="banner" aria-label="Current theme">
        SCHOLARSHIPS
      </div>
    </header>

    <button 
      className={styles.main_cta}
      type="button"
      aria-label="Listen to podcast now"
      onClick={() => {
        // Add your navigation logic here
        console.log('Navigate to podcast episodes');
      }}
    >
      <span className={styles.main_cta_text}>
        LISTEN NOW
      </span>
      <span className={styles.main_cta_icon} aria-hidden="true">
        <FontAwesomeIcon 
          icon={faCaretDown} 
          size="2x" 
          style={{ color: "#ffffff" }} 
        />
      </span>
    </button>
  </div>
);

const ImageGrid = () => (
  <div className={styles.image_container} role="img" aria-label="African tech community showcase">
    {/* City Maps */}
    {CITY_IMAGES.map((city, index) => (
      <Image
        key={`city-${index}`}
        className={city.className}
        src={city.src}
        alt={city.alt}
        width={202}
        height={202}
        priority={index === 0} // Prioritize first image for LCP
        sizes="(max-width: 768px) 30vw, 202px"
      />
    ))}

    {/* Host Images */}
    {HOST_IMAGES.map((host, index) => (
      <Image
        key={`host-${index}`}
        className={host.className}
        src={host.src}
        alt={host.alt}
        width={202}
        height={202}
        sizes="(max-width: 768px) 30vw, 202px"
      />
    ))}
  </div>
);

export default function HeroSection() {
  return (
    <section 
      className={styles.HeroSection}
      aria-labelledby="hero-heading"
      role="banner"
    >
      <HeroContent />
      <ImageGrid />
    </section>
  );
}