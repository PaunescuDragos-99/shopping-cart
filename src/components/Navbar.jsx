import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="title">
          <Link to={"/"} className="title">
            Home
          </Link>
        </div>
        <ul>
          <li className="active">
            <Link to={"/products"}>Products</Link>
          </li>
          <li className="active">
            <Link to={"/shoppingcart"}>Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
