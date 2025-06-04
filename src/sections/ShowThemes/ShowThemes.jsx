import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShowThemes.module.scss';
import Image from 'next/image';

const themes = [
  {
    name: 'Tech',
    description: "Discover African organizations leading in geo-enabling and   other cutting-edge technologies. We dive into the  systems' components, from programming languages to seamless integrations, showcasing impactful use cases across the continent.",
    image: 'https://placehold.co/400x400/png'
  },
  {
    name:"action",
    description:"Explore how tech is used across Africa to drive change. Highlighting limitless possibilities, we showcase how GIS is leveraged for impactful solutions in different industries.",
    image: 'https://placehold.co/400x400/png'
  },
  {
    name:"academia",
    description:"Discover African organizations leading in geo-enabling and   other cutting-edge technologies. We dive into the  systems' components, from programming languages to seamless integrations, showcasing impactful use cases across the continent.",
    image: 'https://placehold.co/400x400/png'
  },
  {
    name:"earth",
    description:"Dive into Earth Observation (EO) use cases across various sectors. From technical tools and datasets to real-world applications and impacts, each episode offers a comprehensive look at EO's potential.",
    image: 'https://placehold.co/400x400/png'
  },
  {
    name:"banter",
    description:"Blend technical expertise with humor to humanize experiences in the tech world. Ideal for those looking for a light-hearted, tech-centric laugh.",
    image: 'https://placehold.co/400x400/png'
  },
  {
    name:"career",
    description:"Navigate diverse career paths in the geospatial industry. Discussing pivotal moments, key learnings, and challenges, these episodes inspire you to explore new career horizons.",
    image: 'https://placehold.co/400x400/png'
  },
  {
    name:"study abroad",
    description:"Scholarship recipients share their application tips and tricks, covering everything from requirements to living abroad. The ultimate starter pack for geospatial students looking to study overseas.",
    image: 'https://placehold.co/400x400/png'
  },
]

export default function ShowThemes(){
  return(
    <div className={styles.ShowThemes}>
      <div className={styles.theme_intro}>
        <h3>Conversations that cut across the board in ...</h3>
      </div>
      {themes.map((theme, index) => (
        <ThemeCard key={index} theme={theme} />
      ))}
    </div>
  )
}

function ThemeCard({theme}) {
  return (
    <div className={styles.ThemeCard}>
      <h3>{theme.name}</h3>
      <p>{theme.description}</p>
      {/* <Image src="https://placehold.co/400x400/png" alt={theme.name} width={400} height={400} /> */}
    </div>
  );
}