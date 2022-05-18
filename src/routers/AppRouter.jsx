import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar  from '../navbar.js';
import Inicio from '../Inicio.js';
import Perfil from '../perfil.js';

const AppRouter = () => {
    return ( 
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/perfil" element={<Perfil/>} />
            </Routes>
        </BrowserRouter>
        );
}
 
export default AppRouter;