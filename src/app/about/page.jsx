"use client"
import React from 'react';
import styles from './about.module.scss';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger)

const AboutPage = () => {
  const {isDarkMode} = useTheme()
  useGSAP(()=>{
    const desc_section = gsap.utils.toArray(".desc_section")
    ScrollTrigger.create({
      trigger: "#description_graphic",
      start:"top 10%",
      endTrigger:"#description",
      end:"bottom 60%",
      pin: true,
      pinSpacing: false,
    })
    ScrollTrigger.create({
      trigger: "#host_graphic",
      start:"top 10%",
      endTrigger:"#host_desc",
      end:"bottom 60%",
      pin: true,
      pinSpacing: false,
    })
  })
  return(
    <>
      <main className={`${styles.about} ${ isDarkMode ? 'dark' : ''}`} data-testid="about">
        <div className={styles.page_title}>
          <div className={styles.heading_main}>
            <h1>ABOUT GEOHABARI</h1>
          </div>
          <div className={styles.heading_sub}>
            <h2>PODCAST FOR</h2>
            <h2>THE GEOSPATIAL COMMUNITY</h2>
          </div>
        </div>
        <div id="about_podcast" className={`${styles.about_podcast} ${styles.details}`}>
          <div id='description' className={`${styles.pod_description} ${styles.text}`}>
            <div className={`${styles.pod_desc} ${styles.pod_who_we_are} desc_section`}>
              <h3>Who We Are</h3>
              <p>We are the GeoHabari Podcast, your go-to source for all things geospatial! Hosted by <strong>Yariwo Kitiyo</strong>, a geospatial enthusiast with a knack for uncovering the coolest tech trends and innovations in the field.</p>
            </div>
            <div className={`${styles.pod_desc} ${styles.pod_what_we_do} desc_section`}>
              <h3>What We Do</h3>
              <p>We dive deep into the world of geospatial technology, bringing you insightful discussions, expert interviews, and the latest trends. Whether you’re a professional, a student, or just curious about how geospatial tech shapes our world, we’ve got something for you!</p>
            </div>
            <div className={`${styles.pod_desc} ${styles.pod_what_people_say} desc_section`}>
              <h3>What People Say About Us</h3>
              <p>&quot;GeoHabari is a must-listen for anyone in the geospatial field. The insights and knowledge shared are invaluable.&quot;<br/> <i>~ Happy Listener</i> <br/>
              <br/>
              “Every episode is a treasure trove of information. I always learn something new!”<br/> <i>~ Avid Fan</i></p>
            </div>
            <div className={`${styles.pod_desc} ${styles.pod_what_we_say} desc_section`}>
              <h3>What We Say About Us</h3>
              <p>Our mission is to demystify geospatial technology and make it accessible to everyone. We believe in the power of geospatial tech to transform industries and improve lives. Join us on this exciting journey!</p>
            </div>
          </div>
          <div id='description_graphic' className={`${styles.pod_image} ${styles.graphic}`}>
            <Image className={styles.image} src='/images/studio_photo.png' alt="Studio for recording" fill={true}/>
          </div>
        </div>
        <div className={`${styles.about_host} ${styles.details}`}>
          <div id='host_graphic' className={`${styles.host_image} ${styles.graphic}`}>
            {/* <Image className={styles.image} src='/images/host_photo.JPG' alt="Portait of Yariwo" fill={true}/> */}
          </div>
          <div id="host_desc" className={`${styles.host_description} ${styles.text}`}>
            <div className={`${styles.host_desc} ${styles.pod_desc}`}>
              <h3>Who Am I</h3>
              <p>Hi, I&apos;m <strong>YARIWO</strong>, the voice behind the GeoHabari Podcast. With a background in geospatial science and a passion for technology, I&apos;m here to share my love for all things geospatial</p>
            </div>
            <div className={`${styles.host_desc} ${styles.pod_desc}`}>
              <h3>Why Did I Start This Podcast?</h3>
              <p>My journey into geospatial technology began with a fascination for maps and how they tell stories about our world. This passion led me to pursue a career in geospatial science, and eventually, to start the GeoHabari Podcast to share these stories with you.</p>
            </div>
            <div className={`${styles.host_desc} ${styles.pod_desc}`}>
              <h3>What Do I Do When I&apos;m Not Podcasting?</h3>
              <p>When I&apos;m not behind the mic, you can find me exploring new geospatial tools, hiking, or capturing the beauty of the world through photography.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AboutPage;
