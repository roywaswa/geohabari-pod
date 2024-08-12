import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
    <div className={styles.main_footer}>
      <div className={styles.description}>
        <h3 className={styles.podcast_title}>GEOHABARI<br/>Podcast</h3>
        <span class={styles.podcast_description}>
          Geohabari is an African tech podcast that celebrates innovations 
          fosters community engagement among geospatial professionals, 
          and explores impactful technologies. 🎙️🌍🔍
        </span>
      </div>
      <div className={styles.quick_links}>
        <span className={styles.links_title}>
          QUICK LINKS
        </span>
        <div className={styles.quick_links}>
          <Link href={"#"} className={styles.quick_links_item}>
            Home
          </Link>
          <Link href={"#"} className={styles.quick_links_item}>
            EPISODES
          </Link>
          <Link href={"#"} className={styles.quick_links_item}>
            Contact Us
          </Link>
        </div>
      </div>
      <div className={styles.email_contacts}>
        <h3 className={styles.reach_out}>REACH OUT</h3>
        <div className={styles.contact_emails}>
          <Link href={"#"} className={styles.contact_emails_item}>yariwo@geohabari.io</Link>
          <Link href={"#"} className={styles.contact_emails_item}>producer@geohabari.io</Link>
          <Link href={"#"} className={styles.contact_emails_item}>partnership@geohabari.io</Link>
          <Link href={"#"} className={styles.contact_emails_item}>media@geohabari.io</Link>
        </div>
      </div>
      <div className={styles.engagement}>
        <div className={styles.subscriptions}>
          <h3 className={styles.subscriptions_title}>SUBSCRIBE</h3>
          <div className={styles.host_sites}>
            <div className={styles.host_sites_item}>Apple Podcast</div>
            <div className={styles.host_sites_item}>Google Podcast</div>
            <div className={styles.host_sites_item}>Spotify</div>
            <div className={styles.host_sites_item}>YouTube</div>
          </div>
        </div>
        <div className={styles.socials}>
          <h3 className={styles.socials_title}>SUBSCRIBE</h3>
          <div className={styles.social_sites}>
            <div className={styles.social_sites_item}>Twitter</div>
            <div className={styles.social_sites_item}>LinkedIn</div>
            <div className={styles.social_sites_item}>Instagram</div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>
      <span>Copyright &copy; 2024 Geohabari Podcast - All Rights Reserved</span>
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
