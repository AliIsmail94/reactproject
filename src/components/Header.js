import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/PCLogo.png";
import { useAtom } from "jotai";
import { atomSearch } from "../data/atoms";
function Header() {
  const [search, setSearch] = useAtom(atomSearch);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search !== "") navigate("/products");
  };

  return (
    <header className="header-bar">
      <img src={logo} alt="NeonPC Logo" className="logo-img" />
      <div className="search-wrapper">
        <input
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="Search GPUs, CPUs, monitors..."
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>
      <nav className="main-nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/products" className="nav-item">
          Products
        </Link>
        <Link to="/contact" className="nav-item">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
