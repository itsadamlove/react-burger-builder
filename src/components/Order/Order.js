import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({ ingredients, price }) => {
  const ingredientStrings = Object.keys(ingredients)
    .filter(key => ingredients[key] > 0)
    .map(key => `${key} (${ingredients[key]})`);

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientStrings.join(', ')}</p>
      <p>
        Price: <strong>AUD: {(+price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

Order.propTypes = {
  price: PropTypes.number,
  ingredients: PropTypes.object,
};

export default Order;
