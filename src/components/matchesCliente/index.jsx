import React, { useState, useEffect } from "react";
import './style.css';
import CardCliente from "../cardCliente"
import SugestaoProvedores from "../sugestaoProvedores";
import Pagination from '@mui/material/Pagination';
import api from '../../api';


// const paginacao = (array, limite, deslocamento) => {
//     const deslocamentoDaArray = array.slice(deslocamento);
//     const resutado = [];

//     for (let i = 0; i < limite; i++) {
//         if (deslocamentoDaArray[i])
//             resutado.push(deslocamentoDaArray[i]);

//     }

//     return resutado;
// }


function MatchesCliente() {
    const [listaOrdem, setListaOrdem] = useState([]);
    var customerId = sessionStorage.getItem("id");


    useEffect(() => {
        api.get(`http://52.204.111.84:8080/customers/${customerId}/orders`).then(res => {
            console.log("dados:", res.data);
            console.log("status code:", res.status);
            setListaOrdem(res.data);
        }).catch(erro => {
            console.log(erro);
        })
    }, [customerId])


    // const prxListaProvide = ['a', 'b', 'c', 'd', 'e', '7', '6', '5', '4', '3', '2'];

    // const limite = 3;
    // const [deslocamento, setDeslocamento] = useState(0);
    // const [pagina, setPagina] = useState(1);
    // const paginados = paginacao(prxListaProvide, limite, deslocamento);
    // const calcPag = Math.ceil(prxListaProvide.length / limite);

    // console.log('foi em ', paginados, limite, deslocamento);

    // function paginaEspecifica(evt, valor) {
    //     setPagina(valor);

    //     setDeslocamento((valor - 1) * limite);
    // }

    // const nomeCliente = 'tatu'
    // const servicoEscolhido = 'Serviço Elétrico'
    // const descricao = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere itaque sed velit ab, voluptas alias quisquam temporibus! Eius, ea ad reprehenderit rerum dolor est qui qui culpa, officiis repellendus praesentium saepe?qui culpa, officiis repellendus praesentium saepe?qui culpa, officiis repellendusculpa, officiis repellendus praesentium saepe?'


    return (
        <>
            <div className="separacao"></div>
            {listaOrdem?.map(ordemAtual => (
                <div className="clienteDiv">
                    <h1 className="match">Escolha Seu Match</h1>
                    <CardCliente nome={ordemAtual?.customerId?.name} servicoEscolhido={ordemAtual.serviceType} descricao={ordemAtual.description} />
                    <h1 className="match">Propostas Disponíveis</h1>
                    <div className="provedoresSujestoes">
                        <SugestaoProvedores orderId={ordemAtual?.orderId} />

                    </div>
                    {/* <Pagination style={{color: "#fff", backgroundColor: "#3161e3b5", padding: '3px', borderRadius: '10px'}}  count={calcPag} onChange={paginaEspecifica} page={pagina} shape="rounded" color={'primary'} /> */}
                </div>
            ))}
        </>
    )

}

export default MatchesCliente