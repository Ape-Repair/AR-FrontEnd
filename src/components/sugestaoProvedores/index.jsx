import React from "react";
import './style.css';
import Button from '@mui/material/Button';

function SugestaoProvedores(props) {

    return (
        <>
            <div className="provedores">
                <div className="escolhaDePrestadores">
                    <img className="imgIcons" src="https://cea.vtexassets.com/arquivos/ids/39468553/Sacola-Ecobag-Bob-Esponja-e-Patrick-de-Lona-Verde-9992511-Verde_2.jpg?v=637578106438700000" alt="" />
                    <div className="dadosProvedor">
                        <h1 className="nome">nome</h1>
                        <h1 className="infoProvedor">anos</h1>
                        <h1 className="infoProvedor">area</h1>
                        <h1 className="infoProvedor">endereço</h1>
                    </div>
                </div>
                <Button variant="contained" style={{ backgroundColor: "#f18f01" }} className="button">Escolher</Button>
            </div>

        </>
    )

}

export default SugestaoProvedores;