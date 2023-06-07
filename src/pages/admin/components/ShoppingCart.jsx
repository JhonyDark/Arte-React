import { useContext } from "react";
import { CartItem } from "./CartItem"
import { ProductContext } from "../../../context/ProductContext";

export const ShoppingCart = ({ showCarrito }) => {

    const { productsCart } = useContext(ProductContext);


    return (
        <div
            className={`fixed top-56 left-4 w-[11.25rem] h-[400px] text-center transition-all duration-700 ${showCarrito ? "scale-1" : "scale-0"
                }`}
        >
            <div className="h-[300px] overflow-y-auto mb-2">
                {
                    productsCart.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))
                }
            </div>
            <button className="bg-btnprimary rounded-lg p-1 text-white font-bold mb-4">
                Vaciar Carrito
            </button>
            <button className="bg-btnprimary rounded-lg p-1 text-white font-bold">
                Comprar
            </button>
        </div>
    )
}
