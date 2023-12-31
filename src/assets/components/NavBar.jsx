import { Outlet, NavLink, Link } from "react-router-dom"
import React, { useState } from 'react';
import Menu from "../images/icon-menu.svg"


export const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <NavLink to="/new">New</NavLink>
                </li>
                
                <li>
                    <button onClick={toggleMenu}>Categorias</button>
                    {menuVisible && (
                        <ul>
                            <li>Opción 1</li>
                            <li>Opción 2</li>
                            <li>Opción 3</li>
                        </ul>
                    )}
                </li>

            </ul>
            <img className='w-10 h4 cursor-pointer sm:hidden' src={Menu} alt="Menu" />
            <Outlet />
        </>
    )
}






