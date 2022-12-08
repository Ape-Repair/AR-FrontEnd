import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import api from "../../api";
import "./style.css";
import { useAuth } from "../../Context";

function Servico() {
  const [listaServico, setListaServico] = useState([]);
  var providerId = Number(sessionStorage.getItem("id"));

  useEffect(() => {
    api
      .get(`providers/in/available-orders/${providerId}`)
      .then((res) => {
        console.log("dados:", res.data);
        sessionStorage.setItem("orderId", res.data.orderId);
        setListaServico(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [providerId]);

  
  const navigate = useNavigate();
  const {atualizarPedidoAtual} = useAuth();


  const handleNavigate = (order) => {
    atualizarPedidoAtual(JSON.stringify(order))
    navigate("/pedido-escolhido")
  }

  console.log(listaServico);

  return (
    <>
      <div className="separacao"></div>
      <div className="telaServicos">
        <h1 className="textoServico">Serviços Disponiveis</h1>
        <div className="testandoWrap">
          {listaServico.map(servicoAtual => {
            console.log(servicoAtual);
            return (
              <div className="servicosDisponiveis">
                <div className="cardServico">
                  <p
                    className="id"
                    value={servicoAtual.orderId}
                  >
                    ID: {servicoAtual.orderId}
                  </p>
                  <div className="cardDescricaoServico">
                    <h3
                      className="especialidadeCardServico"
                      value={servicoAtual.serviceType}
                    >
                      {servicoAtual.serviceType}
                    </h3>
                    <h2 className="descricaoCardServico">Descrição</h2>
                    <p
                      value={servicoAtual.description}
                    >
                      {servicoAtual.description}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={()=>handleNavigate(servicoAtual)}
                  variant="contained"
                  style={{
                    backgroundColor: "#f18f01",
                    width: "20%",
                    margin: "25px",
                  }}
                >
                  Enviar
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Servico;
