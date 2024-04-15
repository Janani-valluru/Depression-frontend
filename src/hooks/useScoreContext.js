import { ScoreContext } from "../context/ScoreContext";
import { useContext, useEffect } from "react";

export const useScoreContext = () => {
  const context = useContext(ScoreContext);

  if (!context) {
    throw new Error(
      "useScoreContext must be used within a ScoreContextProvider"
    );
  }

  return context;
};

const Results = async (props) => {
  const { username, title, score, type_id } = props;

  useEffect(() => {
    const sendResults = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/tests/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, title, score, type_id }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Handle the response if needed
      } catch (error) {
        console.error("Error:", error);
      }
    };

    sendResults();
  }, [username, title, score, type_id]);

  return null; // or you can return a loading indicator or handle the response as needed
};

export default Results;
