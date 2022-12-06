import React from "react";
import "./style.css";
import Button from '@mui/material/Button';
import CardServico from "../cardServico"
import { useNavigate } from "react-router-dom";

function Servico() {

    const servicos = [{ 'id': '111', 'especialidade': 'Encanador', 'descricao': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos sint sed dignissimos consectetur earum voluptatem ipsum modi aut. Quo necessitatibus quidem magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo' }, { 'id': '111', 'especialidade': 'Encanador', 'descricao': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos sint sed dignissimos consectetur earum voluptatem ipsum modi aut. Quo necessitatibus quidem magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo' }, { 'id': '111', 'especialidade': 'Encanador', 'descricao': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos sint sed dignissimos consectetur earum voluptatem ipsum modi aut. Quo necessitatibus quidem magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo' }, { 'id': '111', 'especialidade': 'Encanador', 'descricao': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos sint sed dignissimos consectetur earum voluptatem ipsum modi aut. Quo necessitatibus quidem magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo' }]
    const navigate = useNavigate();

    return (<>
        <div className="separacao"></div>
        <div className="telaServicos">
            <h1 className="textoServico">
                Serviços Disponiveis
            </h1>
            <div className="testandoWrap">
                {servicos.map((x) =>
                    <div className="servicosDisponiveis">
                        <CardServico id={x.id} especialidade={x.especialidade} descricao={x.descricao} />
                        <Button onClick={() => navigate("/pedido-escolhido")} variant="contained" style={{ backgroundColor: "#f18f01", width: "20%", margin: "25px" }} >Enviar</Button>
                    </div>
                )}

            </div>
        </div>


    </>)

}

export default Servico;