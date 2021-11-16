import React from "react";
import TaskForm from "../components/TaskForm";
import TasksList from "../components/TasksList";
import "../styles/components/PressureMain.css";

const TaskMain = () => {
  return (
    <div className="PressureMain">
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default TaskMain;
