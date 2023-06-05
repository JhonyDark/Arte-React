import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState({});

    const navigation = useNavigate();


    const login = async (userData) => {

        try {
            const response = await axios.post('http://back-art.test/api/login', {
                email: userData.email,
                password: userData.password
            })

            setUser(response.data.user);

            localStorage.setItem('token', response.data.token);

            console.log(response);

            navigation('/home');

        } catch (error) {
            setErrors(error.response.data.errors);
        }

    };

    const register = async (userData) => {
        try {
            const response = await axios.post('http://back-art.test/api/register', {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                password_confirmation: userData.passwordConfirmation
            })

            console.log(response);

            navigation('/login');

        } catch (error) {
            setErrors(error.response.data.errors);
        }
    };

    const logout = async () => {
        // Aquí puedes realizar la lógica de cierre de sesión
        // Por ejemplo, eliminar el token de autenticación y limpiar los datos del usuario del estado

        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, errors, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
