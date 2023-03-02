import { Link, Outlet, useNavigate } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";

export default function Main() {
  const navigate = useNavigate();

  const handleSearch = (search) => {
    navigate(`/Results/${search}`);
  };

  return (
    <>
      <header>
        <div>
          <Link to={"/"}>[Youtube]</Link>
        </div>
        <SearchForm onSearch={handleSearch} />
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
}
