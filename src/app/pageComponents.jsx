import React, { useEffect, useRef, useState } from 'react'
import styles from "./page.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Vivus from 'vivus';
import { Button } from '@mui/material';
import Image from 'next/image';
import { TextPlugin, ScrollTrigger } from 'gsap/all';

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
        markers:true,
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
        <Button variant='contained'>LISTEN NOW</Button>
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
        <path d="M3 44.4624C215.978 11.1358 663.28 -14.5966 544.157 18.1317C379.584 63.3474 -57.5732 92.5 108.5 92.5C274.526 92.5 441.5 92.5 441.5 92.5" stroke="#F30909" stroke-width="5" stroke-linecap="round"/>
      </svg>
    </div>
  );
};
