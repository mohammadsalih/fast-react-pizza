import { Link } from 'react-router-dom';
import LinkButton from '../../UI/LinkButton/LinkButton';
import Button from '../../UI/Button/Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
