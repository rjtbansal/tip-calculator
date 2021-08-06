import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { selectItemTotal } from '../store/items/selectors';

const mapStateToProps = (state, ownProps) => ({
  total: selectItemTotal(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  //ownProps are the props that are received from the MenuItemsContainer
  //her we'll be receiving items as well as the uuid
  console.log('ownProps, ', ownProps);
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
