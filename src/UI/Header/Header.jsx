import { Link } from "react-router-dom";
import SearchOrder from "../../features/order/SearchOrder";

function Header() {
  return (
    <header className="flex flex-row w-full flex-nowrap">
      <Link to="/" className="flex-1">
        FAST REACT PIZZA CO.
      </Link>
      <SearchOrder className="flex-1" />
      <p className="flex-1">mohammad</p>
    </header>
  );
}

export default Header;
