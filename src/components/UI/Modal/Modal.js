import React, { Component } from 'react';
import styles from './Modal.module.scss';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    console.log('[Modal] will update');
  }

  render() {
    const { children, show, modalClosed } = this.props;
    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translatey(-100vh)',
            opacity: show ? '1' : '0'
          }}
        >
          {children}
        </div>
      </Aux>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  modalClosed: PropTypes.func
};

export default Modal;
