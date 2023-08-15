import { Link } from "react-router-dom";
import SearchOrder from "../../features/order/SearchOrder";
import UserName from "../../features/user/userName";

function Header() {
  return (
    <header className="flex w-full  flex-row flex-nowrap items-center justify-between bg-yellow-400 px-6 py-4 ">
      <Link to="/" className="tracking-widest">
        FAST REACT PIZZA CO.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
export default Header;
