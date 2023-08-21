import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button/Button';
import { formatCurrency } from '../../utilities/helpers';
import { addItem, getItemQuantityById } from '../cart/cartSlice';
import DeleteButton from '../../UI/DeleteButton/DeleteButton';
import UpdateCartItemQuantity from '../../UI/updateCartItemQuantity/updateCartItemQuantity';

function MenuItem({ pizza }) {
  const {
    id: pizzaId,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;

  const dispatch = useDispatch();

  const itemQuantityInCart = useSelector(getItemQuantityById(pizzaId));
  const isInCart = itemQuantityInCart > 0;

  function handleAddItem() {
    dispatch(
      addItem({
        pizzaId,
        name,
        unitPrice,
        quantity: 1,
        totalPrice: unitPrice,
      })
    );
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
            (isInCart ? (
              <div className="flex items-center gap-6">
                <UpdateCartItemQuantity pizzaId={pizzaId} />
                <DeleteButton pizzaId={pizzaId} />
              </div>
            ) : (
              <Button type="small" onClick={handleAddItem}>
                Add to cart
              </Button>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
