import React from "react";
import './style.css'
import CardHistorico from '../card'

function MatchesHistorico() {
    const listaHistorico = [{nomeCliente : 'Atauine', nomeProvedor: 'gui', valor: '400,00', data: '19/02/2022', servico: 'Serviço Elétrico', funcionalidade: 'Encanador'}];


    return (
        <>
            <div className="separacao"></div>

            <div className="matches">
                <h1 className="match">Seus Matches</h1>
                {listaHistorico.map((x) => <CardHistorico nomeCliente={x.nomeCliente} nomeProvedor={x.nomeProvedor} valor={x.valor} data={x.data} servico={x.servico} funcionalidade={x.funcionalidade}/>)}
            </div>
        </>
    )
}

export default MatchesHistorico;