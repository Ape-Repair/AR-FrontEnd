import React from "react";
import {BrowserRouter, Routes,  Route} from "react-router-dom";
import HomePage from '../pages/HomePage'
import CadastrarCliente from '../pages/CadastroCliente'


function Router() {

    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cadastro-cliente" element={<CadastrarCliente/>}></Route>
            </Routes>
        
        </BrowserRouter>

    )

}

export default Router;