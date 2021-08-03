import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

/**We can always use mapStateToProps to extract pieces of state and do calculations
 * before returning them as props
 */
const mapStateToProps = (state) => {
  const { items } = state;
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tipAmount = subtotal * (state.tipPercentage / 100);

  const total = subtotal + tipAmount;
  //our Summary component expects below props
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
