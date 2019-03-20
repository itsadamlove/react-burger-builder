import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ({ children }) => (
  <Aux>
    <div>
      <Toolbar />
      <SideDrawer />
      Toolbar SideDrawer Backdrop
    </div>
    <main className={styles.Layout__content}>{children}</main>
  </Aux>
);

export default layout;
