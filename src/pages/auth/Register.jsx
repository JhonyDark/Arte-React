import {React, useState} from 'react'
//Icons
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine, RiUserLine } from "react-icons/ri";
//Links
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] opacity-80">
    <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center">
      Crear tu <span className='text-btnsecondary border-b py-1'>Cuenta</span> 
    </h1>
    <form className='mb-8'>
      <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100 hover:text-btnsecondary transition-colors transition-all duration-500">
        <img
          src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/imagem-google-logo-com-fundo-transparente-1.png"
          className="w-4 h-4"
        />
        Registrate con google
      </button>
      <div className="relative mb-4">
        <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
        <input
          type="text"
          className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
          placeholder="Nombre completo"
        />
      </div>
      <div className="relative mb-4">
        <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
        <input
          type="email"
          className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
          placeholder="Correo electrónico"
        />
      </div>
      <div className="relative mb-4">
        <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
        <input
          type={showPassword ? "text" : "password"}
          className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
          placeholder="Contraseña"
        />
        { showPassword ? (
          <RiEyeOffLine
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-btnsecondary"
          />
        ) : (
          <RiEyeLine
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-btnsecondary"
          />
        )}
      </div>
      <div className="relative mb-4">
        <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
        <input
          type={showPassword ? "text" : "password"}
          className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
          placeholder="confirmar contraseña"
        />
        { showPassword ? (
          <RiEyeOffLine
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-btnsecondary"
          />
        ) : (
          <RiEyeLine
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-btnsecondary"
          />
        )}
      </div>
      <div className='px-12'>
        <button type='submit' className='bg-btnsecondary w-full py-3 px-4 rounded-lg text-black uppercase font-bold text-sm hover:text-white transition-colors  transition-all duration-700'>
          Registrar
        </button>
      </div>
    </form>
      <span className='flex items-center gap-2 justify-center'>
        ¿Ya tienes cuenta? <Link className='text-btnsecondary hover:text-gray-100 transition-colors' to="/auth">Ingresa</Link>
      </span>
  </div>
  )
}

export default Register;
