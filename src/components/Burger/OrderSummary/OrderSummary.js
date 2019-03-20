import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This is pretty neat, we modified modal to have a lifecycle hook
  // so that we dont have to rerender the summary unless the modal
  // is shown
  componentDidUpdate() {
    console.log('[OrderSummary] will update');
  }

  render() {
    const {
      ingredients,
      purchaseCancelled,
      purchaseContinued,
      price
    } = this.props;

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
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
  price: PropTypes.number
};

export default OrderSummary;
