"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./page.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin, ScrollTrigger } from 'gsap/all';
import TextInput from "@/components/TextInput/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/Button/Button";
import useEpisodes from '@/hooks/useEpisodes';
import EpisodeCard from '@/components/EpisodeCard/EpisodeCard';
import Link from 'next/link';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PodcastChip from '@/components/PodcastChip/PodcastChip';
import { platform_links, topics } from './utils';

gsap.registerPlugin(useGSAP,ScrollTrigger, TextPlugin);


export function HeroSection() { 
  const artwork = "https://storage.buzzsprout.com/32ojhq8cef0rvhf4262bjty0szin"
  const { isDarkMode } = useTheme()
  const router = useRouter()
  const topics = [
    "Tech", "Geo-Banter", "Application", "Earth Observation", "Career", "Scholarships"
  ]

  function navigateToEpisodes() {
    router.push('/episodes')
  }
  const podcast_links = {
    "spotify": "https://open.spotify.com/show/5n3pUUtfdAdGS4d2hMz2yc?si=f3e6a5803205469f",
    "applepods":"https://podcasts.apple.com/ke/podcast/geohabari/id1747885525",
    "podcast_addict": "https://podcastaddict.com/podcast/geohabari/5021923" 
  }
  useGSAP(() => {
    let intro_tl = gsap.timeline()
    const text_tl = gsap.timeline({
      delay:2,
      repeat:-1, 
      repeatDelay:2
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
    gsap.from("#image_1", { 
      x: "60%",
      delay: 0.8
    })
    gsap.from("#image_2", { 
      x: "40%",
      delay: 0.8
    })
    gsap.from("#image_3", { 
      x: "-40%",
      delay: 0.8
    })
  })
  
  return (
    <>
    <section id="hero" className={`${styles.hero} ${isDarkMode && 'dark'}`}>
      <>
      <div id="main_block" className={styles.main_hero}>
        <h1 id="title">Your one stop Podcast for Everything</h1>
        <div className={styles.topics_scroller}>
          <h1 id="topic">GeoHabari</h1>
        </div>
        <h4>Amplifying African tech stories and building tech brilliance. This is a podcast for the geospatial community.</h4>
        <div onClick={navigateToEpisodes} className={styles.btn_cta}>
          LISTEN NOW
        </div>
        <h5>Or on your fav platform</h5>
        <div className={styles.podcast_streaming}>
        <Link className={styles.link} href={platform_links.applepods} target='_blank'>
            <PodcastChip icon="/icons/apple_podcast.png" platform="Apple Podcasts"/>
          </Link>
          <Link className={styles.link} href={platform_links.spotify} target='_blank'>
            <PodcastChip icon="/icons/spotify.png" platform="Spotify"/>
          </Link>
          <Link className={styles.link} href={platform_links.podcast_addict} target='_blank'>
            <PodcastChip icon="/icons/podcast_addict.png" platform="Podcast Addict"/>
          </Link>
        </div>
      </div>
      <div className={styles.side_artwork}>
        <Image className={styles.image} fill src={'/images/cities_grid.png'} />
      </div>
      </>
    </section>
    <div id="blur_fore" className={styles.over_cast}></div>
    </>
  )
}


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
    })
    for (let i = 0; i < topics.length; i++) {
      const topic = topics[i];
      gsap.to(topic, {
        scrollTrigger:{
          trigger: topic,
          start: "top 10%",
          endTrigger: "#topics_cards",
          end:"bottom 90%",
          pin: true,
          scrub: true,
          snap: 1/(topics.length-1)
        },
        y: 0,
      })
    }
  })
  return (
    <div className={`${styles.section_topics} ${isDarkMode && 'dark'}`}>
      <div id="side_panel" className={styles.topics_description}>
        <h6>We are all about</h6>
        <h1>Where African tech tales meet geospatial brilliance!</h1>
        <p>Geohabari delves into the fascinating intersection of African technology and geospatial innovation, sharing stories and insights that highlight the transformative power of mapping and location-based tech across the continent.</p>
        {/* <div className={`${styles.abs_image_container} ${styles.section_backdrop}`}>
          <div className={styles.image_container}>
            <Image alt="Dar-es Salaam aerial view" src='/images/dar_es_salaam.png' fill/>
          </div>
        </div> */}
      </div>
      <div id="topics_cards" className={styles.topics_contianer}>
        {
          topics.map(topic => (
            <TopicCard 
              key={topics.indexOf(topic)}
              topic={topic.title}
              subtitle={topic.subtitle}
              description={topic.description}
            />
          ))
        }
      </div>
      
    </div>
  )
}


export function TopicCard(props) {
  const {isDarkMode} = useTheme()
  const letters = props.topic.toUpperCase().split('')
  return (
    <div className={`${styles.topic_card} ${isDarkMode && 'dark'} topic_card`}>
      <div className={styles.topic_desc}>
        <div className={styles.topic_icon}>
          <Image src={'/favicon.png'} fill />
        </div>
        <h4>{props.subtitle}</h4>
        <p>{props.description}</p>
      </div>
      <div className={styles.topic_title}>
        {
          letters.map(letter => <h3 key={Math.random()}>{letter}</h3>)
        }
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

export function NewsLetter() {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('') 
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {   
      setSuccess(false)
    }, 7000);
    return () => clearTimeout()
  }, [success,setSuccess])

  const submitForm = async (e) => {
    setLoading(true)
    e.preventDefault();
    const emailSchema = z.string().email({ message: "Please enter a valid email address." });
    const nameSchema = z.string().min(3, { message: "Name must be 3 or more characters long" });
    let data = {
      email:'',
      fname:'',
      lname:''
    }
    try {
      emailSchema.parse(email)
      data.email = email
      nameSchema.parse(fName)
      nameSchema.parse(lName)
      data.fname = fName
      data.lname = lName
    } catch (error) {
      setError(error.errors[0].message)
      setLoading(false)
      return 0
    }    
    const response = await fetch("api/subscribe",{
      method: "POST",
      header:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    response.json().then(res => {
      if (res.message == "Success"){
        setSuccess(true)
        setSubscriberEmail('')
        setSubscriberName('')
      }
      setLoading(false)
    }).catch(err => {
      setLoading(false)
    })
  };

  return (
    <div className={`${styles.section_newsletter} ${isDarkMode && 'dark'}`}>
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


