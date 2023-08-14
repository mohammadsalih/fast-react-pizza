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
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
