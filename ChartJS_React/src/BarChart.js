import React from 'react'
import { Bar, getElementAtEvent } from 'react-chartjs-2'
import { useRef } from 'react'
import {
Chart as ChartJS,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
} from 'chart.js'
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
const BarChart = () => {
    const data={
     labels:["Jan","Feb","Mar","April"],
     datasets:[{
          label:"Sales Numbers",
          data:[10,20,30,40],
          backgroundColor:['rgba(75,192,192,1)','rgba(255,206,86,1)','rgba(75,192,12,1)',"red"],
          borderColor:"black",
          borderWidth:1,
          link:["https://www.google.com","https://www.facebook.com","https://www.instagram.com","https://www.twitter.com"] //add your links here
     } 
     ]
    }
    const options={
        layout:{
            padding:{
                left:90,
                right:0,
                top:0,
                bottom:0
            }
        }, 
    }
    const chartRef=useRef();
    const onclick=(event)=>{
        if(getElementAtEvent(chartRef.current,event).length>0){
            const clickDatasetindex=getElementAtEvent(chartRef.current,event)[0].datasetIndex;
            const Datapoint=getElementAtEvent(chartRef.current,event)[0].index;
            const link=data.datasets[clickDatasetindex].link[Datapoint];
             window.open(link,"_blank");
        }
    }
  return (
    <div>
        <h1>BarChart</h1>
        <div style={{padding:"20px"}}>
            <Bar
            data={data}
            options={options}
            onClick={onclick}
            ref={chartRef}
            >

            </Bar>
        </div>
        
    </div>
  )
}


export default BarChart;