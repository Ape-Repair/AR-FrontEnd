import React, { useState } from "react";

import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { NativeSelect } from "@mui/material";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import "./style.css";

function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formToggle, setFormToggle] = useState(false);

  const [especialidadade, setEspecialidade] = React.useState("");

  const mundancaEspecialidade = (event) => {
    setEspecialidade(event.target.value);
  };

  const [experiencia, setExperiencia] = React.useState("");

  const mudancaExperiencia = (event) => {
    setExperiencia(event.target.value);
  };

  const handleSignup = () => {
    if (
      !email |
      !confirmarSenha |
      !senha |
      !nome |
      !sobrenome |
      !telefone |
      !cep |
      !rua |
      !numero |
      !complemento |
      !bairro
    ) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== confirmarSenha) {
      setError("As senhas não são iguais");
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

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
                onChange={() => setFormToggle(!formToggle)}
              />
              <h2>Parceiro</h2>
            </div>
          </div>
          <div className="cadastroCliente">
            <h1>Dados Pessoais</h1>
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="Nome"
              value={nome}
              onChange={(e) => [setNome(e.target.value), setError("")]}
            />
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={(e) => [setSobrenome(e.target.value), setError("")]}
            />
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => [setTelefone(e.target.value), setError("")]}
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
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              type="password"
              placeholder="Confirmar ********"
              value={confirmarSenha}
              onChange={(e) => [
                setConfirmarSenha(e.target.value),
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
                value={rua}
                onChange={(e) => [setRua(e.target.value), setError("")]}
              />
              <TextField
                sx={{ input: { "::placeholder": { color: "#051951" } } }}
                type="Number"
                placeholder="N°"
                id="numero"
                value={numero}
              onChange={(e) => [setNumero(e.target.value), setError("")]}
              />
            </div>

            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="Complemento"
              value={complemento}
              onChange={(e) => [setComplemento(e.target.value), setError("")]}
            />
            <TextField
              sx={{ input: { "::placeholder": { color: "#051951" } } }}
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => [setBairro(e.target.value), setError("")]}
            />
            {formToggle && (
              <div
                style={{
                  gap: "12px",
                  borderRadius: "3px",
                  display: "flex",
                  flexDirection: "column",
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
                  onChange={mundancaEspecialidade}
                >
                  <option value={10}>Serviços Hidraulicos</option>
                  <option value={20}>Serviços Hidráulicos</option>
                  <option value={30}>Serviços de Ar Cordicionado</option>
                  <option value={40}>Instalações</option>
                  <option value={50}>Serviços de Ar Cordicionado</option>
                  <option value={60}>Decorações</option>
                  <option value={70}>Limpeza</option>
                  <option value={80}>Frete</option>
                  <option value={90}>Pintura</option>
                </NativeSelect>
                <InputLabel>Especialidade</InputLabel>
                <NativeSelect
                  style={{
                    width: "100%",
                    border: "1px solid grey",
                    gap: "20px",
                    display: "flex",
                  }}
                  value={experiencia}
                  onChange={mudancaExperiencia}
                >
                  <option value={10}>6 Meses</option>
                  <option value={20}>1 Ano</option>
                  <option value={30}>2 anos</option>
                  <option value={40}>4 anos</option>
                  <option value={50}>5+ anos</option>
                </NativeSelect>
              </div>
            )}
            <Button onClick={handleSignup} variant="contained" style={{ backgroundColor: "#f18f01" }}>
              Cadastre-se
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CadastroCliente;
