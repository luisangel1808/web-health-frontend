import React, { useState, useRef, useContext, useEffect } from "react";
import { RiHeartsFill } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { RiHeartPulseFill } from "react-icons/ri";
import axios from "axios";
import Alert from "@mui/material/Alert";
import "../styles/components/Form.css";
import TaskContext from "../context/task/TaskContext";
import { Snackbar } from "@mui/material";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [titleForm, setTitleForm] = useState("Nueva tarea");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [button, setButton] = useState("Guardar");
  const form = useRef(null);

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    severity: "success",
  });

  const { vertical, horizontal, open, message, severity } = state;

  const { selectedTask, clearTaskSelected, update, setUpdate } =
    useContext(TaskContext);

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  useEffect(() => {
    if (selectedTask !== null) {
      setButton("Editar");
      setTitleForm("Editar tarea");
    } else {
      setButton("Guardar");
      setTitleForm("Nueva tarea");
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedTask) {
        await axios.patch(
          `http://localhost:4000/api/user/6187f3956b5aaa977e002c50/add-task`,
          {
            description,
            title,
            importance,
            frequency,
          }
        );
        setState({
          ...state,
          open: true,
          message: "Editado exitosamente",
          severity: "success",
          vertical: "top",
        });
      } else {
        await axios.patch(
          `http://localhost:4000/api/user/6187f3956b5aaa977e002c50/add-task`,
          {
            description,
            title,
            importance,
            frequency,
          }
        );
        setUpdate(!update);
        setState({
          ...state,
          open: true,
          message: "Guardado exitosamente",
          severity: "success",
          vertical: "top",
        });
      }
    } catch (error) {
      setState({
        ...state,
        open: true,
        message: "No se pudo guardar",
        severity: "error",
        vertical: "top",
      });
    }
  };

  return (
    <>
      <div className="Form">
        <h2>{titleForm}</h2>
        <form onSubmit={handleSubmit} ref={form}>
          <p>Título</p>
          <div className="inp">
            <RiHeartsFill />
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <p>Descripción</p>
          <div className="inp">
            <RiHeartsFill />
            <input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <p>Importancia</p>
          <div className="inp">
            <RiHeartPulseFill />
            <select
              name="importance"
              onSelect={(e) => setImportance(e.target.value)}
            >
              <option value="0">Alta</option>
              <option value="1">Media</option>
              <option value="2">Baja</option>
            </select>
          </div>
          <p>Frecuencia</p>
          <div className="inp">
            <MdOutlineDateRange />
            <select
              name="frequency"
              onSelect={(e) => setFrequency(e.target.value)}
            >
              <option value="0">Una vez</option>
              <option value="1">Diariamente</option>
              <option value="2">Semanalmente</option>
            </select>
          </div>
          <button>{button}</button>
          <button type="button" onClick={() => clearTaskSelected()}>
            Cancelar
          </button>
        </form>
      </div>

      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default TaskForm;
