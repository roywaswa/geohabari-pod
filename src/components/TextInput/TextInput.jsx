import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.scss';

const TextInput = (props) => { 
  const labelName = String(props.name).toUpperCase()

  return (
    <div className={styles.TextInput} data-testid="TextInput">
      <label htmlFor={props.name}>
        <small>{labelName}</small></label>
      <input id={props.name} className='input_field' placeholder={props.placeholder} />
    </div>
  );
}

TextInput.propTypes = {
  name: String,
  placeholder: String
};

TextInput.defaultProps = {
  name:"text_input",
  placeholder:"This is a Placeholder"
};

export default TextInput;
