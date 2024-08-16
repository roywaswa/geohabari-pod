"use client"
import { Alata } from "next/font/google";
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThemedLayout.module.scss';
import { useTheme } from '@/context/ThemeContext';

const alata = Alata({ 
  weight: '400',
  subsets: ["latin"]    
});

const ThemedLayout = ({ children }) => {

  const { isDarkMode} = useTheme();

  return(
    <body className={`${alata.className} ${isDarkMode? styles.theme_dark: styles.theme_light}`} data-testid="ThemedLayout">
      {children}
    </body>
  );
}

ThemedLayout.propTypes = {};


export default ThemedLayout;
