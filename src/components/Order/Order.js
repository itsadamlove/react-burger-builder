import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({ order }) => {
  const ingredients = Object.keys(order.ingredients)
    .filter(key => order.ingredients[key] > 0)
    .map(key => `${key}: ${order.ingredients[key]}`);

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredients.join(', ')}</p>
      <p>
        Price: <strong>AUD: {(+order.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object,
};

export default Order;
