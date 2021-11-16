import React from "react";
import IndividualVideo from "../components/IndividualVideo";

const Videos = () => {
  const data = [
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Video1",
      text: "Este es el video1",
      id: 1,
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Video2",
      text: "Este es el video2",
      id: 2,
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Video3",
      text: "Este es el video3",
      id: 3,
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Video4",
      text: "Este es el video4",
      id: 4,
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Equipo1",
      text: "Este es el equipo",
      id: 5,
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Equipo1",
      text: "Este es el equipo",
      id: 6,
    },
  ];

  return (
    <div className="Items">
      {data.map((item) => (
        <IndividualVideo props={item} key={item.id} />
      ))}
    </div>
  );
};

export default Videos;
