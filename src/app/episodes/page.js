"use client"
import React, {useState, useEffect, Suspense} from 'react';
import PropTypes from 'prop-types';
import styles from './episodes.module.scss';
import EpisodeCard from '@/components/EpisodeCard/EpisodeCard';
import { getEpisodes } from '@/app/utils'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

// export const metadata = {
//   title: "Geohabari Podcast | Episodes"
// }

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

function Episodes(){
  const [episodes, setEpisodes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedTags, setSelectedTags] = useState([])
  const [uniqueTags, setUniqueTags] = useState([])
  
  useEffect(() => {
    getEpisodes().then(res =>{
      setEpisodes(res);
      setIsLoading(false);
      setUniqueTags(getUniqueTags(episodes))
    })
  },[]);


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
  
  function getUniqueTags(objectsArray) {
    const allTags = objectsArray.flatMap(obj => obj.tags.split(',').map(tag => tag.trim()));
    const uniqueTags = [...new Set(allTags)];
    return uniqueTags;
  }



  return(
    <div className={styles.episodes} data-testid="episodes">
      <div className={styles.container_page_title}>
        <div className={styles.page_title}>
          <h1>EPISODES</h1>
        </div>
        <div className={styles.page_subtitle}>
          <p className={styles.Subtitle}>
            Explore the wide range of topics discussed in the podcast
          </p>
        </div>
      </div>
      <div className={styles.container_tags}>
        {
          uniqueTags.map(utag => 
            <Tag setTags={checkAndRemoveOrAddValue} key={utag} value={utag}>{utag}</Tag>
          )
        }
        <Tag setTags={checkAndRemoveOrAddValue} value='tags1'>Tag</Tag>
        <Tag setTags={checkAndRemoveOrAddValue} value='tags2'>Tag</Tag>
        <Tag setTags={checkAndRemoveOrAddValue} value='tags3'>Tag</Tag>
        <Tag setTags={checkAndRemoveOrAddValue} value='tags4'>Tag</Tag>
      </div> 
      <div className={styles.episodes_list}>
        {isLoading? <div>LOADING ... </div> : null}
        <Suspense fallback={<div>LOADING ... </div>}>
          {episodes.filter(ep => {
            const epTags = ep.tags.split(',').map(tag => tag.trim())
            return selectedTags.every(tag => epTags.includes(tag))
          }).map((episode) => 
            // TODO: Create a filter for the tags here
            <div key={episode.id}  className={styles.card_container}>
              <Link href={`/episodes/${episode.id}`}>
                <EpisodeCard episode={episode}/>
              </Link>
            </div>
          )}
          <div className={styles.bottom_navigation}>
            <FontAwesomeIcon icon={faCircleChevronLeft} size='4x'/>
            <FontAwesomeIcon icon={faCircleChevronRight} size='4x'/>
          </div>
        </Suspense>
      </div>
    </div>
  )
}

Episodes.propTypes = {};

export default Episodes;

export function Tag(props) {
  const [tag, setTag] = useState(false)

  return (
    <div onClick={() => {
      setTag(!tag)
      props.setTags(props.value)
    }} className={`${styles.tag} ${tag ? styles.tag_checked: null}`}>
      <p>{props.children}</p>
    </div>
  )
}
