import React from 'react';
import PropTypes from 'prop-types';
import styles from './contact.module.scss';

const contact = () => (
  <div className={styles.contact} data-testid="contact">
    contact Component
  </div>
);

contact.propTypes = {};

contact.defaultProps = {};

export default contact;
