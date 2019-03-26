import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const button = ({ clicked, children, btnType, disabled }) => (
  <button
    className={[styles.Button, styles[btnType]].join(' ')}
    onClick={clicked}
    disabled={disabled}
  >
    {children}
  </button>
);

button.propTypes = {
  clicked: PropTypes.func,
  children: PropTypes.node,
  btnType: PropTypes.string,
  disabled: PropTypes.bool,
};

export default button;
