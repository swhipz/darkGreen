import Header from "./../../components/Header/Header";
import Hero from "./../../components/Hero/Hero";
import Bridge from "./../../components/Bridge/Bridge";
import CardContainer from "./../../components/CardContainer/CardContainer";
import CompanyCR from "./../../components/CompanyCR/CompanyCR";
import Footer from "./../../components/Footer/Footer";


const Landing = ({ cartItems, cartTotal }) => {
  return (
    <>
      <Header cartItems={cartItems} cartTotal={cartTotal} />
      <Hero />
      <Bridge />
      <CardContainer />
      <Bridge />
      <CompanyCR />
      <Bridge />
      <Footer />
    </>
  );
};

export default Landing;
