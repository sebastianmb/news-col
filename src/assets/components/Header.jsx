import {NavBar} from './NavBar'
import logo from '../images/mundo.png'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-8'>
      <img src={logo} className='w-[110px] h-[55px]' alt="Logo"/>
      <NavBar/>
    </header>
  )
}


