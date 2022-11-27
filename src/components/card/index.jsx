import React from "react";
import "./style.css"

function Card(props) {


    return (
        <div className="card" onClick={props.onClick}>
            <div className="informacoes">
                <div className="contribuintes">
                    <img className="imgIcon" src="https://cea.vtexassets.com/arquivos/ids/39468553/Sacola-Ecobag-Bob-Esponja-e-Patrick-de-Lona-Verde-9992511-Verde_2.jpg?v=637578106438700000" alt="" />
                    <p className="nomes" >{props.nomeCliente}</p>
                </div>
                <h1 className="x">X</h1>
                <div className="contribuintes">
                    <img className="imgIcon" src="http://pm1.narvii.com/6431/793ffb760842f82b3e5c8789e2924fa320765517_00.jpg" alt="" />
                    <p className="nomes">{props.nomeProvedor}</p>
                    <p className="funcionalidadePrestador">{props.funcionalidade}</p>
                </div>
            </div>
            <div className="dadosPedidos">
                <h1 className="dadosDeAgendamento">{props.nomeInformações}</h1>
            </div>
        </div>

    )

}

export default Card;