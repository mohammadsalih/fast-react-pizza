import { useDispatch } from 'react-redux';
import { deleteItem } from '../../features/cart/cartSlice';

import Button from '../Button/Button';

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleDelete}>
      delete
    </Button>
  );
}

export default DeleteButton;
