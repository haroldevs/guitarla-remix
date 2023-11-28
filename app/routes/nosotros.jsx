import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Nosotros",
      description: "Venta de guitarras, blog de musica",
    },
  ];
}
export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preload", href: imagen, as: "image" },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen" />
        <div>
          <p>
            Etiam consectetur justo sed est bibendum, in pretium turpis tempus.
            Sed in mattis urna, nec lobortis elit. Nunc ultricies, arcu sed
            fringilla auctor, diam orci semper lectus, ac euismod velit orci eu
            nisl.
          </p>
          <p>
            Vivamus luctus eget erat eget lobortis. Vestibulum fermentum cursus
            ante. Aliquam fringilla ex in imperdiet lacinia. Maecenas sit amet
            posuere tortor, eget eleifend ligula. Nam hendrerit enim quis nisl
            ullamcorper, ut tincidunt lacus sodales. Proin id venenatis metus.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
