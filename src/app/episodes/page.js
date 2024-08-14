import React from 'react';
import PropTypes from 'prop-types';
import styles from './episodes.module.scss';

export const metadata = {
  title: "Geohabari Podcast | Episodes"
}

const episodes = () => (
  <div className={styles.episodes} data-testid="episodes">
    episodes Component
  </div>
);

episodes.propTypes = {};

episodes.defaultProps = {};

export default episodes;
