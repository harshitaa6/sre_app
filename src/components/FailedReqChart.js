import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const FailedReq = () => {
  const [chartData, setChartData] = useState({
    xLabels: [],
    yLabels: [],
  });
  const fetchChartData = () => {
    fetch(
      process.env.REACT_APP_API + "requests/failed?timespan=P30D&interval=P1D",
      {
        headers: {
          "x-api-key": "wn7n1jq2nyz1sjjmc5ok5kw2gpuqghjvy4ouuogc",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        const data = res.value.segments;
        const new_data = {
          xLabels: [],
          yLabels: [],
        };
        console.log("data received", data);
        data.forEach((d) => {
          new_data.xLabels.push(new Date(d.start).toDateString());
          new_data.yLabels.push(d["requests/failed"].sum);
        });
        console.log("final newData:", new_data);
        setChartData(new_data);
      })
      .catch((err) => console.log("error while fetching the data: ", err));
  };

  useEffect(() => {
    console.log("making fetch request");
    fetchChartData();
  }, []);

  const data = {
    labels: chartData.xLabels,
    datasets: [
      {
        label: "Failed requests",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: chartData.yLabels,
      },
    ],
  };
  return (
    <div style={{ width: "600px", height: "600px" }}>
      <Bar data={data} />
    </div>
  );
};

export default FailedReq;
