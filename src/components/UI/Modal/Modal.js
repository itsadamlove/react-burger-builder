import React from 'react';
import styles from './Modal.module.scss';

const modal = ({ children, show }) => (
  <div
    className={styles.Modal}
    style={{
      transform: show ? 'translateY(0)' : 'translatey(-100vh)',
      opacity: show ? '1' : '0'
    }}
  >
    {children}
  </div>
);

export default modal;
