import React, { Suspense } from 'react';
import styles from './episode.module.scss';
import { getEpisodeById, getEpisodes, platform_links } from '@/app/utils';
import Image from 'next/image';
import PodcastChip from '@/components/PodcastChip/PodcastChip.lazy';
import Link from 'next/link';

export const revalitdate = 60*60*24/5

export  async function generateStaticParams() {
  const episodeIds = await getEpisodes().then(res => (res.map(ep => String(ep.id)))).catch(err => {
    console.error(err)
  })
  return episodeIds.map(episodeId => {
    return {
      episodeId,
    }
  })
}

export default async function EpisodeDetailsPage({params}) {

  const episode = await getEpisodeById(params.episodeId)
  

  return (
    <main className={`${styles.episode}`}>
      <Suspense fallback = {<div>Loading ... </div>}>
        <>        
        <AudioPlayer 
          mp3Url={episode.audio_url} 
          artworkUrl={episode.artwork_url}  
          title={episode.title}/>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html:episode.description }} />
        </>
      </Suspense>
    </main>
  )
}

const AudioPlayer = ({ mp3Url, artworkUrl, title = "Audio Title" }) => {
  return (
    <div className={styles.playerContainer}>
      <div className={styles.ep_artwork}>
        <Image fill
          src={artworkUrl}
          alt="Artwork"
          className={styles.image}
        />
      </div>
      <div className={styles.ep_details}>
        <div className={styles.ep_player}>
          <h3 className={styles.title}>{title}</h3>
          <audio controls className={styles.audio}>
            <source src={mp3Url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className={styles.ep_platforms}>
          <Link className={styles.link} href={platform_links.applepods} target='_blank'>
            <PodcastChip icon="/icons/apple_podcast.png" platform="Apple Podcasts"/>
          </Link>
          <Link className={styles.link} href={platform_links.spotify} target='_blank'>
            <PodcastChip icon="/icons/spotify.png" platform="Spotify"/>
          </Link>
          <Link className={styles.link} href={platform_links.podcast_addict} target='_blank'>
            <PodcastChip icon="/icons/podcast_addict.png" platform="Podcast Addict"/>
          </Link>          
        </div>
      </div>
    </div>
  );
};

