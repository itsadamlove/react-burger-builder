import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Local UI State
      purchasing: false,
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    console.log(this.props);
    //axios
    //.get('https://burgerbuilder-f21ee.firebaseio.com/ingredients.json')
    //.then(response => {
    //this.setState({ ingredients: response.data });
    //})
    //.catch(error => {
    //this.setState({ error: true });
    //});
  }

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
    //this.setState({ purchaseable: sum > 0 });
  };

  //addIngredientHandler = type => {
  //const oldCount = this.state.ingredients[type];
  //const updatedCount = oldCount + 1;
  //const updatedIngredients = {
  //...this.state.ingredients,
  //};
  //updatedIngredients[type] = updatedCount;
  //const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

  //this.setState({
  //ingredients: updatedIngredients,
  //totalPrice: newPrice,
  //});
  //this.updatePurchaseState(updatedIngredients);
  //};

  //removeIngredientHandler = type => {
  //const oldCount = this.state.ingredients[type];
  //if (oldCount <= 0) {
  //return;
  //}
  //const updatedCount = oldCount - 1;
  //const updatedIngredients = {
  //...this.state.ingredients,
  //};
  //updatedIngredients[type] = updatedCount;
  //const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

  //this.setState({
  //ingredients: updatedIngredients,
  //totalPrice: newPrice,
  //});
  //this.updatePurchaseState(updatedIngredients);
  //};

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  //purchaseContinueHandler = () => {
  //const queryParams = Object.keys(this.state.ingredients).map(
  //key =>
  //`${encodeURIComponent(key)}=${encodeURIComponent(
  //this.state.ingredients[key],
  //)}`,
  //);
  //queryParams.push('price=' + this.state.totalPrice);
  //const queryString = queryParams.join('&');

  //this.props.history.push({
  //pathname: '/checkout',
  //search: queryString,
  //});
  //};

  render() {
    const { purchasing, loading, error } = this.state;

    const { ingredients, totalPrice } = this.props;

    const disabledInfo = {
      ...ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
    let orderSummary = null;

    if (this.state.ingredients !== null) {
      burger = (
        <Aux>
          <Burger ingredients={ingredients} />
          <BuildControls
            ingredientAdded={this.props.onAddIngredient}
            ingredientRemoved={this.props.onRemoveIngredient}
            disabled={disabledInfo}
            price={totalPrice}
            purchaseable={this.updatePurchaseState(ingredients)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={totalPrice}
        />
      );
    }

    if (loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: ingName =>
      dispatch(burgerBuilderActions.addIngredient(ingName)),
    onRemoveIngredient: ingName =>
      dispatch(burgerBuilderActions.removeIngredient(ingName)),
  };
};

BurgerBuilder.propTypes = {
  ingredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  onAddIngredient: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorHandler(BurgerBuilder, axios));
