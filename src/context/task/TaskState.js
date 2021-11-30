import React, { useReducer, useState } from "react";
import TaskReducer from "./TaskReducer";
import TaskContext from "./TaskContext";
import axios from "axios";

const TaskState = (props) => {
  const initialState = {
    tasks: [],
    selectedTask: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);
  const [update, setUpdate] = useState(false);

  const getTasks = async () => {
    try {
      const res = await axios.get(`https://warm-mountain-11426.herokuapp.com/api/user-data`,{
        headers: {
          Authorization: `Bearer ${localStorage.token}` ,
        }
      });
      dispatch({
        type: "GET_TASKS",
        payload: res.data? res.data.tasks : [],
      });
    } catch (error) {
      alert(`Las tareas no pudieron consultarse ${error}`);
    }
  };

  const getTask = async (id, idUser) => {
    const res = await axios.get(`https://warm-mountain-11426.herokuapp.com/api/user/${idUser}`,{
      headers: {
        Authorization: `Bearer ${localStorage.token}` 
      }
    });
    const task = res.data.tasks.filter((task) => task.id === id);
    dispatch({
      type: "GET_TASK",
      payload: task,
    });
  };

  const clearTaskSelected = async () => {
    dispatch({
      type: "CLEAR_TASK_SELECTED",
      payload: null,
    });
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        selectedTask: state.selectedTask,
        getTasks,
        getTask,
        clearTaskSelected,
        update,
        setUpdate,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
