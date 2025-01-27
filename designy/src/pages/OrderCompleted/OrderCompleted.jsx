import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./order.css";
import Footer from "../../components/Footer/Footer";

const OrderCompleted = ({ cartItems, cartTotal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // If no order state, redirect to Landing
    if (!location.state?.orderNumber) {
      navigate("/Landing");
      return;
    }

    // Get order details from sessionStorage
    const orders = JSON.parse(sessionStorage.getItem("orders") || "[]");
    const currentOrder = orders.find(
      (o) => o.orderNumber === location.state.orderNumber
    );

    if (currentOrder) {
      setOrder(currentOrder);
    } else {
      navigate("/Landing");
    }
  }, [location.state, navigate]);

  if (!order) {
    return null;
  }

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 10);

  return (
    <>
      <Header cartItems={cartItems} cartTotal={cartTotal} />
      <div className="order-container">
        <div className="thank-you-notice">
          <h2>Thank you for your order!</h2>
        </div>

        <div className="order-wrapper">
          <div className="order-id-wrapper">
            Your Order-ID is: <strong>{order.orderNumber}</strong>
          </div>
          <div className="receipt">
            <div className="order-details">
              <h3>Order Summary</h3>
              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-totals">
                <div className="subtotal">
                  <span>Subtotal:</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="shipping">
                  <span>Shipping:</span>
                  <span>${order.shipping.toFixed(2)}</span>
                </div>
                <div className="total">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="shipping-details">
              <h3>Shipping Information</h3>
              <p>{order.customer.fullName}</p>
              <p>{order.customer.address}</p>
              <p>
                {order.customer.city}, {order.customer.postalCode}
              </p>
            </div>
            <div className="order-info">
              <ul>
                <li>Order confirmation sent to: {order.customer.email}</li>
                <li>
                  Expected delivery date: {deliveryDate.toLocaleDateString()}
                </li>
                <li>4 weeks return policy</li>
                <li>Contact support@darkgreen.com for customer support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="return-button">
          <Link to="/Landing">
            <button className="return-button-style">Return to store</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderCompleted;
