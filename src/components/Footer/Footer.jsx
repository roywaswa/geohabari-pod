import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter,
  faSpotify, faYoutube,
  faXTwitter,
  faApple
} from "@fortawesome/free-brands-svg-icons";
import {platform_links} from '@/app/utils'
import Link from 'next/link';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Footer (){

  const socials_links = { 
    "instagram": "https://www.instagram.com/geohabari",
    "twitter": "https://x.com/geohabari",
    "linkedin":"https://www.linkedin.com/in/geohabari-pod-81330629b/"
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
            <li><Link href={"mailto:yariwokitiyo@geohabari.com"} className={styles.contact_emails_item}>yariwokitiyo@geohabari.com</Link></li>
            <li><Link href={"mailto:info@geohabari.com"} className={styles.contact_emails_item}>info@geohabari.com</Link></li>
          </ul>
        </div>
        <div className={styles.engagement}>
          <div className={styles.subscriptions}>
            <h3 className={styles.subscriptions_title}>SUBSCRIBE</h3>
            <div className={styles.podcast_streaming}>
              <Link href={platform_links.spotify} target='_blank'>
              <div className={styles.streaming_site}>
                <Image src={'/icons/spotify.png'} alt='' fill/>
              </div></Link>
              <Link href={platform_links.applepods} target='_blank'>
              <div className={styles.streaming_site}>
                <Image src={'/icons/apple_podcast.png'} alt='' fill/>
              </div></Link>
              <Link href={platform_links.podcast_addict} target='_blank'>
              <div className={styles.streaming_site}>
                <Image src={'/icons/podcast_addict.png'} alt='' fill/>
              </div>
              </Link>
            </div>
          </div>
          <div className={styles.socials}>
            <h3 className={styles.socials_title}>FOLLOW US</h3>
            <ul className={styles.social_sites}>
              <li className={styles.social_sites_item}>
              <Link className={styles.link} href={socials_links.twitter} target='_blank'>
                <FontAwesomeIcon icon={faXTwitter} size='xl'/>
                <p>X(Twitter)</p></Link>
              </li>
              <li className={styles.social_sites_item}>
              <Link className={styles.link} href={socials_links.linkedin} target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size='xl'/>
                <p>LinkedIn</p></Link>
              </li>
              <li className={styles.social_sites_item}>
                <Link className={styles.link} href={socials_links.instagram} target='_blank'>
                  <FontAwesomeIcon icon={faInstagram} size='xl'/>
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
