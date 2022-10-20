import React, { useState } from "react";
import "./style.css"
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function CadastroCliente() {

    const [formToggle, setFormToggle] = useState(false);

    const [especialidadade, setEspecialidade] = React.useState('');

    const mundancaEspecialidade = (event) => {
        setEspecialidade(event.target.value);
    };

    const [experiencia, setExperiencia] = React.useState('');

    const mudancaExperiencia = (event) => {
        setExperiencia(event.target.value);
    };

    return (

        <>
            <div className="separacao"></div>

            <div className="divFundoCadastro">
                <div className="cadCliente">
                    <div className="topCadastro">
                        <h1>Cadastro</h1>
                        <div className="toggle">
                            <h2>Cliente</h2>
                            <Switch checked={formToggle} onChange={() => setFormToggle(!formToggle)} />
                            <h2>Parceiro</h2>
                        </div>
                    </div>
                    <div className="cadastroCliente">
                        <h1>Dados Pessoais</h1>
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Nome" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Sobrenome" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Telefone" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="E-Mail" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} type='password'placeholder="Senha" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} type='password'placeholder="Confirmar Senha" />
                        <h1>Residência</h1>
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="CEP" />
                        <div className="ruaNumero">
                            <TextField sx={{ width: "100%", input: { "::placeholder": { color: "#051951" } } }} placeholder="Rua" id="rua" />
                            <TextField sx={{ input: { "::placeholder": {color: "#051951" } } }} type= 'Number'placeholder="N°" id="numero" />
                        </div>

                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Complemento" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Bairro" />
                        {
                            formToggle && (

                                <div>
                                    <h1>Dados Profissionais</h1>
                                    <InputLabel >Especialidade</InputLabel>
                                    <Select
                                        style={{ width: '100%' }}
                                        value={especialidadade}
                                        onChange={mundancaEspecialidade}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <InputLabel >Especialidade</InputLabel>
                                    <Select
                                        style={{ width: '100%' }}
                                        value={experiencia}
                                        onChange={mudancaExperiencia}
                                    >
                                        <MenuItem value={10}>6 Meses</MenuItem>
                                        <MenuItem value={20}>1 Ano</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>
                            )
                        }
                        <Button variant="contained" style={{ backgroundColor: "#f18f01" }}>Cadastre-se</Button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CadastroCliente;