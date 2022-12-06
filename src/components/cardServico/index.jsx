import React from "react";
import "./style.css"

function CardServico(props) {

    return (
        <>
            <div className="cardServico">
                <p className="id">ID: {props.id} </p>
                <div className="cardDescricaoServico">
                    <h3 className="especialidadeCardServico">{props.especialidade}</h3>
                    <h2 className="descricaoCardServico">Descrição</h2>
                    <p>{props.descricao}</p>
                </div>
            </div>
        </>
    )

}

export default CardServico;