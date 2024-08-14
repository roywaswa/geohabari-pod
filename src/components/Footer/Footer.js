import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter,
  faSpotify, faPodcast, faYoutube
} from "@fortawesome/free-brands-svg-icons";

import Link from 'next/link';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
    <div className={styles.main_footer}>
      <div className={styles.description}>
        <h3 className={styles.podcast_title}>GEOHABARI<br/>Podcast</h3>
        <span className={styles.podcast_description}>
          Geohabari is an African tech podcast that celebrates innovations 
          fosters community engagement among geospatial professionals, 
          and explores impactful technologies. 🎙️🌍🔍
        </span>
      </div>
      <div className={styles.quick_links}>
        <h3 className={styles.links_title}>
          QUICK LINKS
        </h3>
        <ul className={styles.quick_links_list}>
          <li><Link href={"#"} className={styles.quick_links_item}>
            Home
          </Link></li>
          <li><Link href={"#"} className={styles.quick_links_item}>
            EPISODES
          </Link></li>
          <li><Link href={"#"} className={styles.quick_links_item}>
            Contact Us
          </Link></li>
        </ul>
      </div>
      <div className={styles.email_contacts}>
        <h3 className={styles.reach_out}>REACH OUT</h3>
        <ul className={styles.contact_emails}>
          <li><Link href={"#"} className={styles.contact_emails_item}>yariwo@geohabari.io</Link></li>
          <li><Link href={"#"} className={styles.contact_emails_item}>producer@geohabari.io</Link></li>
          <li><Link href={"#"} className={styles.contact_emails_item}>partnership@geohabari.io</Link></li>
          <li><Link href={"#"} className={styles.contact_emails_item}>media@geohabari.io</Link></li>
        </ul>
      </div>
      <div className={styles.engagement}>
        <div className={styles.subscriptions}>
          <h3 className={styles.subscriptions_title}>SUBSCRIBE</h3>
          <ul className={styles.host_sites}>
            <li className={styles.host_sites_item}>
              <FontAwesomeIcon icon={faSpotify} beatFade style={{color: "#F0F0F0",}} />
            </li>
            <li className={styles.host_sites_item}>
              <FontAwesomeIcon icon={faSpotify} beatFade style={{color: "#F0F0F0",}} />
            </li>
            <li className={styles.host_sites_item}>
            <FontAwesomeIcon icon={faSpotify} beatFade style={{color: "#F0F0F0",}} />
            </li>
            <li className={styles.host_sites_item}>
              <FontAwesomeIcon icon={faYoutube} beatFade style={{color: "#F0F0F0",}} />
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          <h3 className={styles.socials_title}>FOLLOW US</h3>
          <ul className={styles.social_sites}>
            <li className={styles.social_sites_item}>
              <FontAwesomeIcon icon={faTwitter} beatFade style={{color: "#F0F0F0",}} />
            </li>
            <li className={styles.social_sites_item}>
              <FontAwesomeIcon icon={faLinkedin} beatFade style={{color: "#F0F0F0",}} />
            </li>
            <li className={styles.social_sites_item}>
              <FontAwesomeIcon icon={faInstagram} beatFade style={{color: "#F0F0F0",}} />
            </li>
          </ul>
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
