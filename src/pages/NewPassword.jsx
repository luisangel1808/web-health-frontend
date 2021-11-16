import React, { useState, useRef } from "react";
import { BsUnlockFill } from "react-icons/bs";
import axios from "axios";
import "../styles/components/Login.css";
import "../styles/components/Form.css";

const NewPassword = (props) => {
  const [password, setPassword] = useState("");
  const form = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();
    form.current[0].value = "";
    try {
      await axios.patch("http://localhost:4000/api/change-password", {
        newPassword:password,
        token:props.location.search.substr(7)
      });

    } catch (error) {
      alert("No se pudo enviar el correo");
    }
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit} ref={form}>
      <h1>Ingresa tu nueva contraseña</h1>
        <div className="inp">
          <BsUnlockFill size="1.5em" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Cambiar password</button>
      </form>
    </div>
  );
};

export default NewPassword;
