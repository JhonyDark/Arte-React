
import { useContext, useEffect } from "react";
import Card from "./components/Card";
import { ProductContext } from "../../context/ProductContext";

const Fotos = () => {

  const { products, addShoppingCardProduct, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);


  return (

    <main className="lg:pl-56 px-8 pt-36 lg:pt-24">
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  mt-5">
        <div className="px-[10px] col-span-5">
          <div className="flex flex-wrap -mx-4">
            {
              products.map((item) => (
                <Card
                  key={item.id}
                  product={item}
                  addShoppingCard={addShoppingCardProduct}
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
