import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import styles from './episode.module.scss';
import { getEpisodeById, getEpisodes } from '@/app/utils';
import Image from 'next/image';

export const revalitdate = 60*60*24/5

export  async function generateStaticParams() {
  const episodeIds = await getEpisodes().then(res => {
    return res.map(ep => String(ep.id))
  }).catch(err => {
    console.log("Fetching Error",err);
    
  })
  return episodeIds.map(episodeId => {
    return {
      episodeId,
    }
  })
}

export default function episode({params}) {
  const episode = getEpisodeById(params.episodeId)
  const descriptionHtml = {__html: episode.description}
  return (
    <div className={styles.episode}>
      <Suspense fallback = {<div>Loading ... </div>}>
        <h1>{episode.title}</h1>
        <AudioPlayer 
          mp3Url={episode.audio_url} 
          artworkUrl={episode.artwork_url}
          title={episode.title}/>
        {/* <div className={styles.description} dangerouslySetInnerHTML={descriptionHtml} /> */}
      </Suspense>
    </div>
  )
}

episode.propTypes = {};

const AudioPlayer = ({ mp3Url, artworkUrl, title = "Audio Title" }) => {
  return (
    <div className={styles.playerContainer}>
      <div className={styles.image_container}>
        <Image fill
          src={artworkUrl}
          alt="Artwork"
          className={styles.image}
        />
      </div>
      <div className={styles.controls}>
        <h2 className={styles.title}>{title}</h2>
        <audio controls className={styles.audio}>
          <source src={mp3Url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

