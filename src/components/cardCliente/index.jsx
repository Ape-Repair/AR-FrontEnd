import React from "react";
import './style.css';

function CardCliente(props) {

    return (
        <>

            <div className="cardC">
                <div className="informacoes">
                    <div className="contribuintes">
                        <img className="imgIcon" src="https://static.vecteezy.com/ti/fotos-gratis/p3/7209151-feliz-homem-empregador-tem-conversa-telefone-com-colega-olhar-fora-sorri-com-prazer-veste-terno-formal-e-gravata-conectado-a-roaming-enquanto-faz-viagem-de-negocios-poses-contra-fundo-azul-gratis-foto.jpg" alt="" />
                        <p className="nomes" >{props.nome}</p>
                    </div>
                    <div className="dadosDeAtendimento">
                        <div className="dadosPedidos">
                            <h1 className="dadosDeAgendamento">{props.servicoEscolhido}</h1>
                        </div>
                        <p className="seuTempo">Descrição</p>
                        <p>{props.descricao}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CardCliente;