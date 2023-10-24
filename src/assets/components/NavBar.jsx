import { Outlet, Link } from "react-router-dom"
import Menu from "../images/icon-menu.svg"


export const NavBar = () => {
    return (
        <>
        <ul  className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">New</Link>
            </li>
            <li>
                <Link to="/">Popular</Link>
            </li>
            <li>
                <Link to="/">Trending</Link>
            </li>
            <li>
                <Link to="/">Categories</Link>
            </li>

        </ul>
        <img className='w-10 h4 cursor-pointer sm:hidden'  src={Menu} alt="Menu"/>
        <Outlet/>
        </>
    )
}






