import React, { useRef } from 'react'
import{
    Chart as ChartJS,
    ArcElement,
    Legend,
    Tooltip
} from 'chart.js'
import { getElementAtEvent, Pie } from 'react-chartjs-2'
ChartJS.register(
    ArcElement,
    Legend,
    Tooltip
  
)
const PieChart = () => {
    const data={
        labels: ['Jan', 'Feb', 'March','April'],
        datasets: [{
            label: 'Sales',
            data: [20, 60, 90, 10],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
            ],
            borderColor:"black",
            borderWidth: 1,
            hoverBorderWidth: 3,
            hoverBorderColor: '#000',
            link:["https://www.google.com","https://www.facebook.com","https://www.instagram.com","https://www.twitter.com"] //add your links here

            }]
    }
    const options={
        responsive: true,
        maintainAspectRatio: false,//from bigger size to short
        plugins: {
            legend: {
                position: 'bottom',//at bottom 4 data shows with color like jan,feb
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        }
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
        <h1>PieChart</h1>
        <div>
            <Pie data={data}options={options}onClick={onclick}ref={chartRef}>

            </Pie>
        </div>
    </div>

  )
}

export default PieChart