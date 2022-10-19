import React from "react";
import "./style.css"
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid';




function Banner() {
    return (

        <div className="banner">
            <div className="informations">
                <div className="textoCentral">
                    <p>Nós entregamos <br />
                        no <span className="seuTempo">SEU tempo</span></p>

                </div>

                <div className="demostracao">
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} >
                            <CheckCircleOutlineIcon /> aaaaaaaaaaaa
                            <hr />
                        </Grid>
                        <Grid item xs={6}>
                            <CheckCircleOutlineIcon /> aaaaaaaaaaaa
                            <hr />
                        </Grid>
                        <Grid item xs={6}>
                            <CheckCircleOutlineIcon /> aaaaaaaaaaaa
                            <hr />
                        </Grid>
                        <Grid item xs={6}>
                            <CheckCircleOutlineIcon /> aaaaaaaaaaaa
                            <hr />
                        </Grid>
                        <Grid item xs={6}>
                            <CheckCircleOutlineIcon />aaaaaaaaaaaa
                            <hr />
                        </Grid>
                        <Grid item xs={6}>
                            <CheckCircleOutlineIcon />aaaaaaaaaaaa
                            <hr />
                        </Grid>
                    </Grid>
                </div>

                <Button variant="contained" style={{backgroundColor: "#f18f01"}}>Faça A Sua Cotação <ArrowForwardIcon /></Button>
            </div>
        </div>

    )
}

export default Banner;