import { Navigate, Route, Routes } from "react-router-dom"

import Home from '../pages/admin/Home';
import Fotos from '../pages/admin/Fotos';
import Chat from '../pages/admin/Chat';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Recordarpass from '../pages/auth/Recordarpass';

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="home" element={<Home />} />
                <Route path="chat" element={<Chat />} />
                <Route path="fotos" element={<Fotos />} />

                <Route path="login" element={<Login />} />
                <Route path="registro" element={<Register />} />
                <Route path="olvide-pass" element={<Recordarpass />} />

                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}
