import React from "react";

import NavBarCliente from "../components/navbarCliente";
import DescricaoServico from "../components/PedidoCliente";

function ServicosCliente(){
    return(<>
        <NavBarCliente/>
        <DescricaoServico/>
    </>)
}

export default ServicosCliente;