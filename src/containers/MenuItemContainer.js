import { removeItem } from "../store/items/actions";
import { connect } from "react-redux";
import MenuItem from "../components/MenuItem";

const mapDispatchToProps = (dispatch, ownProps) => {
  //ownProps are the props that are received from the MenuItemsContainer
  //her we'll be receiving items as well as the uuid
  console.log('ownProps, ', ownProps);
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
  }
}

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);