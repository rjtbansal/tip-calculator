export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';

export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});

//reducer will do the actual remove thats why types we use are past tense
export const removeItem = (item_id) => ({
  //return items.filter(item => item.id === item_id);
  type: ITEM_REMOVED,
  payload: {
    item_id,
  }
});