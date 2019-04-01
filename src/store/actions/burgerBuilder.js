import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = ingName => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: { ingredientName: ingName },
  };
};

export const removeIngredient = ingName => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: { ingredientName: ingName },
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: { ingredients },
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get('https://burgerbuilder-f21ee.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
