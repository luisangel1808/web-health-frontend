import React from "react";
import PressureForm from "../components/PressureForm";
import PressureTable from "../components/tables/PressureTable";
import "../styles/components/PressureMain.css";

const PressureMain = () => {
  return (
    <div className="PressureMain">
      <PressureForm />
      <PressureTable />
    </div>
  );
};

export default PressureMain;
