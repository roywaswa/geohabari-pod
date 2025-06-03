import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection(){
  return(
    <section className={styles.HeroSection}>
      <div className={styles.hook_container}>
        <div className={styles.hook_text}>
          <span>Amplifying African tech stories </span>
          <span className={styles.green_text}>&amp;</span>
          <span> building tech brilliance.</span>
        </div>
        <div className={styles.themes}>SCHOLARSHIPS</div>
        <div className={styles.main_cta}>
            <div className={styles.main_cta_text}>
                <div>LISTEN NOW</div>
            </div>
            <div className={styles.main_cta_icon}>
                <FontAwesomeIcon icon={faCaretDown} size="3x" style={{color: "#ffffff",}} />
            </div>
        </div>
      </div>
      <div className={styles.image_container}>
          <Image className={styles.nairobi_map} alt='' width={202} height={202} src="/images/nairobi.png" />
          <Image className={styles.kampala_map} alt='' width={202} height={202} src="/images/kampala.png" />
          <Image className={styles.dar_map} alt='' width={202} height={202} src="/images/dar_es_salaam.png" />
          <Image className={`${styles.host_image} ${styles.main_host} `} alt='' width={202} height={202} src="/stock/woman_2.jpg" />
          <Image className={`${styles.host_image} ${styles.second_host} `} alt='' width={202} height={202} src="/stock/man_1.jpg" />
          <Image className={`${styles.host_image} ${styles.third_host} `} alt='' width={202} height={202} src="/stock/woman_1.jpg" />
          <Image className={`${styles.host_image} ${styles.fourth_host} `} alt='' width={202} height={202} src="/stock/man_2.jpg" />
      </div>
    </section>
  );
}

// export default function HeroSection() { 
//   const artwork = "https://storage.buzzsprout.com/32ojhq8cef0rvhf4262bjty0szin"
//   const { isDarkMode } = useTheme()
//   const router = useRouter()
//   const topics = [
//     "Tech", "Geo-Banter", "Application", "Earth Observation", "Career", "Scholarships"
//   ]

//   function navigateToEpisodes() {
//     router.push('/episodes')
//   }
//   const podcast_links = {
//     "spotify": "https://open.spotify.com/show/5n3pUUtfdAdGS4d2hMz2yc?si=f3e6a5803205469f",
//     "applepods":"https://podcasts.apple.com/ke/podcast/geohabari/id1747885525",
//     "podcast_addict": "https://podcastaddict.com/podcast/geohabari/5021923" 
//   }
//   useGSAP(() => {
//     let intro_tl = gsap.timeline()
//     const text_tl = gsap.timeline({
//       delay:2,
//       repeat:-1, 
//       repeatDelay:2
//     })
//     topics.forEach(topic => {
//       text_tl.to("#topic", {
//         text: topic,
//         duration: 1
//       }).to("#topic", {
//         duration: 1
//       });
//     })
//     intro_tl.to("#blur_fore", {
//       y:-1200,
//       duration: 1,
//       ease:'power1.out'
//     })
//     gsap.from("#image_1", { 
//       x: "60%",
//       delay: 0.8
//     })
//     gsap.from("#image_2", { 
//       x: "40%",
//       delay: 0.8
//     })
//     gsap.from("#image_3", { 
//       x: "-40%",
//       delay: 0.8
//     })
//   })
  
//   return (
//     <>
//     <section id="hero" className={`${styles.hero} ${isDarkMode && 'dark'}`}>
//       <>
//       <div id="main_block" className={styles.main_hero}>
//         <h1 id="title">Your one stop Podcast for Everything</h1>
//         <div className={styles.topics_scroller}>
//           <h1 id="topic">GeoHabari</h1>
//         </div>
//         <h4>Amplifying African tech stories and building tech brilliance.</h4>
//         <div onClick={navigateToEpisodes} className={styles.btn_cta}>
//           LISTEN NOW
//         </div>
//         <h5>Or on your fav platform</h5>
//         <div className={styles.podcast_streaming}>
//         <Link className={styles.link} href={platform_links.applepods} target='_blank'>
//             <PodcastChip icon="/icons/apple_podcast.png" platform="Apple Podcasts"/>
//           </Link>
//           <Link className={styles.link} href={platform_links.spotify} target='_blank'>
//             <PodcastChip icon="/icons/spotify.png" platform="Spotify"/>
//           </Link>
//           <Link className={styles.link} href={platform_links.podcast_addict} target='_blank'>
//             <PodcastChip icon="/icons/podcast_addict.png" platform="Podcast Addict"/>
//           </Link>
//         </div>
//       </div>
//       <div className={styles.side_artwork}>
//         <Image className={styles.image} alt='#' fill src={'/images/cities_grid.png'} />
//       </div>
//       </>
//     </section>
//     <div id="blur_fore" className={styles.over_cast}></div>
//     </>
//   )
// }

// export default HeroSection;
// 