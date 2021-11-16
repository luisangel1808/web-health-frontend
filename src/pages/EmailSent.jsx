import React from "react";
import { SiMinutemailer } from "react-icons/si";
import "../styles/components/Email-sent.css";

const EmailSent = () => {
  
  return (
    <div className="Email-sent">
      <SiMinutemailer size="3.5em" />
      <h1>Correo enviado</h1>
      <p>Se envió un mensaje al correo ingresado, por favor siga las instrucciones,
        esto puede tardar unos minutos, y es posible que llegue a su carpeta de spam.</p>
      <p>En caso de no recibirlo puede volverlo a solicitar</p>
    </div>
  );
};

export default EmailSent;
