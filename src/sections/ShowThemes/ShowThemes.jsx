import React from 'react';
import styles from './ShowThemes.module.scss';

const themes = [
  {
    name: 'TECH',
    description: "Discover African organizations leading in geo-enabling and other cutting-edge technologies. We dive into the systems' components, from programming languages to seamless integrations, showcasing impactful use cases across the continent.",
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    color: 'tech'
  },
  {
    name: "STUDY ABROAD",
    description: "Scholarship recipients share their application tips and tricks, covering everything from requirements to living abroad. The ultimate starter pack for geospatial students looking to study overseas.",
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    color: 'study'
  },
  {
    name: "BANTER",
    description: "Blend technical expertise with humor to humanize experiences in the tech world. Ideal for those looking for a light-hearted, tech-centric laugh.",
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
    color: 'banter'
  },
  {
    name: "CAREER",
    description: "Navigate diverse career paths in the geospatial industry. Discussing pivotal moments, key learnings, and challenges, these episodes inspire you to explore new career horizons.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    color: 'career'
  },
  {
    name: "EARTH",
    description: "Dive into Earth Observation (EO) use cases across various sectors. From technical tools and datasets to real-world applications and impacts, each episode offers a comprehensive look at EO's potential.",
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
    color: 'earth'
  },
  {
    name: "ACADEMIA",
    description: "Discover African organizations leading in geo-enabling and other cutting-edge technologies. We dive into the systems' components, from programming languages to seamless integrations, showcasing impactful use cases across the continent.",
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    color: 'academia'
  },
  {
    name: "ACTION",
    description: "Explore how tech is used across Africa to drive change. Highlighting limitless possibilities, we showcase how GIS is leveraged for impactful solutions in different industries.",
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
    color: 'action'
  },
];

function ThemeCard({ theme }) {
  return (
    <div 
      className={`${styles.themeCard} ${styles[theme.color]}`}
      style={{ backgroundImage: `url(${theme.image})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h3 className={styles.title}>{theme.name}</h3>
        <p className={styles.description}>{theme.description}</p>
      </div>
    </div>
  );
}

export default function ShowThemes() {
  return (
    <div className={styles.showThemes}>
      <h2 className={styles.mainTitle}>
        Conversations<br />
        that cut across<br />
        the board in ...
      </h2>
      <div className={styles.grid}>
        {themes.map((theme, index) => (
          <ThemeCard key={index} theme={theme} />
        ))}
      </div>
    </div>
  );
}