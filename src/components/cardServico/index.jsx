import React from "react";
import "./style.css"
import Button from '@mui/material/Button';
// import api from '../../api'

function CardServico(props) {

    return (
        <>
            <div className="servicosDisponiveis">
                <div className="cardServico">
                    <p className="id">ID: {props.id} </p>
                    <div className="cardDescricaoServico">
                        <h3 className="especialidadeCardServico">{props.especialidade}</h3>
                        <h2 className="descricaoCardServico">Descrição</h2>
                        <p>{props.descricao}</p>
                    </div>
                </div>

                <Button variant="contained" style={{ backgroundColor: "#f18f01", width: "20%", margin: "25px" }} >Enviar</Button>
            </div>
        </>
    )

}

export default CardServico;