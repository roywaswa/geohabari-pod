import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import styles from './episode.module.scss';
import { getEpisodeById, getEpisodes } from '@/app/utils';

export const revalitdate = 60*60*24/5

export  async function generateStaticParams() {
  const episodeIds = await getEpisodes().then(res => {
    return res.map(ep => String(ep.id))
  })
  return episodeIds.map(episodeId => {
    return {
      episodeId,
    }
  })
}

export default async function episode({params}) {
  const episode = await getEpisodeById(params.episodeId)
  return (
    <div className={styles.episode}>
      <Suspense fallback = {<div>Loading ... </div>}>
        <h1>{episode.title}</h1>
        <AudioPlayer 
        mp3Url={episode.audio_url} 
        artworkUrl={episode.artwork_url}
        title={episode.title}/>
      </Suspense>
    </div>
  )
}

episode.propTypes = {};

const AudioPlayer = ({ mp3Url, artworkUrl, title = "Audio Title" }) => {
  return (
    <div className={styles.playerContainer}>
      <img
        src={artworkUrl}
        alt="Artwork"
        className={styles.artwork}
      />
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

