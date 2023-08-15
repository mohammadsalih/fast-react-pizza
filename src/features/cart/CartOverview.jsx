import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className=" flex justify-between bg-stone-800 px-6 py-4 font-semibold uppercase tracking-wider text-stone-200">
      <p className="flex gap-4">
        <span>1 pizzas</span>
        <span>$23.45</span>
      </p>

      <Link to="/cart" className="font-normal">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
