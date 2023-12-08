import React from 'react';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import '../styles/Menu.sass'

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

        <div className='navbar-profile'>
            <div className='profile-photo'></div>
            <div className='profile-data'>
                <div className='profile-name'>Cristian David Romero Melo</div>
                <div className='profile-description'>Estudiante de Universitaria</div>
            </div>
        </div>

    </nav>


    
    )
}

export {Menu}