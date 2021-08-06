import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import { selectSubtotal, selectTipAmount, selectTotal } from '../store/items/selectors';

/**We can always use mapStateToProps to extract pieces of state and do calculations
 * before returning them as props
 */
const mapStateToProps = (state) => {
  
  const subtotal = selectSubtotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
