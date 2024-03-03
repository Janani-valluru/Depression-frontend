// ScoreContextProvider.jsx
import { createContext, useReducer, useEffect } from "react";

export const ScoreContext = createContext();

export const scoreReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SCORE":
      return {
        score: action.payload.score,
        title: action.payload.title,
      };
    default:
      return state;
  }
};

export const ScoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scoreReducer, {
    score: 0,
    title: null,
  });

  useEffect(() => {
    const score = JSON.parse(localStorage.getItem("score"));
    if (score) {
      dispatch({
        type: "UPDATE_SCORE",
        payload: { score: score, title: state.title },
      });
    }
  }, []);

  console.log("ScoreContext state: ", state);

  return (
    <ScoreContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
