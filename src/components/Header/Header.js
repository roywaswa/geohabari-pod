import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = () => {
  return(
    <div className={styles.Header} data-testid="Header">
      <div className={styles.logo}>
        <Image href="#" src='/images/logo/logo_black.png' width={42} height={42} alt='Geohabari Logo'/>
      </div>
      <div className={styles.navigation}>
        <div className={styles.nav_links}>
          <Link href="/" className={styles.link_item}>HOME</Link>
          <Link href="/about" className={styles.link_item}>ABOUT US</Link>
          <Link href="/contact" className={styles.link_item}>CONTACT</Link>
          <Link href="/episodes" className={styles.link_item}>EPISODES</Link>
        </div>
        <div className={styles.theme_switch}>Switch</div>
      </div>
    </div>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
