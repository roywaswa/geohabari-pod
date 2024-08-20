"use client"
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './episodes.module.scss';
import EpisodeCard from '@/components/EpisodeCard/EpisodeCard';

// export const metadata = {
//   title: "Geohabari Podcast | Episodes"
// }

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

function Episodes(){
  const [episodes, setEpisodes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {    
    fetch(`${base_url}/api/buzzsprout`, {
      method:"GET",
      header:{
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .then((data) => {
        setEpisodes(data.data);
        setIsLoading(false);
      });
  }, []);

  return(
    <div className={styles.episodes} data-testid="episodes">
      <div className={styles.episodes_list}>
        {isLoading? 
        <div>LOADING ...</div>: 
        episodes.map((episode) => <div key={episode.id}  className={styles.card_container}>
          <EpisodeCard episode={episode}/>
        </div>)
        }
      </div>
      
    </div>
  )
}

Episodes.propTypes = {};

export default Episodes;
