import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    Header Component
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
