import React, { useReducer } from "react";

import { questions, pickQuestion } from "./Questions";

/**
 * Machinery for running a guided interview.
 */

const createQuestions = (questions) => {
  const initialState = questions.reduce(
    (qs, thisQ) => ({
      ...qs,
      [thisQ.id]: { answer: null },
    }),
    {}
  );
  return initialState;
};

const questionReducer = (state, action) => {
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

export default function () {
  const [state, dispatch] = useReducer(
    questionReducer,
    questions,
    createQuestions
  );
  return <div>{pickQuestion(state, dispatch)}</div>;
}
