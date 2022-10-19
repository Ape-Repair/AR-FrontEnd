import React from "react";
import "./style.css";
import HandymanIcon from '@mui/icons-material/Handyman';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

function SobreNos() {
    return (
        <div className="sobreNos">
            <div className="sobre">
                <h5 className="titulo"> Sobre Nós</h5>
                <h1 className="subtitulo">Tempo é OURO</h1>
                <p className="texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed 
                    sapiente aliquid eaque, animi minus similique voluptas magnam beatae rerum ut 
                    molestiae maxime officiis nemo hic at eum aperiam itaque cum.</p>

            </div>
            <div className="dados">
                <div className="info">
                    <HandymanIcon style={{color:"#F18F01", fontSize:"300%"}}/>
                    <p className="numDado">500+</p>
                    <p className="conteudo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus, consequatur
                        culpa hic explicabo itaque doloremque distinctio maiores.</p>
                </div>
                <hr />
                <div className="info">
                    <BusinessCenterIcon style={{color:"#F18F01", fontSize:"300%" }}/>
                    <p className="numDado">3500+</p>
                    <p className="conteudo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus, consequatur
                        culpa hic explicabo itaque doloremque distinctio maiores.</p>
                </div>
                <hr />
                <div className="info">
                    <SquareFootIcon style={{color:"#F18F01", fontSize:"310%"}}/>
                    <p className="numDado">800+</p>
                    <p className="conteudo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus, consequatur
                        culpa hic explicabo itaque doloremque distinctio maiores.</p>
                </div>
                <hr />

            </div>
        </div>

    )
}

export default SobreNos;