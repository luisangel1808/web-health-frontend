import axios from "axios";
import React, { useEffect, useState } from "react";
import IndividualItem from "../components/IndividualItem";

const Teams = () => {

  const [users, setUsers] = useState([])

  useEffect( async() => {
    const res = await axios({
      method:'get',
      url:`https://warm-mountain-11426.herokuapp.com/api/user`,
      headers: {
        Authorization: `Bearer ${localStorage.token}` 
      }
    })
    setUsers(res.data);
  }, [])


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
      {users.map((item, i) => (
        <IndividualItem props={item} key={i} />
      ))}
    </div>
  );
};

export default Teams;
