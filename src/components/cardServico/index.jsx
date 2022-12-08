import React, { useState, useEffect } from "react";
import api from '../../api';
import { useNavigate } from "react-router-dom";

import "./style.css";

function CardServico({key, id, especialidade, descricao}) {
  const [orderId, setOrderId] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");


  const novoCard = {
    orderId: orderId,
    serviceType: serviceType,
    description: description,
  };

  var providerId = sessionStorage.getItem("id");

  useEffect(() => {
    api
      .get(`providers/in/available-orders/${providerId}`)
      .then((res) => {
        console.log("dados:", res.data);
        setData(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  },[providerId]);

  return (
    <>
      <div className="cardServico">
        <p
          className="id"
          value={orderId}
          onChange={(e) => [setOrderId(e.target.value)]}
        >ID: {id}</p>
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
    </>
  );
}

export default CardServico;
