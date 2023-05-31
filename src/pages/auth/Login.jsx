import  { useState} from 'react'
//Icons
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
//Links
import { Link, useNavigate } from 'react-router-dom';
//validaciones
import Validation from './Error404Login';
import axios from 'axios'

//useState nos trae el cambio de estado del email y del password
 
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  //Este nos muestra el estado de la contraseña
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

 //El método handleInput es una función que se utiliza para manejar los eventos de entrada (como cambios en un campo de formulario) y actualizar los valores de un estado en React utilizando el hook useState.
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
//useNavigate se utiliza para obtener la función navigate, que luego se usa para realizar la navegación en respuesta a un clic en el botón.
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (errors.email === '' && errors.password === '') {
      axios
        .post('http://localhost:8081/auth', values)
        .then((res) => {
          if (res.data === 'ingreso exitoso') {
            navigate('/');
          } else {
            alert('No se encontró');
          }
        })
        .catch((err) => console.log(err));
    }
  };
    
  
  return (

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
            name='email' onChange={handleInput} 
            className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
            placeholder="Correo electrónico"
          /> {errors.email && <span> {errors.email} </span>}
        </div>
        <div className="relative mb-8">
          <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-btnsecondary" />
          <input
            type={showPassword ? "text" : "password"} name='password' onChange={handleInput}
            className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-btnsecondary"
            placeholder="Contraseña"
          />{errors.password && <span> {errors.password} </span>}
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
            Ingresar
          </button>
        </div>
      </form>
      <div className='flex flex-col items-center gap-4'>
        <Link to="/" className='hover:text-btnsecondary transition-colors'>¿Olvidaste tu contraseña?</Link>
        <span className='flex items-center gap-2'>
          ¿No tienes cuenta? <Link className='text-btnsecondary hover:text-gray-100 transition-colors' to="/auth/registro">Registrate</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
