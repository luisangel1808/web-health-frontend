import React, { useContext } from "react";
import LittleCard from "../components/LittleCard";
import { FaShare } from "react-icons/fa";
import { GoDatabase, GoGraph } from "react-icons/go";
import { TiPen } from "react-icons/ti";
import "../styles/components/Home.css";
import { AuthContext } from "../hooks/useAuthentication";
const Home = () => {
  const {token} = useContext(AuthContext);
  const data = [
    {
      icon: <GoDatabase size="2.5em" />,
      title: "Almacenamiento",
      button: "Guardar ahora",
      text: "Almacena tus mediciones de presión arterial.",
    },
    {
      icon: <FaShare size="2.5em" />,
      title: "Comparte los resultados",
      button: "Comparte",
      text: "En este apartado, podrás encontrar los resultados en diferentes formatos y listos para compartir",
    },
    {
      icon: <GoGraph size="2.5em" />,
      title: "Gráficas",
      button: "Empezar a visualizar",
      text: "Aquí puedes encontrar tus resultados organizados en prácticas gráficas, con las que podrás hacer un seguimiento por fechas, horarios o un lapzo de tiempo en particular, y llevar así el control de tus variaciones",
    },
    {
      icon: <TiPen size="2.5em" />,
      title: "Recibe consejos",
      button: "Consultar",
      text: "Mejorar los niveles de la presión arterial son mejorar nuestra calidad de vida. Por lo tanto, es importante que puedas consultar en este punto, los Consejos y actividades aquí propuestas",
    },
  ];
console.log(token)
  return (
    <div className="Home">
      
      <section className="presentation">
        <h1>Haz el seguimiento de tu salud</h1>
        <button>Comenzar</button>
      </section>
      <section className="cards">
        {data.map((item, i) => {
          return <LittleCard props={item} key={i} />;
        })}
      </section>
    </div>
  );
};

export default Home;
