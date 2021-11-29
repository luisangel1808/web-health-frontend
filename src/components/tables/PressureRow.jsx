import axios from 'axios';
import React, { useContext } from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { valorationCatalog } from '../../utils/pressureValoration';
import PressureContext from '../../context/Pressure/PressureContext';

const PressureRow = ({measurement, index}) => {
    
    const {getPressure, update, setUpdate} = useContext(PressureContext)

    const deleteMeasurement = async(id) =>{
        if (window.confirm('¿Estás seguro que quieres borrarlo?'))
            await axios.delete(`http://localhost:4000/api/pressure/${id}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.token}` 
                },
            });
            setUpdate(!update);
    }

    const editMeasurement = measurement=>{
        getPressure(measurement._id);
    }

    return (
        <tr>
            <td>{index}</td>
            <td>{measurement.systolic}</td>
            <td>{measurement.diastolic}</td>
            <td>{measurement.pulse}</td>
            <td>{valorationCatalog(measurement.valoration)}</td>
            <td>{(new Date(measurement.date).toLocaleString()).slice(0,-3)}</td>
            <td>{measurement.observations}</td>
            <td><button onClick={()=>editMeasurement(measurement)}><BiEditAlt color="blue" size="1.5em"/></button></td>
            <td><button onClick={()=>deleteMeasurement(measurement._id)}><RiDeleteBin5Fill color="red" size="1.5em"/></button></td>
        </tr>
        
    )
}
export default PressureRow
