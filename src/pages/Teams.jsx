import React from "react";
import IndividualItem from "../components/IndividualItem";

const Teams = () => {
  const data = [
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Equipo1",
      text: "Este es el equipo",
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Equipo1",
      text: "Este es el equipo",
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Equipo1",
      text: "Este es el equipo",
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Equipo1",
      text: "Este es el equipo",
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Equipo1",
      text: "Este es el equipo",
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Equipo1",
      text: "Este es el equipo",
    },
  ];

  return (
    <div className="Items">
      {data.map((item, i) => (
        <IndividualItem props={item} key={i} />
      ))}
    </div>
  );
};

export default Teams;
