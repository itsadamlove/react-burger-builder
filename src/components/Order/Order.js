import React from 'react';
import styles from './Order.module.scss';

const Order = props => (
  <div className={styles.Order}>
    <p>Ingredients: Salad (1)</p>
    <p>
      Price: <strong>AUD: 5.45</strong>
    </p>
  </div>
);

export default Order;
