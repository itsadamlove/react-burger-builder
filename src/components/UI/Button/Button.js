import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const button = ({ clicked, children, btnType }) => (
  <button
    className={[styles.Button, styles[btnType]].join(' ')}
    onClick={clicked}
  >
    {children}
  </button>
);

button.propTypes = {
  clicked: PropTypes.func,
  children: PropTypes.node,
  btnType: PropTypes.string
};

export default button;
