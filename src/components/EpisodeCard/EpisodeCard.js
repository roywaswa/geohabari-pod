import React from 'react';
import PropTypes from 'prop-types';
import styles from './EpisodeCard.module.scss';
import Image from 'next/image';
import moment from 'moment'


const EpisodeCard = (props) => {
  const episode = props.episode
  let title = episode.title.split(":")
  title.shift()
  title = title.join(":")
  let pub_date = moment(episode.published_at)
  const tags = props.episode.tags.split(',').map(tag => tag.trim())
  

  
  return(
    <div className={styles.EpisodeCard} data-testid="EpisodeCard">
      <div className={styles.artwork_container}>
        <Image fill
        placeholder='empty'
        className={styles.image} 
        src={episode.artwork_url} 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        alt={`Artwork for ${title}`} />
      </div>
      <div className={styles.description_container}>
        <div className={styles.episode_metadata}>
          <span>{pub_date.format("MM-DD-YYYY")}<small>({pub_date.fromNow()})</small></span>
          <div>
            <span>S{episode.season_number}</span>
            <span> Ep{episode.episode_number}</span>
          </div>
        </div>
        <div className={styles.episode_title}>
          <h4>{title}</h4>
        </div>
        <div className={styles.episode_features}>
          <h6>{episode.artist}</h6>
        </div>
        <div className={styles.episode_tags}>
          {
            tags.map(tag => <span key={tag}>{tag}</span> )
          }
        </div>
      </div>
    </div>
  )
}

EpisodeCard.propTypes = {
  episode: PropTypes.object
};


export default EpisodeCard;
