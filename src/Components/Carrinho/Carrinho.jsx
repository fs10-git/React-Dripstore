import "./Carrinho.css";
import BgBlue from "../../assets/BgBlue.png";
import Card from "../CardLists/Card";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import ImagemArrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

export default function Carrinho() {
  // contador
  const [count, useCount] = useState(0);
  function Acrescimo() {
    useCount(count + 1);
  }
  function Decrescimo() {
    useCount(count - 1);
  }
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://662e256ba7dda1fa378c3039.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="pai">
        <div className="body2">
          <div className="ths">
            <div className="meuCarinho">
              <span>MEU CARRINHO</span>
            </div>
            <div className="ps">
              <p>QUANTIDADE</p>
              <p>UNITÁRIO</p>
              <p>TOTAL</p>
            </div>
          </div>

          <div className="productsUnit">
            <div className="meuCarrinhoProductDesc">
              <img src={BgBlue} alt="" />
              <div className="desc">
                <h4>Tenis nike revolution 6 Next nature Masculino</h4>
                <p>
                  Cor :<span>Vermelho/Branco</span>{" "}
                </p>
                <p>
                  Tamanho :<span>42</span>{" "}
                </p>
              </div>
            </div>
            <div className="calculations">
              <div className="calcButtons">
                <button onClick={Decrescimo}>-</button>
                <p>{count}</p>
                <button onClick={Acrescimo}>+</button>
              </div>
              <div className="removeItem">
                <a href="">Remover Item</a>
              </div>
            </div>

            <div className="prices-carinho">
              <div className="unit-div">
                <span>R$ 219,00</span>
                <p>R$ 219,00</p>
              </div>
              <div className="unit-div">
                <span>R$ 219,00</span>
                <p>R$ 219,00</p>
              </div>
            </div>
          </div>
          <div className="cupom">
            <div className="cupom_a">
              <p>Cupom de desconto</p>
              <p>Calcular frete</p>
            </div>
            <div className="cupom_b">
              <input type="text" placeholder="Insira seu código" />
              <button>OK</button>
              <input type="text" placeholder="Insira seu CEP" />
              <button>OK</button>
            </div>
          </div>
        </div>
        <div className="resumo">
          <h1>RESUMO</h1>

          <div className="compras">
            <div className="compras_divisao">
              <div className="compras_a">
                <p>Subtotal</p>
                <p>Frete</p>
                <p>Desconto</p>
                <p className="total">
                  <strong>Total</strong>
                </p>
              </div>
              <div className="compras_b">
                <p>R$ 219,00</p>
                <p>R$ 0,00</p>
                <p>R$ 30,00</p>
                <p>
                  <span>R$ 219,00</span>
                </p>
              </div>
            </div>
            <p className="parcelamento">ou 10x de R$ 21,00 sem juros</p>
            <Link className="link" to="/finalizarcompras">
              <button>Continuar</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="meio">
        <p className="subtitle">Produtos relacionados</p>
        <div className="meio_b">
          <a href="#">ver todos</a>
          <img src={ImagemArrow} alt="arrow" />
        </div>
      </div>
      <div className="cards">
        {apiData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
