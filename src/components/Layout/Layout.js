import React from 'react';
import Aux from '../../hoc/Aux'
import styles from './Layout.module.scss'

const layout = ({children}) => (
  <Aux>
    <div>
      Toolbar
      SideDrawer
      Backdrop
    </div>
    <main className={styles.Layout__content}>
      {children}
    </main>
  </Aux>
);

export default layout;
