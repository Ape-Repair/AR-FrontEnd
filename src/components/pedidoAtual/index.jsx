import React, { useState, useEffect } from "react";
import api from "../../api";
import "./style.css";

import TextField from "@mui/material/TextField";
import CardServico from "../cardServico";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth } from "../../Context";

function PedidoAtual() {
  const navigate = useNavigate();
  const [valor, setValor] = useState(0);
  var providerId = sessionStorage.getItem("id");

  
  function createOrder (order) {
    const novaProposta = {
      orderId: order.orderId,
      providerId: providerId,
      amount: valor
    }

    console.log("entrou na function")
    if(valor > 0 && valor !== ""){
      api.post("/providers/in/create-proposal", novaProposta).then(res => {
        console.log(res.data)
        console.log(sessionStorage.setItem("OrderId"), res.data.orderId)
        alert("proposta criada!");
        navigate("/match-cliente");
      }).catch(erro => {
        alert("erro")
      });
    }
  }

  const { pedidoAtual } = useAuth();

  const dadosFormatado = JSON.parse(pedidoAtual)
  return (
    <>
      <div className="separacao"></div>
      <div className="pedidoEscolhido">
        <h1 className="options">Pedido Escolhido:</h1>
        <div className="cardServico">
          <p
            className="id"
            value={dadosFormatado.orderId}
          >
            ID: {dadosFormatado.orderId}
          </p>
          <div className="cardDescricaoServico">
            <h3
              className="especialidadeCardServico"
              value={dadosFormatado.serviceType}
            >
              {dadosFormatado.serviceType}
            </h3>
            <h2 className="descricaoCardServico">Descrição</h2>
            <p
              value={dadosFormatado.description}
            >
              {dadosFormatado.description}
            </p>
          </div>
        </div>
        <h3 className="options">Digite aqui o valor da sua proposta:</h3>
        <TextField
          sx={{ input: { "::placeholder": { color: "#051951" } } }}
          className="teste"
          type="Number"
          placeholder="EX: R$ 200,00"
          onChange={(e) => [setValor(e.target.value)]}
          id="Valor"
        />
        <Button
          onClick={() => createOrder(dadosFormatado)}
          variant="contained"
          style={{ backgroundColor: "#f18f01", width: "20%", margin: "25px" }}
        >
          Enviar
        </Button>
      </div>
    </>
  );
}

export default PedidoAtual;
