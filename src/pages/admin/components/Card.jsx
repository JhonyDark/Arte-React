
function Card({ imageUrl, title, price, }) {

  const divStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };


  return (

    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4">
      <div className="cardsf">
        <div style={divStyle} className="cover item-b">
          <h1 className="text-lg font-bold mb-2">{title}</h1>
          <span className="price">${price}</span>
          <div className="cardsf-back">
            <a href="#" className="mr-2">
              Añadir al carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
