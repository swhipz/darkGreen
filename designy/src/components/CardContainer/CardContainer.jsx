import "./card-container.css";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";

const CardContainer = () => {
  return (
    <>
      <div className="cards-title">
        <p>Watches</p>
      </div>
      <div className="card-container">
        <div className="cards">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </>
  );
};
export default CardContainer;
