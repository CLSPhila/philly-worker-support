import React from "react";
import NotImplementedYet from "./NotImplementedYet";
import AreYouCurrentlyWorking from "./questions/AreYouCurrentlyWorking";
import NotCurrentlyWorking from "./questions/NotCurrentlyWorking";
import CurrentlyWorking from "./questions/CurrentlyWorking";

import * as FedSickLeaveQuestions from "./questions/FedSickLeaveQuestions";
import * as PhillySickLeaveQuestions from "./questions/PhillySickLeaveQuestions";
import * as FMLAQuestions from "./questions/FMLAQuestions";
import * as ChildCareFMLAQuestions from "./questions/ChildCareFMLAAndUC";

import * as WantLeaveBecauseSickInfo from "./explanations/WantLeaveBecauseSick";

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
    switch (state.currentlyWorkingReasonForSeekingHelp.answer) {
      case "IamSick":
      case "careForSick":
        return (
          pickNextSickLeaveAndFMLAQuestion(state, dispatch) ||
          // Pick the information to provide the user about
          pickSickLeaveAndFMLAInformation(state)
        );
      case "childCare":
        return (
          pickNextChildCareAndFMLAQuestion(state, dispatch) ||
          pickChildCareAndFMLAInformation(state)
        );
      case "reducedHours":
      case "unsafeWorkingConditions":
        return <NotImplementedYet />;
      default:
        return (
          <CurrentlyWorking
            dispatch={dispatch}
            questionId={state.currentlyWorkingReasonForSeekingHelp.id}
          />
        );
    }
  }
  if (state.areYouCurrentlyWorking.answer === "no") {
    if (state.notCurrentlyWorkingReasonForSeekingHelp.answer === null) {
      return (
        <NotCurrentlyWorking
          dispatch={dispatch}
          questionId={state.notCurrentlyWorkingReasonForSeekingHelp.id}
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
  {
    id: "daycareClosed",
    component: ChildCareFMLAQuestions.ChildCareDaycareClosed,
  },
  {
    id: "noSuitableOtherChildcare",
    component: ChildCareFMLAQuestions.NoSuitableOtherChildcare,
  },
  {
    id: "employedThirtyDays",
    component: ChildCareFMLAQuestions.EmployedThirtyDays,
  },
];

/**
 * Determine the next Sick Leave / FMLA question to ask.
 *
 * If we don't need any of those questions, return null.
 * @param {*} state
 */
function pickNextSickLeaveAndFMLAQuestion(state, dispatch) {
  const props = { state, dispatch };

  if (state.hasPublicEmployer.answer === null) {
    return (
      <FedSickLeaveQuestions.HasPublicEmployer
        {...props}
        questionId={state.hasPublicEmployer.id}
      />
    );
  }

  if (
    state.fedSickLeaveEmployerSize.answer === null &&
    state.hasPublicEmployer.answer === "no"
  ) {
    return (
      <FedSickLeaveQuestions.EmployerSize
        {...props}
        questionId={state.fedSickLeaveEmployerSize.id}
      />
    );
  }

  if (state.haveCovid.answer === null) {
    return (
      <FedSickLeaveQuestions.HaveCovid
        {...props}
        questionId={state.haveCovid.id}
      />
    );
  }

  if (state.healthcareWorker.answer === null) {
    return (
      <FedSickLeaveQuestions.HeathcareWorker
        {...props}
        questionId={state.healthcareWorker.id}
      />
    );
  }

  if (state.workInPhilly.answer === null) {
    return (
      <PhillySickLeaveQuestions.WorkInPhilly
        {...props}
        questionId={state.workInPhilly.id}
      />
    );
  }

  if (state.workingNinetyDays.answer === null) {
    return (
      <PhillySickLeaveQuestions.WorkingNinetyDays
        {...props}
        questionId={state.workingNinetyDays.id}
      />
    );
  }

  if (state.isFulltimeEmployee.answer === null) {
    return (
      <PhillySickLeaveQuestions.IsFullTimeEmployee
        {...props}
        questionId={state.isFulltimeEmployee.id}
      />
    );
  }

  if (state.employerHasTenEmployees === null) {
    return (
      <PhillySickLeaveQuestions.EmployerHasTenEmployees
        {...props}
        questionId={state.employerHasTenEmployees.id}
      />
    );
  }

  if (state.twelveMonthsEmployed.answer === null) {
    return (
      <FMLAQuestions.TwelveMonthsEmployed
        {...props}
        questionId={state.twelveMonthsEmployed.id}
      />
    );
  }

  if (state.workedEnoughHoursForFMLA.answer === null) {
    return (
      <FMLAQuestions.WorkedEnoughHours
        {...props}
        questionId={state.workedEnoughHoursForFMLA.id}
      />
    );
  }

  if (state.fiftyNearbyEmployees.answer === null) {
    return (
      <FMLAQuestions.FiftyNearbyEmployees
        {...props}
        questionId={state.fiftyNearbyEmployees.id}
      />
    );
  }

  if (state.sickPersonIsCloseRelative.answer === null) {
    return (
      <FMLAQuestions.SickPersonIsCloseRelative
        {...props}
        questionId={state.sickPersonIsCloseRelative.id}
      />
    );
  }

  console.log("No more fed sick leave questions to ask.");
  return null;
}

/**
 * Pick the Information to show to the user, explaining programs they might
 * be eligible for.
 *
 * TODO there could be 9 combinations, not the 6 we've written out here.
 *
 * @param {} state
 */
function pickSickLeaveAndFMLAInformation(state) {
  const isEligibleForFedSick = checkIfEligibleForFedSick(state);
  const isEligibleForPhillySick = checkIfEligibleForPhillySick(state);
  const isEligibleForFMLA = checkIfEligibleForFMLA(state);

  const phillyLeaveIsPaid = state.employerHasTenEmployees.answer === "yes";

  if (isEligibleForFedSick && isEligibleForPhillySick && isEligibleForFMLA) {
    return (
      <WantLeaveBecauseSickInfo.FedSickPhillySickandFMLA
        phillyLeaveIsPaid={phillyLeaveIsPaid}
      />
    );
  }

  if (isEligibleForFedSick && !isEligibleForPhillySick && !isEligibleForFMLA) {
    return <WantLeaveBecauseSickInfo.FedSickOnly />;
  }

  if (!isEligibleForFedSick && isEligibleForPhillySick && isEligibleForFMLA) {
    return (
      <WantLeaveBecauseSickInfo.PhillySickandFMLA
        phillyLeaveIsPaid={phillyLeaveIsPaid}
      />
    );
  }
  if (!isEligibleForFedSick && isEligibleForPhillySick && !isEligibleForFMLA) {
    return (
      <WantLeaveBecauseSickInfo.PhillySickOnly
        phillyLeaveIsPaid={phillyLeaveIsPaid}
      />
    );
  }
  if (!isEligibleForFedSick && !isEligibleForPhillySick && !isEligibleForFMLA) {
    return <WantLeaveBecauseSickInfo.NotFedSickPhillySickOrFMLA />;
  }
  if (!isEligibleForFedSick && !isEligibleForPhillySick && isEligibleForFMLA) {
    return <WantLeaveBecauseSickInfo.FedSickPhillySickandFMLA />;
  }

  return <div>Sorry, you're not eligible for anything.</div>;
}

/**
 * Determine the next component the user should see, in the
 * sequence of questions about FMLA and childcare.
 * @param {} state
 * @param {*} dispatch
 */
function pickNextChildCareAndFMLAQuestion(state, dispatch) {
  const props = { state, dispatch };

  if (state.hasPublicEmployer.answer === null) {
    return (
      <FedSickLeaveQuestions.HasPublicEmployer
        {...props}
        questionId={state.hasPublicEmployer.id}
      />
    );
  }

  if (
    state.fedSickLeaveEmployerSize.answer === null &&
    state.hasPublicEmployer.answer === "no"
  ) {
    return (
      <FedSickLeaveQuestions.EmployerSize
        {...props}
        questionId={state.fedSickLeaveEmployerSize.id}
      />
    );
  }

  if (state.daycareClosed.answer === null) {
    return (
      <ChildCareFMLAQuestions.ChildCareDaycareClosed
        {...props}
        questionId={state.daycareClosed.id}
      />
    );
  }

  if (state.noSuitableOtherChildcare.answer === null) {
    return (
      <ChildCareFMLAQuestions.NoSuitableOtherChildcare
        {...props}
        questionId={state.noSuitableOtherChildcare.id}
      />
    );
  }

  if (state.employedThirtyDays.answer === null) {
    return (
      <ChildCareFMLAQuestions.EmployedThirtyDays
        {...props}
        questionId={state.EmployedThirtyDays.id}
      />
    );
  }
}

/**
 * Return the component that explains the childcare/fmla info that the
 * user needs.
 * @param {} state
 */
function pickChildCareAndFMLAInformation(state) {}

/**
 * Determine if the user is eligible for federal sick leave.
 * @param {} state
 */
function checkIfEligibleForFedSick(state) {
  const {
    hasPublicEmployer,
    fedSickLeaveEmployerSize,
    haveCovid,
    healthcareWorker,
  } = state;
  if (
    (hasPublicEmployer.answer === "yes" ||
      (hasPublicEmployer.answer === "no" &&
        fedSickLeaveEmployerSize.answer === "ltFiveHundred")) &&
    haveCovid.answer === "yes" &&
    healthcareWorker.answer === "yes"
  ) {
    return true;
  }
  return false;
}

function checkIfEligibleForFMLA(state) {
  const {
    twelveMonthsEmployed,
    workedEnoughHoursForFMLA,
    fiftyNearbyEmployees,
    sickPersonIsCloseRelative,
  } = state;

  if (
    twelveMonthsEmployed.answer === "yes" &&
    workedEnoughHoursForFMLA.answer === "yes" &&
    fiftyNearbyEmployees.answer === "yes" &&
    sickPersonIsCloseRelative === "yes"
  ) {
    return true;
  } else {
    return false;
  }
}

function checkIfEligibleForPhillySick(state) {
  const {
    workInPhilly,
    workingNinetyDays,
    isFulltimeEmployee,
    employerHasTenEmployees,
  } = state;

  if (
    workInPhilly.answer === "yes" &&
    workingNinetyDays.answer === "yes" &&
    isFulltimeEmployee.answer === "yes"
  ) {
    return true;
  }
  return false;
}
