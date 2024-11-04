"use client"
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  
  return(
    <div className={styles.Button} data-testid="Button">
      <button onClick={props.clickHandler} type="submit">
        {props.text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  clickHandler: PropTypes.func //(e)=>{}
};

export default Button;
