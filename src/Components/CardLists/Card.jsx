import "./Card.css";
import { useState } from "react";

import kSwiss from "/images/kSwiss.png";

export default function Card({data}) {
  return (
    <>
      <div className="trendingProduct" tabIndex={0}>
        <div className="productImage">
          <span>30% off</span>
          <img src={kSwiss} alt="sneaker kswiss" />
        </div>
        <b>{data.name}</b>
        <h4>{data.material}</h4>
        <p>
          <span>{data.price}</span> ${data.price}
        </p>
      </div>
    </>
  );
}
