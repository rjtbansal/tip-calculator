import NewItemForm from '../components/NewItemForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewItem } from '../store/items/actions';
//Inject just dispatch and don't listen to store when no arguments specified within connect
//connect will end up passing dispatch as prop to the wrapped component

/*mapDispatchToProps takes in dispatch function argument which we can modify by passing the action
 */
// const mapDispatchToProps = (dispatch) => {
//   /*mapStateToProps returns an object with keys as the prop name that will be used by the component which would trigger the function attached to the key
//   so below we have onSubmit key which is mapped to a function that dispatches addNewItem action creator
//   */
//   // return {
//   //   onSubmit: (name, price) => dispatch(addNewItem(name, price))
//   // }

//   //pattern 2: say our return was a very long object we could use bindActionCreators to bind all actionCreators and pass dispatch just 1 time as shown below
//   return bindActionCreators(
//     {
//       onSubmit: (name, price) => addNewItem(name, price)
//     },
//     dispatch
//   );
// };

//pattern3: least tedious way if we dont need to have mapDispatchToProps as a function
//just pass it an object and it will on its own figure out all the binding of dispatch, etc
const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};
export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
