import './cards.css';
import CardContainer from '../CardContainer';
import CartAdd from '../../../media/cart-icons/cart-add.svg';
import Favourites from '../../../media/favourite/add-favourite.svg';
import Unfavourite from '../../../media/favourite/rem-favourite.svg';

const Card1 = () => {
  return (
    <>
    <div className="card-outline">'
      
      <div className="card-top">
        
        <img className="card-img" src='https://www.robhayes.co/wp-content/uploads/2018/12/Gold_green.png' alt="card-img" />
        <img src={Favourites} className="card-fav-icon" alt="fav-icon" />
      </div>
      
      
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div className="card-title"><p>Rob Hayes</p></div>
          <div className="card-description"><p>Gold Green</p></div>
          <div className="card-price">$54 225</div>
        </div>
        <div className="card-bottom-right">
          <div className="card-cart">Add to cart<img src={CartAdd} alt="cart-icon"/></div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Card1;