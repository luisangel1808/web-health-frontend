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
            <li>Nuestro equipo</li>
            <li>Trabaja con nosotros</li>
            <li>Solidaridad</li>
            <li>Plex Labs</li>
            <li>Sala de prensa</li>
            <li>Socios</li>
            <li>Extelespectadores</li>
            <li>Accesorios de Plex</li>
          </ul>
        </li>
        <li>
          <Link to="#">Plex Plass</Link>
          <ul>
            <li>Hazte Premium</li>
            <li>Get Perks</li>
          </ul>
        </li>
        <li>
          <Link to="#">Descargas</Link>
          <ul>
            <li>Plex Media Server</li>
            <li>Apps y dispositivos</li>
            <li>Where to watch</li>
          </ul>
        </li>
        <li>
          <Link to="#">Asistencia</Link>
          <ul>
            <li>Artículos</li>
            <li>Foros</li>
            <li>Dudas de facturación</li>
            <li>Estado</li>
            <li>Bug Bounty</li>
          </ul>
        </li>
        <li>
          <Link to="#">Comunidad</Link>
          <ul>
            <li>Blog de Plex</li>
            <li>The Gist</li>
            <li>Show Spotlight: Ted Lasso</li>
          </ul>
        </li>
        <li>
          <Link to="#">Contacto</Link>
          <ul></ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
