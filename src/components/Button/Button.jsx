"use client"
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { useTheme } from '@/context/ThemeContext';

const Button = (props) => {
  const {isDarkMode} = useTheme()
  return(
    <div className={`${styles.Button} ${ isDarkMode && 'dark'}`} data-testid="Button">
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
