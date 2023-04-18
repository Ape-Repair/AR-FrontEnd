import React from "react";
import "./style.css"
import api from '../../api';

function Card(props) {

    return (
        <div className="card" onClick={props.onClick}>
            <div className="informacoes">
                <div className="contribuintes">
                    <img className="imgIcon" src="https://static.vecteezy.com/ti/fotos-gratis/p3/7209151-feliz-homem-empregador-tem-conversa-telefone-com-colega-olhar-fora-sorri-com-prazer-veste-terno-formal-e-gravata-conectado-a-roaming-enquanto-faz-viagem-de-negocios-poses-contra-fundo-azul-gratis-foto.jpg" alt="" />
                    <p className="nomes" >
                        {/* {props.cardHistorico.nomeCliente} */}
                        </p>
                </div>
                <h1 className="x">X</h1>
                <div className="contribuintes">
                    <img className="imgIcon" src="" alt="" />
                    <p className="nomes">
                        {/* {props.cardHistorico.nomeProvedor} */}
                        </p>
                    <p className="funcionalidadePrestador">
                        {props.cardHistorico.funcionalidade}
                        </p>
                </div>
            </div>
            <div className="dadosPedidos">
                <h1 className="dadosDeAgendamento">
                    {props.servico} - R${props.valor} - {props.data}
                    </h1>
            </div>
        </div>

    )

}

export default Card;