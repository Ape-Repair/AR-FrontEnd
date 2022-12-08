import React from "react";
import { useParams } from 'react-router-dom';

import NavBarPrestador from "../components/navbarPrestador";
import PedidoAtual from "../components/pedidoAtual"

function PedidosEscolhidos() {

    return (
        <>
           
            <NavBarPrestador/>
            <PedidoAtual/>
        </>
    )
}

export default PedidosEscolhidos;