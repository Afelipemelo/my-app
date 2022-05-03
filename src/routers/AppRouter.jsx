import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Navbar  from '../components/navBar/navBar';
import Login from '../components/login/login'
import NewUser from '../components/login/NewUser'
const AppRouter = () => {
    return ( 
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/NewUser" element={<NewUser/>} />
            </Routes>
        </BrowserRouter>
        );
}
 
export default AppRouter;