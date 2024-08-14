import React from 'react';
import PropTypes from 'prop-types';
import styles from './about.module.scss';

export const metadata = {
  title: "Geohabari Podcast | About Us"
}

const about = () => (
  <div className={styles.about} data-testid="about">
    about Component
  </div>
);

about.propTypes = {};

about.defaultProps = {};

export default about;
