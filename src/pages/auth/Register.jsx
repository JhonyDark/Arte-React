import { useState } from 'react';
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine, RiUserLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export function Register() {


  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
    //
  }


  return (
    <div className='min-h-screen flex items-center justify-center p-4 pb-20 sm:pb-0'>
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] opacity-80">
        <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center">
          Crear tu <span className='text-btnsecondary border-b py-1'>Cuenta</span>
        </h1>
        <form className='mb-8' onSubmit={handleSubmit}>
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
              type="text" name='name' onChange={() => {}}
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
              placeholder="Nombre completo"
            />{errors.name && <span> {errors.name} </span>}
          </div>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
            <input
              type="email" name='email' onChange={() => {}}
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
              placeholder="Correo electrónico"
            />{errors.email && <span> {errors.email} </span>}
          </div>
          <div className="relative mb-4">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
            <input
              type="password" name='password' onChange={() => {}}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
              placeholder="Contraseña"
            />{errors.password && <span> {errors.password} </span>}
            {showPassword ? (
              <RiEyeOffLine

                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-btnsecondary"
              />
            ) : (
              <RiEyeLine

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
            />{errors.password && <span> {errors.password} </span>}
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-btnsecondary"
              />
            ) : (
              <RiEyeLine

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
          ¿Ya tienes cuenta? <Link className='text-btnsecondary hover:text-gray-100 transition-colors' to="/login">Ingresa</Link>
        </span>
      </div>
    </div>
  )
}

export default Register;
