// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormLabel from '@material-ui/core/FormLabel';
// import api from "../../api";

// function PedidoCliente() {
//   const navigate = useNavigate();
//   const [value, setValue] = useState("female");
//   const [description, setDescription] = useState("");

//   const handleChangeOption = (event) => {
//     setValue(event.target.value);
//   };

//   const handleChangeDescription = (event) => {
//     setDescription(event.target.value);
//   };

//   function novoPedido() {
//     const novoServico = {
//       serviceType: value,
//       description: description,
//       customerId: Number(sessionStorage.getItem("id")),
//     };

//     api
//       .post("/customers/in/create-order", novoServico)
//       .then((res) => {
//         alert("criado");
//         console.log(res.data)
//         navigate("/match-cliente");
//       })
//       .catch((erro) => {
//         alert("erro");
//       });
//   }

//   return (
//     <>
//       <div className="separacao"></div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "8px",
//           color: "white",
//         }}
//       >
//         <RadioGroup
//           name="serviceType"
//           value={value}
//           onChange={handleChangeOption}
//           >
//           <FormControlLabel value="ELECTRICIAN" control={<Radio />} label="Serviços Elétricos" />
//           <FormControlLabel value="PLUMBER" control={<Radio />} label="Serviços Hidráulicos" />
//           <FormControlLabel value="GENERAL_SERVICES" control={<Radio />} label="Serviços Gerais" />
//         </RadioGroup>
//         <div>
//           <input onChange={handleChangeDescription} name="description"></input>
//         </div>
//         <button onClick={novoPedido}>Salvar</button>
//       </div>
//     </>
//   );
// }

// export default PedidoCliente;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from '@mui/material/Typography';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./style.css";
import api from "../../api";

function PedidoCliente() {
  const navigate = useNavigate();
  const [value, setValue] = useState("female");
  const [description, setDescription] = useState("");

  const handleChangeOption = (event) => {
    setValue(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  function novoPedido() {
    const novoServico = {
      serviceType: value,
      description: description,
      customerId: Number(sessionStorage.getItem("id")),
    };

    api
      .post("/customers/in/create-order", novoServico)
      .then((res) => {
        alert("criado");
        console.log(res.data);
        navigate("/match-cliente");
      })
      .catch((erro) => {
        alert("erro");
      });
  }

  return (
    <>
      <div className="separacao"></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "3%",
          gap: "1rem",
          color: "white",
          flexDirection: "column",
        }}
      >
        <RadioGroup
          name="serviceType"
          value={value}
          onChange={handleChangeOption}
          row={true}
        >
          <FormControlLabel
            value="ELECTRICIAN"
            control={<Radio />}
            label="Serviços Elétricos"
          />
          <FormControlLabel
            value="PLUMBER"
            control={<Radio />}
            label="Serviços Hidráulicos"
          />
          <FormControlLabel
            value="GENERAL_SERVICES"
            control={<Radio />}
            label="Serviços Gerais"
          />
        </RadioGroup>
        <div>
        <Typography className="tituloProblema" variant="h3" gutterBottom>
        Descreva seu problema
      </Typography>
          <TextField
            variant="outlined"
            id="description"
            onChange={handleChangeDescription}
            value={description}
            required
            placeholder="Descrição"
            style={{
              width: "750px",
              backgroundColor: "#FFFFFF",
            }}
            inputProps={{
              style: { "::placeholder": { color: "#051951" } },
            }}
          />
        </div>
        <div>
          <Button
            onClick={novoPedido}
            variant="contained"
            style={{ backgroundColor: "#f18f01" }}
          >
            Salvar
          </Button>
        </div>
      </div>
    </>
  );
}

export default PedidoCliente;
