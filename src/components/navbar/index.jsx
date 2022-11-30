import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/LogoApeRepair.png";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


function NavBar() {
  const boxLogin = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    padding: "32px",
    gap: "12px",
  };

  const navigate = useNavigate();
  const [formModalLogin, setFormModalLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }
    login();
  };

  const login = async (evento) => {
    evento.preventDefault();
    const dados = {
      email: evento.target.email.value,
      password: evento.target.password.value,
    }

//providers/login
//customers/login

    api.post(`/login`, dados).then(res => {
      if (res.data.role === "PROVIDER"){
        sessionStorage.setItem("id", res.data.id)
        navigate("/match-provedor");
      } else {
        sessionStorage.setItem("id", res.data.id)
        navigate("/match-cliente");
      }
      alert("logado");
    }).catch(erro => {
      alert("erro")
    });
  };


  return (
    <nav className="nav">
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />

        <div className="navegacao">
          <ul>
            <li onClick={() => navigate("/")}>
              <p>Home</p>
            </li>
            <li>
              <p>Sobre</p>
            </li>
            <li>
              <p>Equipe</p>
            </li>
            <li>
              <p>Contato</p>
            </li>
            <li onClick={() => setFormModalLogin(true)}>
              <p>Login</p>
            </li>
            <li onClick={() => navigate("/cadastro")}>
              <p>Cadastro</p>
            </li>
          </ul>

          <Modal
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={formModalLogin}
            onClose={() => setFormModalLogin(false)}
          >
            <Box sx={boxLogin}>
              <h1>Login</h1>
              <TextField
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                value={email}
                required
                sx={{ input: { "::placeholder": { color: "#051951" } } }}
                placeholder="Email"
              />
              <TextField
                type="password"
                id="password"
                onChange={(e) => [setPassword(e.target.value), setError("")]}
                value={password}
                required
                sx={{ input: { "::placeholder": { color: "#051951" } } }}
                placeholder="Senha"
              />
              <Button
                onClick={handleLogin}
                variant="contained"
                style={{ backgroundColor: "#f18f01" }}
              >
                Entrar
              </Button>
            </Box>
          </Modal>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
