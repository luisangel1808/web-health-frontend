import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import axios from "axios";
import "../styles/components/Login.css";
import "../styles/components/Form.css";

const RecoveryPassword = () => {
  const [email, setEmail] = useState("");
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    form.current[0].value = "";
    try {
      await axios.post("https://warm-mountain-11426.herokuapp.com/api/recovery", {
        email,
      });
      history.push('/email-sent');
    } catch (eror) {
      alert("No se pudo enviar el correo");
    }
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit} ref={form}>
        <h1>Recuperar contraseña</h1>
        <h2>Ingrese su correo</h2>
        <div className="inp">
          <BiUser size="1.5em" />
          <input
            type="text"
            name="email"
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Envíame un correo</button>
        <Link to="login">
          <p>Registrarse</p>
        </Link>
      </form>
    </div>
  );
};

export default RecoveryPassword;
