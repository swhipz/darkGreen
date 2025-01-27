import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faHome, faShop, faCartShopping, faBagShopping, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';



const Header = ({ cartItems = [], cartTotal = 0 }) => {
  return (
    <>
      <div className="mobile-navigation">
        <ul className="header-list-mobile">
        <li className="fa-icons">
            <Link to="/Landing"><FontAwesomeIcon icon={faHome}/><br />Home</Link>
          </li>
          <li className="fa-icons">
          <Link to="/watches"><FontAwesomeIcon icon={faShop}/><br />Shop</Link>
          </li>
          <li className="fa-icons">
            <Link to="/Cart" className="cart-icon-container" style={{textDecoration:"none"}}>
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
              {cartItems.length > 0 && (
                <span className="cart-total">${cartTotal.toFixed(2)}</span>
              )}
            </Link>
          </li>
          <li className="fa-icons">
            <Link to="/Checkout">
            <FontAwesomeIcon icon={faBagShopping} style={{position:"relative", left: '10px'}}/>
           <p>Checkout</p></Link>
          </li>
        </ul>
      </div>
      <div className="header-container">
        <div className="header-css">
          <div className="logo">
            <h1 className="header-logo"><Link to="/Landing"style={{textDecoration:"none", color: "#f9f9f9"}} >.darkgreen</Link></h1>
          </div>
        </div>
        <ul className="header-list">
          <li className="home-icon">
          <Link to="/Landing"><FontAwesomeIcon icon={faHome}/><br />Home</Link>
          </li>
          <li style={{textAlign:"center"}}>
          <Link to="/watches"><FontAwesomeIcon icon={faShop} /><br />Shop</Link>
          </li>
          <li style={{textAlign:"center"}}>
            <Link to="."><FontAwesomeIcon icon={faCircleQuestion} style={{position:"relative"}} /><br/>About</Link>
          </li>


          <li className="header-icon-li">
            <Link to="/Cart" className="cart-icon-container" style={{textDecoration:"none"}}>
            <FontAwesomeIcon className="card-cart-img" style={{height: "24px"}} icon={faCartShopping}/>
              {cartItems.length > 0 && (
                <span className="cart-total">${cartTotal.toFixed(2)}</span>
              )}
            </Link>
          </li>
          <li className="header-icon-li checkout-icon">
            <Link to="/Checkout">
            <FontAwesomeIcon icon={faBagShopping} style={{height: "24px", position:"relative",top:"5px"}}/>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
