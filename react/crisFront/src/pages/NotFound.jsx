import React from "react";
import { Link, useRouteError } from "react-router-dom";
import '../styles/NotFound.sass'

export const NotFound = () => {
    const error = useRouteError();
    console.log(error);

        return (
            <div className="main-container">
                <div className="container-message-error">
                    <p className="message-error">{error.statusText || error.message}</p>
                    <Link 
                    className="button-error"
                    to="/">Volver al inicio
                    </Link>
                </div>
            </div>
        );
    };