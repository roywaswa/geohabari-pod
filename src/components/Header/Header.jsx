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


gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin);


const Header = () => {
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
      <div className={`${styles.logo_container} header_item`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo/geopod-dark.svg" alt="Logo" width={180} height={56} />
        </Link>
      </div>
      <nav className={`${styles.navigation} header_item`}>
        {/* <ul className={`${styles.nav_links} ${mobileNav ? styles.active : ''}`}> */}
          <li className={`${pathname === "/" && styles.active} ${styles.nav_item}`}>
            <Link href="/" className={styles.nav_link}>home</Link>
          </li>
          
          <li className={`${pathname === '/about' && styles.active} ${styles.nav_item}`}>
            <Link href="/about" className={styles.nav_link}>about us</Link>
          </li>
          <li className={`${pathname === '/contact' && styles.active} ${styles.nav_item}`}>
            <Link href="/contact" className={styles.nav_link}>contact</Link>
          </li>

          <li className={styles.nav_cta}>
            <Link href="/episodes" className={styles.nav_link}>LISTEN NOW</Link>
          </li>
        {/* </ul> */}
        {width <= 768 && (
          <button className={styles.mobile_nav_toggle} onClick={toggleMobileNav}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default Header;
