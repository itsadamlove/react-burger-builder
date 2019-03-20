import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import PropTypes from 'prop-types';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: true
    };
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state;

    return (
      <Aux>
        <div>
          <Toolbar drawToggleClick={this.sideDrawerToggleHandler} />
          <SideDrawer
            open={showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          />
          Toolbar SideDrawer Backdrop
        </div>
        <main className={styles.Layout__content}>{children}</main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
