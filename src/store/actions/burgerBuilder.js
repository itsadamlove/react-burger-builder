import * as actionTypes from './actionTypes';

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
