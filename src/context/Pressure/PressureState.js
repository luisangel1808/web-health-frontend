import React, { useReducer, useState } from "react";
import PressureReducer from "./PressureReducer";
import PressureContext from "./PressureContext";
import axios from "axios";

const PressureState = (props) => {
  const initialState = {
    pressures: [],
    total: 0,
    selectedPressure: null,
  };
  const [update, setUpdate] = useState(false);
  const [state, dispatch] = useReducer(PressureReducer, initialState);

  const getPressures = async (idUser, offset = 0, limit = 5) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/${idUser}/pressure`,
        { params: { offset, limit } }
      );
      dispatch({
        type: "GET_PRESSURES",
        payload: res.data,
      });
    } catch (error) {
      alert(`Los registros no pudieron consultarse ${error}`);
    }
  };

  const getPressure = async (id) => {
    const res = await axios.get(`http://localhost:4000/api/pressure/${id}`);
    dispatch({
      type: "GET_PRESSURE",
      payload: res.data,
    });
  };

  const clearPressureSelected = async () => {
    dispatch({
      type: "CLEAR_PRESSURE_SELECTED",
      payload: null,
    });
  };
  return (
    <PressureContext.Provider
      value={{
        pressures: state.pressures,
        selectedPressure: state.selectedPressure,
        getPressures,
        getPressure,
        clearPressureSelected,
        total: state.total,
        update,
        setUpdate,
      }}
    >
      {props.children}
    </PressureContext.Provider>
  );
};

export default PressureState;
