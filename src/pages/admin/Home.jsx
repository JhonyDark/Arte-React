import React from 'react'
// LINKS
import { Link } from 'react-router-dom';
// ICONOS
import { RiHome3Line, RiStore2Line, RiShoppingCart2Line, RiCustomerService2Fill, RiLoginBoxLine, RiCheckboxBlankCircleFill, RiMenuUnfoldFill, RiCloseLine, RiNotification3Line, RiSearchEyeLine } from "react-icons/ri";
import { useState } from 'react';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='bg-secondary-900 min-h-screen'>
       <sidebar className={`bg-secondary-900 fixed  top-0 w-52 h-full overflow-y-scroll border-r border-btnsecondary p-8 flex flex-col  justify-between transition-all duration-700 lg:left-0 z-50 ${showMenu ? "left-0" : "-left-full"}`}>
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
                <Link to="/auth" className='flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-0 2xl:px-2 rounded-xl transition-colors duration-500'>
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
          <button onClick={toggleMenu} className='lg:hidden bg-btnprimary text-white fixed bottom-4 right-6 p-2 text-lg rounded-full z-50'>
            {showMenu ? <RiCloseLine /> : <RiMenuUnfoldFill />}
          </button>
       </sidebar>

       {/* Header */}
       <header className='lg:pl-56 fixed w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8' >
          <nav className='flex items-center gap-4 order-1'>
              <Link to="#" className='hover:bg-btnprimary text-white py-2 px-4 rounded-lg '>Fotografia</Link>
              <Link to="#" className='hover:bg-btnprimary text-white py-2 px-4 rounded-lg '>Arte</Link>
              <Link to="#" className='hover:bg-btnprimary text-white py-2 px-4 rounded-lg '>Escultura</Link>
          </nav>
          <ul className='flex items-center gap-4'>
            <li>
              <Link to="#" className='text-white text-lg'>
                {" "}
                  <RiNotification3Line />{" "}
              </Link>
            </li>
            <li>
              <form action="" className='relative'>
                <RiSearchEyeLine className='text-white absolute top-3 left-2'/>
                <input type="text" className='bg-secondary-100 outline-none border border-btnprimary text-white py-2 pl-8 pr-4 rounded-lg opacity-70 w-full' placeholder='Buscar' />
              </form>
            </li>
          </ul> 
       </header>
    </div>
  )
}

export default Home;
