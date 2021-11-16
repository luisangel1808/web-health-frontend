import React, { useState, useRef, useContext, useEffect } from "react";
import { RiHeartsFill } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { BsFillPenFill } from "react-icons/bs";
import { RiHeartPulseFill } from "react-icons/ri";
import axios from "axios";
import Alert from "@mui/material/Alert";
import "../styles/components/Form.css";
import { makeValoration, toIso } from "../utils/pressureValoration";
import PressureContext from "../context/Pressure/PressureContext";
import { Snackbar } from "@mui/material";

const PressureForm = () => {
  const [systolic, setSystolic] = useState(0);
  const [diastolic, setDiastolic] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleString());
  const [pulse, setPulse] = useState(0);
  const [observations, setObservations] = useState("");
  const [pressureE, setPressureE] = useState({});
  const [button, setButton] = useState("Guardar");
  const [title, setTitle] = useState("Nuevo registro");
  const form = useRef(null);

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    severity: "success",
  });

  const [state2, setState2] = useState({
    messageWarning: "Alerta presión elevada",
    openWarning: false,
  });

  const { vertical, horizontal, open, message, severity } = state;
  const { messageWarning, openWarning } = state2;

  const { selectedPressure, clearPressureSelected, update, setUpdate } =
    useContext(PressureContext);

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleClose2 = () => {
    setState2({ ...state2, openWarning: false });
  };

  useEffect(() => {
    if (selectedPressure !== null) {
      setButton("Editar");
      setTitle("Editar registro");
      setPressureE(selectedPressure);
    } else {
      setButton("Guardar");
      setTitle("Nuevo registro");
      setPressureE({
        systolic: 0,
        diastolic: 0,
        pulse: 0,
        observations: "",
        date: toIso(),
      });
    }
  }, [selectedPressure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //form.current[0].value ="";
    //form.current[1].value ="";
    if (makeValoration(systolic, diastolic) > 2) {
      setState2({
        ...state,
        openWarning: true,
        messageWarning: "Alerta presión elevada",
      });
    }

    try {
      if (selectedPressure) {
        await axios.patch(
          `http://localhost:4000/api/pressure/${selectedPressure._id}`,
          {
            systolic,
            diastolic,
            date,
            observations,
            pulse,
            valoration: makeValoration(systolic, diastolic),
          }
        );
        setState({
          ...state,
          open: true,
          message: "Editado exitosamente",
          severity: "success",
          vertical: "top",
        });
        setUpdate(!update);
      } else {
        await axios.post("http://localhost:4000/api/pressure", {
          idUser: "1",
          systolic,
          diastolic,
          date,
          observations,
          pulse,
          valoration: makeValoration(systolic, diastolic),
        });
        setState({
          ...state,
          open: true,
          message: "Guardado exitosamente",
          severity: "success",
          vertical: "top",
        });
        setUpdate(!update);
      }
      //localStorage.token = res.data.token;
      //localStorage.username = username;
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
        <h2>{title}</h2>
        <form onSubmit={handleSubmit} ref={form}>
          <p>Presión sistólica</p>
          <div className="inp">
            <RiHeartsFill />
            <input
              type="number"
              name="systolic"
              min={50}
              max={210}
              defaultValue={pressureE.systolic}
              onChange={(e) => setSystolic(e.target.value)}
            />
          </div>
          <p>Presión diástolica</p>
          <div className="inp">
            <RiHeartsFill />
            <input
              type="number"
              name="diastolic"
              min={50}
              max={210}
              defaultValue={pressureE.diastolic}
              onChange={(e) => setDiastolic(e.target.value)}
            />
          </div>
          <p>Pulso</p>
          <div className="inp">
            <RiHeartPulseFill />
            <input
              type="number"
              name="pulse"
              min={50}
              max={210}
              defaultValue={pressureE.pulse}
              onChange={(e) => setPulse(e.target.value)}
            />
          </div>
          <p>Fecha</p>
          <div className="inp" key={pressureE.date}>
            <MdOutlineDateRange />
            <input
              type="datetime-local"
              name="date"
              max={toIso()}
              defaultValue={toIso(pressureE.date)}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <p>Observaciones</p>
          <div className="inp" key={pressureE.observations}>
            <BsFillPenFill />
            <textarea
              name="observations"
              id=""
              cols="24"
              rows="2"
              defaultValue={pressureE.observations}
              onChange={(e) => setObservations(e.target.value)}
            />
          </div>
          <button>{button}</button>
          <button type="button" onClick={() => clearPressureSelected()}>
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

      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openWarning}
        onClose={handleClose2}
        message={messageWarning}
        key={"topright"}
      >
        <Alert onClose={handleClose2} severity="warning" sx={{ width: "100%" }}>
          {messageWarning}
        </Alert>
      </Snackbar>
    </>
  );
};

export default PressureForm;
