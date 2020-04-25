import React, { useReducer } from "react";
import AreYouCurrentlyWorking from "./Welcome";
import NotCurrentlyWorking from "./NotCurrentlyWorking";
import CurrentlyWorking from "./CurrentlyWorking";

function pickQuestion(state) {
  if (state.areYouCurrentlyWorking.answer == "Yes") {
    return <CurrentlyWorking />;
  }

  return <AreYouCurrentlyWorking />;
}

const questions = [
  {
    id: "AreYouCurrentlyWorking",
    answer: null,
  },
  {
    id: "CurrentlyWorking",
    answer: null,
  },
  {
    id: "NotCurrentlyWorking",
    answer: null,
  },
];

const questionReducer = (state, action) => {
  switch (action.type) {
    case "ANSWER_QUESTION":
      return state.map((q) => {
        if (q.id === action.id) {
          q.answer = action.answer;
        } else {
          return q;
        }
      });
    default:
      return state;
  }
};

export default function () {
  const [state, dispatch] = useReducer(questionReducer, questions);
  return <div>{pickComponent(state)}</div>;
}
