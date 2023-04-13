import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Latency = () => {
  const [chartData, setChartData] = useState({
    xLabels: [],
    yLabels: [],
  });

  const fetchChartData = () => {
    fetch(
      process.env.REACT_APP_API +
        "requests/duration?timespan=P30D&interval=PT1",
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
          new_data.yLabels.push(d["requests/duration"].avg);
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

  // Update the data prop to display only the recent 10 values
  const data = {
    labels: chartData.xLabels.slice(-10), // Display only the last 10 labels
    datasets: [
      {
        label: "Latency",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: chartData.yLabels.slice(-10), // Display only the last 10 data points
      },
    ],
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false, // Prevent aspect ratio from being maintained
          scales: {
            x: {
              maxTicksLimit: 10, // Display only a maximum of 10 ticks on the x-axis
            },
          },
        }}
      />
    </div>
  );
};

export default Latency;
