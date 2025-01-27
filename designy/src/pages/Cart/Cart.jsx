import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, cartTotal, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();

  return (
    <>
      <Header cartItems={cartItems} cartTotal={cartTotal} />
      <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart-items">
          {cartItems.length === 0
            ? ((<p>Your cart is empty</p>),
              (
                <button
                  className="checkout-button"
                  onClick={() => navigate("/watches")}
                >
                  Browse watches
                </button>
              ))
            : cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <div className="quantity-controls">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, e.target.value)
                        }
                      />
                      <button onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <div className="cart-summary">
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <button
            className="checkout-button"
            onClick={() => navigate("/checkout")}
            disabled={cartItems.length === 0}
            style={{
              backgroundColor: cartItems.length === 0 ? "#99222299" : "",
              boxShadow: cartItems.length === 0 ? "none" : "",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
