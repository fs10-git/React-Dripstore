import "./FinalizarCompras.css";
import ImagemTenis from "../../assets/WhiteSneaker.png";

export default function Finalizar() {
  return (
    <>
      <div id="Master">
        <h1>Finalizar Compra</h1>
        <div className="components_superior">
          <div className="lado_a">
            <p className="title_a">Informações Pessoais</p>
            <p>Nome Completo *</p>
            <input type="text" placeholder="Insira seu nome" />
            <p>CPF *</p>
            <input type="number" placeholder="Insira seu CPF" />
            <p>E-mail *</p>
            <input type="email" placeholder="Insira seu email" />
            <p>Celular *</p>
            <input type="number" placeholder="Insira seu Celular" />
          </div>
          <div className="lado_b">
            <h3>RESUMO</h3>
            <div className="topo_b">
              <div className="topo_img">
                <img src={ImagemTenis} alt="tenis" />
              </div>
              <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
            </div>
            <div className="lado_b_inferior">
              <div className="lado_b_inferior_a">
                <p>Subtotal:</p>
                <p>Frete:</p>
                <p>Desconto:</p>
              </div>
              <div className="lado_b_inferior_b">
                <p>R$ 219,00</p>
                <p>R$ 0,00</p>
                <p>R$ 30,00</p>
              </div>
            </div>
            <div className="lado_b_inferior_c">
              <div className="total">
                <p>Total</p>
                <p>R$ 219,00</p>
              </div>
              <p className="valor">ou 10x de R$ 21,00 sem juros</p>
            </div>
            <button className="botaoo">Realizar Pagamento</button>
          </div>
        </div>
        <div>
          <h3 className="title_a">Informações de Entrega</h3>
          <p>Endereço *</p>
          <input type="text" placeholder="Insira seu endereço" />
          <p>Bairro *</p>
          <input type="text" placeholder="Insira seu bairro" />
          <p>Cidade *</p>
          <input type="text" placeholder="Insira seu cidade" />
          <p>CEP *</p>
          <input type="number" placeholder="Insira seu CEP" />
          <p>Complemento *</p>
          <input type="text" placeholder="Insira seu complemento" />
        </div>
      </div>
    </>
  );
}
