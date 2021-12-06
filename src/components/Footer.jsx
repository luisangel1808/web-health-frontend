import React from "react";
import { Link } from "react-router-dom";
import Logo from "../statics/logo.png";
import '../styles/components/Footer.css';
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Logo} alt="Web-health" />
      </div>
      <ul>
        <li>
          <Link to="#">Empresa</Link>
          <ul>
            <li>Próximamente</li>
          </ul>
        </li>
        <li>
          <Link to="#">Premium</Link>
          <ul>
            <li>Próximamente</li>
          </ul>
        </li>
        <li>
          <Link to="#">Descargas</Link>
          <ul>
            <li>Próximamente</li>
          </ul>
        </li>
        <li>
          <Link to="#">Asistencia</Link>
          <ul>
            <li>Próximamente</li>
          </ul>
        </li>
        <li>
          <Link to="#">Comunidad</Link>
          <ul>
            <li>Próximamente</li>
          </ul>
        </li>
        <li>
          <Link to="#">Contacto</Link>
          <ul>
            <li>luisangel1808@hotmail.com</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
