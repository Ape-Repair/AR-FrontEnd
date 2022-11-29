import React from "react";
import './style.css'
import CardHistorico from '../card'

function MatchesHistorico() {
    const listaHistorico = [{nome : 'Atauine'}, {nome:'Gui'}];


    return (
        <>
            <div className="separacao"></div>

            <div className="matches">
                <h1 className="match">Seus Matches</h1>
                {listaHistorico.map((matches) => <CardHistorico nome={matches.nome}/>)}
            </div>
        </>
    )
}

export default MatchesHistorico;