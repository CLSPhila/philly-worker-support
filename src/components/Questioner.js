import React, { useReducer } from "react";

/**
 * Machinery for running a guided interview.
 */

const createQuestions = (questions) => {
  const initialState = questions.reduce(
    (qs, thisQ) => ({
      ...qs,
      [thisQ.id]: { id: thisQ.id, answer: null },
    }),
    {}
  );
  return initialState;
};

const questionReducer = (state, action) => {
  console.log("processing action: ");
  console.log(action);
  switch (action.type) {
    case "UPDATE_ANSWER":
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          answer: action.payload.answer,
        },
      };

    default:
      return state;
  }
};

function Questioner({ questions, pickQuestion }) {
  const [state, dispatch] = useReducer(
    questionReducer,
    questions,
    createQuestions
  );
  return <div>{pickQuestion(state, dispatch)}</div>;
}

export default Questioner;
