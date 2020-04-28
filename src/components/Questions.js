import React from "react";
import AreYouCurrentlyWorking from "./questions/AreYouCurrentlyWorking";
import NotCurrentlyWorking from "./questions/NotCurrentlyWorking";
import CurrentlyWorking from "./questions/CurrentlyWorking";

import * as FedSickLeaveQuestions from "./questions/FedSickLeaveQuestions";
import * as PhillySickLeaveQuestions from "./questions/PhillySickLeaveQuestions";
import * as FMLAQuestions from "./questions/FMLAQuestions";

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
  if (state.areYouCurrentlyWorking.answer === "yes") {
    if (state.currentlyWorkingReasonForSeekingHelp.answer === null) {
      return <CurrentlyWorking dispatch={dispatch} />;
    } else {
      console.log(state);
      if (
        state.currentlyWorkingReasonForSeekingHelp.answer === "IamSick" ||
        state.currentlyWorkingReasonForSeekingHelp.answer === "careForSick"
      ) {
        // If we know why the working person is looking to take time off,
        // we need to ask fmla and sick leave questions.
        if (needAnswersToSickLeaveAndFMLAQuestions(state)) {
          return pickNextSickLeaveAndFMLAQuestion(state, dispatch);
        }
        // Pick the information to provide the user about
        return pickSickLeaveAndFMLAInformation(state, dispatch);
      }
    }
  }

  if (state.areYouCurrentlyWorking.answer === "no") {
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
  {
    id: "fedSickLeaveEmployerSize",
    component: FedSickLeaveQuestions.EmployerSize,
  },
  {
    id: "haveCovid",
    component: FedSickLeaveQuestions.HaveCovid,
  },
  {
    id: "healthcareWorker",
    component: FedSickLeaveQuestions.HeathcareWorker,
  },
  {
    id: "workInPhilly",
    component: PhillySickLeaveQuestions.WorkInPhilly,
  },
  {
    id: "workingNinetyDays",
    component: PhillySickLeaveQuestions.WorkingNinetyDays,
  },
  {
    id: "isFulltimeEmployee",
    component: PhillySickLeaveQuestions.IsFullTimeEmployee,
  },
  {
    id: "employerHasTenEmployees",
    component: PhillySickLeaveQuestions.EmployerHasTenEmployees,
  },
  {
    id: "twelveMonthsEmployed",
    component: FMLAQuestions.TwelveMonthsEmployed,
  },
  {
    id: "workedEnoughHoursForFMLA",
    component: FMLAQuestions.WorkedEnoughHours,
  },
  {
    id: "fiftyNearbyEmployees",
    component: FMLAQuestions.FiftyNearbyEmployees,
  },
  {
    id: "sickPersonIsCloseRelative",
    component: FMLAQuestions.SickPersonIsCloseRelative,
  },
];

/**
 * Determine whether the user has answered the Sick Leave and FMLA questions
 * @param {*} state
 */
function needAnswersToSickLeaveAndFMLAQuestions(state) {
  if (
    state.hasPublicEmployer.answer === null ||
    state.fedSickLeaveEmployerSize.answer === null ||
    state.haveCovid.answer === null ||
    state.healthcareWorker.answer === null ||
    state.workInPhilly.answer === null ||
    state.workingNinetyDays.answer === null ||
    state.isFullTimeEmployee.answer === null ||
    state.employerHasTenEmployees.answer === null ||
    state.twelveMonthsEmployed.answer === null ||
    state.workedEnoughHoursForFMLA.answer === null ||
    state.fiftyNearbyEmployees.answer === null ||
    state.sickPersonIsCloseRelative.answer === null
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * Determine the next Sick Leave / FMLA question to ask.
 * @param {*} state
 */
function pickNextSickLeaveAndFMLAQuestion(props) {
  const { state } = props;

  if (state.hasPublicEmployer.answer === null) {
    return <FedSickLeaveQuestions.HasPublicEmployer {...props} />;
  }

  if (
    state.fedSickLeaveEmployerSize.answer === null &&
    state.hasPublicEmployer.answer === "no"
  ) {
    return <FedSickLeaveQuestions.EmployerSize {...props} />;
  }

  if (state.haveCovid.answer === null) {
    return <FedSickLeaveQuestions.HaveCovid {...props} />;
  }

  if (state.healthcareWorker.answer === null) {
    return <FedSickLeaveQuestions.HeathcareWorker {...props} />;
  }

  if (state.workInPhilly.answer === null) {
    return <PhillySickLeaveQuestions.WorkInPhilly {...props} />;
  }

  if (state.workingNinetyDays.answer === null) {
    return <PhillySickLeaveQuestions.WorkingNinetyDays {...props} />;
  }

  if (state.isFullTimeEmployee.answer === null) {
    return <PhillySickLeaveQuestions.IsFullTimeEmployee {...props} />;
  }

  if (state.employerHasTenEmployees === null) {
    return <PhillySickLeaveQuestions.EmployerHasTenEmployees {...props} />;
  }

  if (state.twelveMonthsEmployed.answer === null) {
    return <FMLAQuestions.TwelveMonthsEmployed {...props} />;
  }

  if (state.workedEnoughHoursForFMLA.answer === null) {
    return <FMLAQuestions.WorkedEnoughHours {...props} />;
  }

  if (state.fiftyNearbyEmployees.answer === null) {
    return <FMLAQuestions.FiftyNearbyEmployees {...props} />;
  }

  if (state.sickPersonIsCloseRelative.answer === null) {
    return <FMLAQuestions.SickPersonIsCloseRelative {...props} />;
  }

  console.log("Error - no more fed sick leave questions to ask.");
  return null;
}

function pickSickLeaveAndFMLAInformation(props) {
  return <div>Here's the final paid sick leave info.</div>;
}
