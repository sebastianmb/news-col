import {NavBar} from './NavBar'
import logo from '../images/mundo.png'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-8'>
      <img src={logo} className='w-[110px] h-[55px]' alt="Logo"/>
      <h1 className='italic text-left text-[18px] font-bold sm:text-[25px] flex-grow pl-4 '>Noticias en Inglés</h1>
      <meta name="description" content="Consulta las últimas noticias en inglés de fuentes confiables. Mantente informado con la mejor cobertura internacional."></meta>
      <NavBar/>
    </header>
  )
}


