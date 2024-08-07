import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComingSoon.module.scss';
import LottieAnimation from '../LottieAnimation/LottieAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ComingSoon = () => (
  <div className={styles.ComingSoon} data-testid="ComingSoon">
    <div className={styles.logo_animation}>
      <LottieAnimation/>
    </div>
    <div className={styles.prompt}>
      <h2>COMING SOON</h2>
      <h3>Sign Up for a Heads Up</h3>
    </div>
    <div className={styles.form_field}>
        <TextInput name="email" placeholder="johndoe@person.com" />
        <Button text="Hit me Up" />
    </div>
  </div>
);

ComingSoon.propTypes = {};

ComingSoon.defaultProps = {};

export default ComingSoon;
