import React from 'react'
// LINKS
import { Link } from 'react-router-dom';
// ICONOS
import { RiHome3Line, RiStore2Line, RiShoppingCart2Line, RiCustomerService2Fill, RiLoginBoxLine, RiCheckboxBlankCircleFill, RiMenuUnfoldFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className='bg-secondary-900 min-h-screen'>
       <sidebar className='fixed left-0 top-0 w-52 h-full overflow-y-scroll border-r border-btnsecondary p-8 flex flex-col justify-between'>
          <div>
            {/* Logo */}
            <h1 className='text-gray-300 uppercase text-2xl mb-10' >LOGO</h1>

            {/* Menu superior */}
            <ul>
              <li>
                <Link to="/" className='flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500'>
                <RiHome3Line /> Inicio
                </Link>
              </li>
              <li>
                <Link to="/" className='flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500'>
                <RiStore2Line /> Tienda
                </Link>
              </li>
              <li>
                <Link to="/" className='flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500'>
                <RiShoppingCart2Line /> Carrito
                </Link>
              </li>
            </ul>
          </div>
          {/* Menu inferior */}
          <div>
            <ul>
              <li>
                {/* este sin logear */}
                <Link to="/" className='flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-2 rounded-xl transition-colors duration-500'>
                  <RiLoginBoxLine /> Iniciar Sesión
                </Link>
                {/* este cuando este logeado */}
                <Link to="/" className='hidden relative flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500'>
                  <img src='https://img.freepik.com/foto-gratis/buen-consejo-mujer-hermosa_329181-3527.jpg' className='w-6 h-6 object-cover rounded-full' />
                  <RiCheckboxBlankCircleFill className='absolute left-7 bottom-3 text-green-600 text-[10px]' />
                   Girl Girl
                </Link>
              </li>
              <li>
                <Link to="/" className='flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500'>
                  <RiCustomerService2Fill /> Ayuda
                </Link>
              </li>
          </ul>
          </div>
          {/* Btn menu movil */}
          <button className='bg-btnprimary text-white fixed bottom-4 right-6 p-2 text-lg rounded-full'>
            <RiMenuUnfoldFill />
          </button>
       </sidebar>
    </div>
  )
}

export default Home;
