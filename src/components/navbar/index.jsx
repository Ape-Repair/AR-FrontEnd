import React, { useState } from "react";
import "./style.css"
import logo from "../../assets/LogoApeRepair.png"
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function NavBar() {
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



    const navigate = useNavigate();
    const [formModalLogin, setFormModalLogin] = useState(false);

    return (

        <nav className="nav">
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />

                <div className="navegacao">
                    <ul>
                        <li onClick={() => navigate("/")}><p>Home</p></li>
                        <li><p>Sobre</p></li>
                        <li><p>Equipe</p></li>
                        <li><p>Contato</p></li>
                        <li onClick={() => setFormModalLogin(true)}><p>Login</p></li>
                        <li onClick={() => navigate("/cadastro")}><p>Cadastro</p></li>

                    </ul>

                    <Modal
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        open={formModalLogin}
                        onClose={() => setFormModalLogin(false)}
                    >
                        <Box sx={boxLogin}>
                            <h1>Login</h1>
                            <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Email" />
                            <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Senha" />
                            <Button variant="contained" style={{ backgroundColor: "#f18f01" }}>Entrar</Button>
                        </Box>
                    </Modal>
                </div>
            </div>
        </nav>




    )
}

export default NavBar;