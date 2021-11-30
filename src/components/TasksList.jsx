import React, { useContext, useEffect } from "react";
import TaskContext from "../context/Task/TaskContext";
import ItemTask from "./ItemTask";

const TasksList = () => {
  const { getTasks, tasks, update } = useContext(TaskContext);
  useEffect(() => {
    getTasks();
  }, [update]);

  return (
    <div className="List">
      <div className="List-header">Tareas</div>
      <ul>
        <div className="a2">
          {tasks.map((task) => (
            <ItemTask task={task} />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default TasksList;
