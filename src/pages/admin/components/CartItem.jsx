import { RiCloseFill } from "react-icons/ri"

export const CartItem = ({product}) => {

    const { quantity, name, price } = product
    
    return (
        <div className="flex justify-between items-center px-1 text-btnprimary mb-2">
            <span >{quantity}</span>
            <p >{name}</p>
            <span >${price}</span>
            <RiCloseFill className="cursor-pointer " />
        </div>
    )
}
