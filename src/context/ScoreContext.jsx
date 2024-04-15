// ScoreContextProvider.jsx
import { createContext, useReducer, useEffect } from "react";

export const ScoreContext = createContext();

export const scoreReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SCORE":
      return {
        ...state,
        score: action.payload.score,
        title: action.payload.title,
        type_id: action.payload.type_id,
      };
    default:
      return state;
  }
};

export const ScoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scoreReducer, {
    score: 0,
    title: null,
    type_id: null,
  });

  useEffect(() => {
    const score = JSON.parse(localStorage.getItem("score"));
    if (score) {
      dispatch({
        type: "UPDATE_SCORE",
        payload: { score: score, title: state.title, type_id: state.type_id },
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
