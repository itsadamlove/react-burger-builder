import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.scss';

const logo = () => (
  <div className={styles.Logo} >
    <img src={burgerLogo} alt="burger logo" />
  </div>
);

export default logo;
