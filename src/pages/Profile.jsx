import React from "react";
import "../styles/components/Profile.css";

const Profile = () => {
  const name = "Luis Angel Florez Salazar";
  const state = "Lorem ipsum dolor sit amet.";
  const title = "Fide Master";
  const elo = "2156";
  const profession = "Desarrollador de Software";
  const phrase = "Lorem ipsum dolor sit amet.";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde quam libero nostrum id ducimus, accusamus quos est deserunt repudiandae! Soluta laborum tempore quam iusto, omnis ad pariatur facilis ducimus.";
  return (
    <div className="Profile">
      <img
        src="https://static9.depositphotos.com/1011382/1144/i/600/depositphotos_11444770-stock-photo-businesswoman-portrait.jpg"
        alt="imagen"
      />
      <h1>{name}</h1>
      <h3>{state}</h3>
      <div>
        <p>{title}</p>
        <p>{elo}</p>
      </div>
      <h2>{profession}</h2>
      <h4>{phrase}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
