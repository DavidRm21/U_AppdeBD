import React from 'react';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import '../styles/base.sass'

const Menu = () => {

    const [state, setState] = useState(false);
    const handleMenu = () => {
    setState(!state);
    };

    return (

    <nav className='nav'>

        <NavLink
            to="/"
            className="navLink-logo"
            onClick={handleMenu}
            >
        </NavLink>

        <NavLink
            to="/"
            className="navLink"
            onClick={handleMenu}
            >Inicio
        </NavLink>

        <NavLink
            to="/Language"
            className="navLink"
            onClick={handleMenu}
            >Lenguaje
        </NavLink>

        <NavLink
            to="/City"
            className="navLink"
            onClick={handleMenu}
            >Ciudad
        </NavLink>


        <NavLink
            to="/Country"
            className="navLink"
            onClick={handleMenu}
            >País
        </NavLink>

    </nav>


    
    )
}

export {Menu}