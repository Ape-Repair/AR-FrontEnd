import React, { useState } from "react";
import "./style.css"

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function Perfil() {
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

    const [infoCliente, setInfoCliente] = useState(false);

    const [editar, setEditar] = useState(false);
    const [habilitar, setHabilitar] = useState(false);

    return (
        <>
            <div className="separacao"></div>
            <div className="perfil">
                <div className="fotoPerfil">
                    <h1>Perfil</h1>
                    <img onClick={() => setInfoCliente(true)} className="imgIconP" src="https://cea.vtexassets.com/arquivos/ids/39468553/Sacola-Ecobag-Bob-Esponja-e-Patrick-de-Lona-Verde-9992511-Verde_2.jpg?v=637578106438700000" alt="" />
                </div>

                <div className="perfilForm">
                    <div className="formBonito">
                        <h2>Nome</h2>
                        <TextField
                            sx={{ input: { "::placeholder": { color: "#051951" } } }}
                            placeholder="Nome"
                            // value={name}
                            // onChange={(e) => [setName(e.target.value), setError("")]}
                            disabled
                            className="testetext"
                        />
                    </div>
                    <div className="formBonito">
                        <h2>Email</h2>
                        <TextField
                            sx={{ input: { "::placeholder": { color: "#051951" } } }}
                            placeholder="E-Mail"
                            // value={email}
                            // onChange={(e) => [setEmail(e.target.value), setError("")]}
                            disabled
                            className="testetext"

                        /></div>
                    <div className="formBonito">
                        <h2>Endereço</h2>
                        <TextField
                            sx={{ input: { "::placeholder": { color: "#051951" } } }}
                            placeholder="Endereço"
                            // value={endereço}
                            // onChange={(e) => [setEndereço(e.target.value), setError("")]}
                            className="testetext"
                            disabled={habilitar}
                        />
                    </div><div className="formBonito">
                        <h2>Telefone</h2>
                        <TextField
                            sx={{ input: { "::placeholder": { color: "#051951" } } }}
                            placeholder="Telefone"
                            // value={telefone}
                            // onChange={(e) => [setTelefone(e.target.value), setError("")]}
                            className="testetext"
                            disabled={habilitar}
                        /></div>
                    <div className="infoPerfilUf">
                        <div className="formBonito">
                            <h2>Cidade</h2>
                            <TextField
                                sx={{ width: '50%', input: { "::placeholder": { color: "#051951" } } }}
                                placeholder="Cidade°"
                                id="numero"
                                disabled={habilitar}
                            // value={city}
                            // onChange={(e) => [setCity(e.target.value), setError("")]}
                            />
                        </div><div className="formBonito">
                            <h2>Estado</h2>
                            <TextField
                                sx={{
                                    width: '50%',
                                    input: {
                                        "::placeholder": {
                                            color: "#051951",
                                            display: "flex",
                                            flexDirection: "column",
                                        },
                                    },
                                }}
                                fullWidth
                                select
                                disabled={habilitar}
                                // value={uf}
                                // onChange={(e) => [setUf(e.target.value), setError("")]}
                                label="Estado"

                            >
                                <MenuItem value="AC">Acre</MenuItem>
                                <MenuItem value="AL">Alagoas</MenuItem>
                                <MenuItem value="AP">Amapá</MenuItem>
                                <MenuItem value="AM">Amazonas</MenuItem>
                                <MenuItem value="BA">Bahia</MenuItem>
                                <MenuItem value="CE">Ceará</MenuItem>
                                <MenuItem value="DF">Distrito Federal</MenuItem>
                                <MenuItem value="ES">Espírito Santo</MenuItem>
                                <MenuItem value="GO">Goiás</MenuItem>
                                <MenuItem value="MA">Maranhão</MenuItem>
                                <MenuItem value="MT">Mato Grosso</MenuItem>
                                <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                                <MenuItem value="MG">Minas Gerais</MenuItem>
                                <MenuItem value="PA">Pará</MenuItem>
                                <MenuItem value="PB">Paraíba</MenuItem>
                                <MenuItem value="PR">Paraná</MenuItem>
                                <MenuItem value="PE">Pernambuco</MenuItem>
                                <MenuItem value="PI">Piauí</MenuItem>
                                <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                                <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                                <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                                <MenuItem value="RO">Rondônia</MenuItem>
                                <MenuItem value="RR">Roraima</MenuItem>
                                <MenuItem value="SC">Santa Catarina</MenuItem>
                                <MenuItem value="SP">São Paulo</MenuItem>
                                <MenuItem value="SE">Sergipe</MenuItem>
                                <MenuItem value="TO">Tocantins</MenuItem>
                                <MenuItem value="EX">Estrangeiro</MenuItem>
                            </TextField>
                        </div>
                    </div>

                    <div>

                        {
                            editar ? (
                                <>
                                    <Button variant="contained" style={{ backgroundColor: "#f18f01" }} onChange={() => setHabilitar(!habilitar)}onClick={() => setEditar(false)}>Cancelar</Button>
                                    <Button variant="contained" style={{ backgroundColor: "#f18f01" }} onClick={() => setEditar(false)}>Salvar</Button>
                                </>
                            ) : (
                                <Button variant="contained" style={{ backgroundColor: "#f18f01" }} onChange={() => setHabilitar(!habilitar)}  onClick={() => setEditar(true)} >Editar</Button>
                            )
                        }

                    </div>
                </div>

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

export default Perfil;