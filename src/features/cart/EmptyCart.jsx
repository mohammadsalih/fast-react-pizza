import LinkButton from '../../UI/LinkButton/LinkButton';

function EmptyCart() {
  return (
    <div className="mt-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
