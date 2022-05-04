import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Navbar  from '../components/navBar/navBar';
import Login from '../components/login/login'
import NewUser from '../components/login/NewUser'
import HomePage from '../components/homePage/homePage';
const AppRouter = () => {
    return ( 
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/NewUser" element={<NewUser/>} />
                <Route path="/HomePage" element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
        );
}
 
export default AppRouter;