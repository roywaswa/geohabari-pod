'use client';

import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import styles from './LatestEp.module.scss';
import useEpisodes from '@/hooks/useEpisodes';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faPause, faPlay, faRepeat } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function LatestEp() {
  const {episodes, loading} = useEpisodes()
  return(
    <div className={styles.LatestEp}>
      {/* <div className={styles.backgroundImageContainer}>
        <Image
          src='/images/kampala.png'
          alt="Background Image"
          width={720}
          height={720}
          // fill
          className={styles.backgroundImage}
        />
      </div> */}
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          <LatestEpCard
            episode={episodes[0]}
          />
        )
      }
    </div>
  )
}

function LatestEpCard({episode}) {
  const short_title = episode.title.length > 30 ? episode.title.slice(0, 30) + '...' : episode.title;
  
  return (
    <div className={styles.LatestEpCard}>
      
      <div className={styles.ep_player}>
        <div className={styles.ep_description}>
          <p>LATEST EPISODE #S0{episode.season_number}E{episode.episode_number} </p>
          <p>{short_title}</p>
        </div>
        <div className={styles.player_controls}>
          <AudioPlayer
            src={episode.audio_url}
            autoPlay={false}
            showJumpControls={false}
            showDownloadProgress={false}
            showFilledVolume={true}
            customAdditionalControls={[]}
            customIcons={{
              play: <FontAwesomeIcon icon={faPlay} style={{color: "#783FC6",}} />,
              pause: <FontAwesomeIcon icon={faPause} style={{color: "#783FC6",}} />,
              loop: <FontAwesomeIcon icon={faRepeat} style={{color: "#783FC6",}} />,
            }}
          />
        </div>
        <Link href={`/episodes/${episode.id}`} className={styles.link_to_ep}>
          <p>Go to Episode</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" style={{color: "#ffffff",}} />
        </Link>
      </div>
      <div className={styles.ep_artwork}>
        <Image src={episode.artwork_url} alt={episode.title} width={200} height={200} />
      </div>
    </div>
  )
}
