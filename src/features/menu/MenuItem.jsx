import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button/Button';
import { formatCurrency } from '../../utilities/helpers';
import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  getCartItem,
  increaseItemQuantity,
} from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const itemInCart = useSelector((state) => getCartItem(state, id));
  function handleAddItem() {
    dispatch(
      addItem({ id, name, unitPrice, quantity: 1, totalPrice: unitPrice })
    );
  }

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
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut &&
            (!itemInCart ? (
              <Button type="small" onClick={handleAddItem}>
                Add to cart
              </Button>
            ) : (
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
                  delete
                </Button>
              </div>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
