import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const input = ({ label, elementType, elementConfig, value }) => {
  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={styles.InputElement}
          {...elementConfig}
          value={value}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={styles.InputElement}
          {...elementConfig}
          value={value}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select className={styles.InputElement} value={value}>
          {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={styles.InputElement}
          {...elementConfig}
          value={value}
        />
      );
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{label}</label>
      {inputElement}
    </div>
  );
};

input.propTypes = {
  elementType: PropTypes.string,
};

export default input;
