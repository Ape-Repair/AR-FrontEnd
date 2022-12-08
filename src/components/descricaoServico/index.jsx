import React, { useState } from "react";
import "./style.css"
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import api from "../../api";

function DescricaoServico() {
    const [servicoHidraulico, setServicoHidraulico] = useState(false);
    const [servicoEletrico, setServicoEletrico] = useState(false);
    const [servicoGerais, setServicoGerais] = useState(false);
    const [value, setValue] = useState("female");

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleChangeOption = (event) => {
        setValue(event.target.value);
    };

    function novoPedido() {
        const novoServico = {
            serviceType: value,
            description: description,
            customerId: Number(sessionStorage.getItem("id")),
        };

        api
            .post("/customers/in/create-order", novoServico)
            .then((res) => {
                alert("criado");
                console.log(res.data)
                navigate("/match-cliente");
            })
            .catch((erro) => {
                alert("erro");
            });
    }

    const navigate = useNavigate();
    return (
        <>
            <div className="separacao"></div>
            <div className="descricaoServico">
                <h1 className="options">Escolha O Serviço Desejável</h1>
                <div className="checkboxDiv">
                    <div className="checkbox">
                        <p>Serviço Hidráulico</p>
                        <Checkbox value="PLUMBER" style={{ color: "#fff" }} size="large" onChange={() => setServicoHidraulico(!servicoHidraulico)} checked={servicoHidraulico} disabled={servicoEletrico || servicoGerais} />
                    </div>
                    <div className="checkbox">
                        <p>Serviço Elétrico</p>
                        <Checkbox value="ELECTRICIAN" style={{ color: "#fff" }} size="large" onChange={() => setServicoEletrico(!servicoEletrico)} checked={servicoEletrico} disabled={servicoHidraulico || servicoGerais} />
                    </div>
                    <div className="checkbox">
                        <p>Serviços Gerais</p>
                        <Checkbox value="GENERAL_SERVICES" style={{ color: "#fff" }} size="large" onChange={() => setServicoGerais(!servicoGerais)} checked={servicoGerais} disabled={servicoHidraulico || servicoEletrico} />
                    </div>
                </div>
                <h1 className="options">Descreva Seu Problema :</h1>
                <textarea onChange={handleChangeDescription} maxLength={345} className="textArea" placeholder="Descreva Seu Problema Aqui!" variant="outlined" />
                <Button onClick={() => navigate("/match-cliente")} variant="contained" style={{ backgroundColor: "#f18f01", margin: "10px", width: "25%" }}>Enviar</Button>
            </div>
        </>
    )
}

export default DescricaoServico;