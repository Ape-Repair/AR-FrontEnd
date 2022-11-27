import React from "react";
import './style.css';

function CardCliente(props) {

    return (
        <>

            <div className="cardC">
                <div className="informacoes">
                    <div className="contribuintes">
                        <img className="imgIcon" src="https://cea.vtexassets.com/arquivos/ids/39468553/Sacola-Ecobag-Bob-Esponja-e-Patrick-de-Lona-Verde-9992511-Verde_2.jpg?v=637578106438700000" alt="" />
                        <p className="nomes" >{props.nome}</p>
                    </div>
                    <div className="dadosDeAtendimento">
                        <div className="dadosPedidos">
                            <h1 className="dadosDeAgendamento">Informações</h1>
                        </div>
                        <p>Data: {props.data}</p>
                        <p>Horário: {props.hora}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CardCliente;