import { RiShareForwardFill } from "react-icons/ri";


const Personaje = ({ title, text, imageUrl, link, textLink }) => {
  return (
    <div className="card">
      <img className='rounded-xl' src={imageUrl} alt="" />
      <div className="card-content">
        <h2>
          {title}
        </h2>
        <div className='capa'>
          <p>
            {text}
          </p>
          <a href={link} className="button group">
            {textLink}
            <RiShareForwardFill className='group-hover:translate-x-2 transition-all' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Personaje;
