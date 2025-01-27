import './cards.css';
import CardContainer from '../CardContainer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShop, faCartShopping, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Card1 = () => {
  return (
    <>
    <div className="card-outline">'
      <div className="card-top">
	  <img className="card-img"  src="https://www.robhayes.co/wp-content/uploads/2018/12/Gold_green.png" alt="watch"/>  
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div className="card-title"><p>Rob Hayes</p></div>
          <div className="card-description"><p>Gold Green</p></div>
          <div className="card-price">$54 225</div>
        </div>
        <div className="card-bottom-right">
        <Link to="/watches" style={{textDecoration:"none", color:"#f9f9f9"}}><div className="card-cart">Add to cart 
		<FontAwesomeIcon className="card-cart-img" icon={faCartShopping}/>
	  </div></Link>
        </div>
      </div>
    </div>

    </>
  );
}

export default Card1;
