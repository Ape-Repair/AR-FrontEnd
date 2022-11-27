import React, { useState } from "react";
import './style.css';
import Card from "../card";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function MatchesProvedores() {
    const boxLogin = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        padding: '32px',
        gap: '12px',
    }

    const listaHistorico = [{ nome: 'Atauine' }, { nome: 'Gui' }];
    const [infoCliente, setInfoCliente] = useState(false);

    return (

        <>
            <div className="separacao"></div>

            <div className="matches">
                <h1 className="match">Matchs Pendentes</h1>
                {listaHistorico.map((x) => <Card nomeCliente={x.nome} onClick={() => setInfoCliente(true)} />)
                }
            </div>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={infoCliente}
                onClose={() => setInfoCliente(false)}
            >
                <Box sx={boxLogin}>
                    <h1>teste
                    </h1>
                    
                </Box>
            </Modal>

        </>

    )

}

export default MatchesProvedores;