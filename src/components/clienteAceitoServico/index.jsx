import Card from "../card"
import React from "react";
import "./style.css";

function ClienteAceito() {
    // const obj = ({ nomeCliente: 'teste', nomeP: 'aaaa', funcionalidade: 'encanador', servico: 'h', valor: '100,00'});



    return (
        <>

            <div className="ClienteAceito">
                <div className="escolhaDePrestadores">
                    <img className="imgIcons" src="https://cea.vtexassets.com/arquivos/ids/39468553/Sacola-Ecobag-Bob-Esponja-e-Patrick-de-Lona-Verde-9992511-Verde_2.jpg?v=637578106438700000" alt="" />
                    <div className="dadosProvedor">
                        <h1 className="nome">
                            nome
                            {/* {props.nome} */}
                            </h1>
                        <h1 className="infoProvedor">
                            endereco
                            {/* {props.endereco} */}
                        </h1>
                        <h1 className="infoProvedor">
                            telefone
                            {/* {props.telefone} */}
                        </h1>
                        <h1 className="infoProvedor">
                            genero
                            {/* {props.genero} */}
                        </h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ClienteAceito;