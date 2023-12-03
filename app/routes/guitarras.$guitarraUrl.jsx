import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import styles from "~/styles/guitarras.css";

export async function loader({ params }) {
  const { guitarraUrl } = params;

  //si no hay guitarra
  try {
    const guitarra = await getGuitarra(guitarraUrl);
    if (guitarra.data.length === 0) {
      throw new Response("", {
        status: 404,
        statusText: "Guitarra no encontrada",
      });
    }
    return guitarra;
  } catch (error) {
    throw error;
  }
}

export function meta({ data }) {
  if (!data) {
    return [
      {
        title: "Guitarra no encontrada",
      },
      { description: "Guitarras, venta de Guitarras, guitarra no encontrada" },
    ];
  }

  return [
    {
      title: `GuitarLA - ${data?.data[0]?.attributes.nombre}`,
    },
    {
      description: `Guitarras, venta de guitarras, guitarra ${data?.data[0]?.attributes.nombre}`,
    },
  ];
}

export function links() {
  return [
    {
      rel: "StyleSheet",
      href: styles,
    },
  ];
}

function Guitarra() {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  console.log(precio);
  return (
    <main className="contenedor guitarra">
      <img
        className="imagen"
        src={imagen?.data[0]?.attributes?.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion[0]?.children[0]?.text}</p>
        <p className="precio">{precio}</p>
      </div>
    </main>
  );
}

export default Guitarra;
