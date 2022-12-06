import React, { useState } from "react";
import "./style.css"
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function DescricaoServico() {
    const [servicoHidraulico, setServicoHidraulico] = useState(false);
    const [servicoEletrico, setServicoEletrico] = useState(false);
    const [servicoGerais, setServicoGerais] = useState(false);

    const navigate = useNavigate();
    return (
        <>
            <div className="separacao"></div>
            <div className="descricaoServico">
                <h1 className="options">Escolha O Serviço Desejável</h1>
                <div className="checkboxDiv">
                    <div className="checkbox">
                        <p>Serviço Hidráulico</p>
                        <Checkbox style={{color: "#fff"}}  size="large" onChange={() => setServicoHidraulico(!servicoHidraulico)} checked={servicoHidraulico} disabled={servicoEletrico || servicoGerais} />
                    </div>
                    <div className="checkbox">
                        <p>Serviço Elétrico</p>
                        <Checkbox style={{color: "#fff"}} size="large" onChange={() => setServicoEletrico(!servicoEletrico)} checked={servicoEletrico} disabled={servicoHidraulico || servicoGerais} />
                    </div>
                    <div className="checkbox">
                        <p>Serviços Gerais</p>
                        <Checkbox style={{color: "#fff"}} size="large" onChange={() => setServicoGerais(!servicoGerais)} checked={servicoGerais} disabled={servicoHidraulico || servicoEletrico} />
                    </div>
                </div>
                <h1 className="options">Descreva Seu Problema :</h1>
                <textarea maxLength={345} className="textArea" placeholder="Descreva Seu Problema Aqui!" variant="outlined" />
                <Button onClick={() => navigate("/match-cliente")} variant="contained" style={{ backgroundColor: "#f18f01", margin: "10px", width: "25%" }}>Enviar</Button>
            </div>
        </>
    )
}

export default DescricaoServico;