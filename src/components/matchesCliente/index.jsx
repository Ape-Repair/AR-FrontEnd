import React from "react";
import './style.css';
import CardCliente from "../cardCliente"
import SujestaoProvedores from "../sujestaoProvedores";

function MatchesCliente() {
    const prxListaProvide = ['a', 'b', 'c', 'd', 'e']
    const sugestions = prxListaProvide.filter((_, index) => index <= 2);


    return (
        <>
            <div className="separacao"></div>
            <div className="clienteDiv">
                <h1 className="match">Escolha Seu Match</h1>
                <CardCliente />
                <h1 className="match">Prestadores Disponiveis</h1>
                <div className="provedoresSujestoes">
                    {sugestions.map((x) => <SujestaoProvedores nome={x.nome} />)}

                </div>
            </div>
        </>
    )

}

export default MatchesCliente