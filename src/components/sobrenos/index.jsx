import React from "react";
import "./style.css";
import HandymanIcon from '@mui/icons-material/Handyman';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

function SobreNos() {
    return (
        <div className="sobreNos">
            <div className="sobre">
                <h5 className="titulo"> Sobre Nós</h5>
                <h1 className="subtitulo">Somos uma empresa que
                    entrega no SEU tempo.</h1>
                <p className="texto">Sabe toda aquela dor de cabeça que sempre temos quando precisamos fazer alguma obra, ou algum tipo de reforma? Pois bem, você não precisa mais passar por isso. Somos uma empresa que indicará uma data limite para sua obra, e garantimos a entrega nesta data indicada e com qualidade!</p>
                <Button variant="contained" style={{ backgroundColor: "#f18f01" }}>Faça A Sua Cotação <ArrowForwardIcon /></Button>
            </div>
            <div className="dados">
                <div className="info">
                    <HandymanIcon style={{ color: "#F18F01", fontSize: "300%" }} />
                    <p className="numDado">500+</p>
                    <p className="conteudo">Obras feitas na cidade de São Paulo.</p>
                </div>
                <hr />
                <div className="info">
                    <BusinessCenterIcon style={{ color: "#F18F01", fontSize: "300%", padding: "10px, 50px" }} />
                    <p className="numDado">3500+</p>
                    <p className="conteudo">Itens completos.</p>
                </div>
                <hr />
                <div className="info">
                    <SquareFootIcon style={{ color: "#F18F01", fontSize: "310%" }} />
                    <p className="numDado">800+</p>
                    <p className="conteudo">Metros quadrados já reformados.</p>
                </div>

            </div>

        </div>

    )
}

export default SobreNos;