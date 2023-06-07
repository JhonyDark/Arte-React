
function Card({product, addShoppingCard}) {

  const divStyle = {
    background: `url(${product.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };


  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4">
      <div className="cardsf">
        <div style={divStyle} className="cover item-b">
          <h1 className="text-lg font-bold mb-2">{product.name}</h1>
          <span className="price">${product.price}</span>
          <div className="cardsf-back">
            <a className="mr-2 cursor-pointer" onClick={() => addShoppingCard(product)}>
              Añadir al carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
