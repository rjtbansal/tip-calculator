import { Card } from '@twilio-paste/core';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { NewItemForm } from './NewItemForm';
import { Summary } from './Summary';

const items = [
  { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
];

const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      <MenuItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
