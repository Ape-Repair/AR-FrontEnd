import { Card } from "@mui/material";
import React from "react";
import "./style.css";

function PedidoAceito() {
    // const obj = ({ nomeCliente: 'teste', nomeP: 'aaaa', funcionalidade: 'encanador', servico: 'h', valor: '100,00'});



    return (
        <>
            <div className="separacao"></div>

            <div className="pedidoAceito">
                <h1 className="">Proposta Aceita!</h1>
                {/* <Card nomeCliente={nomeC} nomeProvedor={nomeP} funcionalidade={funcionalidade} servico={servico} valor={valor} data={data} /> */}
            </div>
        </>
    )
}

export default PedidoAceito;