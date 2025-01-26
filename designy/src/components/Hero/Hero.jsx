import './hero.css';

  

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
        <button className="hero-cta">Browse now</button>
      </div>
    </div>
    
    </>
  );
}
export default Hero;