import {NavBar} from './NavBar'
import logo from '../images/logo.svg'

export const Header = () => {
  return (
    <header className='bg-red-400'>
      <img src={logo} alt="Logo"/>
      <NavBar/>
    </header>
  )
}


