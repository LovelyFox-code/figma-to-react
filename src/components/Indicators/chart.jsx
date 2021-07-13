import React from "react";
import { Line } from "react-chartjs-2";

function LineChart(props) {
  console.log(props.value);
  const names = props.value[0];
  // const arr =[];
  // for (var key of Object.keys(names)) {
  //   console.log(key + " -> " + names[key]);
  //   arr.push(names[key])
  // }
  // const dynamika = arr[2];
  
  // console.log(dynamika["rik"]);
  // for(let i = 0; i < dynamika.length; i++){
  //   yValues.push(dynamika[i]["rik"]);
  // }

  let xValues = [1, 3, 5, 6];
  let yValues = [1,2,3,4,5,];

  const data = {
    labels: xValues,
    datasets: [
      {
        fill: true,
        lineTension: 0,
        backgroundColor: "rgba(255, 132, 139, 0.28)",
        borderColor: "#FF848B",
        color: "white",
        data: yValues,
        pointRadius: 4,
        borderWidth: 2,
        pointBackgroundColor: "white",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          color: function (context) {
            return "rgba(255, 255, 255, 0.5)";
          },
        },
      },
      x: {
        grid: {
          borderDashOffset: 10,
          color: function (context) {
            return "rgba(255, 255, 255, 0.5)";
          },
        },

        ticks: {
          color: "#FFFFFF",
        },
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
