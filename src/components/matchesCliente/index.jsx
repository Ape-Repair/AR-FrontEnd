import React, { useState } from "react";
import './style.css';
import CardCliente from "../cardCliente"
import SujestaoProvedores from "../sugestaoProvedores";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const paginacao = (array, limite, deslocamento) => {
    const deslocamentoDaArray = array.slice(deslocamento);
    const resutado = [];

    for (let i = 0; i < limite; i++) {
        if (deslocamentoDaArray[i])
            resutado.push(deslocamentoDaArray[i]);

    }

    return resutado;
}

function MatchesCliente() {
    const prxListaProvide = ['a', 'b', 'c', 'd', 'e', '7', '6', '5', '4', '3', '2'];

    const limite = 3;
    const [deslocamento, setDeslocamento] = useState(0);
    const [pagina, setPagina] = useState(1);
    const paginados = paginacao(prxListaProvide, limite, deslocamento);
    const calcPag = Math.ceil(prxListaProvide.length / limite);

    console.log('foi em ', paginados, limite, deslocamento);

    function paginaEspecifica(evt, valor) {
        setPagina(valor);

        setDeslocamento((valor - 1) * limite);
    }

    const nomeCliente = 'tatu'
    const servicoEscolhido = 'Serviço Elétrico'
    const descricao = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere itaque sed velit ab, voluptas alias quisquam temporibus! Eius, ea ad reprehenderit rerum dolor est qui qui culpa, officiis repellendus praesentium saepe?qui culpa, officiis repellendus praesentium saepe?qui culpa, officiis repellendusculpa, officiis repellendus praesentium saepe?'


    return (
        <>
            <div className="separacao"></div>
            <div className="clienteDiv">
                <h1 className="match">Escolha Seu Match</h1>
                <CardCliente nome={nomeCliente} servicoEscolhido={servicoEscolhido} descricao={descricao} />
                <h1 className="match">Propostas Disponíveis</h1>
                <div className="provedoresSujestoes">
                    {paginados.map((x) => <SujestaoProvedores nome={x.nomePrestador} valor={x.valor} uf={x.uf}/>)}

                </div>
                <Pagination style={{color: "#fff", backgroundColor: "#3161e3b5", padding: '3px', borderRadius: '10px'}}  count={calcPag} onChange={paginaEspecifica} page={pagina} shape="rounded" color={'primary'} />
            </div>
        </>
    )

}

export default MatchesCliente