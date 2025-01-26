import "./header.css";
import CartIcon from "../../media/cart-icons/cart.svg";
import Favourites from "../../media/favourite/add-favourite.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="mobile-navigation">
        <ul className="header-list-mobile">
          <li><Link to ="/Landing">Home</Link></li>
          <li>
            <Link to="/watches">Shop</Link>
          </li>
          <li>
            <Link to="/Checkout">Checkout</Link>
          </li>
        </ul>
      </div>
      <div className="header-container">
        <div className="header-css">
          <div className="logo">
            <h1 className="header-logo">.darkgreen</h1>
          </div>
        </div>
        <ul className="header-list">
          <li>
            <Link to="/Landing">Home</Link>
          </li>
          <li>
            <Link to="/watches">Shop</Link>
          </li>
          <li>
            <Link to=".">About</Link>
          </li>
          <li className="header-icon-li">
            <Link to="/Checkout">
              <img className="header-cart" src={CartIcon} alt="" />
            </Link>
          </li>
          <li className="header-icon-li">
            <Link to=".">
              <img className="header-favourites" src={Favourites} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
