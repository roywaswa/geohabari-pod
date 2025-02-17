"use client"
import React from 'react';
import styles from './DarkModeSwitch.module.scss';
import { useTheme } from '@/context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function DarkModeSwitch() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={styles.switch_container}>
      <div onClick={toggleTheme} className={`${styles.dark_mode_switch} ${isDarkMode ? styles.dark : styles.light}`}>
        <div className={styles.icon}>
          {
            isDarkMode ? 
            <FontAwesomeIcon icon={faSun} size="lg" /> : 
            <FontAwesomeIcon icon={faMoon} size="lg" />
          }
        </div>
      </div>
    </div>
  );
}
