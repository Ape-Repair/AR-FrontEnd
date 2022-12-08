import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext({});

export const Match = ({ children }) => {
  const [pedidoAtual, setPedidoAtual] = useState({});

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

     function atualizarPedidoAtual(order) {
        alert(order)
        setPedidoAtual(order);
    }

  return (
    <AuthContext.Provider
      value={{ atualizarPedidoAtual, pedidoAtual }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}