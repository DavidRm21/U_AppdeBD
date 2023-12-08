// LIBRERIAS DE REACT
import React from "react";
import { createBrowserRouter } from "react-router-dom";
// PÁGINAS
import {NotFound} from "../pages/NotFound.jsx";
import {Home} from "../pages/Home.jsx";
import {City} from "../pages/City.jsx";
import {Country} from "../pages/Country.jsx";
import { Language } from "../pages/Language.jsx";
// COMPONENTE BASE
import {Layout} from "../layout/Layout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
        {
            errorElement: <NotFound/>,
            children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/City",
                element: <City/>
            },
            {
                path: "/Country",
                element: <Country/>
            },
            {
                path: "/Language",
                element: <Language/>
            },
            ]
        }
        ]
    }
]);

export default router
