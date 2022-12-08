import React, { useState, useEffect } from "react";
import './style.css';
import api from '../../api';
import Button from '@mui/material/Button';
import NomeEstado from "./NomeEstado";

function SugestaoProvedores(props) {
    const [listaProvedor, setListaProvedor] = useState([]);

    

    useEffect(() => {
        api.get(`customers/order/${props.orderId}/available-proposals`).then(res => {
            console.log("dados:", res.data);
            console.log("status code:", res.status);
            setListaProvedor(res.data);
        }).catch(erro => {
            console.log(erro);
        })
    }, [props.orderId])

    return (
        <>
            {listaProvedor.map(ordemProvedor => (
            <div className="provedores">
                <div className="escolhaDePrestadores">
                    <img className="imgIcons" src="https://cea.vtexassets.com/arquivos/ids/39468553/Sacola-Ecobag-Bob-Esponja-e-Patrick-de-Lona-Verde-9992511-Verde_2.jpg?v=637578106438700000" alt="" />
                    <div className="dadosProvedor">
                        <NomeEstado providerId={ordemProvedor.providerId} />
                        <h1 className="infoProvedor">{ordemProvedor.amount}</h1>
                    </div>
                </div>
                <Button variant="contained" style={{ backgroundColor: "#f18f01" }} className="button">Escolher</Button>
            </div>
            ))}

        </>
    )

}

export default SugestaoProvedores;