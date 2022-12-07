import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import api from "../../api";

function PedidoCliente() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("female");

  function novoPedido(evento) {
    evento.preventDefault();
    const novoServico = {
      serviceType: evento.target.serviceType.value,
      description: evento.target.description.value,
      customerId: evento.target.customerId.value,
    };

    api
      .post("/customers/in/create-order", novoServico)
      .then((res) => {
        alert("criado");
        console.log(res.data)
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
          gap: "8px",
          color: "white",
        }}
      >
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={(e) => [setValue(e.target.value)]}
          >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <div>
          <input name="description"></input>
        </div>
        <button onClick={novoPedido}>Salvar</button>
      </div>
    </>
  );
}

export default PedidoCliente;
