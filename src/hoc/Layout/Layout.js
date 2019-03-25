import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../Aux/Aux';
import styles from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
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
        </div>
        <main className={styles.Layout__content}>{children}</main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
