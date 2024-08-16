import React from 'react';
import PropTypes from 'prop-types';
import styles from './about.module.scss';
import Image from 'next/image';

export const metadata = {
  title: "Geohabari Podcast | About Us"
}

const about = () => (
  <div className={styles.about} data-testid="about">
    <div className={styles.page_title}>
      <div className={styles.heading_main}>
        <h1>ABOUT GEOHABARI</h1>
      </div>
      <div className={styles.heading_sub}>
        <h2>PODCAST FOR</h2>
        <h2>THE GEOSPATIAL COMMUNITY</h2>
        <h2>HOSTED BY YARIWO</h2>
      </div>
    </div>
    <div className={`${styles.about_podcast} ${styles.details}`}>
      <div className={`${styles.pod_description} ${styles.text}`}>
        <h2 className={styles.sec_title}>GEOHABARI Podcast is</h2>
        <span className={styles.sec_description}>a vibrant community of geospatial professionals, experts, and enthusiasts. We delve into topics ranging from GIS technology and remote sensing to mapping and geospatial data analysis. But that&apos;s not all! Geohabari Podcast features exclusive interviews with industry leaders, thought-provoking discussions, and exciting debates on pressing geospatial issues. Our interactive Q&A sessions allow you to engage with guests and get your burning questions answered.</span>
      </div>
      <div className={`${styles.pod_image} ${styles.graphic}`}>
        <Image className={styles.image} src='/images/studio_photo.png' alt="Studio for recording" fill={true}/>
      </div>
    </div>
    <div className={`${styles.about_host} ${styles.details}`}>
      <div className={`${styles.host_image} ${styles.graphic}`}>
        <Image className={styles.image} src='/images/host_photo.JPG' alt="Portait of Yariwo" fill={true}/>
      </div>
      <div className={`${styles.host_description} ${styles.text}`}>
        <h2  className={styles.sec_title}>Enter the Host YARIWO</h2>
        <span className={styles.sec_description}>
        YARIWO KITIYO, the founder and host of the GEOHABARI Podcast, is passionate about amplifying African tech stories and building technical brilliance. She co-founded Women in GIS Kenya and has been instrumental in creating a platform that fosters communities defined by their technical prowess. Through Geohabari, Yariwo engages with experts, professionals, and enthusiasts in the geospatial field, sharing insights, experiences, and knowledge.
        </span>
      </div>
    </div>
  </div>
);

about.propTypes = {};

about.defaultProps = {};

export default about;
