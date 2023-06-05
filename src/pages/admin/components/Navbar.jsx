import { RiNotification3Line, RiSearchEyeLine } from "react-icons/ri"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <header className="lg:pl-56 fixed w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-secondary-900">
      <nav className="flex items-center gap-4 order-1 lg:order-none">
        <Link
          to="/fotos"
          className="hover:bg-btnprimary text-white py-2 px-4 rounded-lg "
        >
          Cuadros
        </Link>
        {/* <Link to="#" className='hover:bg-btnprimary text-white py-2 px-4 rounded-lg '>Arte</Link> */}
        <Link
          to="#"
          className="hover:bg-btnprimary text-white py-2 px-4 rounded-lg "
        >
          Escultura
        </Link>
      </nav>
      <ul className="flex items-center gap-4">
        <li>
          <Link to="#" className="text-white text-lg">
            {" "}
            <RiNotification3Line />{" "}
          </Link>
        </li>
        <li>
          <form action="" className="relative">
            <RiSearchEyeLine className="text-white absolute top-3 left-2" />
            <input
              type="text"
              className="bg-secondary-100 outline-none border border-btnprimary text-white py-2 pl-8 pr-4 rounded-lg opacity-70 w-full"
              placeholder="Buscar"
            />
          </form>
        </li>
      </ul>
    </header>
  )
}
