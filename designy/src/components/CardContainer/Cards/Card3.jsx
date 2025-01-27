import './cards.css';
import CardContainer from '../CardContainer';
import Favourites from '../../../media/favourite/add-favourite.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShop, faCartShopping, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Card3 = () => {
  return (
    <>
    <div className="card-outline">'
      <div className="card-top">
        <img className="card-img" src="https://seikowatches.co.in/cdn/shop/files/SPB381J1_9ffe724f-6ff1-4158-904f-dc14964cf03e_1200x.png?v=1685772749" alt="card-img" />
      </div>
      
      
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div className="card-title"><p>Seiko</p></div>
          <div className="card-description"><p>With death-ray laser</p></div>
          <div className="card-price">$1 525</div>
        </div>
        <div className="card-bottom-right">
          <Link to="/watches" style={{textDecoration:"none", color:"#f9f9f9"}}><div className="card-cart">Add to cart <FontAwesomeIcon className="card-cart-img" icon={faCartShopping}/></div></Link>
        </div>
      </div>
    </div>

    </>
  );
}

export default Card3;
