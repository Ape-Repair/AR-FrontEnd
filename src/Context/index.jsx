import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext({});

export const Match = ({ children }) => {
  const [pedidoAtual, setPedidoAtual] = useState({});
  const [pago, setPago] = useState({});

//   useEffect(() => {
//     const storagedUser = sessionStorage.getItem('usuario');

//     if (storagedUser) {
//       setUser(JSON.parse(storagedUser));
//     }
//   }, []);

//   function loginUsuario(userData) {
//     setUser(userData);

//     sessionStorage.setItem('usuario', JSON.stringify(userData));
//   }

//   function logoutUsuario() {
//     setUser(null);
//     sessionStorage.removeItem('usuario');
//   }

    function setPagamento(amount, description){
      console.log(amount)
      setPago({amount: amount, description: description})
    }

     function atualizarPedidoAtual(order) {
        alert(order)
        setPedidoAtual(order);
    }

  return (
    <AuthContext.Provider
      value={{ atualizarPedidoAtual, pedidoAtual, setPagamento, pago }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}