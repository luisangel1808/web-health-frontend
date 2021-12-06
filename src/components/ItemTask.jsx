import axios from "axios";
import React, { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import TaskContext from "../context/Task/TaskContext";
import {
  frequencyCatalog,
  importanceCatalog,
} from "../utils/pressureValoration";

const ItemTask = (props) => {
  const {
    task: { title, description, importance, frequency, id },
  } = props;

  const { update, setUpdate } =
  useContext(TaskContext);

  const deleteTask = async(id) =>{
    if (window.confirm('¿Estás seguro que quieres borrarlo?')){
      await axios({
        method:'patch',
        url:`https://warm-mountain-11426.herokuapp.com/api/delete-task/${id}`,
  
        headers: {
          Authorization: `Bearer ${localStorage.token}` 
        }
      })
      setUpdate(!update);
    }

}

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
      <button onClick={()=>deleteTask(id)}><RiDeleteBin5Fill color="red" size="1.5em"/></button>
    </li>
    
  );
};

export default ItemTask;
