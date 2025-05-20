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
import { useRouter } from 'next/navigation';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';


gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin);


const Header = () => {
  const {isDarkMode} = useTheme()
  const {width } = useWindowDimensions()
  const [mobileNav, setMobileNav] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  function navigateToEpisodes() {
    router.push('/episodes')
  }
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
    <header className={`${styles.Header} main-tool-bar`} data-testid="Header">
      <div className={styles.logo}>
        <Image href="#" src='/images/logo/logo-green.png' width={120} height={40} alt='Geohabari Logo'/>
      </div>
      {
        width > 500 ?
        <div className={`${styles.navigation}`}>
          {/* <div className={styles.nav_links}> */}
            <Link href="/" className={styles.link_item}>HOME</Link>
            <Link href="/about" className={styles.link_item}>ABOUT US</Link>
            <Link href="/contact" className={styles.link_item}>CONTACT</Link>
            <div onClick={navigateToEpisodes} className={styles.episode_link}>
              EPISODES
            </div>
          {/* </div> */}
          
        </div> :
        <div className={styles.ham_icon} onClick={toggleMobileNav}>
          {
            mobileNav ?
            <FontAwesomeIcon icon={faCircleXmark} size='2xl'/> :
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
