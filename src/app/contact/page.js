import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './contact.module.scss';
import TextInput from '@/components/TextInput/TextInput';
import ContactForm from './components';


export const metadata = {
  title: "Geohabari Podcast | Contact Us"
}


const contact = () => {
  return(
    <div className={styles.contact} data-testid="contact">
      <div className={styles.banner}>
        <h1>Let&apos;s <br/> Collaborate</h1>
        <Image alt='' className={styles.banner_bg} src={'/images/camera_studio.jpg'} fill={true} />
      </div>
      <div className={styles.form_container}>
        <ContactForm />
      </div>
    </div>
  )
}

contact.propTypes = {};

contact.defaultProps = {};

export default contact;
