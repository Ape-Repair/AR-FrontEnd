// import React, { useEffect, useState } from "react";
// import "./style.css";
// import Card from "../card";
// import api from "../../api";
// import { useNavigate } from "react-router-dom";

// function MatchesHistorico() {
//   const navigate = useNavigate();
//   const [cardList, setCardList] = useState([]);

//   useEffect(() => {
//     function CardProvider() {
//       const id = sessionStorage.getItem("id");
//       api
//         .get(`/providers/${id}/orders`)
//         .then((res) => {
//           console.log("dadosProv:", res.data);
//           setCardList(res.data);
//         })
//         .catch((erro) => {
//           console.log(erro);
//         });
//     }

//     function CardCustomer() {
//       const id = sessionStorage.getItem("id");
//       api
//         .get(`/customers/${id}/orders`)
//         .then((res) => {
//           console.log("dadosCust:", res.data);
//           setCardList(res.data);
//         })
//         .catch((erro) => {
//           console.log(erro);
//         });
//     }
//     if (sessionStorage.role === "PROVIDER") {
//       CardProvider();
//       navigate("/historico");
//     } else if (sessionStorage.role === "CUSTOMER") {
//       CardCustomer();
//       navigate("/historico");
//     }
//   });

//   return (
//     <>
//       <div className="separacao"></div>

//       <div className="matches">
//         <h1 className="match">Seus Matches</h1>
//         {cardList.map(list => (
//           <Card cardHistorico={list} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default MatchesHistorico;

import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "../card";
import api from "../../api";
import { useNavigate } from "react-router-dom";

function MatchesHistorico() {
  const navigate = useNavigate();
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    function CardProvider() {
      const id = sessionStorage.getItem("id");
      api
        .get(`/providers/${id}/orders`)
        .then((res) => {
          console.log("dadosProv:", res.data);
          setCardList(res.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }

    function CardCustomer() {
      const id = sessionStorage.getItem("id");
      api
        .get(`/customers/${id}/orders`)
        .then((res) => {
          console.log("dadosCust:", res.data);
          setCardList(res.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
    if (sessionStorage.role === "PROVIDER") {
      CardProvider();
      navigate("/historico");
    } else if (sessionStorage.role === "CUSTOMER") {
      CardCustomer();
      navigate("/historico");
    }
  }, [navigate]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="separacao"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="match">Seus Matches</h1>
        </div>
      </div>
      <div className="row">
        {cardList.map((list) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={list.id}>
            <Card cardHistorico={list} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchesHistorico;
