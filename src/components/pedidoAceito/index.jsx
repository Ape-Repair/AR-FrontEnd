import Card from "../card"
import React from "react";
import "./style.css";
import ClienteAceito from "../clienteAceitoServico";

function PedidoAceito() {
    // const obj = ({ nomeCliente: 'teste', nomeP: 'aaaa', funcionalidade: 'encanador', servico: 'h', valor: '100,00'});



    return (
        <>
            <div className="separacao"></div>

            <div className="pedidoAceito">
                <h1 className="options">Proposta Aceita!</h1>
                <Card />
                <h1 className="options">Quem é o cliente?</h1>
                <ClienteAceito />
            </div>
        </>
    )
}

export default PedidoAceito;