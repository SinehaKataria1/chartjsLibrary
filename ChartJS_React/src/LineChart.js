import {Line,getElementAtEvent} from "react-chartjs-2";
import {useRef} from "react"
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
}from 'chart.js'
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
function LineChart() {
  const data={
    labels:["Mon","Tue","Wed"],
    datasets:[
      {
        label:'Weekdays',
        data:[30,33,66],
        borderColor:"Black",
        tension:0.4,//curve
        backgroundColor:"red",
        link:["https://www.chartjs.com/","https://www.chartjs3.com/","https://www.google.com/"]

      }
    ]
  }
  const options={

  }
  const onclick=
    (event) => {
     if(getElementAtEvent(chartRef.current,event).length>0){
      //click without circle it gives no information so if length >0 so it shows only circle points data
      // console.log(getElementAtEvent(chartRef.current,event));
      const clickDatasetindex=getElementAtEvent(chartRef.current,event)[0].datasetIndex;
      // console.log("DatasetIndex:",clickDatasetindex);
      const Datapoint=getElementAtEvent(chartRef.current,event)[0].index;
      // console.log("Index:",Datapoint);
      const link=data.datasets[clickDatasetindex].link[Datapoint];
       window.open(link,"_blank")
     }
    }
  const chartRef=useRef();
  return (
    <div className="App">
      <h1>Clickable links on line chart</h1>
      <div style={{width:'80%',padding:"20px"}}>
        <Line data={data} 
        options={options}
        onClick={onclick}
        ref={chartRef}
         >

        </Line>
      </div>
    </div>
  );
}

export default LineChart;
