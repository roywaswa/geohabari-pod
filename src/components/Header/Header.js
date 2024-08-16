"use client"
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { useTheme } from '@/context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  const {isDarkMode, toggleTheme} = useTheme()

  return(
    <div className={styles.Header} data-testid="Header">
      <div className={styles.logo}>
        {isDarkMode? <Image href="#" src='/images/logo/logo_white.png' width={42} height={42} alt='Geohabari Logo'/>:
        <Image href="#" src='/images/logo/logo_black.png' width={42} height={42} alt='Geohabari Logo'/>}
      </div>
      <div className={styles.navigation}>
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
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
