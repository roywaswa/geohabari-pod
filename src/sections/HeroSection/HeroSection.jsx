'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './HeroSection.module.scss';
import { useRouter } from 'next/navigation';
import { platform_links } from '@/app/utils';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/all';
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP, TextPlugin);
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

const HeroContent = () => {
  const topics = [
    "Tech", "Geo-Banter", "Application", "Earth Observation", "Career", "Scholarships", "GEOHABARI"
  ]
  useGSAP(() => {
    const text_tl = gsap.timeline({
      delay:2,
      repeat:-1, 
      repeatDelay:2
    })
    topics.forEach(topic => { 
      text_tl.to("#topic", {
        text: topic.toUpperCase(),
        duration: 1
      }).to("#topic", {
        duration: 1
      });
    })
  })
  return(
  <div className={styles.hook_container}>
    <header>
      <h1 className={styles.hook_text}>
        <span>Amplifying African tech stories </span>
        <span className={styles.green_text} aria-label="and">&amp;</span>
        <span> building tech brilliance.</span>
      </h1>
      
      <div className={styles.themes} role="banner" aria-label="Current theme">
        <h2 id="topic">GEOHABARI</h2>
      </div>
    </header>

    <PodcastDropdown />
  </div>
);}

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


const PodcastDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (platform) => {
    setIsOpen(false);
    if (platform == "Spotify") {
      router.push(platform_links.spotify)
    }else if (platform == "Apple Podcasts") {
      router.push(platform_links.applepods)
    }else if (platform == "Podcast Addict") {
      router.push(platform_links.podcast_addict)
    }else {
      console.log("No Platform");
    }
  };


  return (
    <div className={styles.podcast_dropdown}>
      {/* Main Button */}
      <button
        onClick={() => {
          router.push('/episodes');
        }}
        className={styles.podcast_dropdown__main_btn}
      >
        <span className={styles.podcast_dropdown__main_text}>LISTEN NOW</span>
      </button>
    </div>
  );
};