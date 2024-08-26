"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import TextInput from "@/components/TextInput/TextInput";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// export const metadata = {
//   title: "Geohabari Podcast"
// }

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={`${styles.section} ${styles.section_hero}`}>
        <div className={styles.hero_text}>
          <div className={`${styles.image_container} ${styles.logo_container}`}>
            {/* <h1>LOGO</h1> */}
            <Image src={'/images/logo/logo_colored.png'}
              fill alt="Logo" />
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
            src={'/images/phoneasset.png'}
            alt="Side panel of recent episodes"/>
        </div>
      </div>
      <div className={`${styles.section} ${styles.section_topics}`}>
        <TopicsSection />
      </div>
      <div className={`${styles.section} ${styles.section_recent_episodes}`}>
        <RecentEpisodes/>
      </div>
      <div className={`${styles.section} ${styles.section_about_host}`}>
        <AboutHost />
      </div>
      <div className={`${styles.section} ${styles.section_newsletter}`}>
        <NewsLetter />
      </div>
    </div>
  );
}


export  function TopicsSection() {
  return (
    <>
      <TopicCard topic={"data"}/>
      <TopicCard topic={"academia"}/>
      <TopicCard topic={"career"}/>
      <TopicCard topic={"bunter"}/>
      <TopicCard topic={"bunter"}/>
      <TopicCard topic={"bunter"}/>
    </>
  )
}

export function RecentEpisodes() {
  return (
    <div className={styles.recent_container}>
      <div className={styles.episode_details}>
        <h3>Episode Number: ##</h3>
        <p>Episode title that will probaly be something very long as so</p>
      </div>
      <div className={styles.episode_poster}>
        <h3>Episode Poster</h3>
      </div>
      <div className={styles.episode_poster}>
        Navigation Options
      </div>
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
        <h3>About YARIWO</h3>
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
  return (
    <div className={styles.newsletter_conainer}>
      <h1>Stay Ahead of the Masses</h1>
      <div className={styles.signup_section}>
        <div className={styles.signup_prompt}>
          <h2>Sign Up for the Episode Alerts</h2>
          <p>Get notified of all updates  and  episodes  as soon as they are relaeased</p>
        </div>
        <form>
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
        </form>
      </div>
    </div>
  )
}

export function TopicCard(props) {
  return (
    <div className={styles.topic_card}>
      <div className={styles.topic_header}>
        <div className={styles.topic_icon}>
          <FontAwesomeIcon size="2xl" icon={faDatabase} color="#fff" />
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




