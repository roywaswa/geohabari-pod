import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter,
  faSpotify, faYoutube,
  faXTwitter,
  faApple
} from "@fortawesome/free-brands-svg-icons";

import Link from 'next/link';

const Footer = () => {

  const socials_links = {
    "instagram": "https://www.instagram.com/geohabari",
    "twitter": "https://x.com/geohabari",
    "linkedin":"https://www.linkedin.com/in/geohabari-pod-81330629b/"
  }

  const podcast_links = {
    "spotify": "https://open.spotify.com/show/5n3pUUtfdAdGS4d2hMz2yc?si=f3e6a5803205469f",
    "applepods":"https://podcasts.apple.com/ke/podcast/geohabari/id1747885525", 
  }

  return (
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
            <li><Link href={"/"} className={styles.quick_links_item}>
              Home
            </Link></li>
            <li><Link href={"/episodes"} className={styles.quick_links_item}>
              EPISODES
            </Link></li>
            <li><Link href={"/contact"} className={styles.quick_links_item}>
              Contact Us
            </Link></li>
            <li><Link href={"/about"} className={styles.quick_links_item}>
              About Us
            </Link></li>
          </ul>
        </div>
        <div className={styles.email_contacts}>
          <h3 className={styles.reach_out}>REACH OUT</h3>
          <ul className={styles.contact_emails}>
            <li><Link href={"mailto:yariwo@geohabari.io"} className={styles.contact_emails_item}>yariwo@geohabari.io</Link></li>
            <li><Link href={"mailto:yariwo@geohabari.io"} className={styles.contact_emails_item}>producer@geohabari.io</Link></li>
            <li><Link href={"mailto:yariwo@geohabari.io"} className={styles.contact_emails_item}>partnership@geohabari.io</Link></li>
            <li><Link href={"mailto:yariwo@geohabari.io"} className={styles.contact_emails_item}>media@geohabari.io</Link></li>
          </ul>
        </div>
        <div className={styles.engagement}>
          <div className={styles.subscriptions}>
            <h3 className={styles.subscriptions_title}>SUBSCRIBE</h3>
            <ul className={styles.host_sites}>
              <li className={styles.host_sites_item}>
                <Link className={styles.link} href={podcast_links.applepods} target='_blank'>
                  <FontAwesomeIcon icon={faApple} size='xl'  style={{color: "#F0F0F0",}} />
                  <p>Apple Podcast</p>
                </Link>
              </li>
              <li className={styles.host_sites_item}>
                <Link className={styles.link} href={podcast_links.spotify} target='_blank'>
                  <FontAwesomeIcon icon={faSpotify} size='xl'  style={{color: "#F0F0F0",}} />
                  <p>Spotify</p>
                </Link>
              </li>
              <li className={styles.host_sites_item}>
                <Link className={styles.link} href={"#"} target='_blank'>
                  <FontAwesomeIcon icon={faYoutube} size='xl'  style={{color: "#F0F0F0",}} />
                  <p>YouTube</p>
                </Link>
              </li>
              <li className={styles.host_sites_item}>
                <Link className={styles.link} href={"#"} target='_blank'>
                <FontAwesomeIcon icon={faYoutube}  size='xl'  style={{color: "#F0F0F0",}} />
                <p>YouTube</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.socials}>
            <h3 className={styles.socials_title}>FOLLOW US</h3>
            <ul className={styles.social_sites}>
              <li className={styles.social_sites_item}>
              <Link className={styles.link} href={socials_links.twitter} target='_blank'>
                <FontAwesomeIcon icon={faXTwitter} size='xl'  style={{color: "#F0F0F0",}} />
                <p>X(Twitter)</p></Link>
              </li>
              <li className={styles.social_sites_item}>
              <Link className={styles.link} href={socials_links.linkedin} target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size='xl' style={{color: "#F0F0F0",}} />
                <p>LinkedIn</p></Link>
              </li>
              <li className={styles.social_sites_item}>
                <Link className={styles.link} href={socials_links.instagram} target='_blank'>
                  <FontAwesomeIcon icon={faInstagram} size='xl' style={{color: "#F0F0F0",}} />
                  <p>Instagram</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>Copyright &copy; 2024 Geohabari Podcast - All Rights Reserved</span>
      </div>
    </div>
  )
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
