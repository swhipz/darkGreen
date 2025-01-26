import "../../pages/pages.css";
import Header from "../../components/Header/Header";
import './checkout.css';



const Checkout = () => {
  return (
    <>
      <Header />
      <div className="checkout-contianer">
        <div className="checkout-title"><h2>Checkout</h2></div>
        <div className="checkout-items-and-calc">
          <div className="checkout-left">
          <div className="cart-display-container">
            
          </div>
          </div>
          <div className="checkout-right">

          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
