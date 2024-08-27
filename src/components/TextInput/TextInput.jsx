import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/components/TextInput/TextInput.module.scss';

const TextInput = (props) => { 
  const labelName = String(props.label).toUpperCase()

  return (
    <div className={styles.TextInput} data-testid="TextInput">
      <label htmlFor={props.name}>
        <small>{labelName}</small>
      </label>
      {props.type == "textarea"? 
        <textarea value={props.textValue} onChange={(e) => props.setTextValue(e.target.value)} id={props.name} className={styles.input_field} placeholder={props.placeholder} rows="5" cols="33"/> :
        <input type={props.type} value={props.textValue} onChange={(e) => props.setTextValue(e.target.value)} id={props.name} className={styles.input_field} placeholder={props.placeholder} />
      }
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string,
  label:PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  textValue: PropTypes.string,
  setTextValue: PropTypes.any,
};

export default TextInput;
