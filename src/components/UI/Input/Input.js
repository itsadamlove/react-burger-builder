import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const input = ({
  label,
  elementType,
  elementConfig,
  value,
  changed,
  invalid,
  shouldValidate,
}) => {
  let inputElement = null;
  const inputClasses = [styles.InputElement];

  if (shouldValidate && invalid) {
    inputClasses.push(styles.Invalid);
  }

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={value}
          onChange={changed}
        >
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
          onChange={changed}
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
