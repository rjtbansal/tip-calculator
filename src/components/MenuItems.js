import { Stack } from '@twilio-paste/stack';
import MenuItem from './MenuItem';

//items is now coming from our wrapped component MenuItemsContainer that has mapped state to the props items
export const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItem {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};
