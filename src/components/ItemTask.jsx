import React from "react";
import {
  frequencyCatalog,
  importanceCatalog,
} from "../utils/pressureValoration";

const ItemTask = (props) => {
  const {
    task: { title, description, importance, frequency },
  } = props;

  return (
    <li className="itemTask">
      <div className="title"> 
        <span>{title}</span>
      </div>
      <div className="description">
        <span>{description}</span>
      </div>
      <div>
        <div className="importance">
          <span>{importanceCatalog(importance)}</span>
        </div>
        <div className="frequency">
          <span>{frequencyCatalog(frequency)}</span>
        </div>
      </div>
    </li>
  );
};

export default ItemTask;
