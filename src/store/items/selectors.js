import { createSelector } from 'reselect';
// https://github.com/reduxjs/reselect

//by convention its good to call selector functions starting with select
export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

/**createSelector takes in an array of selectors as first argument and a transformation
 * function as 2nd argument. Everytime the selector is called, createSelector computes
 * the result only if the result changed. Else it will give the same value without
 * recalculating the result thereby improving performance.
 *
 * From documentation on github:
 * Reselect provides a function createSelector for creating memoized selectors. createSelector takes an array of input-selectors
 * and a transform function as its arguments.
 * If the Redux state tree is mutated in a way that causes the value of an input-selector to change,
 * the selector will call its transform function with the values of the input-selectors as arguments and return the result.
 * If the values of the input-selectors are the same as the previous call to the selector,
 * it will return the previously computed value instead of calling the transform function.
 *
 * Below our createSelector takes an array with selectItems as our selector and the 2nd argument is the function with the items param
 * returned from selectItems
 */
export const selectSubtotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

//below we take 2 selectors and their corresponding results are passed as arguments to the transformation function to do calculation
export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);

//selectors for dealing with individual items. these selectors will have to calculate total for individual items
export const selectItem = (state, ownProps) => {
  return state.items.find((item) => item.uuid === ownProps.uuid);
};

export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.price * item.quantity
);
