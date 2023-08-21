import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getItemQuantityById,
  increaseItemQuantity,
} from '../../features/cart/cartSlice';

import Button from '../Button/Button';

function UpdateCartItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  const quantity = useSelector(getItemQuantityById(pizzaId));

  function handleDec() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  function handleInc() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={handleDec}>
        -
      </Button>

      <p>{quantity}</p>

      <Button type="round" onClick={handleInc}>
        +
      </Button>
    </div>
  );
}

export default UpdateCartItemQuantity;
