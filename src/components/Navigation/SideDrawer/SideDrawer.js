import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

const sideDrawer = ({ open, closed }) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

sideDrawer.propTypes = {
  closed: PropTypes.func,
  open: PropTypes.bool
};

export default sideDrawer;
