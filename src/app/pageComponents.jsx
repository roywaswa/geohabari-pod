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
import useEpisodes from '@/hooks/useEpisodes';
import EpisodeCard from '@/components/EpisodeCard/EpisodeCard';
import Link from 'next/link';


gsap.registerPlugin(useGSAP,ScrollTrigger, TextPlugin);


export function HeroSection() {
  const artwork = "https://storage.buzzsprout.com/32ojhq8cef0rvhf4262bjty0szin"
  const [progress, setProgress] = useState()
  const { isDarkMode } = useTheme()
  const topics = [
    "DATA", "TECH", "GEOSPATIAL", "EARTH OBSERVATION"
  ]
  
  useGSAP(() => {
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
  
  return (
    <>
    <section id="hero" className={`${styles.hero} ${isDarkMode && 'dark'}`}>
      <>
      <div className={styles.left_boxes}>
        <div id="image_01"></div>
        <div id="image_02"></div>
        <div id="image_03"></div>
      </div>
      <div id="main_block" className={styles.main_hero}>
        <h1 id="title">Your one stop Podcast for Everything</h1>
        <div className={styles.topics_scroller}>
          <h1 id="topic">GEOSPATIAL</h1>
          <DrawSVG progress={progress} />
        </div>
        <h4>Amplifying African tech stories and building tech brilliance. This is a podcast for the geospatial community.</h4>
        <Button clickHandler={()=>{}} text='TAP IN' />
      </div>
      <div className={styles.right_boxes}>
        <div id="image_04"></div>
        <div id="image_05"></div>
        <div id="image_06"></div>
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



export  function TopicsSection() {
  const { isDarkMode } = useTheme()
  useGSAP(() => {
    const topics = gsap.utils.toArray(".topic_card")
    ScrollTrigger.create({
      trigger: "#side_panel",
      start:"top 10%",
      endTrigger:"#topics_cards",
      end:"bottom 90%",
      pin: true,
      pinSpacing: false,
      // markers:true
    })
    for (let i = 0; i < topics.length; i++) {
      let offset_value = 100
      let y_off = 20 * i
      if( i==0){
        console.log("first", i);
        offset_value = offset_value*0
      } else if (i%2 == 0){
        console.log("even", i);
        offset_value = offset_value *-1
      } else {
        
      }
      const topic = topics[i];
      gsap.to(topic, {
        scrollTrigger:{
          trigger: topic,
          start: "top 10%",
          endTrigger: "#topics_cards",
          end:"bottom 90%",
          pin: true,
          scrub: true,
          // markers: true,
          snap: 1/(topics.length-1)
        },
        y: y_off,
        x: offset_value,
        // ease: 'power1.in'
      })
    }
  })
  return (
    <div className={`${styles.section_topics} ${isDarkMode && 'dark'}`}>
      <div id="side_panel" className={styles.topics_description}>
        <h6>We are all about</h6>
        <h1>Where African tech tales meet geospatial brilliance!</h1>
        <p>Geohabari delves into the fascinating intersection of African technology and geospatial innovation, sharing stories and insights that highlight the transformative power of mapping and location-based tech across the continent.</p>
      </div>
      <div id="topics_cards" className={styles.topics_contianer}>
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

export function TopicCard(props) {
  const {isDarkMode} = useTheme()
  return (
    <div className={`${styles.topic_card} ${isDarkMode && styles.dark} topic_card`}>
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

export function LatestEpisodes() {
  const {episodes, loading} = useEpisodes()
  const { isDarkMode } = useTheme()
  const slider_container = useRef()
  useGSAP(() => {
    const cards = gsap.utils.toArray(".card")
    cards.forEach(card => {
      gsap.from(card, {
        scrollTrigger:{
          trigger: card,
          start: "top bottom",
          end: "top 80%",
          scrub: true
        },
        x:100,
      })
    })
  },{scope:slider_container})
  return (
    <div className={`${styles.section_recent_episodes} ${isDarkMode && 'dark'}`}>
        <h1>Some of Our Latest</h1>
        <div ref={slider_container} className={styles.episodes_container}>
        {
          loading ? <div>Loading ... </div>:
          episodes.slice(0,5).map(episode => 
          <EpisodeCard episode={episode} key={episode.id} />
          )
        }
        </div>
        <div className={styles.see_more_link}>
          <Link href={"/episodes"} >SEE MORE</Link>
        </div>
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


