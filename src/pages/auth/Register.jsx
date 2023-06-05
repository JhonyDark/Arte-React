import { useContext, useState } from 'react';
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine, RiUserLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export function Register() {

  const [name, setName] = useState('Alberto gallorico');
  const [email, setEmail] = useState('jhondoe@mail.com');
  const [password, setPassword] = useState('secret');
  const [passwordConfirmation, setPasswordConfirmation] = useState('secret');

  const { register, errors } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    register({
      name,
      email,
      password,
      passwordConfirmation
    })
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
              type="text" name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
              placeholder="Nombre completo"
            />{errors.name && <span> {errors.name} </span>}
          </div>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
            <input
              type="email" name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
              placeholder="Correo electrónico"
            />{errors.email && <span> {errors.email} </span>}
          </div>
          <div className="relative mb-4">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
              placeholder="Contraseña"
            />{errors.password && <span> {errors.password} </span>}
            {showPassword ? (
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
              type={showPasswordConfirmation ? "text" : "password"}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="confirmar contraseña"
            />
            {showPasswordConfirmation ? (
              <RiEyeOffLine
                onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-btnsecondary"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
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
