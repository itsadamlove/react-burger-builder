import React from 'react';
import styles from './NavigationItem.module.scss';
import PropTypes from 'prop-types';

const navigationItem = ({ link, active, children }) => (
  <li className={styles.NavigationItem}>
    <a className={active ? styles.active : null} href={link}>
      {children}
    </a>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool
};

export default navigationItem;
