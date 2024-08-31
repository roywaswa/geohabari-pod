"use client"
import React,  { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from './Header.module.scss';
import { useTheme } from '@/context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { usePathname } from 'next/navigation';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin);


const Header = () => {
  const {isDarkMode, toggleTheme} = useTheme()
  const {width } = useWindowDimensions()
  const [mobileNav, setMobileNav] = useState(false)
  const pathname = usePathname()

  useGSAP(()=>{
    const showAnim = gsap.from('.main-tool-bar', { 
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);
    
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });
    
  })

  useEffect(() => {
    setMobileNav(false)
  }, [pathname])
  

  function toggleMobileNav() {
    setMobileNav(!mobileNav) 
  }
  return(
    <header className={`${styles.Header} main-tool-bar ${isDarkMode && styles.dark}`} data-testid="Header">
      <div className={styles.logo}>
        {isDarkMode? <Image href="#" src='/images/logo/logo_white.png' width={42} height={42} alt='Geohabari Logo'/>:
        <Image href="#" src='/images/logo/logo_black.png' width={42} height={42} alt='Geohabari Logo'/>}
      </div>
      {
        width > 500 ?
        <div className={`${styles.navigation} ${isDarkMode? styles.dark: styles.light}`}>
          <div className={styles.nav_links}>
            <Link href="/" className={styles.link_item}>HOME</Link>
            <Link href="/about" className={styles.link_item}>ABOUT US</Link>
            <Link href="/contact" className={styles.link_item}>CONTACT</Link>
          </div>
          <div className={styles.episode_link}>
            <Link href="/episodes" className={styles.link_item}>EPISODES</Link>
          </div>
            
        </div> :
        <div className={styles.ham_icon} onClick={toggleMobileNav}>
          {
            mobileNav ?
            <FontAwesomeIcon icon={faCircleXmark} size='2xl' style={{color: "#d11515",}} /> :
            <FontAwesomeIcon icon={faBars}  size='xl'/>
          }
        </div>
      }
      {
        mobileNav && 
        <div className={`${styles.mobile_nav} ${isDarkMode && styles.dark}`}>
          <div className={styles.nav_links}>
            <Link href="/" className={styles.link_item}>HOME</Link>
            <Link href="/about" className={styles.link_item}>ABOUT US</Link>
            <Link href="/contact" className={styles.link_item}>CONTACT</Link>
            <Link href="/episodes" className={styles.link_item_episode}>EPISODES</Link>
          </div>
        </div>
      }
      
    </header>
  );
}

Header.propTypes = {};

export default Header;
