import "./Card.css";
import kSwiss from "/images/kSwiss.png";

export default function Card() {
  return (
    <>
      <div className="trendingProduct" tabIndex={0}>
        <div className="productImage">
          <span>30% off</span>
          <img src={kSwiss} alt="sneaker kswiss" />
        </div>
        <b>tênis</b>
        <h4>K-Swiss V8 - Masculino</h4>
        <p>
          <span>$200</span> $100
        </p>
      </div>
    </>
  );
}
