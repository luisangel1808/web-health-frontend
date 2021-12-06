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
      url: "https://www.youtube.com/watch?v=_JDOGSkVMNY"
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Video2",
      text: "Este es el video2",
      id: 2,
      url:"https://www.youtube.com/watch?v=lb6PHOfY39w"
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Video3",
      text: "Este es el video3",
      id: 3,
      url:"https://www.youtube.com/watch?v=8Lawnkm5vTU"
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Video4",
      text: "Este es el video4",
      id: 4,
      url:"https://www.youtube.com/watch?v=ZMUP8VQvAuE"
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Equipo1",
      text: "Este es el equipo",
      id: 5,
      url:"https://www.youtube.com/watch?v=52n6mvaILiM",
    },
    {
      image: {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
      },
      title: "Equipo1",
      text: "Este es el equipo",
      id: 6,
      url:"https://www.youtube.com/watch?v=D3y3pWVQHco",
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
