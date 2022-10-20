import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route, createRoutesFromElements,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from './pages/Home';
import NewMedication from "./pages/NewMedication";
import './App.css';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/new_medication" element={<NewMedication/>}/>
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router}/>;
}

export default App;
