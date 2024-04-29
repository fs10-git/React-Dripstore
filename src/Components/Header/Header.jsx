import "./Header.css";
import Vector from "/images/Vector.png";
import { Link } from "react-router-dom";

// import Link from "react-router-dom";

export default function Header() {
  return (
    <>
      <header id="mainHeader">
        <div id="utils">
          <div id="logo" tabIndex={0}>
            <img src={Vector} alt="Logo Digital Store" />
            <Link to="/home" className="Logo_home">
              Digital Store
            </Link>
          </div>
          <div id="search">
            <input type="search" placeholder="Procurar Produto..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div id="signup">
            <Link to="/cadastro">Cadastre-se</Link>
            <Link className="link" to="/login">
              <button>Entrar</button>
            </Link>
          </div>
          <div id="cart">
            <Link to="/carrinho">
              <i className="fa-solid fa-cart-shopping" tabIndex={0}></i>
              <span>1</span>
            </Link>
          </div>
        </div>
        <navbar id="navbar">
          <Link to="/home">Home</Link>
          <a href="#">Produtos</a>
          <a href="#">Categorias</a>
          <a href="#">Meus Pedidos</a>
        </navbar>
      </header>
    </>
  );
}
