import { connect } from 'react-redux';
import { MenuItems } from '../components/MenuItems';

const mapStateToProps = state => {
  return {
    //key is always prop name that we want to use in our component and value the actual value derived from the state
    items: state.items,
  }
}

export const MenuItemsContainer = connect(mapStateToProps)(MenuItems);
