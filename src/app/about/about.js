import React from 'react';
import PropTypes from 'prop-types';
import styles from './about.module.scss';

const about = () => (
  <div className={styles.about} data-testid="about">
    about Component
  </div>
);

about.propTypes = {};

about.defaultProps = {};

export default about;
