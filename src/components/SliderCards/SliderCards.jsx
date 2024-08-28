"use client"
import React, { useRef } from 'react';
import styles from './SliderCards.module.scss';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin);

export default function SliderCards({ episodes }) {
  const slider_container = useRef()
  useGSAP(() => {
    const tl = gsap.timeline()
    const cards = gsap.utils.toArray(".card")
    cards.forEach(card => {
      gsap.from(card, {
        scrollTrigger:{
          trigger: card,
          start: "top bottom",
          end: "top 80%",
          scrub: true
        },
        y:100,
        scale: 0.85,
      })
    })
  },{scope:slider_container})
  return (
    <div ref={slider_container} id="container" className={styles.slider_cards_container}>
      {
        episodes.map(ep => 
          <div key={ep.id} className={`${styles.slider_card} card`}>{ep.title}</div>
        )
      }
    </div>
  )
}

