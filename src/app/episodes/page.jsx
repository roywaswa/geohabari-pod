"use client"
import React, { useState, useEffect, Suspense } from 'react';
import styles from './episodes.module.scss';
import EpisodeCard from '@/components/EpisodeCard/EpisodeCard';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import useEpisodes from '@/hooks/useEpisodes';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import Head from 'next/head';

gsap.registerPlugin(useGSAP, Flip);

export default function Episodes() {
  const { episodes, loading } = useEpisodes();
  const [selectedTags, setSelectedTags] = useState([]);
  const [uniqueTags, setUniqueTags] = useState([]);
  const { isDarkMode } = useTheme();

  function getUniqueTags(objectsArray) {
    const allTags = objectsArray.flatMap(obj => obj.tags.split(',').map(tag => tag.trim())).filter(element => element !== '');
    const uniqueTags = [...new Set(allTags)];
    return uniqueTags;
  }

  useEffect(() => {
    const utags = getUniqueTags(episodes);
    setUniqueTags(utags);
  }, [episodes]);

  const checkAndRemoveOrAddValue = (value) => {
    setSelectedTags((prevArr) => {
      const index = prevArr.indexOf(value);
      if (index !== -1) {
        const newArr = [...prevArr];
        newArr.splice(index, 1);
        return newArr;
      } else {
        return [...prevArr, value];
      }
    });
  };

  useGSAP(() => {
    const list_state = Flip.getState("#episodes_list");
    Flip.from(list_state, {
      absolute: true,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.inOut"
    });
  });

  return (
    <>
      <Head>
        <title>Episodes - GeoHabari Podcast</title>
        <meta name="description" content="Explore the wide range of topics discussed in the GeoHabari Podcast episodes." />
        <meta name="keywords" content="GeoHabari, Podcast, Geospatial, Episodes, Topics" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={`${styles.episodes} ${isDarkMode ? 'dark' : ''}`} data-testid="episodes">
        <div className={styles.container_page_title}>
          <div className={styles.page_title}>
            <h1>EPISODES</h1>
          </div>
          <div className={styles.page_subtitle}>
            <p className={styles.subtitle}>
              Explore the wide range of topics discussed in the podcast
            </p>
          </div>
        </div>
        <div className={styles.container_tags}>
          {uniqueTags.map(utag =>
            <Tag setTags={checkAndRemoveOrAddValue} key={utag} value={utag}>{utag}</Tag>
          )}
        </div>
        <div id="episodes_list" className={styles.episodes_list}>
          {loading ? <div className={styles.loading}>LOADING ... </div> : null}
          <Suspense fallback={<div className={styles.loading}>LOADING ... </div>}>
            {episodes.filter(ep => {
              const epTags = ep.tags.split(',').map(tag => tag.trim());
              return selectedTags.every(tag => epTags.includes(tag));
            }).map((episode) =>
              <div key={episode.id} className={styles.card_container}>
                <Link href={`/episodes/${episode.id}`}>
                  <EpisodeCard episode={episode} />
                </Link>
              </div>
            )}
          </Suspense>
        </div>
        <div className={styles.bottom_navigation}>
          <FontAwesomeIcon icon={faCircleChevronLeft} size='2x' />
          <FontAwesomeIcon icon={faCircleChevronRight} size='2x' />
        </div>
      </main>
    </>
  );
}

export function Tag(props) {
  const [tag, setTag] = useState(false);

  return (
    <div onClick={() => {
      setTag(!tag);
      props.setTags(props.value);
    }} className={`${styles.tag} ${tag ? styles.tag_checked : ''}`}>
      <p>{props.children}</p>
    </div>
  );
}
