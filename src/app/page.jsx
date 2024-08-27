"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import TextInput from "@/components/TextInput/TextInput";
import { Suspense, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/ThemeContext";
import { getEpisodes } from "./utils";
import Button from "@/components/Button/Button";
import Carousel from "@/components/Carousel/Carousel";

export default async function Home() {
  const episodes = await getEpisodes().then(res =>{
    return res.slice(0,5)
  })

  return (
    <main className={`${styles.page}`}>
      <div className={`${styles.section} ${styles.section_hero}`}>
        <div className={styles.hero_text}>
          <div className={`${styles.image_container} ${styles.logo_container}`}>
            {/* <h1>LOGO</h1> */}
            <Image src={'/images/logo/logo_colored.png'}
              fill alt="Logo" placeholder="empty" />
          </div>
          <div className={styles.headline}>
            <p>Amplifying African tech stories and building tech brilliance. This is a podcast for the geospatial community.</p>
          </div>
          <div className={styles.call_to_action}>
            <h4>Listen on:</h4>
            <div className={styles.hosting}>
              <div>one</div>
              <div>one</div>
              <div>one</div>
            </div>
          </div>
        </div>
        <div className={`${styles.hero_graphic} ${styles.image_container}`}>
          {/* <h1>GRAPHIC</h1> */}
          <Image fill className={styles.image}
            placeholder="empty"
            src={'/images/phoneasset.png'}
            alt="Side panel of recent episodes"/>
        </div>
      </div>
      <div className={`${styles.section} ${styles.section_topics}`}>
        <h3>We are all about</h3>
        <TopicsSection />
      </div>
      <div className={`${styles.section} ${styles.section_recent_episodes}`}>
        <h3>Some of Our Latest</h3>
        <Suspense fallback={<div> LOADING ... </div>}>
          <Carousel  episodes={episodes}/>
        </Suspense>
      </div>
      <div className={`${styles.section} ${styles.section_about_host}`}>
        <AboutHost />
      </div>
      <div className={`${styles.section} ${styles.section_newsletter}`}>
        <NewsLetter />
      </div>
    </main>
  );
}


export  function TopicsSection() {
  return (
    <div className={styles.topics_contianer}>
      <TopicCard topic={"data"}/>
      <TopicCard topic={"academia"}/>
      <TopicCard topic={"career"}/>
      <TopicCard topic={"bunter"}/>
      <TopicCard topic={"bunter"}/>
      <TopicCard topic={"bunter"}/>
    </div>
  )
}

export function RecentEpisodes() { 
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const res = await getEpisodes();  
        setEpisodes(res.slice(0, 1)); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };
    fetchEpisodes();
  }, [])

  
  return (
    <div className={styles.recent_container}>
      
      <div className={styles.navigation}>
        <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        <FontAwesomeIcon icon={faArrowRight} size="xl" />
      </div>
    </div>
  )
}

export  function EisodeCarouselCard(props) {
  return (
    <div className={styles.carousel_card}>
      {/* Image background */}
      active
    </div>
  )
}

export  function AboutHost() {
  return (
    <div className={styles.host_container}>
      <div className={styles.host_photo}>
        <h1>HOST PHOTO</h1>
      </div>
      <div className={styles.host_details}>
        <h2>About YARIWO</h2>
        <p>
          YARIWO KITIYO, the founder and host of the GEOHABARI Podcast, is passionate about amplifying African tech stories and building technical brilliance. She co-founded Women in GIS Kenya and has been instrumental in creating a platform that fosters communities defined by their technical prowess. Through Geohabari, Yariwo engages with experts, professionals, and enthusiasts in the geospatial field, sharing insights, experiences, and knowledge.
        </p>
      </div>
    </div>
  )
}

export function NewsLetter() {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')

  function submitForm(e) {
    e.preventDefault()
  }

  return (
    <div className={styles.newsletter_container}>
      <h1>Stay Ahead of the Masses</h1>
      <div className={styles.signup_section}>
        <div className={styles.signup_prompt}>
          <h2>Sign Up for the Episode Alerts</h2>
          <p>Get notified of all updates  and  episodes  as soon as they are relaeased</p>
        </div>
        <form onSubmit={submitForm}>
          <TextInput label="First Name"
          name="firstname"
          placeholder="Joe"
          setTextValue={setFName}
          textValue={fName}
          type="text"
          />
          <TextInput label="Last Name"
          name="lastname"
          placeholder="Adeyo"
          setTextValue={setLName}
          textValue={lName}
          type="text"
          />
          <TextInput label="E-Mail"
          name="email"
          placeholder="joeade@mail.com"
          setTextValue={setEmail}
          textValue={email}
          type="email"
          />
          <Button 
            clickHandler={submitForm} 
            text="SEND ME THE NEWSLETTER"
            type="submit"/>
        </form>
      </div>
    </div>
  )
}

export function TopicCard(props) {
  const {isDarkMode} = useTheme()
  return (
    <div className={`${styles.topic_card} ${isDarkMode && styles.dark}`}>
      <div className={styles.topic_header}>
        <div className={styles.topic_icon}>
          <FontAwesomeIcon size="2xl" icon={faDatabase} color={'#000'} />
        </div>
        <h3>{props.topic.toUpperCase()}</h3>
      </div>
      <div className={styles.topic_details}>
        <h5>Topic Subtitle that will be brief intro into the topic</h5>
        <p className={styles.hide}>Topic Explanation that will probaly be longer than this that I am typing right now. It will also have a section with episodes that are of that topic listed in the area beneath it.</p>
      </div>
    </div>
  )
}




