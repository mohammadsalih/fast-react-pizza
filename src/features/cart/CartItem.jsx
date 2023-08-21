import { formatCurrency } from '../../utilities/helpers';
import DeleteButton from '../../UI/DeleteButton/DeleteButton';
import UpdateCartItemQuantity from '../../UI/updateCartItemQuantity/updateCartItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <div className="flex items-center gap-6">
          <UpdateCartItemQuantity pizzaId={pizzaId} />
          <DeleteButton pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
