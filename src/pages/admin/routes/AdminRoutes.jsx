import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import Home from "../Home"
import Fotos from "../Fotos"
import Chat from "../Chat"

export const AdminRoutes = () => {
    return (
        <div className="bg-secondary-900 min-h-screen">
            <Sidebar />

            <Navbar />

            <Routes>

                <Route path="home" element={<Home />} />
                <Route path="chat" element={<Chat />} />
                <Route path="fotos" element={<Fotos />} />

                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>

        </div>
    )
}
