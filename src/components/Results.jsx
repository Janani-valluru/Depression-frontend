import React, { useEffect, useState } from "react";
import "../styles/results.css";
import ResultCard from "./ResultCard";
import { useScoreContext } from "../hooks/useScoreContext";
import { resultCardData } from "./constants/data";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Results = () => {
  const { score, title, type_id } = useScoreContext();
  const { user } = React.useContext(AuthContext);
  const [hasSentResults, setHasSentResults] = useState(false);

  useEffect(() => {
    const sendResultsToServer = async () => {
      try {
        console.log("Sending results to the server...");
        if (user && !hasSentResults) {
          console.log("User and not sent results, proceeding...");
          const response = await axios.post(
            "http://localhost:8000/api/tests/",
            {
              username: user.name, // Assuming 'name' is the correct property
              title,
              score,
              type_id,
            }
          );
          console.log("Results sent successfully!", response.data);
          // Update state to indicate that the results have been sent
        } else {
          console.log("No user or results already sent, skipping...");
        }
        // Handle the response if needed
      } catch (error) {
        console.error("Error:", error);
      }
    };

    sendResultsToServer();
  }, [user, score, title, type_id, hasSentResults]);

  return (
    <div className="results-container">
      <div className="scores-container">
        <div className="quiz-page-title">{title}</div>
        <h1 className="result-title">
          You scored <span className="score">{score}</span>
        </h1>
        <h3>Interpretation of the score</h3>
      </div>

      <div className="resultcards">
        {resultCardData.map((data, idx) => (
          <ResultCard
            key={idx}
            heading={data.heading}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;
