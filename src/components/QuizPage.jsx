import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizQuestions } from "./constants/quizquestions";
import { useScoreContext } from "../hooks/useScoreContext";
import { Tests } from "./constants/data";
import "../styles/quizpage.css";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const QuizPage = () => {
  const { dispatch } = useScoreContext();
  const navigate = useNavigate();
  const { test } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const { user } = React.useContext(AuthContext); // Access user from AuthContext

  useEffect(() => {
    if (!quizQuestions[test]) {
      navigate("/");
    } else {
      setTitle(quizQuestions[test].title);
      setQuestions(quizQuestions[test].questions);
    }
  }, []);
  console.log(quizQuestions[test]);
  console.log(quizQuestions[test].title);
  function getTypeIDByHeading(data, searchString) {
    console.log(searchString);
    for (const item of data) {
      console.log(item);
      if (item.heading.toLowerCase() === searchString.toLowerCase()) {
        return item.type_id;
      }
    }
    return null; // Return null if no match is found
  }
  const matchingTypeId = getTypeIDByHeading(Tests, quizQuestions[test].title);
  console.log(matchingTypeId); // Output: 6
  console.log(Tests);
  const handleClick = (answer) => {
    // add to score
    if (answer === "v") {
      setScore(score + 2);
    } else if (answer === "s") {
      setScore(score + 1);
    } else {
      setScore(score + 0);
    }

    // go to next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log(score);
      console.log();
      // end of quiz
      localStorage.setItem("score", JSON.stringify(score));
      dispatch({
        type: "UPDATE_SCORE",

        payload: {
          username: user?.name,
          title,
          score,
          type_id: matchingTypeId,
        },
      });

      navigate(`/results`, { state: { title } });
    }
  };

  return (
    <div className="quiz-page-container">
      <div className="quiz-page-title">{title}</div>
      <div className="quiz-page-question">{questions[currentQuestion]}</div>
      <div className="quiz-answers">
        <div onClick={() => handleClick("v")} className="quiz-answer">
          Very Often
        </div>
        <div onClick={() => handleClick("s")} className="quiz-answer">
          Sometimes
        </div>
        <div onClick={() => handleClick("n")} className="quiz-answer">
          Never
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
