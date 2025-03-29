import React from 'react';
import styles from './EpisodeBanner.module.scss';
import Image from 'next/image';

const EpisodeBanner = ({ imageUrl = "/images/GEOPOD-S2E1.jpg", altText = "Episode Banner" }) => (
  <section className={styles.EpisodeBanner}>
    <div className={styles.gradient_container}>
      <div className={styles.text_container}>
        <h1 className={styles.title}>Up Next ...</h1>
        <h2 className={styles.subtitle}>S2E1 - The Space Economy Playbook</h2>
        <h4 className={styles.date}>Release Date: 2025-03-31</h4>
        <p className={styles.description}>
          Join us for the debut of Season 2, where we explore the latest trends and innovations in the space economy.
          In this episode, we discuss the implications of the recent SpaceX Starship launch and its impact on the future of space exploration.
          We also delve into the role of private companies in shaping the space economy and the potential for new markets and opportunities.
          Don't miss this exciting start to our new season!
        </p>
        {/* <button className={styles.btn_cta}>Listen Now</button> */}
      </div>
      <div className={styles.image_container}>
        <Image 
          src={imageUrl} 
          alt={altText} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
          className={styles.image} 
          priority={true} /* Ensures the image loads quickly */
        />
      </div>
    </div>
  </section>
);

export default EpisodeBanner;
