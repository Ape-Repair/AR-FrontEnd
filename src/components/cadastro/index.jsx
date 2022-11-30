import React, { useState } from "react";

import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { NativeSelect } from "@mui/material";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import "./style.css";
import api from "../../api";

function CadastroCliente() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [cep, setCep] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [toggle, setToggle] = useState(false);
  const [especialidadade, setEspecialidade] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formToggle, setFormToggle] = useState(false);


  const handleSignup = () => {
    if (
      !email |
      !confirmPassword |
      !password |
      !name |
      !phone |
      !cep |
      !street |
      !number |
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

  async function cadastrarCustomer(e) {
    e.preventDefault();
    const novoCustomer = {
      name: name,
      phone: phone,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      address: {
        street: street,
        number: number,
        complement: complement,
        cep: cep,
        district: district,
        city: city,
        uf: uf
      }
    }
    const novoProvider = {
      name: name,
      phone: phone,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      address: {
        street: street,
        number: number,
        complement: complement,
        cep: cep,
        district: district,
        city: city,
        uf: uf
      }
    }

  if (toggle) {
    handleSignup();
    await api.post(`https://cors-anywhere.herokuapp.com/http://localhost:8080/customers`, novoCustomer).then((resposta) => {
      if(resposta.status === 201){
        alert("Cliente cadastrado com sucesso")
        navigate("/")
      }
    }).catch((erro) => console.log(erro))
  } else {
    handleSignup();
    await api.post(`https://cors-anywhere.herokuapp.com/http://localhost:8080/providers`, novoProvider).then((resposta) => {
      if(resposta.status === 201){
        alert("Prestador cadastrado com sucesso")
        navigate("/")
      }
    }).catch((erro) => console.log(erro))
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
                checked={formToggle}
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
                value={number}
              onChange={(e) => [setNumber(e.target.value), setError("")]}
              />
              <TextField
                sx={{ input: { "::placeholder": { color: "#051951" } } }}
                type="Number"
                placeholder="N°"
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
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="Bairro"
              value={uf}
              onChange={(e) => [setUf(e.target.value), setError("")]}
            />
            {formToggle && (
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
                <NativeSelect
                  style={{
                    width: "100%",
                    border: "1px solid grey",
                    gap: "12px",
                  }}
                  value={especialidadade}
                  onChange={(e) => [setEspecialidade(e.target.value), setError("")]}
                >
                  <option value={10}>Serviços Hidraulicos</option>
                  <option value={20}>Serviços Elétricos</option>
                  <option value={30}>Serviços Gerais</option>
                </NativeSelect>
              </div>
            )}
            <div>
            <Button onClick={cadastrarCustomer} variant="contained" style={{ backgroundColor: "#f18f01", width: "100%" }}>
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
