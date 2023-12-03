import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/posts.server";
import { formatearFecha } from "~/utils/helpers";
import styles from "~/styles/blog.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }
  return post;
}

export function meta({ data }) {
  if (!data) {
    return [
      {
        title: "Entrada no encontrada",
      },
      { description: "Entrada, venta de Entrada, entrada no encontrada" },
    ];
  }

  return [
    {
      title: `GuitarLA - ${data?.data[0]?.attributes.title}`,
    },
    {
      description: `Entrada, venta de Entrada, Entrada ${data?.data[0]?.attributes.title}`,
    },
  ];
}

export default function Post() {
  const post = useLoaderData();
  console.log(post);

  const { title, contenido, imagen, publishedAt } = post.data[0].attributes;
  return (
    <article className="contenedor post mt-3">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen blog ${title}`}
      />
      <div className="contenido">
        <h3>{title}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido[0].children[0].text}</p>
      </div>
    </article>
  );
}
