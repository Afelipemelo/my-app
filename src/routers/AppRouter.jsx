import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Navbar  from '../components/navBar/navBar';
import Login from '../components/login/login'
import NewUser from '../components/login/NewUser'
import HomePage from '../components/homePage/homePage';
import Inicio from '../components/homePage/inicio'
import Perfil from '../components/homePage/perfil'
const AppRouter = () => {
    return ( 
        <BrowserRouter>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/NewUser" element={<NewUser/>} />
                <Route path="/HomePage" element={<HomePage/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/perfil" element={<Perfil/>} />
            </Routes>
        </BrowserRouter>
        );
}
 
export default AppRouter;