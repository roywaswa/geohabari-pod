import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComingSoon.module.scss';
import LottieAnimation from '../LottieAnimation/LottieAnimation';
import TextInput from '../TextInput/TextInput';

const ComingSoon = () => (
  <div className={styles.ComingSoon} data-testid="ComingSoon">
    <div className="logo_animation">
      <LottieAnimation/>
    </div>
    <div>
      <h2>COMING SOON</h2>
      <h3>Sign Up for a Heads Up</h3>
    </div>
    <div>
      <form>
        <TextInput name="email" placeholder="johndoe@person.com" />
        <button>Hit me Up</button>
      </form>
    </div>
  </div>
);

ComingSoon.propTypes = {};

ComingSoon.defaultProps = {};

export default ComingSoon;
