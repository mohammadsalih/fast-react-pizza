import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button/Button';
import { formatCurrency } from '../../utilities/helpers';
import {
  decreaseItemQuantity,
  deleteItem,
  getCartItem,
  increaseItemQuantity,
} from './cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, name, quantity, totalPrice } = item;

  const itemInCart = useSelector((state) => getCartItem(state, id));

  function handleDeleteItem() {
    dispatch(deleteItem(id));
  }

  function handleIncreaseItemQuantity() {
    dispatch(increaseItemQuantity(id));
  }
  function handleDecreaseItemQuantity() {
    if (itemInCart.quantity === 1) {
      handleDeleteItem(id);
      return;
    }

    dispatch(decreaseItemQuantity(id));
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Button type="alter" onClick={handleDecreaseItemQuantity}>
              -
            </Button>

            <p>{itemInCart.quantity}</p>

            <Button type="alter" onClick={handleIncreaseItemQuantity}>
              +
            </Button>
          </div>

          <Button type="small" onClick={handleDeleteItem}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
