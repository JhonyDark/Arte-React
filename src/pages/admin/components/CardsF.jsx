import React from "react";

function Cardsf({
  imageUrl,
  imageUrl2,
  imageUrl3,
  imageUrl4,
  title,
  title2,
  title3,
  title4,
  price,
  price2,
  price3,
  price4,
}) {
  const divStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const divStyle2 = {
    background: `url(${imageUrl2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const divStyle3 = {
    background: `url(${imageUrl3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const divStyle4 = {
    background: `url(${imageUrl4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section>
      <div className="flex flex-wrap -mx-4">
        {/* <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4">
          <div className="cardsf">
            <div className="cover item-a">
              <h1 className="text-lg font-bold mb-2">
                Little
                <br />
                Bonsai
              </h1>
              <span className="price">$79</span>
              <div className="cardsf-back">
                <a href="#" className="mr-2">
                  Añadir al carrito
                </a>
                <a href="#">View detail</a>
              </div>
            </div>
          </div>
        </div> */}
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
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4">
          <div className="cardsf">
            <div style={divStyle2} className="cover item-b">
              <h1 className="text-lg font-bold mb-2">{title2}</h1>
              <span className="price">${price2}</span>
              <div className="cardsf-back">
                <a href="#" className="mr-2">
                  Añadir al carrito
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4">
          <div className="cardsf">
            <div style={divStyle3} className="cover item-b">
              <h1 className="text-lg font-bold mb-2">{title3}</h1>
              <span className="price">${price3}</span>
              <div className="cardsf-back">
                <a href="#" className="mr-2">
                  Añadir al carrito
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4">
          <div className="cardsf">
            <div style={divStyle4} className="cover item-b">
              <h1 className="text-lg font-bold mb-2">{title4}</h1>
              <span className="price">${price4}</span>
              <div className="cardsf-back">
                <a href="#" className="mr-2">
                  Añadir al carrito
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cardsf;
