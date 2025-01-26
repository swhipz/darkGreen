import './cards.css';
import CardContainer from '../CardContainer';
import CartAdd from '../../../media/cart-icons/cart-add.svg';
import Favourites from '../../../media/favourite/add-favourite.svg';
import Unfavourite from '../../../media/favourite/rem-favourite.svg';


const Card3 = () => {
  return (
    <>
    <div className="card-outline">'
      
      <div className="card-top">
        <img className="card-img" src="https://seikowatches.co.in/cdn/shop/files/SPB381J1_9ffe724f-6ff1-4158-904f-dc14964cf03e_1200x.png?v=1685772749" alt="card-img" />
        <img src={Favourites} className="card-fav-icon" alt="fav-icon" />
      </div>
      
      
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div className="card-title"><p>Seiko</p></div>
          <div className="card-description"><p>With death-ray laser</p></div>
          <div className="card-price">$1 525</div>
        </div>
        <div className="card-bottom-right">
          <div className="card-cart">Add to cart<img src={CartAdd} alt="cart-icon"/></div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Card3;