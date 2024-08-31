"use client"
import React from 'react';
import styles from './DarkModeSwitch.module.scss';
import { useTheme } from '@/context/ThemeContext';

export default function DarkModeSwitch() {
  const { isDarkMode,toggleTheme } = useTheme()
  return (
    <div onClick={toggleTheme} className={styles.dark_mode_switch}>
      {
        isDarkMode ? <span>Light Mode</span> :<span>Dark Mode</span>
      }
    </div>
  )
}
