"use client"
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './episodes.module.scss';
import EpisodeCard from '@/components/EpisodeCard/EpisodeCard';
import { getEpisodes } from '@/app/utils'
import Link from 'next/link';

// export const metadata = {
//   title: "Geohabari Podcast | Episodes"
// }

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

function Episodes(){
  const [episodes, setEpisodes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    getEpisodes().then(res =>{
      setEpisodes(res);
      setIsLoading(false);
    })
  }, []);

  return(
    <div className={styles.episodes} data-testid="episodes">
      <div className={styles.episodes_list}>
        {isLoading? 
        <div>LOADING ...</div>: 
        episodes.map((episode) => 
          <div key={episode.id}  className={styles.card_container}>
            <Link href={`/episodes/${episode.id}`}>
              <EpisodeCard episode={episode}/>
            </Link>
          </div>
        )}
      </div>
      
    </div>
  )
}

Episodes.propTypes = {};

export default Episodes;
