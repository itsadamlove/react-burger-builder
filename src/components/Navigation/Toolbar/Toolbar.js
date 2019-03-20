import React from 'react';
import styles from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import PropTypes from 'prop-types';

const toolbar = ({ drawToggleClick }) => (
  <header className={styles.Toolbar}>
    <DrawerToggle clicked={drawToggleClick} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

toolbar.propTypes = {
  drawToggleClick: PropTypes.func.isRequired
};

export default toolbar;
