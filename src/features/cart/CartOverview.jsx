import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);

  const { totalQuantity, totalPrice } = cart.reduce(
    (accumulator, currentItem) => {
      accumulator.totalQuantity += currentItem.quantity;
      accumulator.totalPrice += currentItem.totalPrice;
      return accumulator;
    },
    { totalQuantity: 0, totalPrice: 0 }
  );

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
