import Card from "../CardLists/Card";
import "./RelatedProducts.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function RelatedProducts() {

  const [produtos, setProdutos] = useState([]);

  useEffect (() => {
    async function fetchData() {
        try {
            const produtos = await axios.get("http://localhost:666/produtos-alta/getAll")
            setProdutos(produtos.data)
        }catch(error) {
            console.log(`Error ao buscar dados ${error}`)
        }
    }
    fetchData()
},[])

  return (
    <>
      <div className="relatedProducts">
        <div className="cardsProducts">
          {produtos.slice(0,4).map((produto) => (
          <Card key={produtos.id} produto={produto} />
        ))}
        </div>
      </div>
    </>
  );
}
