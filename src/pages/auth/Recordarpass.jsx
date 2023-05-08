import React from 'react'
//Icons
import { RiMailLine } from "react-icons/ri";
//Links
import { Link } from 'react-router-dom';

const Recordarpass = () => {
    

    return (
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] opacity-80">
        <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center">
          Recuperar <span className='text-btnsecondary border-b py-1'>Contraseña</span> 
        </h1>
        <form className='mb-8'>
          <div className="relative mb-8">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
              placeholder="Correo electrónico"
            />
          </div>
          <div className='px-12'>
            <button type='submit' className='bg-btnsecondary w-full py-3 px-4 rounded-lg text-black uppercase font-bold text-sm hover:text-white transition-colors  transition-all duration-700'>
              Enviar
            </button>
          </div>
        </form>
          <span className='flex items-center gap-2 justify-center'>
            ¿Quieres intentar nuevamente? <Link className='text-btnsecondary hover:text-gray-100 transition-colors' to="/auth">Ingresar</Link>
          </span>
      </div>
    );
}

export default Recordarpass