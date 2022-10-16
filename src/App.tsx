import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route, createRoutesFromElements,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import './App.css';




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router}/>;
}

export default App;
