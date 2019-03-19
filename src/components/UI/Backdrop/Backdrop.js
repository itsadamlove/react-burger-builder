import React from 'react';
import styles from './Backdrop.module.scss';

const backDrop = ({ show, clicked }) =>
  show ? <div className={styles.Backdrop} onClick={clicked} /> : null;

export default backDrop;
