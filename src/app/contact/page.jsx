"use client"
import React from 'react';
import Image from 'next/image';
import styles from './contact.module.scss';
import ContactForm from './components';
import { useTheme } from '@/context/ThemeContext';
import Head from 'next/head';

const ContactPage = () => {
  const {isDarkMode} = useTheme()
  return(
    <>
      <Head>
        <title>Contact Us - GeoHabari Podcast</title>
        <meta name="description" content="Get in touch with the GeoHabari Podcast team. We are here to collaborate and discuss all things geospatial." />
        <meta name="keywords" content="GeoHabari, Podcast, Geospatial, Contact, Collaboration" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={`${styles.contact} ${ isDarkMode ? 'dark' : ''}`} data-testid="contact">
        <div className={styles.banner}>
          <h1>Let&apos;s <br/> Collaborate</h1>
          <Image alt='Camera Studio' className={styles.banner_bg} src={'/images/camera_studio.jpg'} fill={true} />
        </div>
        <div className={`${styles.form_container}`}>
          <ContactForm />
        </div>
      </main>
    </>
  )
}

export default ContactPage;
