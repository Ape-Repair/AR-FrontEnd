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
import PerfilCliente from "../pages/PerfilCliente";
import PerfilPrestador from "../pages/PerfilPrestador";


function Router() {

    return(
        
        <BrowserRouter>
            <Routes>
                {/* HomePage */}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cadastro" element={<Cadastrar/>}></Route>

                {/* Ambos */}
                <Route path="/historico" element={<Historico/>}></Route>

                {/* Cliente */}
                <Route path="/servico-cliente" element={<ServicosCliente/>}></Route>
                <Route path="/match-cliente" element={<MatchCliente/>}></Route>
                <Route path="/perfil-cliente" element={<PerfilCliente/>}></Route>
                {/* Prestador */}
                <Route path="/servico-disponivel" element={<ServicosDisponiveis/>}></Route>
                <Route path="/pedido-escolhido" element={<PedidosEscolhido/>}></Route>
                <Route path="/match-provedor" element={<MatchProvedor/>}></Route>
                <Route path="/proposta-aceita" element={<PropostaAceita/>}></Route>
                <Route path="/perfil-prestador" element={<PerfilPrestador/>}></Route>
                
                <Route path="/pedido-cliente" element={<PedidoCliente/>}></Route>
            </Routes>
        
        </BrowserRouter>

    )

}

export default Router;