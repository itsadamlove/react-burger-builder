import React from 'react';
import styles from './BuildControl.module.scss';
import PropTypes from 'prop-types';

const buildControl = ({ label, added, removed }) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{label}</div>
    <button className={styles.Less} onClick={removed}>
      Less
    </button>
    <button className={styles.More} onClick={added}>
      More
    </button>
  </div>
);

buildControl.propTypes = {
  label: PropTypes.string,
  added: PropTypes.func,
  removed: PropTypes.func
};

export default buildControl;
