import { useState } from "react";
import {
    RiCheckboxBlankCircleFill,
    RiCloseFill,
    RiCloseLine,
    RiCustomerService2Fill,
    RiHome3Line,
    RiLoginBoxLine,
    RiMenuUnfoldFill,
    RiShoppingCart2Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showCarrito, setShowCarrito] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const toggleCarrito = () => {
        setShowCarrito(!showCarrito);
    };

    return (
        <nav
            className={`bg-secondary-900 fixed  top-0 w-52 h-full overflow-y-scroll border-r
             border-btnsecondary p-8 flex flex-col  justify-between transition-all duration-700 
             lg:left-0 z-50 ${showMenu ? "left-0" : "-left-full"}`}>
            <div>
                {/* Logo */}
                <h1 className="text-gray-300 uppercase text-2xl mb-10">TU LOGO</h1>

                {/* Menu superior */}
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500"
                        >
                            <RiHome3Line /> Inicio
                        </Link>
                    </li>
                    {/* <li>
          <Link to="#" className='flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500'>
          <RiStore2Line /> Tienda
          </Link>
        </li> */}
                    <li>
                        <Link
                            onClick={toggleCarrito}
                            className="flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500"
                        >
                            <RiShoppingCart2Line /> Carrito{" "}
                            <span className="text-[#636363]">0</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* modal carrito productlist */}
            <div
                className={`fixed top-56 left-4 w-[11.25rem] h-[400px] text-center transition-all duration-700 ${showCarrito ? "scale-1" : "scale-0"
                    }`}
            >
                <div className="h-[300px] overflow-y-auto mb-2">
                    <div className="flex justify-between items-center px-1 text-btnprimary mb-2">
                        <span className="">1</span>
                        <p className="">Nik Grece</p>
                        <span className="">$65</span>
                        <RiCloseFill className="cursor-pointer " />
                    </div>
                    <div className="flex justify-between items-center px-1 text-btnprimary">
                        <span className="">1</span>
                        <p className="">Nik Grece</p>
                        <span className="">$65</span>
                        <RiCloseFill />
                    </div>
                </div>
                <button className="bg-btnprimary rounded-lg p-1 text-white font-bold mb-4">
                    Vaciar Carrito
                </button>
                <button className="bg-btnprimary rounded-lg p-1 text-white font-bold">
                    Comprar
                </button>
            </div>

            {/* Menu inferior */}
            <div>
                <ul>
                    <li>
                        {/* este sin logear */}
                        <Link
                            to="/login"
                            className="flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-0 2xl:px-2 rounded-xl transition-colors duration-500"
                        >
                            <RiLoginBoxLine /> Iniciar Sesión
                        </Link>
                        {/* este cuando este logeado */}
                        <Link
                            to="/login"
                            className="hidden relative flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500"
                        >
                            <img
                                src="https://img.freepik.com/foto-gratis/buen-consejo-mujer-hermosa_329181-3527.jpg"
                                className="w-6 h-6 object-cover rounded-full"
                            />
                            <RiCheckboxBlankCircleFill className="absolute left-7 bottom-3 text-green-600 text-[10px]" />
                            Girl Girl
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500"
                        >
                            <RiCustomerService2Fill /> Ayuda
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Btn menu movil */}
            <button
                onClick={toggleMenu}
                className="lg:hidden bg-btnprimary text-white fixed bottom-4 right-6 p-2 text-lg rounded-full z-50"
            >
                {showMenu ? <RiCloseLine /> : <RiMenuUnfoldFill />}
            </button>
        </nav>
    );
};
