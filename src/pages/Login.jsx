import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BsUnlockFill } from "react-icons/bs";
import axios from "axios";
import "../styles/components/Login.css";
import "../styles/components/Form.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    form.current[0].value = "";
    form.current[1].value = "";
    try {
      const res = await axios.post("https://warm-mountain-11426.herokuapp.com/api/login", {
        email,
        password,
      });
      console.log(res);
      localStorage.token = res.data.token;
      history.push('/pressure');
      //localStorage.username = username;
    } catch (eror) {
      alert("Identificación o clave inválida");
    }
  };

  return (
    <div className="Form">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit} ref={form}>
        <p>Email</p>
        <div className="inp">
          <BiUser size="1.5em" />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p>Contraseña</p>
        <div className="inp">
          <BsUnlockFill size="1.5em" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text">
{/*           <label>
            <input type="checkbox" name="remember" /> Recordarme
          </label> */}
          <Link to="recovery-password">
            <p>He olvidado mi contraseña</p>
          </Link>
        </div>
        <button>Iniciar sesión</button>
        <Link to="signup">
          <p>¿No tienes cuenta?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
