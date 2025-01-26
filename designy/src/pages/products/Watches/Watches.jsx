import "../../pages.css";
import Header from "../../../components/Header/Header";
import Card1 from "../../../components/CardContainer/Cards/Card1";
import Card2 from "../../../components/CardContainer/Cards/Card2";
import Card3 from "../../../components/CardContainer/Cards/Card3";
import "./watches.css";
import Footer from "./../../../components/Footer/Footer";
import Bridge from "../../../components/Bridge/Bridge";
import { useState } from "react";


const product = {
  name: '',
  price: 0,
  productId: 0,
  productDescription: ''
}



const Watches = () => {
  const [cart, setCart] = useState([]);
  


  const cartHandler = () => {

    
    
  }


  return (
    <>
      <Header />
      <div className="productsContainer">
      <div className="products-contianer-title"
      >Browse watches</div>
      <Bridge />
      <div className="added-to-cart" >X</div>
        <div className="product-cards">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
      <Bridge />
      <Footer/>
    </>
  );
};

export default Watches;
