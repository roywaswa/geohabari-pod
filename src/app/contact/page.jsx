"use client"
import React from 'react';
import Image from 'next/image';
import styles from './contact.module.scss';
import ContactForm from './components';
import { useTheme } from '@/context/ThemeContext';



const ContactPage = () => {
  const {isDarkMode} = useTheme()
  return(
    <main className={`${styles.contact} ${ isDarkMode && styles.dark}`} data-testid="contact">
      <div className={styles.banner}>
        <h1>Let&apos;s <br/> Collaborate</h1>
        <Image alt='' className={styles.banner_bg} src={'/images/camera_studio.jpg'} fill={true} />
      </div>
      <div className={styles.form_container}>
        <ContactForm />
      </div>
    </main>
  )
}

export default ContactPage;
