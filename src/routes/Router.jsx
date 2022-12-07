import React from "react";
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import HomePage from '../pages/HomePage'
import Cadastrar from '../pages/Cadastro'
import Historico from "../pages/Historico";
import MatchProvedor from "../pages/MatchProvedor"
import MatchCliente from "../pages/MatchCliente";
import ServicosDisponiveis from "../pages/ServicosDisponiveis";
import PedidosEscolhido from "../pages/PedidoEscolhido";
import PropostaAceita from "../pages/PropostaAceita";
import ServicosCliente from "../pages/ServicosCliente";
import PedidoCliente from "../pages/PedidoCliente";


function Router() {

    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cadastro" element={<Cadastrar/>}></Route>
                <Route path="/historico" element={<Historico/>}></Route>
                <Route path="/match-provedor" element={<MatchProvedor/>}></Route>
                <Route path="/match-cliente" element={<MatchCliente/>}></Route>
                <Route path="/servico-disponivel" element={<ServicosDisponiveis/>}></Route>
                <Route path="/pedido-escolhido" element={<PedidosEscolhido/>}></Route>
                <Route path="/pedido-aceito" element={<PropostaAceita/>}></Route>
                <Route path="/servico-cliente" element={<ServicosCliente/>}></Route>
                <Route path="/pedido-cliente" element={<PedidoCliente/>}></Route>
            </Routes>
        
        </BrowserRouter>

    )

}

export default Router;