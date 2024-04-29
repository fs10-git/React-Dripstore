import React from "react";
import "./Cadastro.css";

export default function Cadastro() {
  return (
    <>
      <div id="Pai">
        <h1>Criar Conta</h1>
        <div className="caixa-a">
          <h3>Informações Pessoais</h3>
          <p>Nome Completo *</p>
          <input type="text" placeholder="Insira seu nome" />
          <p>CPF *</p>
          <input type="number" placeholder="Insira seu CPF" />
          <p>E-mail *</p>
          <input type="email" placeholder="Insira seu email" />
          <p>Celular *</p>
          <input type="number" placeholder="Insira seu Celular" />
        </div>
        <div className="caixa-b">
          <h3>Informações de Entrega</h3>
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
        <div className="select_input">
          <input type="checkbox" name="" id="" />
          <p>
            Quero receber por email ofertas e novidades das lojas da Digital
            Store. A frequência de envios pode variar de acordo com a interação
            do cliente.
          </p>
        </div>
        <div className="Botao_a">
          <button>Criar Conta </button>
        </div>
      </div>
    </>
  );
}
