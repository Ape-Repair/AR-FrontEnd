import React from "react";
import "./style.css";


function MenuEspecialidades() {
    return (
        <>
            <div className="separacao"></div>

            <div className="especialidades">
                <div className="menuEspecialidades">
                    <p>Especialidades</p>
                    <ul>
                        <li>Serviços Hidráulicos</li>
                        <li>Serviços Elétricos</li>
                        <li>Serviços De Ar Cordicionado</li>
                        <li>Pequenos Reparos</li>
                        <li>Instalações</li>
                        <li>Decoração</li>
                        <li>Serviço de Limpeza</li>
                        <li>Serviço de Piso</li>
                        <li>Montagem de Móveis</li>
                        <li>Fretes</li>
                        <li>Pinturas</li>
                    </ul>
                </div>
                <div className="menuEspecialidadesCarroseis">

                </div>
            </div>
        </>
    )
}

export default MenuEspecialidades;