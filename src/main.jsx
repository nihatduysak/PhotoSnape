import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import Stories from './pages/Stories.jsx';
import Features from './pages/Features.jsx';
import Pricing from './pages/Pricing.jsx';
import './App.css';
import './Queries.css';
import MainLayout from "./layout/MainLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'hikayeler',
                element: <Stories />
            },
            {
                path: 'ozellikler',
                element: <Features />
            },
            {
                path: 'fiyatlandirma',
                element: <Pricing />
            }

        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
