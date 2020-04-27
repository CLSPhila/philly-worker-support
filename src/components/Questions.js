import React from "react";
import AreYouCurrentlyWorking from "./questions/AreYouCurrentlyWorking";
import NotCurrentlyWorking from "./questions/NotCurrentlyWorking";
import CurrentlyWorking from "./questions/CurrentlyWorking";
import * as FedSickLeaveQuestions from "./questions/FedSickLeaveQuestions";
/**
 * In this module, define a list of the questions to be asked
 * by creating an array. Each elementof the array identifies
 * the Component that asks a question, and an 'id' for the
 * question.
 */

/**
 * Given the current answers to the questions, return the component that should get rendered.
 * @param {*} state
 */
export function pickQuestion(state, dispatch) {
  if (state.areYouCurrentlyWorking.answer === "Yes") {
    if (state.currentlyWorkingReasonForSeekingHelp.answer === null) {
      return <CurrentlyWorking dispatch={dispatch} />;
    }
    return <div> Default </div>;
  }

  if (state.areYouCurrentlyWorking.answer === "No") {
    if (state.notCurrentlyWorkingReasonForSeekingHelp.answer === null) {
      return (
        <NotCurrentlyWorking
          dispatch={dispatch}
          questionId="notCurrentlyWorkingReasonForSeekingHelp"
        />
      );
    }
  }

  // Default
  return <AreYouCurrentlyWorking dispatch={dispatch} />;
}

export const questions = [
  {
    id: "areYouCurrentlyWorking",
    component: AreYouCurrentlyWorking,
  },
  {
    id: "currentlyWorkingReasonForSeekingHelp",
    component: CurrentlyWorking,
  },
  {
    id: "notCurrentlyWorkingReasonForSeekingHelp",
    component: NotCurrentlyWorking,
  },
  {
    id: "hasPublicEmployer",
    component: FedSickLeaveQuestions.HasPublicEmployer,
  },
];
