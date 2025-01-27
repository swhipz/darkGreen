import './cards.css';
import CardContainer from '../CardContainer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShop, faCartShopping, faBagShopping } from '@fortawesome/free-solid-svg-icons';


const Card2 = () => {
  return (
    <>
    <div className="card-outline">'
      
      <div className="card-top">
        <img className="card-img" src="https://roleximages2024.s3.amazonaws.com/rolex_model_pages/upright_watches_assets/assets_mobile/m124300-0005_drp-upright-bba-with-shadow.png" alt="card-img" />
      </div>
      
      
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div className="card-title"><p>Green Rolex</p></div>
          <div className="card-description"><p>With death-ray laser</p></div>
          <div className="card-price">$12 525</div>
        </div>
        <div className="card-bottom-right">
<Link to="/watches" style={{textDecoration:"none", color:"#f9f9f9"}}><div className="card-cart">Add to cart <FontAwesomeIcon className="card-cart-img" icon={faCartShopping}/></div></Link>
        </div>
      </div>
    </div>

    </>
  );
}

export default Card2;
