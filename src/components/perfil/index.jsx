import React from "react";
import "./style.css"

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';

function Perfil() {
    return (
        <>
            <div className="separacao"></div>
            <div className="perfil">
                <div className="fotoPerfil">
                    <h1>Perfil</h1>
                    <img className="imgIconP" src="https://cea.vtexassets.com/arquivos/ids/39468553/Sacola-Ecobag-Bob-Esponja-e-Patrick-de-Lona-Verde-9992511-Verde_2.jpg?v=637578106438700000" alt="" />
                </div>
                <div className="perfilForm">


                    <TextField
                        sx={{ input: { "::placeholder": { color: "#051951" } } }}
                        placeholder="Nome"
                        // value={name}
                        // onChange={(e) => [setName(e.target.value), setError("")]}
                        disabled
                    />
                    <TextField
                        sx={{ input: { "::placeholder": { color: "#051951" } } }}
                        placeholder="E-Mail"
                    // value={email}
                    // onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <TextField
                        sx={{ input: { "::placeholder": { color: "#051951" } } }}
                        placeholder="Endereço"
                    // value={endereço}
                    // onChange={(e) => [setEndereço(e.target.value), setError("")]}
                    />
                    <TextField
                        sx={{ input: { "::placeholder": { color: "#051951" } } }}
                        placeholder="Telefone"
                    // value={telefone}
                    // onChange={(e) => [setTelefone(e.target.value), setError("")]}
                    />
                    <div className=""></div>
                    <TextField
                        sx={{ input: { "::placeholder": { color: "#051951" } } }}
                        placeholder="Cidade°"
                        id="numero"
                    // value={city}
                    // onChange={(e) => [setCity(e.target.value), setError("")]}
                    />
                    <TextField
                        sx={{
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

                    <div>
                        <Button variant="contained" style={{ backgroundColor: "#f18f01" }}>Cancelar</Button>
                        <Button variant="contained" style={{ backgroundColor: "#f18f01" }}>Salvar</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Perfil;