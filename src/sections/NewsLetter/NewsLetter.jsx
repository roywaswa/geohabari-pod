import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsLetter.module.scss';
import Image from 'next/image';

export default function NewsLetter() {

  return (
    <div className={styles.NewsLetter}>
      <div className={styles.form_copy}>
        <h2>JOIN THE COMMUNITY</h2>
        <p>Welcome to the community, stay upto speed with our latest and greatest ... </p>
      </div>
      <form className={styles.newsletter_form}>
        <input
          type="text"
          placeholder="Enter your name"
          className={styles.form_input}
          required
        />  
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.form_input}
          required
        />
        <button type="submit" className={styles.form_button}>
          Subscribe
        </button>
      </form>
      <div className={styles.newsImageContainer}>
        <Image
          src="/stock/group.jpg"
          alt='Group of people'
          fill
          className={styles.newsImage}
        />
      </div>
    </div>
  )
}