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

/**
 * Note: Immer does help us to avoid tedious mutations manually but its recommended we keep our objects as flat as possible because even with immer
 * we need to be aware of any undefined deep nested data.
 */
export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    /**immer libraries produce function takes in the state and a function with an argument using which we can mutate the state directly
     * immer library takes care of taking care of creating copies for us so we dont have to do tedious complex object/array copying manually
     */
    //immer variation 2: No need to wrap with produce anymore as the whole function is wrapped with it
    const item = { uuid: id++, quantity: 1, ...action.payload };
    state.push(item);
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== action.payload.item_id);
  }

  if (action.type === ITEM_PRICE_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.item_id);
    item.price = action.payload.price;
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.item_id);
    item.quantity = action.payload.quantity;
  }
}, initialItems);

export default reducer;
