import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const input = ({
  elementType,
  elementConfig,
  value,
  changed,
  invalid,
  touched,
  shouldValidate,
  errorMessage,
  label,
}) => {
  let inputElement = null;
  const inputClasses = [styles.InputElement];

  let validationError = null;
  if (touched && shouldValidate && invalid) {
    inputClasses.push(styles.Invalid);
    validationError = <p className={styles.ValidationError}>{errorMessage}</p>;
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
      {validationError}
    </div>
  );
};

input.propTypes = {
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  value: PropTypes.any.isRequired,
  changed: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  shouldValidate: PropTypes.object,
  touched: PropTypes.bool,
  label: PropTypes.string,
};

export default input;
