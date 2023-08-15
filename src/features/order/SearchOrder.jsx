import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const hanleSubmit = async (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/order/${search}`);

    setSearch("");
  };

  return (
    <form onSubmit={hanleSubmit}>
      <input
        value={search}
        placeholder="Search Order #"
        className="rounded-full bg-yellow-100  px-4 py-2 text-sm duration-300 ease-out   placeholder:text-stone-400  focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:focus:w-72"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
