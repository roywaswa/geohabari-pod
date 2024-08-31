"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./page.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Vivus from 'vivus';
import Image from 'next/image';
import { TextPlugin, ScrollTrigger } from 'gsap/all';
import TextInput from "@/components/TextInput/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/ThemeContext";
import { getEpisodes } from "./utils";
import Button from "@/components/Button/Button";
import SliderCards from '@/components/SliderCards/SliderCards';
import useEpisodes from '@/hooks/useEpisodes';


gsap.registerPlugin(useGSAP,ScrollTrigger, TextPlugin);


export function HeroSection() {
  const artwork = "https://storage.buzzsprout.com/32ojhq8cef0rvhf4262bjty0szin"
  const [progress, setProgress] = useState()
  const topics = [
    "DATA", "TECH", "GEOSPATIAL"
  ]
  
  useGSAP(() => {
    let photos = gsap.utils.toArray(".image_card")
    let intro_tl = gsap.timeline()
    const text_tl = gsap.timeline({
      delay:2,
      repeat:-1, 
      repeatDelay:2
    })
    gsap.to("#hero",{
      scrollTrigger: {
        trigger: "#hero",
        start: "clamp(center center)",
        end: "+=200",
        markers:false,
        scrub:true,
        onUpdate: (self) => setProgress(self.progress),
      }
    })
    topics.forEach(topic => {
      text_tl.to("#topic", {
        text: topic,
        duration: 1
      }).to("#topic", {
        duration: 1
      });
    })
    intro_tl.to("#blur_fore", {
      y:-1200,
      duration: 1,
      ease:'power1.out'
    })
  })
  const SideImage = () => (
      <div className={`${styles.box} image_card`}>
        <Image className={styles.image} src={artwork} fill alt="graphic" />
      </div>
  )
  
  return (
    <>
    <section id="hero" className={styles.hero}>
      <>
      <div className={styles.left_boxes}>
        <SideImage />
        <SideImage />
        <SideImage />
      </div>
      <div id="main_block" className={styles.main_hero}>
        <h1 id="title">Your one stop Podcast for Everything</h1>
        <div className={styles.topics_scroller}>
          <h1 id="topic">GEOSPATIAL</h1>
          <DrawSVG progress={progress} />
        </div>
        <h4>Amplifying African tech stories and building tech brilliance. This is a podcast for the geospatial community.</h4>
        <Button >LISTEN NOW</Button>
      </div>
      <div className={styles.right_boxes}>
        <SideImage />
        <SideImage />
        <SideImage />
      </div>
      </>
      
    </section>
    <div id="blur_fore" className={styles.over_cast}></div>
    </>
  )
}


const DrawSVG = ({ progress }) => {
  const svgRef = useRef(null);
  const [vivusInstance, setVivusInstance] = useState(null);

  useEffect(() => {
    const instance = new Vivus(svgRef.current, {
      type: 'delayed',
      duration: 200,
      animTimingFunction: Vivus.EASE,
      start: 'manual',
    });

    setVivusInstance(instance);

    return () => {
      instance.destroy()
    };
  }, []);

  useEffect(() => {
    if (vivusInstance) {
      vivusInstance.setFrameProgress(progress);
    }
  }, [progress, vivusInstance]);

  return (
    <div className={styles.underline}>
      <svg 
        ref={svgRef}
        id="underline" 
        viewBox="0 0 567 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 44.4624C215.978 11.1358 663.28 -14.5966 544.157 18.1317C379.584 63.3474 -57.5732 92.5 108.5 92.5C274.526 92.5 441.5 92.5 441.5 92.5" stroke="#F30909" strokeWidth={5} strokeLinecap="round"/>
      </svg>
    </div>
  );
};

export function LatestEpisodes() {
  const {episodes, loading} = useEpisodes()
  return (
    <div className={`${styles.section_recent_episodes}`}>
        <h3>Some of Our Latest</h3>
        {
          loading ? <div>Loading ... </div>:
          <>
          <SliderCards episodes={episodes.slice(0,5)} />
          {/* <Carousel  episodes={episodes}/> */}</>
        }
      </div>
  )
}

export  function TopicsSection() {
  return (
    <div className={`${styles.section_topics}`}>
      <h3>We are all about</h3>
      <div className={styles.topics_contianer}>
        <TopicCard topic={"data"}/>
        <TopicCard topic={"academia"}/>
        <TopicCard topic={"career"}/>
        <TopicCard topic={"bunter"}/>
        <TopicCard topic={"bunter"}/>
        <TopicCard topic={"bunter"}/>
      </div>
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
    <div className={`${styles.section_about_host} about`}>
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
    <div className={`${styles.section_newsletter}`}>
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
