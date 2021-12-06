import React, { useContext, useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../hooks/useAuthentication";
import Logo from "../statics/logo.png";
import "../styles/components/Header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const {setToken, token} = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if(localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
    }
  }, [])

  const close = () =>{
    window.localStorage.removeItem('token')
    setToken(null)
    history.push('/');
  }
  return (
    <header>
      <nav className={`menu ${menu ? "n-active" : "n-inactive"}`}>
        <Link to="/">
          <img src={Logo} alt="Web-health" />
        </Link>
        {token ? (
          <div className="in">
        <ul className={`menu ${menu ? "active" : "inactive"}`}>
          <li className="header-item">
            <Link to="/pressure" onClick={() => setMenu(false)}>
              Registrar
            </Link>
          </li>
          <li className="header-item">
            <Link to="/pressure-data" onClick={() => setMenu(false)}>
              Gráficas
            </Link>
          </li>
          <li className="header-item">
            <Link to="/videos" onClick={() => setMenu(false)}>
              Videos
            </Link>
          </li>
          <li className="header-item">
            <Link to="/tasks" onClick={() => setMenu(false)}>
              Tareas
            </Link>
          </li>
          <li className="header-item">
            <Link to="/teams" onClick={() => setMenu(false)}>
              Comunidad
            </Link>
          </li>
          <li className="header-item">
            <Link to="/advices" onClick={() => setMenu(false)}>
              Consejos
            </Link>
          </li>
          <button className="header-item" onClick={()=>close()}>Cerrar sesión</button>
        </ul>
        </div>
        ):(
        <div className="in">
        <ul className={`menu ${menu ? "active" : "inactive"}`}>
          <li className="header-item">
            <Link to="login">
              <button className="header-item" onClick={() => setMenu(!menu)}>Ingresar</button>
            </Link>
            </li>
            <li className="header-item">
            <Link to="signup">
              <button className="header-item" onClick={() => setMenu(!menu)}>Registrarse</button>
            </Link>
            </li>
          </ul>
        </div>
        )}
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