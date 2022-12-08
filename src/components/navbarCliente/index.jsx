import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/LogoApeRepair.png";
import { useNavigate } from "react-router-dom";


function NavBarCliente() {
    const navigate = useNavigate();
    function logout(){
        sessionStorage.removeItem("email")
        sessionStorage.removeItem("id")
        sessionStorage.removeItem("orderId")
        sessionStorage.removeItem("role")
        sessionStorage.removeItem("senha")
        navigate("/")
    }


    return (
        <nav className="nav">
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />

                <div className="navegacao">
                    <ul>
                        <li onClick={() => navigate("/servico-cliente")}>
                            <p>Novo Serviço</p>
                        </li>
                        <li onClick={() => navigate("/perfil-cliente")}>
                            <p>Perfil</p>
                        </li>
                        <li onClick={() => navigate("/historico")}>
                            <p >Matches</p>
                        </li>
                        <li>
                            <p onClick={logout}>Logout</p>
                        </li>
                    </ul>


                </div>
            </div>
        </nav >
    );
}

export default NavBarCliente;
