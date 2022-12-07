import React from "react";
import "./style.css";

import TextField from "@mui/material/TextField";
import CardServico from "../cardServico";

function PedidoAtual() {

    const id =  '111';
    const especialidade = 'Encanador';
    const descricao = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos sint sed dignissimos consectetur earum voluptatem ipsum modi aut. Quo necessitatibus quidem magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo' ;

    return (
        <>
            <div className="separacao"></div>
            <div className="pedidoEscolhido">
                <h1 className="options">Pedido Escolhido:</h1>
                <CardServico id={id} especialidade={especialidade} descricao={descricao} />
                <h3 className="options">Digite aqui o valor da sua proposta:</h3>
                <TextField
                    sx={{ input: { "::placeholder": { color: "#051951" }}  }}
                    className="teste"
                    type="Number"
                    placeholder="EX: R$ 200,00"
                    id="Valor"

                />
            </div>
        </>
    )
}

export default PedidoAtual;