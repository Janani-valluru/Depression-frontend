import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import API from "../util/API"; // Assuming this is correctly defined in your project

import { AuthContext } from "../context/AuthContext";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
import Chart from "chart.js/auto";

function Dashboard(props) {
  const [chartData, setChartData] = useState({});

  const { user } = React.useContext(AuthContext); // Access user from AuthContext
  // Access user from AuthContext
  let chartLabels, chartScores;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching dashboard data for user:", user.name);
        const response = await API.getDashboardData(user.name); // Assuming this is your API function to fetch dashboard data
        if (response && response.data) {
          const userData = response.data;

          chartLabels = userData.map((item) => item.title);
          chartScores = userData.map((item) => parseInt(item.score));
          console.log("Chart labels:", chartLabels);
          console.log("Chart scores:", chartScores);
          const data = {
            labels: chartLabels,
            datasets: [
              {
                label: "Score",
                data: chartScores,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          };

          setChartData(data);
        } else {
          console.error(
            "Error fetching dashboard data: Response data is invalid."
          );
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, [user]);

  const options = {
    scales: {
      x: {
        type: "category",
        labels: chartLabels,
        title: {
          display: true,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
        title: {
          display: true,
          text: "Score",
        },
      },
    },
  };
  const chartContainerStyle = {
    marginTop: "100px", // Adjust the top margin to create space
    height: "625px", // Adjust the height as per your requirement
  };

  return (
    <div style={chartContainerStyle}>
      {Object.keys(chartData).length > 0 && (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
}

export default Dashboard;
