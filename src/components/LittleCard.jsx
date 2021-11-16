import React from "react";
import "../styles/components/Card.css";

const LittleCard = (props) => {
  const {
    props: { icon, title, text, button },
  } = props;
  return (
    <div className="Card">
      {icon}
      <h2>{title}</h2>
      <p>{text}</p>
      <button>{button}</button>
    </div>
  );
};

export default LittleCard;
