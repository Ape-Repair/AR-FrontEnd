import React from "react";
import "./style.css"

import TextField from "@mui/material/TextField";

function Perfil() {
    return (
        <>
            <div>
                <h1>Perfil</h1>
                <h1>Residência</h1>
                <TextField
                    sx={{ input: { "::placeholder": { color: "#051951" } } }}
                   
                />
            </div>
        </>
    )
}

export default Perfil;