import { Link, Outlet, useNavigate } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import "./../../src/pages.css";
import { FaYoutube } from "react-icons/fa";

export default function Main() {
  const navigate = useNavigate();

  const handleSearch = (search) => {
    navigate(`/Results/${search}`);
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to={"/"}>
            <FaYoutube />
          </Link>
        </div>
        <div className="header__search">
          <SearchForm onSearch={handleSearch} />
        </div>
      </header>
      <section className="container">
        <Outlet />
      </section>
    </>
  );
}
