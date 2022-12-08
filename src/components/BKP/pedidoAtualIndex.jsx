import React, { useState, useEffect } from "react";
import api from "../../api";
import "./style.css";

import TextField from "@mui/material/TextField";
import CardServico from "../cardServico";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function PedidoAtual() {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [dados, setDados] = useState([]);

  var providerId = sessionStorage.getItem("id");

  useEffect(() => {
    api
      .get(`providers/in/available-orders/${providerId}`)
      .then((res) => {
        console.log("dadosnovos:", res.data);
        setDados(res.data);
      })
      .catch((erro) => {
        console.log(erro);
    });
}, [providerId]);

  const id = "111";
  const especialidade = "Encanador";
  const descricao =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos sint sed dignissimos consectetur earum voluptatem ipsum modi aut. Quo necessitatibus quidem magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo";

  return (
    <>
      <div className="separacao"></div>
      <div className="pedidoEscolhido">
        <h1 className="options">Pedido Escolhido:</h1>
        <div className="cardServico">
          <p
            className="id"
            value={dados.orderId}
            onChange={(e) => [setOrderId(e.target.value)]}
          >
            ID: {dados.orderId}
          </p>
          <div className="cardDescricaoServico">
            <h3
              className="especialidadeCardServico"
              value={serviceType}
              onChange={(e) => [setServiceType(e.target.value)]}
            >
              {especialidade}
            </h3>
            <h2 className="descricaoCardServico">Descrição</h2>
            <p
              value={description}
              onChange={(e) => [setDescription(e.target.value)]}
            >
              {descricao}
            </p>
          </div>
        </div>
        <h3 className="options">Digite aqui o valor da sua proposta:</h3>
        <TextField
          sx={{ input: { "::placeholder": { color: "#051951" } } }}
          className="teste"
          type="Number"
          placeholder="EX: R$ 200,00"
          id="Valor"
        />
        <Button
          onClick={() => navigate("/proposta-aceita")}
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
