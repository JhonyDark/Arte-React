import { Route, Routes } from "react-router-dom"

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Recordarpass from '../pages/auth/Recordarpass';
import { AdminRoutes } from "../pages/admin/routes/AdminRoutes";

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="login" element={<Login />} />
                <Route path="registro" element={<Register />} />
                <Route path="olvide-pass" element={<Recordarpass />} />

                <Route path="/*" element={<AdminRoutes />} />
            </Routes>
        </>
    )
}
