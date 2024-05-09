import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import API from "../util/API"; // Assuming this is correctly defined in your project
import { AuthContext } from "../context/AuthContext";
import Recommendations from "./Recommendations"; // Import the Recommendations component
import Chart from "chart.js/auto";
function Dashboard(props) {
  const [chartData, setChartData] = useState({});
  const [predictedLevel, setPredictedLevel] = useState(""); // State to hold predicted depression level
  const { user } = React.useContext(AuthContext); // Access user from AuthContext

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching dashboard data for user:", user.name);
        const response = await API.getDashboardData(user.name); // Assuming this is your API function to fetch dashboard data
        if (response && response.data) {
          const userData = response.data;

          const chartLabels = userData.map((item) => item.title);
          const chartScores = userData.map((item) => parseInt(item.score));
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

          const predictData = userData.map((item) => ({
            username: item.username, // Replace with actual encoded username
            score: parseInt(item.score),
          }));

          // Make HTTP POST request to Flask backend for predictions
          // Adjust data structure as needed
          fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(predictData), // Send data to Flask backend
          })
            .then((response) => response.json())
            .then((predictions) => {
              // Handle predictions in your React component
              console.log(predictions);
              const userPrediction = predictions.find(
                (prediction) => prediction.username === user.name
              );
              if (userPrediction) {
                setPredictedLevel(userPrediction.depression_level);
              }
            })
            .catch((error) => console.error("Error:", error));
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
        labels: chartData.labels,
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
    height: "1050px", // Adjust the height as per your requirement
  };

  return (
    <div style={chartContainerStyle}>
      {Object.keys(chartData).length > 0 && (
        <Line data={chartData} options={options} />
      )}
      <div>
        {predictedLevel && (
          <div>Current Depression Level: {predictedLevel}</div>
        )}
        {/* Display Recommendations based on predictedLevel */}
        {predictedLevel && <Recommendations predictedLevel={predictedLevel} />}
      </div>
    </div>
  );
}

export default Dashboard;
