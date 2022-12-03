import React from "react";
import "./style.css";

import Grid from '@mui/material/Grid';
import CardServico from "./cardServico"

function Servico() {

    const servicos = [{ 'id': '111', 'especialidade': 'Encanador', 'descricao': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos sint sed dignissimos consectetur earum voluptatem ipsum modi aut. Quo necessitatibus quidem magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo' }, { 'id': '111', 'especialidade': 'Encanador', 'descricao': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos sint sed dignissimos consectetur earum voluptatem ipsum modi aut. Quo necessitatibus quidem magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo' },  { 'id': '111', 'especialidade': 'Encanador', 'descricao': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos sint sed dignissimos consectetur earum voluptatem ipsum modi aut. Quo necessitatibus quidem magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo' }, { 'id': '111', 'especialidade': 'Encanador', 'descricao': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos sint sed dignissimos consectetur earum voluptatem ipsum modi aut. Quo necessitatibus quidem magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo? magni illum odit veniam facilis inventore? Labore, explicabo' }]


    return (<>
        <div className="separacao"></div>
        <div className="telaServicos">
            <h1 className="textoServico">
                Serviços Disponiveis
            </h1>
            <div className="organizaCard">

            </div>

            <Grid container rowSpacing={5} columnSpacing={{ xs: 9, sm: 1, md: 1 }}>
                <Grid item xs={15}>
                    {servicos.map((x) => <CardServico id={x.id} especialidade={x.especialidade} descricao={x.descricao} />)}
                </Grid>
            </Grid>
        </div>


    </>)

}

export default Servico;