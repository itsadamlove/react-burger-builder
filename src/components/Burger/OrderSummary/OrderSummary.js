import React from 'react';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

const orderSummary = ({ ingredients }) => {
  const ingredientSummary2 = Object.keys(ingredients)
    .filter(igKey => {
      return ingredients[igKey] > 0;
    })
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {ingredients[igKey]}
        </li>
      );
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary2}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default orderSummary;
