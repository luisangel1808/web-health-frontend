import React, { useContext, useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { MdOutlineChevronLeft, MdOutlineChevronRight, MdOutlineFirstPage, MdOutlineLastPage } from 'react-icons/md';
import PressureRow from './PressureRow';
import '../../styles/components/Pagination.css'
import PressureContext from '../../context/Pressure/PressureContext';

const PressureTable = () => {

    const {getPressures, total, pressures, update} = useContext(PressureContext)

    const titles = ["","Sistólica", "Diástolica", "Pulso", "Estado", "Fecha", "Observaciones","",""];
    const [offset, setOffset] = useState(0);
    //const [limit, setLimit] = useState(5)
    const limit = 5;
    const [pages, setPages] = useState(Math.ceil(total/limit))
    
    useEffect(()=>{
        getPressures(offset, limit);
    },[offset, update])

    useEffect(()=>{
        setPages(Math.ceil(total/limit))
    },[total])

    const handleOffset = (newOffset) =>{
        if(newOffset>=0 && newOffset<pages){
            setOffset(newOffset)
        }
    }

        const numbers= []
        for (let i = 0; i < pages; i++) {
            numbers.push(`${i+1}`)
        }

    
    return pressures.length > 0 ?(
        <div className="PressureTable">
        <h2>Registros</h2>
        <table>
            <thead>
                <tr>
                    {
                        titles.map((title, index) =>(
                            <th key={index}>{title}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        pressures.map((measurement, index)=>(
                            <PressureRow measurement={measurement} key={index} index={index+1} />
                        ))
                    }
            </tbody>
        </table>
        <div className="Pagination">
        <div className="selected">{`Página ${offset + 1} de ${pages}`}</div>
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <MdOutlineFirstPage enableBackground="white" color="gray" size="2.5em" onClick={()=>handleOffset(0)}/>
            <MdOutlineChevronLeft color="gray" size="2.5em" onClick={()=>handleOffset(offset-1)}/>
            {numbers.map(number=>{
                // TODO revisar if(number< offset -1 || number>offset +1)
                    return <div className={number-1 === offset? "number selected": "number"} key={number} onClick={()=>handleOffset(number-1)}> {number} </div>
            })}
            <MdOutlineChevronRight color="gray" size="2.5em" onClick={()=>{handleOffset(offset+1)}}/>
            <MdOutlineLastPage color="gray" size="2.5em" onClick={()=>handleOffset(pages -1)}/>
        </IconContext.Provider>
        </div>
        </div>
    ): (
        <h2>Aún no tiene presiones registradas</h2>
    )
}

export default PressureTable
