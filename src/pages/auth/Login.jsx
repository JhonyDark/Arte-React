import { useContext, useState } from 'react'
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const Login = () => {

  const { errors, login } = useContext(AuthContext);

  const [email, setEmail] = useState('jhon@mail.com');
  const [password, setPassword] = useState('secret');

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    login({ email, password });
  };


  return (
    <div className='min-h-screen flex items-center justify-center p-4 pb-20 sm:pb-0'>
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] opacity-80">
        <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center">
          Iniciar <span className='text-btnsecondary border-b py-1'>sesión</span>
        </h1>
        <form className='mb-8' action='' onSubmit={handleSubmit}>
          <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100 hover:text-btnsecondary transition-colors transition-all duration-500">
            <img
              src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/imagem-google-logo-com-fundo-transparente-1.png"
              className="w-4 h-4"
            />
            Ingresa con google
          </button>

          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
            <input
              type="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
              placeholder="Correo electrónico"
            />
            {errors && errors.email && <span> {errors.email[0]} </span>}
          </div>

          <div className="relative mb-8">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
              placeholder="Contraseña"
            />
            {errors && errors.password && <span> {errors.password[0]} </span>}
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

          <div className='px-12'>
            <button type='submit' className='bg-btnsecondary w-full py-3 px-4 rounded-lg text-black uppercase font-bold text-sm hover:text-white transition-colors  transition-all duration-700'>
              Ingresar
            </button>
          </div>
        </form>
        <div className='flex flex-col items-center gap-4'>
          <Link to="/" className='hover:text-btnsecondary transition-colors'>¿Olvidaste tu contraseña?</Link>
          <span className='flex items-center gap-2'>
            ¿No tienes cuenta? <Link className='text-btnsecondary hover:text-gray-100 transition-colors' to="/registro">Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
