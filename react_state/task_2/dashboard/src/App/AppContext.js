import React, { createContext } from 'react';

// Definir el objeto de usuario por defecto
const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false,
};

// Definir la función logOut por defecto
const defaultLogOut = () => {
    console.log('Logged out');
};

// Crear el contexto con los valores por defecto
const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut,
});

export { AppContext, defaultUser, defaultLogOut };
