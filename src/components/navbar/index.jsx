import React, { useState } from "react";
import api from "../../api";
import logo from "../../assets/LogoApeRepair.png";
import "./style.css";
// import Alert from "@material-ui/lab/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [formModalLogin, setFormModalLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const boxLogin = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
    display: "flex",
    flexDirection: "column",
    padding: "32px",
    gap: "12px",
    borderRadius: "5%"
  };

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
      email: email,
      password: password,
    };

    if (!toggle) {
      api
        .post(`/customers/login`, dados)
        .then((res) => {
          handleLogin();
          if (res.data.role === "CUSTOMER") {
            Number(sessionStorage.setItem("id", res.data.id));
            sessionStorage.setItem("email", res.data.email);
            sessionStorage.setItem("senha", res.data.senha);
            sessionStorage.setItem("role", res.data.role);
            navigate("/match-cliente");
          } else if (res.data.role === "ADMIN") {
            Number(sessionStorage.setItem("id", res.data.id));
            sessionStorage.setItem("email", res.data.email);
            sessionStorage.setItem("senha", res.data.senha);
            sessionStorage.setItem("role", res.data.role);
            navigate("/");
          } else {
            navigate("/");
          }
          alert("logado");
        })
        .catch((erro) => {
          console.log("erro");
        });
    } else {
    api
      .post(`/providers/login`, dados)
      .then((res) => {
        handleLogin();
        if (res.data.role === "PROVIDER") {
          Number(sessionStorage.setItem("id", res.data.id));
          sessionStorage.setItem("email", res.data.email);
          sessionStorage.setItem("senha", res.data.senha);
          sessionStorage.setItem("role", res.data.role);
          navigate("/servico-disponivel");
        } else if (res.data.role === "ADMIN") {
          Number(sessionStorage.setItem("id", res.data.id));
          sessionStorage.setItem("email", res.data.email);
          sessionStorage.setItem("senha", res.data.senha);
          sessionStorage.setItem("role", res.data.role);
          navigate("/");
        } else {
          navigate("/");
          // <Alert severity="error">This is an error alert — check it out!</Alert>
        }
        alert("logado");
      })
      .catch((erro) => {
        console.log("erro");
      });
    }
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
            <li onClick={() => setFormModalLogin(true)}>
              <p>Login</p>
            </li>
            <li onClick={() => navigate("/cadastro")}>
              <p>Cadastro</p>
            </li>
          </ul>

          <Modal
            open={formModalLogin}
            onClose={() => setFormModalLogin(false)}
          >
            <Box sx={boxLogin}>
              <div className="toggleLogin">
                <h1>Login</h1>
                <div className="toggleModificarEntrada">
                  <h2>Cliente</h2>
                  <Switch
                    checked={toggle}
                    onChange={(event) => setToggle(!toggle)}
                  />
                  <h2>Parceiro</h2>
                </div>
              </div>
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
                onClick={login}
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
