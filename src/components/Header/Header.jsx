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



const Header = () => {
  const {isDarkMode, toggleTheme} = useTheme()
  const {width } = useWindowDimensions()
  const [mobileNav, setMobileNav] = useState(false)
  const pathname = usePathname
  // const searchParams = useSearchParams()

  useEffect(() => {
    setMobileNav(false)
  }, [pathname])
  

  function toggleMobileNav() {
    setMobileNav(!mobileNav) 
  }
  return(
    <header className={styles.Header} data-testid="Header">
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
            <Link href="/episodes" className={styles.link_item}>EPISODES</Link>
          </div>
          <div className={styles.theme_switch} onClick={toggleTheme}>
            {isDarkMode? 
            <FontAwesomeIcon icon={faSun} size='xl' style={{color: "#ffffff",}} /> :
            <FontAwesomeIcon icon={faMoon} size='xl' style={{color: "#000000",}} />
            }
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
          <div className={styles.theme_switch} onClick={toggleTheme}>
            {isDarkMode? 
            <FontAwesomeIcon icon={faSun} size='xl' style={{color: "#ffffff",}} /> :
            <FontAwesomeIcon icon={faMoon} size='xl' style={{color: "#000000",}} />
            }
          </div>
          <div className={styles.nav_links}>
            <Link href="/" className={styles.link_item}>HOME</Link>
            <Link href="/about" className={styles.link_item}>ABOUT US</Link>
            <Link href="/contact" className={styles.link_item}>CONTACT</Link>
            <Link href="/episodes" className={styles.link_item}>EPISODES</Link>
          </div>
        </div>
      }
      
    </header>
  );
}

Header.propTypes = {};

export default Header;
