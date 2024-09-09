import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="links-legales">
        <Link
          target="_blank"
          to="politica_de_privacidad.html"
          className="text-black dark:text-white"
        >
          Politica de privacidad
        </Link>
        <Link
          target="_blank"
          to="terminos&condiciones.html"
          className="text-black dark:text-white"
        >
          Terminos y condiciones
        </Link>
      </div>

      <div className="footer-content">
        <ul className="redes">
          <li>
            <Link
              to="#"
              className="fc"
            >
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="ig"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="x"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="whats"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
