import React from 'react';
import styles from './Modal.module.scss';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';

const modal = ({ children, show, modalClosed }) => (
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

modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool
};

export default modal;
