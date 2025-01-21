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
                    <NavLink to="/explore-news">Explore News</NavLink>
                 
                </li>

            </ul>

            <button className="sm:hidden" onClick={toggleMenu}>
                <img
                    className="w-10 h-4 cursor-pointer"
                    src={Menu}
                    alt="Menu"
                />
                {menuVisible && (
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><NavLink to="/new">New</NavLink></li>
                            
                        </ul>
                    )}
            </button>
            <Outlet />
        </>
    )
}






