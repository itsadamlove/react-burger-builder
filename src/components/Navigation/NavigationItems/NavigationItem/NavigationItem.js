import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.scss';

const navigationItem = ({ exact, link, children }) => (
  <li className={styles.NavigationItem}>
    <NavLink exact={exact} to={link} activeClassName={styles.active}>
      {children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  exact: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node,
};

export default navigationItem;
