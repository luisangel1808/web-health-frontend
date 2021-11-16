import React, { useContext, useEffect } from "react";
import TaskContext from "../context/task/TaskContext";
import ItemTask from "./ItemTask";

const TasksList = () => {
  const { getTasks, tasks, update } = useContext(TaskContext);
  useEffect(() => {
    getTasks("6187f3956b5aaa977e002c50");
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
