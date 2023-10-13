import {NavBar} from './NavBar'
import logo from '../images/logo.svg'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-8'>
      <img src={logo} alt="Logo"/>
      <NavBar/>
    </header>
  )
}


