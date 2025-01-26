import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Bridge from "./components/Bridge/Bridge";
import CardContainer from "./components/CardContainer/CardContainer";
import CompanyCR from "./components/CompanyCR/CompanyCR";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Watches from "./pages/products/Watches/Watches";
import Checkout from "./pages/Checkout/Checkout";
import { useState } from "react";
import { useEffect } from "react";




function App() {
  
  const [cart, setCart] = useState([]);

useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart'));
      if (savedCart) {
        setCart(savedCart);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

const addToCart = (product) => {

  setCart((prevCart) => [...prevCart, product]);
  


}



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Landing" element={<Landing />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
