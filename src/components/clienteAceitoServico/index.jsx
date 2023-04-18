import Card from "../card"
import React from "react";
import "./style.css";

function ClienteAceito(props) {
    // const obj = ({ nomeCliente: 'teste', nomeP: 'aaaa', funcionalidade: 'encanador', servico: 'h', valor: '100,00'});



    return (
        <>

            <div className="ClienteAceito">
                <div className="escolhaDePrestadores">
                    <img className="imgIcons" src="https://static.vecteezy.com/ti/fotos-gratis/p3/7209151-feliz-homem-empregador-tem-conversa-telefone-com-colega-olhar-fora-sorri-com-prazer-veste-terno-formal-e-gravata-conectado-a-roaming-enquanto-faz-viagem-de-negocios-poses-contra-fundo-azul-gratis-foto.jpg" alt="" />
                    <div className="dadosProvedor">
                        <h1 className="nome">
                            nome
                            {props.nome}
                            </h1>
                        <h1 className="infoProvedor">
                            endereco
                            {props.endereco}
                        </h1>
                        <h1 className="infoProvedor">
                            telefone
                            {props.telefone}
                        </h1>
                        <h1 className="infoProvedor">
                            genero
                            {props.genero}
                        </h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ClienteAceito;