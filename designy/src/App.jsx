import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Watches from "./pages/products/Watches/Watches";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";
import OrderCompleted from "./pages/OrderCompleted/OrderCompleted";
import { useState, useEffect } from "react";

function App() {
  // Initialize cart state from sessionStorage or empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = sessionStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cartTotal, setCartTotal] = useState(() => {
    const savedCart = sessionStorage.getItem("cartItems");
    if (savedCart) {
      const items = JSON.parse(savedCart);
      return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
    return 0;
  });

  // Update sessionStorage whenever cart changes
  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    // Calculate total
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If item exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If item doesn't exist, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative quantities
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: parseInt(newQuantity) }
          : item
      )
    );
  };

  // Add this function to clear cart
  const clearCart = () => {
    setCartItems([]);
    sessionStorage.removeItem("cartItems");
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Add default route */}
          <Route path="/" element={<Navigate to="/Landing" replace />} />

          <Route
            path="/Landing"
            element={<Landing cartItems={cartItems} cartTotal={cartTotal} />}
          />
          <Route
            path="/watches"
            element={
              <Watches
                addToCart={addToCart}
                cartItems={cartItems}
                cartTotal={cartTotal}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                cartTotal={cartTotal}
                clearCart={clearCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                cartTotal={cartTotal}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
          <Route
            path="/order-success"
            element={
              <OrderCompleted cartItems={cartItems} cartTotal={cartTotal} />
            }
          />
          {/* Catch all unknown routes */}
          <Route path="*" element={<Navigate to="/Landing" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
