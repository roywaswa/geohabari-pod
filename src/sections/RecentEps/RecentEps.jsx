'use client'

import React from 'react';
import styles from './RecentEps.module.scss';
import useEpisodes from '@/hooks/useEpisodes';
import Image from 'next/image';


export default function RecentEps() {
  const {episodes, loading} = useEpisodes();
  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }
  return(
    <section className={styles.RecentEps}>
      <div className={styles.section_header}>
        <h3>EPISODES</h3>
      </div>
      <div className={styles.episode_slider}>
        {episodes.slice(0,5).map((episode, index) => (
          <div key={index} className={styles.episode_card}>
            <Image src={episode.artwork_url} alt={episode.title} className={styles.episode_image}  width={400} height={400}/>
            <h4 className={styles.episode_title}>{episode.title}</h4>
          </div>
        ))}
      </div>
      <div className={styles.slider_crumbs}>
        <span className={styles.crumb_active}></span>
        <span className={styles.crumb}></span>
        <span className={styles.crumb}></span>
        <span className={styles.crumb}></span>
        <span className={styles.crumb}></span>
      </div>
    </section>
  )
}
