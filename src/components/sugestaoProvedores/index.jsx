import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import api from "../../api";
import Button from "@mui/material/Button";
import NomeEstado from "./NomeEstado";
import { useAuth } from "../../Context";

function SugestaoProvedores(props) {
    const [listaProvedor, setListaProvedor] = useState();
    const [paid, setPaid] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const { pago, setPagamento } = useAuth();

    function pagar(amount, description) {
        setPagamento(amount, description);
    }

    let paypalRef = useRef();

        useEffect(() => {
            const script = document.createElement("script");
            const id = "Aary9iEoP3mCGlJsFKkcrjVwWQRzqiw8u6mHTratVfzrCiMdgRRzbGBWsAuOKHrjCmWNYuOwWdNbE14A";
            script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`

            script.addEventListener("load", () => setLoaded(true));

            document.body.appendChild(script);

            if(loaded){
                function loadButtonsAndLogicAboutPayment() {
                    setTimeout(() => {
                    window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                description: pago.description,
                                amount: {
                                    currency_code: "BRL",
                                    value: pago.amount,
                                }
                            })
                        },
                        onApprove: async (_, actions) => {
                            const order = await actions.order.capture();

                            setPaid(true);

                            console.log(order)
                        }
                    })
                    .render(paypalRef);
                })
            }
            loadButtonsAndLogicAboutPayment();
        }
    })

    useEffect(() => {
        api
            .get(`customers/order/${props.orderId}/available-proposals`)
            .then((res) => {
                // console.log("dados:", res.data);
                // console.log("status code:", res.status);
                setListaProvedor(res.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, [props.orderId]);

    return (
        <>
            {!!listaProvedor?.length ? (
                listaProvedor?.map((ordemProvedor) => (
                    <div className="provedores">
                        <div className="escolhaDePrestadores">
                            <img
                                className="imgIcons"
                                src="https://static.vecteezy.com/ti/fotos-gratis/p3/7209151-feliz-homem-empregador-tem-conversa-telefone-com-colega-olhar-fora-sorri-com-prazer-veste-terno-formal-e-gravata-conectado-a-roaming-enquanto-faz-viagem-de-negocios-poses-contra-fundo-azul-gratis-foto.jpg"
                                alt=""
                            />
                            <div className="dadosProvedor">
                                <NomeEstado providerId={ordemProvedor?.providerId ?? 1} />
                                <h1 className="infoProvedor">R$:{ordemProvedor.amount}</h1>
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: "#f18f01" }}
                            className="button"
                            amount={listaProvedor.amount}
                            onClick={() =>
                                pagar(ordemProvedor.amount, ordemProvedor.description)
                            }
                        >
                            Escolher
                        </Button>
                        <div ref={v => (paypalRef = v )}></div>
                    </div>
                ))
            ) : (
                <div>BATATA</div>
            )}
        </>
    );
}

export default SugestaoProvedores;
