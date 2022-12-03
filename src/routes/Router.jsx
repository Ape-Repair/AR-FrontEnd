import React from "react";
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import HomePage from '../pages/HomePage'
import Cadastrar from '../pages/Cadastro'
import Especialidades from "../pages/Especialidades";
import Historico from "../pages/Historico";
import MatchProvedor from "../pages/MatchProvedor"
import MatchCliente from "../pages/MatchCliente";
import ServicosDisponiveis from "../pages/ServicosDisponiveis";


function Router() {

    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cadastro" element={<Cadastrar/>}></Route>
                <Route path="/especialidades" element={<Especialidades/>}></Route>
                <Route path="/historico" element={<Historico/>}></Route>
                <Route path="/match-provedor" element={<MatchProvedor/>}></Route>
                <Route path="/match-cliente" element={<MatchCliente/>}></Route>
                <Route path="/servico-disponivel" element={<ServicosDisponiveis/>}></Route>
            </Routes>
        
        </BrowserRouter>

    )

}

export default Router;