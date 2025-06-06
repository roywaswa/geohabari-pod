// 'use client'

// import React from 'react';
// import styles from './RecentEps.module.scss';
// import useEpisodes from '@/hooks/useEpisodes';
// import Image from 'next/image';


// export default function RecentEps() {
//   const {episodes, loading} = useEpisodes();
//   if (loading) {
//     return <div className={styles.loading}>Loading...</div>;
//   }
//   return(
//     <section className={styles.RecentEps}>
//       <div className={styles.section_header}>
//         <h3>EPISODES</h3>
//       </div>
//       <div className={styles.episode_slider}>
//         {episodes.slice(0,5).map((episode, index) => (
//           <div key={index} className={styles.episode_card}>
//             <Image src={episode.artwork_url} alt={episode.title} className={styles.episode_image}  width={400} height={400}/>
//             <h4 className={styles.episode_title}>{episode.title}</h4>
//           </div>
//         ))}
//       </div>
//       <div className={styles.slider_crumbs}>
//         <span className={styles.crumb_active}></span>
//         <span className={styles.crumb}></span>
//         <span className={styles.crumb}></span>
//         <span className={styles.crumb}></span>
//         <span className={styles.crumb}></span>
//       </div>
//     </section>
//   )
// }

'use client'

import React, { useState, useEffect } from 'react';
import styles from './RecentEps.module.scss';
import useEpisodes from '@/hooks/useEpisodes';
import Image from 'next/image';

export default function RecentEps() {
  const { episodes, loading } = useEpisodes();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const eps = episodes.slice(0, 5); // Limit to first 5 episodes
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === eps.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? eps.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleEpisodeClick = (episodeId) => {
    // Replace with your navigation logic
    console.log(`Navigate to episode ${episodeId}`);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Auto-advance carousel
  useEffect(() => {
    if (loading || !eps || eps.length === 0) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, loading, eps]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <section className={styles.RecentEps}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.section_header}>
          <div className={styles.header_accent}>
            <div className={styles.accent_dot}></div>
            <span>Latest Content</span>
            <div className={styles.accent_dot}></div>
          </div>
          <h3>EPISODES</h3>
          <p className={styles.header_description}>
            Dive into our latest conversations with industry leaders, innovators, and creative minds
          </p>
        </div>

        {/* Main Carousel */}
        <div className={styles.carousel_container}>
          <div className={styles.episode_slider}>
            <div 
              className={styles.slider_track}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {eps.slice(0, 5).map((episode, index) => (
                <div key={index} className={styles.episode_card}>
                  {/* Episode Artwork */}
                  <div className={styles.artwork_container}>
                    <Image 
                      src={episode.artwork_url} 
                      alt={episode.title}
                      className={styles.episode_image}  
                      width={400} 
                      height={400}
                    />
                  </div>
                  <div className={styles.episode_info}>
                    <h4 className={styles.episode_title}>{episode.title}</h4>
                    <p className={styles.episode_description} dangerouslySetInnerHTML={{__html: episode.description}}/>
                    <button
                      onClick={() => handleEpisodeClick(episode.id)}
                      className={styles.listen_button}
                    >
                      Listen Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`${styles.nav_arrow} ${styles.nav_prev}`}
            aria-label="Previous episode"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className={`${styles.nav_arrow} ${styles.nav_next}`}
            aria-label="Next episode"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>

        {/* Enhanced Dot Indicators */}
        <div className={styles.slider_crumbs}>
          {eps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.crumb} ${index === currentIndex ? styles.crumb_active : ''}`}
              aria-label={`Go to episode ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Episode Counter */}
        <div className={styles.episode_counter}>
          Episode {currentIndex + 1} of {Math.min(eps.length, 5)}
        </div>
      </div>
    </section>
  );
}

