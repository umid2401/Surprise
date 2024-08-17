import { Line } from "react-chartjs-2";


export default function Linegraph({chartData}) {
  return (
    
     <div className="chart-container  container mx-auto">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      
      <Line data={chartData}
        className='!w-[100%]'
        options={{
          plugins: {
            title: {
              display: true,
              
              text: "Users Gained between 2016-2020"
            }
          }
        }}/>
    </div>   
      
    
  )
}
