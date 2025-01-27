import "../../pages.css";
import Header from "../../../components/Header/Header";
import Card1 from "../../../components/CardContainer/Cards/Card1";
import Card2 from "../../../components/CardContainer/Cards/Card2";
import Card3 from "../../../components/CardContainer/Cards/Card3";
import "./watches.css";
import Footer from "./../../../components/Footer/Footer";
import Bridge from "../../../components/Bridge/Bridge";
import { useState } from "react";
import { watches } from "../../../data/watches";
import { Link } from "react-router-dom";


const Watches = ({ addToCart, cartItems, cartTotal }) => {
  return (
    <>
      <Header cartItems={cartItems} cartTotal={cartTotal} />
      <Bridge />
      <div id="top" style={{position:"absolute", top:"0"}}></div>
      <div className="watches-container">
        <h1>Our Collection</h1>
        <div className="watches-grid">
          {watches.map((watch) => (
            <div key={watch.id} className="watch-card">
              <img src={watch.image} alt={watch.name} />
              <div className="watch-info">
                <h3>{watch.name}</h3>
                <p className="watch-description">{watch.description}</p>
                <div className="watch-specs">
                  <p>Case: {watch.specs.case}</p>
                  <p>Movement: {watch.specs.movement}</p>
                </div>
                <div className="watch-price-cart">
                  <span className="price">${watch.price}</span>
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(watch)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Bridge />
      <div className="return-button">
      <a href="#top"> <button className="return-button-style">Return to top</button></a>
        </div>
      <Footer />
    </>
  );
};

export default Watches;
