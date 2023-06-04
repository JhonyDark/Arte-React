import { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState({});


    const login = async (userData) => {

        try {   
            const response = await axios.post('http://back-art.test/api/login', {
                email: userData.email,
                password: userData.password
            })

            setUser(response.data.user);

            console.log(response);

        } catch (error) {
            setErrors(error.response.data.errors);
        }

    };

    const register = (userData) => {
        // Aquí puedes realizar la lógica de registro
        // Por ejemplo, enviar una solicitud a la API para crear una cuenta de usuario
        // y almacenar los datos del usuario registrado en el estado

        setUser(userData);
    };

    const logout = () => {
        // Aquí puedes realizar la lógica de cierre de sesión
        // Por ejemplo, eliminar el token de autenticación y limpiar los datos del usuario del estado

        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, errors, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
