import './cards.css';
import CardContainer from '../CardContainer';
import CartAdd from '../../../media/cart-icons/cart-add.svg'
import Favourites from '../../../media/favourite/add-favourite.svg';
import Unfavourite from '../../../media/favourite/rem-favourite.svg';

const Card2 = () => {
  return (
    <>
    <div className="card-outline">'
      
      <div className="card-top">
        <img className="card-img" src="https://roleximages2024.s3.amazonaws.com/rolex_model_pages/upright_watches_assets/assets_mobile/m124300-0005_drp-upright-bba-with-shadow.png" alt="card-img" />
        <img src={Unfavourite} className="card-fav-icon card-unfav" alt="fav-icon" />
      </div>
      
      
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div className="card-title"><p>Green Rolex</p></div>
          <div className="card-description"><p>With death-ray laser</p></div>
          <div className="card-price">$12 525</div>
        </div>
        <div className="card-bottom-right">
          <div className="card-cart">Add to cart<img src={CartAdd} alt="cart-icon"/></div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Card2;