import './hero.css';
import { Link } from "react-router-dom";
  

const Hero = () => {
  return (
    <>
    <div className="hero-container">
      <div className="hero-left">
      <div className="bg-img"></div>
      </div>
      <div className="hero-right">
        <h2 className="hero-title">Just Like Clockwork</h2>
        <p className="hero-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, modi?
        </p>
        <Link to="/Watches"><button className="hero-cta">Browse now</button></Link>
      </div>
    </div>
    
    </>
  );
}
export default Hero;