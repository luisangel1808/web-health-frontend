import React, { useContext, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import PressureContext from '../context/Pressure/PressureContext';
import '../styles/components/Graphic.css';

const Graphic = () => {

  const {pressures, getPressures} = useContext(PressureContext)
  useEffect(()=>{
      getPressures();
  },[])

    const da= {
        labels: pressures===[]? [] : pressures.map((_,i)=>`${i+1}`),
        //labels: pressures===[]? [] : pressures.map(m=>{(m.date).toLocaleString().slice(0,-3)),
        datasets: [
          {
            label: 'diástolica',
            data: pressures===[]? [] : pressures.map(m=>m.diastolic),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
          },
          {
            label: 'Sistólica',
            data: pressures===[]? [] : pressures.map(m=>m.systolic),
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-1',
          },
          {
            label: 'Pulso',
            data: pressures===[]? [] : pressures.map(m=>m.pulse),
            fill: false,
            backgroundColor: 'rgb(54, 62, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-1',
          },
        ],
    };

/*     const options = {
        responsive:true,
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
            }
          ],
        },
      }; */
      
    return (
        <section className="graphic">
            <Line data={da}  />
        </section>
    )
}

export default Graphic
