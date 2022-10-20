import React, { useState } from "react";
import "./style.css"
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { NativeSelect } from "@mui/material";

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
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} type='password' placeholder="Senha" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} type='password' placeholder="Confirmar Senha" />
                        <h1>Residência</h1>
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="CEP" />
                        <div className="ruaNumero">
                            <TextField sx={{ width: "100%", input: { "::placeholder": { color: "#051951" } } }} placeholder="Rua" id="rua" />
                            <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} type='Number' placeholder="N°" id="numero" />
                        </div>

                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Complemento" />
                        <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Bairro" />
                        {
                            formToggle && (

                                <div style={{ gap: '12px' , borderRadius: '3px', display: 'flex', flexDirection: 'column'}}>
                                    <h1>Dados Profissionais</h1>
                                    <InputLabel >Especialidade</InputLabel>
                                    <NativeSelect
                                        style={{ width: '100%', border: '1px solid grey', gap: '12px' }}
                                        value={especialidadade}
                                        onChange={mundancaEspecialidade}
                                    >
                                        <option value={10}>Serviços Hidraulicos</option>
                                        <option value={20}>Serviços Hidráulicos</option>
                                        <option value={30}>Serviços de Ar Cordicionado</option>
                                        <option value={40}>Instalações</option>
                                        <option value={50}>Serviços de Ar Cordicionado</option>
                                        <option value={60}>Decorações</option>
                                        <option value={70}>Limpeza</option>
                                        <option value={80}>Frete</option>
                                        <option value={90}>Pintura</option>
                                    </NativeSelect>
                                    <InputLabel >Especialidade</InputLabel>
                                    <NativeSelect
                                        style={{ width: '100%', border: '1px solid grey', gap: '20px', display: 'flex' }}
                                        value={experiencia}
                                        onChange={mudancaExperiencia}
                                    >
                                        <option value={10}>6 Meses</option>
                                        <option value={20}>1 Ano</option>
                                        <option value={30}>2 anos</option>
                                        <option value={40}>4 anos</option>
                                        <option value={50}>5+ anos</option>
                                    </NativeSelect>
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