import {
  ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED,
  ITEM_REMOVED
} from './actions';

import { produce } from 'immer';
let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandiwch', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  //before immer library
  // if (action.type === ITEM_ADDED) {
  //   const item = { uuid: id++, quantity: 1, ...action.payload };
  //   return [...state, item];
  // }

  if (action.type === ITEM_ADDED) {
    /**immer libraries produce function takes in the state and a function with an argument using which we can mutate the state directly
     * immer library takes care of taking care of creating copies for us so we dont have to do tedious complex object/array copying manually
     */
    return produce(state, (draftState) => {
      const item = { uuid: id++, quantity: 1, ...action.payload };
      draftState.push(item);
    });
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== action.payload.item_id);
  }
  if (action.type === ITEM_PRICE_UPDATED) {
    //before immer
    // return state.map((item) => {
    //   if (item.uuid === action.payload.item_id) {
    //     return { ...item, price: action.payload.price };
    //   }
    //   return item;
    // });

    //with immer
    return produce(state, (draftState) => {
      const item = draftState.find(
        (item) => item.uuid === action.payload.item_id
      );
      item.price = action.payload.price;
    });
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    // return state.map((item) => {
    //   if (item.uuid === action.payload.item_id) {
    //     return { ...item, quantity: action.payload.quantity };
    //   }
    //   return item;
    // });

    return produce(state, (draftState) => {
      const item = draftState.find(
        (item) => item.uuid === action.payload.item_id
      );
      item.quantity = action.payload.quantity;
    });
  }
  return state;
};

export default reducer;
