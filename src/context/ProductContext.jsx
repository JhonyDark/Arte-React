import axios from "axios";
import { useState, useEffect, createContext } from "react";


const ProductContext = createContext();

const ProductProvider = ({ children }) => {


    const [products, setProducts] = useState([]);
    const [productsCart, setProductsCart] = useState([]);
    const [errors, setErrors] = useState({});
    const accessToken = localStorage.getItem("token");

    const getProducts = async () => {

        try {
            const response = await axios.get('http://back-art.test/api/products', {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            });

            setProducts(response.data.data);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data.errors);
        }

    }

    const addShoppingCardProduct = (product) => {
        setProductsCart([...productsCart, product]);
        localStorage.setItem('products', JSON.stringify([...productsCart, product]));
    }


    useEffect(() => {
        const currentProducts = JSON.parse(localStorage.getItem('products'));

        if (currentProducts) {
            setProductsCart(currentProducts);
        }

    }, [])



    return (
        <ProductContext.Provider value={{ products, productsCart, errors, getProducts, addShoppingCardProduct }}>
            {children}
        </ProductContext.Provider>
    );

};

export { ProductContext, ProductProvider }