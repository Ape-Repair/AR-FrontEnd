import React from "react";
import TextField from '@mui/material/TextField';

function CadastroCliente() {
    return (

        <>
            <div className="">
                <div className="cadastro">
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Nome"/>
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Sobrenome"/>
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Telefone"/>
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="E-Mail"/>
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Senha"/>
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Confirmar Senha"/>
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="CEP"/>
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Rua"/>
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="N°"/>
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Complemento"/>
                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Bairro"/>
                
                    
                </div>
            </div>
        </>

    )
}

export default CadastroCliente;