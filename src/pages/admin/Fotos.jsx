
import { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";

const Fotos = () => {

  const accessToken = localStorage.getItem("token");

  const [products, setProducts] = useState([]);

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
    }

  }

  useEffect(() => {
    getProducts();

  }, []);


  return (

    <main className="lg:pl-56 px-8 pt-36 lg:pt-24">
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  mt-5">
        <div className="px-[10px] col-span-5">
          <div className="flex flex-wrap -mx-4">
            {
              products.map((product) => (
                <Card
                  key={product.id}
                  imageUrl={product.image}
                  price={product.price}
                  title={product.name}
                />
              ))
            }
          </div>
        </div>
      </div>
    </main>

  );
};

export default Fotos;
