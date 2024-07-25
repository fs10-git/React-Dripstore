import React from "react";
import "./Card.css";
import kSwiss from "/images/kSwiss.png";

export default function Card({produto}){
    return(
        <>
            <div class="trendingProduct" tabIndex={0}>
                <div class="productImage"><span>{produto.desconto*100}% off</span><img src={kSwiss} alt="sneaker kswiss" /></div>
                <b>{produto.categoria}</b>
                <h4>{produto.modelo}</h4>
                <p><span>${produto.valor_total}</span> ${produto.valor_total*( 1 - produto.desconto).toFixed(2)}</p>
            </div>
        </>
    )
}