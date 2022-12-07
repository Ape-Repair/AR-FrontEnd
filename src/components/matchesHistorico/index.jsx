import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "../card";
import api from "../../api";
import { useNavigate } from "react-router-dom";

function MatchesHistorico() {
  const navigate = useNavigate();
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    function CardProvider() {
      const id = sessionStorage.getItem("id");
      api
        .get(`/providers/${id}/orders`)
        .then((res) => {
          console.log("dadosProv:", res.data);
          setCardList(res.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }

    function CardCustomer() {
      const id = sessionStorage.getItem("id");
      api
        .get(`/customers/${id}/orders`)
        .then((res) => {
          console.log("dadosCust:", res.data);
          setCardList(res.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
    if (sessionStorage.role === "PROVIDER") {
      CardProvider();
      navigate("/historico");
    } else if (sessionStorage.role === "CUSTOMER") {
      CardCustomer();
      navigate("/historico");
    }
  });

  return (
    <>
      <div className="separacao"></div>

      <div className="matches">
        <h1 className="match">Seus Matches</h1>
        {cardList.map((list) => (
          // <React.Fragment key={musicaAtual.id}>
          <Card cardHistorico={list} />
          // </React.Fragment
        ))}
      </div>
    </>
  );
}

export default MatchesHistorico;
