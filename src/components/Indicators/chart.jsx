import React from "react";
import { Line } from "react-chartjs-2";

function LineChart(props) {
  let dict = {
    indicator: {
      positive: {
        name: "Позитивна оцінка",
        class: "green",
      },
      negative: {
        name: "Негативна оцінка",
        class: "error-light",
      },
      acceptable: {
        name: "Прийнятна оцінка",
        class: "attention_light",
      },
    },
  };
  const num = [];
  for (var key of Object.keys(props.value[0])) {
   num.push(props.value[0][key])
  }
let xValues = num.map(el => el.rik);
let yValues = num.map(el => el.znachennya);
// const changeBgColor =()=>{
//   ???
// }
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
