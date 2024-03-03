import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/user/signup");
      const data = response.data;
      setUserData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="side-menu">
        {/* Display user data in the left menu */}
        {userData && (
          <div>
            <h2>User Information</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </div>
        )}
      </div>
      <div className="graph-container">
        {/* Placeholder for the graph */}
        <h2>Graph</h2>
      </div>
    </div>
  );
}

export default Dashboard;
