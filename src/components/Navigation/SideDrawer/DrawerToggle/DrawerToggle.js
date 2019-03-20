import React from 'react';
import styles from './DrawerToggle.module.scss';
import PropTypes from 'prop-types';

const drawToggle = ({ clicked }) => (
  <div className={styles.DrawerToggle} onClick={clicked}>
    <div />
    <div />
    <div />
  </div>
);

drawToggle.propTypes = {
  clicked: PropTypes.func.isRequired
};

export default drawToggle;
