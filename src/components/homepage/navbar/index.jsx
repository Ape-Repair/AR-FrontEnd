import React from "react";
import "./style.css"
import logo from "../../../assets/LogoApeRepair.png"

function NavBar() {
    return (

        <nav className="nav">
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />

                <div className="navegacao">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Projetos +</a></li>
                        <li><a href="">Equipe</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">Login/Cadastrar +</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;