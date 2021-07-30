import { connect } from 'react-redux';
import TipSelect from '../components/TipSelect';
import { updateTip } from '../store/tip-percentage/actions';

/**Interesting pattern: In order to be able to keep our components testable we have this component as a container
 * for our TipSelect container. Notice this container is handling all redux connect stuff. While the actual component TipSelect is wrapped
 * within the connect from here
 */
const mapStateToProps = (state) => {
  return {
    tipPercentage: state.tipPercentage
  };
};

const mapDispatchToProps = {
  updateTip
};

export const TipSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TipSelect);
