import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../statics/logo.png";
import "../styles/components/Header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav className={`menu ${menu ? "n-active" : "n-inactive"}`}>
        <Link to="/">
          <img src={Logo} alt="Web-health" />
        </Link>
        <ul className={`menu ${menu ? "active" : "inactive"}`}>
          <li className="header-item">
            <Link to="/pressure">
              Registrar
            </Link>
          </li>
          <li className="header-item">
            <Link to="/pressure-data">
              Registros
            </Link>
          </li>
          <li className="header-item">
            <Link to="/videos">
              Videos
            </Link>
          </li>
          <li className="header-item">
            <Link to="/tasks">
              Tareas
            </Link>
          </li>
          <li className="header-item">
            <Link to="/teams">
              Comunidad
            </Link>
          </li>
          <li className="header-item">
            <Link to="/advices">
              Consejos
            </Link>
          </li>
        </ul>
        <div className="in">
          <Link to="login">
            <button className="header-item">Ingresar</button>
          </Link>
          <Link to="signup">
            <button className="header-item">Registrarse</button>
          </Link>
        </div>
        <div className="toggle">
          {menu ? (
            <FaTimes onClick={() => setMenu(!menu)} />
          ) : (
            <FaBars onClick={() => setMenu(!menu)} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
