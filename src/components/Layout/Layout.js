import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ({ children }) => (
  <Aux>
    <div>
      <Toolbar />
      Toolbar SideDrawer Backdrop
    </div>
    <main className={styles.Layout__content}>{children}</main>
  </Aux>
);

export default layout;
