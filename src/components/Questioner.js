import React, { useReducer } from "react";
import AreYouCurrentlyWorking from "./AreYouCurrentlyWorking";
import NotCurrentlyWorking from "./NotCurrentlyWorking";
import CurrentlyWorking from "./CurrentlyWorking";
import ApplyForPua from "./ApplyForPua";

/**
 * Given the current answers to the questions, return the component that should get rendered.
 * @param {*} state
 */
function pickQuestion(state, dispatch) {
  if (state.areYouCurrentlyWorking.answer === "Yes") {
    if (state.currentlyWorkingReasonForSeekingHelp.answer === null) {
      return <CurrentlyWorking dispatch={dispatch} />;
    }
    return <ApplyForPua dispatch={dispatch} />;
  }

  if (
    state.areYouCurrentlyWorking.answer === "No" &&
    state.notCurrentlyWorkingReasonForSeekingHelp === null
  ) {
    return <NotCurrentlyWorking dispatch={dispatch} />;
  }

  // Default
  return <AreYouCurrentlyWorking dispatch={dispatch} />;
}

const questions = {
  areYouCurrentlyWorking: {
    id: "AreYouCurrentlyWorking",
    answer: null,
  },
  currentlyWorkingReasonForSeekingHelp: {
    id: "CurrentlyWorkingReasonForSeekingHelp",
    answer: null,
  },
  notCurrentlyWorkingReasonForSeekingHelp: {
    id: "NotCurrentlyWorkingReasonForSeekingHelp",
    answer: null,
  },
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
  const [state, dispatch] = useReducer(questionReducer, questions);
  return <div>{pickQuestion(state, dispatch)}</div>;
}
