import React, { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

// register chart
Chart.register(...registerables);

// fetch data
const Graph = () => {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  });

  // create chart
  const chartRef = React.useRef(null);
  const chartData = {
    labels: data?.map((item) => item.day),
    datasets: [
      {
        label: "Expenses",
        data: data?.map((item) => item.amount),
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(10, 79%, 65%, 0.7)",
        borderRadius: 5,
        borderSkipped: false,
        barThickness: 30,
      },
    ],
  };

  // get current date
  const currentDay = new Date().getDay();
  const matchDay = [0, 1, 2, 3, 4, 5, 6];
  const currentDayIndex = matchDay[currentDay];

  // highlight current day
  function highlightCurrentDay() {
    if (chartRef.current) {
      chartRef.current.data.datasets[0].backgroundColor[currentDayIndex] =
        "hsl(186, 34%, 60%)";
      chartRef.current.data.datasets[0].hoverBackgroundColor[currentDayIndex] =
        "hsl(186, 34%, 60%, 0.7)";
    }
  }

  // chart config
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false, // Hide the chart title
      },
      tooltip: {
        display: false,
        position: "nearest",
      },
    },
    elements: {
      bar: {
        borderWidth: 0, // Hide the border for line chart
        hoverBorderWidth: 0,
        callback: highlightCurrentDay,
      },
      point: {
        radius: 0, // Hide the data point
      },
    },
  };
  return (
    <div>
      <Bar ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};

export default Graph;
