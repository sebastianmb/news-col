import {NavBar} from './NavBar'
import logo from '../images/logo.svg'

export const Header = () => {
  return (
    <header className='bg-red-400 flex place-content-between items-center'>
      <img src={logo} alt="Logo"/>
      <NavBar/>
    </header>
  )
}


