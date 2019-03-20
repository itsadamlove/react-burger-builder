import React from 'react';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';

const orderSummary = ({
  ingredients,
  purchaseCancelled,
  purchaseContinued,
  price
}) => {
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
      <p>
        <strong>Total Price: ${price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={purchaseCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
  price: PropTypes.number
};

export default orderSummary;
