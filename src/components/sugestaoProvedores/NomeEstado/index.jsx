import React, { useState, useEffect } from "react";
import '../style.css';
import api from '../../../api';
import Button from '@mui/material/Button';

function NomeEstado(props) {
    const [lista, setLista] = useState();

    useEffect(() => {
        api.get(`providers/${props.providerId}`).then(res => {
            console.log("dados:", res.data);
            console.log("status code:", res.status);
            setLista(res.data);
        }).catch(erro => {
            console.log(erro);
        })
    }, [props.providerId])

    return (
        <>

                <>
                    <h1 className="nome">{lista?.name}</h1>
                    <h1 className="infoProvedor">{lista?.address.uf}</h1>
                </>

        </>
    )

}

export default NomeEstado;