import React, { useState, useEffect } from "react";
import "./style.css";
import api from "../../api";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

function Perfil() {
  const [perfil, setPerfil] = useState();
  const id = Number(sessionStorage.getItem("id"));
  const role = sessionStorage.getItem("role");
  const validaUsuario =
    role === "CUSTOMER" ? `customers/${id}` : `providers/${id}`;

  useEffect(() => {
    api
      .get(validaUsuario)
      .then((res) => {
        console.log("dados:", res.data);
        setPerfil(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [validaUsuario]);

  return (
    <div className="perfil-container">
      <div className="perfil">
        <h1>Perfil</h1>
        <div className="fotoPerfil">
          <img
            className="imgIconP"
            src="https://static.vecteezy.com/ti/fotos-gratis/p3/7209151-feliz-homem-empregador-tem-conversa-telefone-com-colega-olhar-fora-sorri-com-prazer-veste-terno-formal-e-gravata-conectado-a-roaming-enquanto-faz-viagem-de-negocios-poses-contra-fundo-azul-gratis-foto.jpg"
            alt=""
          />
        </div>
        <div className="perfilForm">
          <TextField
            sx={{ input: { "::placeholder": { color: "#051951" } } }}
            placeholder="Nome"
            value={perfil?.name}
            disabled
          />
          <TextField
            sx={{ input: { "::placeholder": { color: "#051951" } } }}
            placeholder="E-Mail"
            value={perfil?.email}
          />
          <TextField
            sx={{ input: { "::placeholder": { color: "#051951" } } }}
            placeholder="Endereço"
            value={perfil?.address.street}
          />
          <TextField
            sx={{ input: { "::placeholder": { color: "#051951" } } }}
            placeholder="Telefone"
            value={perfil?.phone}
          />
          <div className=""></div>
          <TextField
            sx={{ input: { "::placeholder": { color: "#051951" } } }}
            placeholder="Cidade°"
            id="numero"
            value={perfil?.address.city}
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
            value={perfil?.uf}
            //  onChange={(e) => [setUf(e.target.value), setError("")]}
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#f18f01", margin: "16px" }}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#f18f01", margin: "16px" }}
          >
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Perfil;
