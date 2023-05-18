import React from "react";
// LINKS
import { Link } from "react-router-dom";
// ICONOS
import {
  RiHome3Line,
  RiShoppingCart2Line,
  RiCustomerService2Fill,
  RiLoginBoxLine,
  RiCheckboxBlankCircleFill,
  RiMenuUnfoldFill,
  RiCloseLine,
  RiNotification3Line,
  RiSearchEyeLine,
} from "react-icons/ri";
import { useState } from "react";

// COMPONENTES
import Cardsf from "./components/CardsF";

const Fotos = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-secondary-900 min-h-screen">
      {/* Sidebar */}
      <sidebar
        className={`bg-secondary-900 fixed  top-0 w-52 h-full overflow-y-scroll border-r border-btnsecondary p-8 flex flex-col  justify-between transition-all duration-700 lg:left-0 z-50 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
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
                to="#"
                className="flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-4 rounded-xl transition-colors duration-500"
              >
                <RiShoppingCart2Line /> Carrito
              </Link>
            </li>
          </ul>
        </div>
        {/* Menu inferior */}
        <div>
          <ul>
            <li>
              {/* este sin logear */}
              <Link
                to="/auth"
                className="flex items-center gap-4 hover:bg-btnprimary hover:text-white py-4 px-0 2xl:px-2 rounded-xl transition-colors duration-500"
              >
                <RiLoginBoxLine /> Iniciar Sesión
              </Link>
              {/* este cuando este logeado */}
              <Link
                to="/"
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
      </sidebar>

      {/* Header */}
      <header className="lg:pl-56 fixed w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-secondary-900 z-40">
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
      {/* Contenido */}
      <main className="lg:pl-56 px-8 pt-36 lg:pt-24">
        {/* Cuadros bloque 1 */}
        <div className="grid lg:grid-cols-5 mt-5">
          <div className="px-[10px] col-span-5">
            <Cardsf
              imageUrl="https://cdn.leonardo.ai/users/c8b684ab-6931-4bd0-b606-b65f441c5619/generations/2c6dff5b-9dc8-4812-b150-965fbf0d7ddc/RPG_40_Studio_portrait_of_stunning_Full_body_Ancient_Greece_in_0.jpg"
              imageUrl2="https://images.pexels.com/photos/14446396/pexels-photo-14446396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              imageUrl3="https://cdn.leonardo.ai/users/9a38a7b8-74c2-44e4-ae82-7e1b0369d70e/generations/56b5e7ec-e66c-49f4-99f3-f8ab8c6e450e/DreamShaper_v5_hill_with_altars_statues_of_gods_and_a_temple_f_0.jpg"
              imageUrl4="https://image.lexica.art/full_jpg/0afad5ed-6124-4685-af75-3ca01fc18d4d"
              price="55"
              price2="65"
              price3="75"
              price4="85"
              title="Blue"
              title2="Nik Greece"
              title3="Altar Greece"
              title4="Atenas"
            />
          </div>
        </div>

        {/* Cuadros bloque 2       */}
        <div className="grid lg:grid-cols-5">
          <div className="px-[10px] col-span-5">
            <Cardsf
              imageUrl="https://cdn.leonardo.ai/users/f273e98f-84c2-4113-a545-b0818aaa50d2/generations/11964555-bf5f-42d2-9245-da6cbee92ca3/RPG_40_HighResolution_MidShot_HighDefinition_Dynamic_Pose_4K_R_0.jpg"
              imageUrl2="https://cdn.leonardo.ai/users/9a38a7b8-74c2-44e4-ae82-7e1b0369d70e/generations/1e5c9566-6dca-4222-bbfd-bac20fe09979/Deliberate_11_Athenian_acropolis_with_Classical_greek_Caryati_3.jpg"
              imageUrl3="https://cdn.leonardo.ai/users/9fff616f-1898-48f1-ba18-b48d8ba080e5/generations/8a785e26-3f9f-4bd5-b6c3-605b2391c7a4/DreamShaper_v5_philosopher_value_striking_portrait_of_a_bea_0.jpg"
              imageUrl4="https://image.lexica.art/full_jpg/3464aa75-f8ad-4280-a0f1-82082eef9dbd"
              price="55"
              price2="65"
              price3="75"
              price4="85"
              title="Blue"
              title2="Nik Greece"
              title3="Altar Greece"
              title4="Atenas"
            />
          </div>
        </div>

        {/* Cuadros bloque 3 */}
        <div className="grid lg:grid-cols-5">
          <div className="px-[10px] col-span-5">
            <Cardsf
              imageUrl="https://cdn.leonardo.ai/users/b1372854-6a78-454b-946a-41f0940e089a/generations/132c4159-777d-405b-8733-20d7dc27b954/RPG_40_Athena_wearing_a_long_elegant_dresse_She_wore_a_helmet_0.jpg"
              imageUrl2="https://cdn.leonardo.ai/users/df2f3f0d-b3f1-4e68-bf37-ddd35e3af875/generations/039265a7-2f79-46d7-8549-ded1fab9ee41/DreamShaper_v5_a_man_from_ancient_greece_using_fire_to_keep_wa_1.jpg"
              imageUrl3="https://cdn.leonardo.ai/users/8c28fe23-425d-4718-9246-36e3abf89d82/generations/9df63e91-a6d3-43df-aab3-2e6f12cb84c3/RPG_40_ancient_greece_golden_ratio_fake_detail_trending_pixiv_1.jpg"
              imageUrl4="https://cdn.leonardo.ai/users/f4e04d2e-3323-4ebb-bad7-87e345abd06d/generations/a47929f3-c971-4e93-bcc1-ed11cf8cd8ef/Leonardo_Diffusion_Turn_into_Beautiful_King_and_Queen_Right_si_0.jpg"
              price="55"
              price2="65"
              price3="75"
              price4="85"
              title="Blue"
              title2="Nik Greece"
              title3="Altar Greece"
              title4="Atenas"
            />
          </div>
        </div>

        {/* Cuadros bloque 4 */}
        <div className="grid lg:grid-cols-5">
          <div className="px-[10px] col-span-5">
            <Cardsf
              imageUrl="https://cdn.leonardo.ai/users/62de3f2d-f8ba-462f-b7ab-6e03eafa8bfa/generations/7c143011-f0b5-4372-aedd-13b99cdb36d8/RPG_40_Amalie_40_20_year_old_male_angel_bringing_opportunity_w_1.jpg"
              imageUrl2="https://cdn.leonardo.ai/users/ecbae0ec-31c9-4cba-b111-229bb60016c5/generations/2526ce38-01db-4b19-93bd-d6179123e82a/variations/Default_Watercolor_paint_travel_poster_Mykonos_Greece_Compleme_0_2526ce38-01db-4b19-93bd-d6179123e82a_1.jpg"
              imageUrl3="https://cdn.leonardo.ai/users/ff489681-5b75-4e7b-869c-532a52535847/generations/5c70642a-63ca-4278-8381-5f35eb3179ee/Leonardo_Diffusion_Hyperrealistic_ultradetailed_photograph_of_0.jpg"
              imageUrl4="https://cdn.leonardo.ai/users/df5bc55d-448f-40de-b61d-7d3181a0d0ca/generations/bae6c8d3-a1b1-4274-9990-2347733d5398/Leonardo_Diffusion_a_cityscape_with_ancient_greek_architecture_cyberpunk_style_0.jpg"
              price="55"
              price2="65"
              price3="75"
              price4="85"
              title="Blue"
              title2="Nik Greece"
              title3="Altar Greece"
              title4="Atenas"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fotos;
