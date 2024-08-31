"use client"
import React from 'react';
import styles from './BackdropBlur.module.scss';
import Image from 'next/image';
import { gsap } from 'gsap'

import { useGSAP } from '@gsap/react';
import { Observer } from 'gsap/all';
import { useTheme } from '@/context/ThemeContext';

gsap.registerPlugin(useGSAP,Observer);

export default function BackdropBlur() {
  const { isDarkMode } = useTheme()

  useGSAP(() => {
    gsap.set("#tracker",{x:10,y:10})
    Observer.create({
      target: window,
      type:"pointer",
      onMove: (self) => {       
        gsap.to("#tracker", {
          x: self.x,
          y: self.y,
          duration:0.5,
          // ease: 'bounce'
        })
      }, 
      onPress: () => {
        gsap.to("#tracker", {
          scale: 2
        })
      },
      onRelease: () => {
        gsap.to("#tracker", {
          scale: 1
        })
      }
    })
  })

  return (
    <div className={`${styles.backdrop} ${isDarkMode && styles.dark} `}>
      <div className={styles.overcast}></div>
      <Image id="tracker"  src='/svg/filter_follow.svg'  width={300} height={300}/>
    </div>
  )
}

