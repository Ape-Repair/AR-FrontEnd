import React, { useState } from "react";
import "./style.css"
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

function CadastroCliente() {

    const [formToggle, setFormToggle] = useState(false);

    return (

        <>
            <div className="separacao"></div>

            <div className="divFundoCadastro">
                <div className="cadCliente">
                    <div className="topCadastro">
                        <p>Cadastro</p>
                        <div>
                            <Switch checked={formToggle} onChange={() => setFormToggle(!formToggle)} />
                        </div>
                    </div>
                    <div className="cadastroCliente">

                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Nome" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Sobrenome" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Telefone" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="E-Mail" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Senha" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Confirmar Senha" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="CEP" />
                        <div className="ruaNumero">
                            <TextField sx={{ width: "100%", input: { "::placeholder": { color: "#051951" } } }} placeholder="Rua" id="rua" />
                            <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="N°" id="numero" />
                        </div>

                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Complemento" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Bairro" />
                        {
                            formToggle && (
                                <div>
                                    <h1 > guizin piki blainder</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default CadastroCliente;