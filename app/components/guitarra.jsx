import { Link } from "@remix-run/react";

const Guitarra = ({ guitarra }) => {
  const { imagen, precio, url, nombre, descripcion } = guitarra;

  return (
    <div className="guitarra">
      <img
        src={imagen?.data[0]?.attributes?.formats?.medium?.url}
        alt={`Imagen guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion[0].children[0].text}</p>
        <p className="precio">${precio}</p>
        <Link className="enlace" to={`/guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
