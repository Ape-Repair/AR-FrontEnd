import React from "react";
import "./style.css"
import logo from "../../assets/LogoApeRepair.png"
import { useNavigate } from "react-router-dom";


function NavBar() {

    const navigate = useNavigate();

    return (

        <nav className="nav">
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />

                <div className="navegacao">
                    <ul>
                        <li onClick={() => navigate("/")}><p>Home</p></li>
                        <li><p>Sobre</p></li>                       
                        <li><p>Equipe</p></li>
                        <li><p>Contato</p></li>
                        <li><p>Login</p></li>
                        <li onClick={() => navigate("/cadastro-cliente")}><p>Cadastro</p></li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;