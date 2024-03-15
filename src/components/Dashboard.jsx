import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [iframeUrl, setIframeUrl] = useState(""); // State to store the iframe URL

  /*useEffect(() => {
    // Fetch the embedded dashboard URL from the backend
    axios
      .get(
        "http://localhost:3000/public/dashboard/11940347-167b-4364-9193-bc58f4d2a204"
      )
      .then((response) => {
        setIframeUrl(response.data.iframeUrl);
      })
      .catch((error) => {
        console.error("Error fetching embedded dashboard URL:", error);
      });
  }, []); // Run this effect only once on component mount*/

  return (
    <div>
      <iframe
        src={
          "http://localhost:3000/public/dashboard/11940347-167b-4364-9193-bc58f4d2a204"
        }
        title="Metabase Dashboard"
        width="100%"
        height="600"
        frameBorder="0"
        style={{ opacity: 0.5 }}
      ></iframe>
    </div>
  );
}

export default Dashboard;
