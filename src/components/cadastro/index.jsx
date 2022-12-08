import React, { useState } from "react";

import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
// import { NativeSelect } from "@mui/material";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

import "./style.css";
import api from "../../api";

function CadastroCliente() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState(0);
  const [complement, setComplement] = useState("");
  const [genre, setGenre] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [toggle, setToggle] = useState(false);
  const [specialtyType, setSpecialtyType] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSpecialtyType(event.target.value);
  };

  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };

  const handleSignup = () => {
    if (
      !email |
      !confirmPassword |
      !password |
      !name |
      !phone |
      !cep |
      !street |
      !streetNumber |
      !complement |
      !district |
      !uf
    ) {
      setError("Preencha todos os campos");
      return;
    } else if (password !== confirmPassword) {
      setError("As senhas não são iguais");
      return;
    }
  };

  async function cadastrar(e) {
    e.preventDefault();
    const novoCustomer = {
      name: name,
      email: email,
      password: password,
      genre: genre,
      cpf: cpf,
      phone: phone,
      address: {
        street: street,
        streetNumber: streetNumber,
        complement: complement,
        cep: cep,
        district: district,
        city: city,
        uf: uf,
      },
    };
    const novoProvider = {
      name: name,
      email: email,
      password: password,
      genre: genre,
      cpf: cpf,
      phone: phone,
      address: {
        street: street,
        streetNumber: streetNumber,
        complement: complement,
        cep: cep,
        district: district,
        city: city,
        uf: uf,
      },
      specialtyType: specialtyType,
    };

    if (!toggle) {
      handleSignup();
      await api
        .post(`http://localhost:8080/customers`, novoCustomer)
        .then((resposta) => {
          if (resposta.status === 201) {
            alert("Cliente cadastrado com sucesso");
            navigate("/");
          }
        })
        .catch((erro) => console.log(erro));
    } else {
      handleSignup();
      await api
        .post(`http://localhost:8080/providers`, novoProvider)
        .then((resposta) => {
          if (resposta.status === 201) {
            alert("Prestador cadastrado com sucesso");
            navigate("/");
          }
        })
        .catch((erro) => console.log(erro));
    }
  }

  return (
    <>
      <div className="separacao"></div>

      <div className="divFundoCadastro">
        <div className="cadCliente">
          <div className="topCadastro">
            <h1>Cadastro</h1>
            <div className="toggle">
              <h2>Cliente</h2>
              <Switch
                checked={toggle}
                onChange={(event) => setToggle(!toggle)}
              />
              <h2>Parceiro</h2>
            </div>
          </div>
          <div className="cadastroCliente">
            <h1>Dados Pessoais</h1>

            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="Nome"
              value={name}
              onChange={(e) => [setName(e.target.value), setError("")]}
            />

            <TextField
              select
              value={genre}
              label="Gênero"
              onChange={(e) => [setGenre(e.target.value), setError("")]}
            >
              <MenuItem value={"MALE"}>Masculino</MenuItem>
              <MenuItem value={"FEMALE"}>Feminino</MenuItem>
              <MenuItem value={"OTHER"}>Outros</MenuItem>
            </TextField>
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="CPF"
              value={cpf}
              onChange={(e) => [setCpf(e.target.value), setError("")]}
            />
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="Telefone"
              value={phone}
              onChange={(e) => [setPhone(e.target.value), setError("")]}
            />
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="E-Mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => [
                setConfirmPassword(e.target.value),
                setError(""),
              ]}
            />
            <h1>Residência</h1>
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="CEP"
              value={cep}
              onChange={(e) => [setCep(e.target.value), setError("")]}
            />
            <div className="ruaNumero">
              <TextField
                sx={{
                  width: "100%",
                  input: { "::placeholder": { color: "#051951" } },
                }}
                placeholder="Rua"
                id="rua"
                value={street}
                onChange={(e) => [setStreet(e.target.value), setError("")]}
              />
              <TextField
                sx={{ input: { "::placeholder": { color: "#051951" } } }}
                type="Number"
                placeholder="N°"
                id="numero"
                value={streetNumber}
                onChange={(e) => [
                  setStreetNumber(e.target.value),
                  setError(""),
                ]}
              />
              <TextField
                sx={{ input: { "::placeholder": { color: "#051951" } } }}
                placeholder="Cidade°"
                id="numero"
                value={city}
                onChange={(e) => [setCity(e.target.value), setError("")]}
              />
            </div>

            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="Complemento"
              value={complement}
              onChange={(e) => [setComplement(e.target.value), setError("")]}
            />
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="Bairro"
              value={district}
              onChange={(e) => [setDistrict(e.target.value), setError("")]}
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
              value={uf}
              onChange={(e) => [setUf(e.target.value), setError("")]}
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
            {toggle && (
              <div
                style={{
                  gap: "12px",
                  borderRadius: "3px",
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "20px",
                }}
              >
                <h1>Dados Profissionais</h1>
                <InputLabel>Especialidade</InputLabel>
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
                  value={specialtyType}
                  onChange={(e) => [
                    setSpecialtyType(e.target.value),
                    setError(""),
                  ]}
                  label="Especialidade"
                >
                  <MenuItem value={"PLUMBER"}>Encanador</MenuItem>
                  <MenuItem value={"ELECTRICIAN"}>Eletricista</MenuItem>
                  <MenuItem value={"GENERAL_SERVICES"}>Serviços Gerais</MenuItem>
                </TextField>
              </div>
            )}
            <div>
              <Button
                onClick={cadastrar}
                variant="contained"
                style={{ backgroundColor: "#f18f01", width: "100%" }}
              >
                Cadastre-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CadastroCliente;
