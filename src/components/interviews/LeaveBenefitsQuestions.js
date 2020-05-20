import React from "react";
import { Redirect } from "react-router-dom";
import AreYouCurrentlyWorking from "../questions/AreYouCurrentlyWorking";
import NotCurrentlyWorking from "../questions/NotCurrentlyWorking";
import CurrentlyWorking from "../questions/CurrentlyWorking";

// Questions
import * as FedSickLeaveQuestions from "../questions/FedSickLeaveQuestions";
import * as PhillySickLeaveQuestions from "../questions/PhillySickLeaveQuestions";
import * as FMLAQuestions from "../questions/FMLAQuestions";
import * as ChildCareFMLAQuestions from "../questions/ChildCareFMLAAndUC";
import * as EmployeeOrICQuestions from "../questions/EmployeeOrIndependent";

// Information at endpoints of interview.
import * as WantLeaveBecauseSickInfo from "../explanations/WantLeaveBecauseSick";
import * as WantLeaveToCareForSickRel from "../explanations/WantLeaveToCareForSickRelative";
import { ReducedHoursExplanation } from "../explanations/WantLeaveBecauseReducedHours";
import * as WantLeaveForDaycareInfo from "../explanations/WantLeaveForDaycare";
import * as WantLeaveBecauseUnsafe from "../explanations/WantLeaveBecauseUnsafe";
import * as ProtectedLeaveInfo from "../explanations/ProtectedLeave";
import { WorkersRightToComplain } from "../explanations/WorkersCanComplain";
import { NoOtherHelp } from "../explanations/NoOtherHelp";
import * as WantLeaveBecauseWorkClosed from "../explanations/WantLeaveBecauseWorkClosed";

/**
 * In this module, define a list of the questions to be asked
 * by creating an array. Each elementof the array identifies
 * the Component that asks a question, and an 'id' for the
 * question.
 */

export const INTERVIEW_SLUG = "leave-benefits";

/**
 * Given the current answers to the questions, return the component that should get rendered.
 * @param {*} state
 */
export function pickQuestion(state, dispatch) {
  if (state.areYouCurrentlyWorking.answer === "yes") {
    switch (state.currentlyWorkingReasonForSeekingHelp.answer) {
      case "IamSick":
        return (
          pickNextSickLeaveAndFMLAQuestion(state, dispatch) ||
          // Pick the information to provide the user about
          pickSickLeaveAndFMLAInformation(state)
        );
      case "careForSick":
        return (
          pickNextSickLeaveAndFMLAQuestion(state, dispatch) ||
          // Pick the information to provide the user about
          pickSickLeaveAndFMLAWhenCaringForRelativeInformation(state)
        );
      case "childCare":
        return (
          pickNextChildCareAndFMLAQuestion(state, dispatch) ||
          pickChildCareAndFMLAInformation(state)
        );
      case "reducedHours":
        return redirectToSlug("reduced-hours", state);
      case "unsafeWorkingConditions":
        return (
          pickNextEmployeeOrIndependentQuestion(state, dispatch) ||
          pickEmployeeOrNonEmployeeInformation(state)
        );
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
    switch (state.notCurrentlyWorkingReasonForSeekingHelp.answer) {
      case "sickleave":
      case "sickcare":
        return (
          pickNextSickLeaveAndFMLAQuestion(state, dispatch) ||
          pickProtectedLeaveInformation(state)
        );
      case "childcare":
        return (
          pickNextChildCareAndFMLAQuestion(state, dispatch) ||
          pickChildCareAndFMLAInformation(state)
        );
      case "workingconditions":
        return redirectToSlug("workers-right-to-complain", state);
      case "workClosed":
        return (
          pickNextPhillySickQuestion(state, dispatch) ||
          pickPhillySickLeaveInformation(state)
        );
      case "other":
        return redirectToSlug("other", state);
      default:
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
// TODO Don't need to identify the components in the questions list.
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
    id: "anySuitableOtherChildcare",
    component: ChildCareFMLAQuestions.AnySuitableOtherChildcare,
  },
  {
    id: "employedThirtyDays",
    component: ChildCareFMLAQuestions.EmployedThirtyDays,
  },
  {
    id: "haveBoss",
    component: EmployeeOrICQuestions.HaveBoss,
  },
  {
    id: "trackHours",
    component: EmployeeOrICQuestions.TrackHours,
  },
  {
    id: "ownBusiness",
    component: EmployeeOrICQuestions.OwnBusiness,
  },
];

export const explanations = [
  {
    slug: "reduced-hours",
    component: <ReducedHoursExplanation />,
  },
  {
    slug: "workers-right-to-complain",
    component: <WorkersRightToComplain />,
  },
  {
    slug: "other",
    component: <NoOtherHelp />,
  },
  {
    slug: "nlra-osha",
    component: <WantLeaveBecauseUnsafe.NLRAStateOrderOSHA />,
  },
  {
    slug: "unsafe-nonemployee",
    component: <WantLeaveBecauseUnsafe.NonEmployeeAdvice />,
  },
  {
    slug: "leave-is-protected",
    component: <ProtectedLeaveInfo.LeaveIsProtected />,
  },
  {
    slug: "leave-not-protected",
    component: <ProtectedLeaveInfo.LeaveIsNotProtected />,
  },
  {
    slug: "fed-sick-philly-paid-sick-and-fmla",
    component: (
      <WantLeaveBecauseSickInfo.FedSickPhillySickandFMLA
        phillyLeaveIsPaid={true}
      />
    ),
  },
  {
    slug: "fed-sick-philly-unpaid-sick-and-fmla",
    component: (
      <WantLeaveBecauseSickInfo.FedSickPhillySickandFMLA
        phillyLeaveIsPaid={false}
      />
    ),
  },
  {
    slug: "eligible-philly-leave",
    component: <WantLeaveBecauseWorkClosed.EligibleForPhillyLeave />,
  },
  {
    slug: "ineligible-philly-leave",
    component: <WantLeaveBecauseWorkClosed.NotEligibleForPhillyLeave />,
  },
  {
    slug: "fmla-for-childcare",
    component: <WantLeaveForDaycareInfo.QualifyForFMLA />,
  },
  {
    slug: "no-fmla-for-childcare",
    component: <WantLeaveForDaycareInfo.NotQualifiedForFMLA />,
  },
  {
    slug: "fed-sick-only",
    component: <WantLeaveBecauseSickInfo.FedSickOnly />,
  },
  {
    slug: "philly-paid-sick-and-fmla",
    component: (
      <WantLeaveBecauseSickInfo.PhillySickandFMLA phillyLeaveIsPaid={true} />
    ),
  },
  {
    slug: "philly-unpaid-sick-and-fmla",
    component: (
      <WantLeaveBecauseSickInfo.PhillySickandFMLA phillyLeaveIsPaid={false} />
    ),
  },
  {
    slug: "philly-paid-sick",
    component: (
      <WantLeaveBecauseSickInfo.PhillySickOnly phillyLeaveIsPaid={true} />
    ),
  },
  {
    slug: "philly-unpaid-sick",
    component: (
      <WantLeaveBecauseSickInfo.PhillySickOnly phillyLeaveIsPaid={false} />
    ),
  },
  {
    slug: "not-fed-sick-philly-sick-or-fmla",
    component: <WantLeaveBecauseSickInfo.NotFedSickPhillySickOrFMLA />,
  },
  {
    slug: "fmla",
    component: <WantLeaveBecauseSickInfo.FMLAOnly />,
  },
  {
    slug: "sick-relative-fed-sick-only",
    component: <WantLeaveToCareForSickRel.FedSickOnly />,
  },
  {
    slug: "sick-relative-philly-paid-sick-and-fmla",
    component: (
      <WantLeaveToCareForSickRel.PhillySickandFMLA phillyLeaveIsPaid={true} />
    ),
  },
  {
    slug: "sick-relative-philly-unpaid-sick-and-fmla",
    component: (
      <WantLeaveToCareForSickRel.PhillySickandFMLA phillyLeaveIsPaid={false} />
    ),
  },
  {
    slug: "sick-relative-philly-paid-sick",
    component: (
      <WantLeaveToCareForSickRel.PhillySickOnly phillyLeaveIsPaid={true} />
    ),
  },
  {
    slug: "sick-relative-philly-unpaid-sick",
    component: (
      <WantLeaveToCareForSickRel.PhillySickOnly phillyLeaveIsPaid={false} />
    ),
  },
  {
    slug: "sick-relative-not-fed-sick-philly-sick-or-fmla",
    component: <WantLeaveToCareForSickRel.NotFedSickPhillySickOrFMLA />,
  },
  {
    slug: "sick-relative-fmla",
    component: <WantLeaveToCareForSickRel.FMLAOnly />,
  },
];

/**
 * Determine the next question to ask related to whether user is
 * an Independent Contractor or Employee.
 */
function pickNextEmployeeOrIndependentQuestion(state, dispatch) {
  const props = { state, dispatch };
  if (state.haveBoss.answer === null) {
    return (
      <EmployeeOrICQuestions.HaveBoss
        {...props}
        questionId={state.haveBoss.id}
      />
    );
  }

  if (state.trackHours.answer === null) {
    return (
      <EmployeeOrICQuestions.TrackHours
        {...props}
        questionId={state.trackHours.id}
      />
    );
  }

  if (state.ownBusiness.answer === null) {
    return (
      <EmployeeOrICQuestions.OwnBusiness
        {...props}
        questionId={state.ownBusiness.id}
      />
    );
  }

  return null;
}

/**
 * Determine the information to show use to explain rights of employees
 * and independent contractors.
 * @param {} state
 */
function pickEmployeeOrNonEmployeeInformation(state) {
  if (
    (state.haveBoss.answer === "yes" || state.trackHours.answer === "yes") &&
    state.ownBusiness.answer === "no"
  ) {
    return redirectToSlug("nlra-osha", state);
  } else {
    return redirectToSlug("unsafe-nonemployee", state);
  }
}
/**
 * Determine the next Sick Leave / FMLA question to ask.
 *
 * If we don't need any of those questions, return null.
 * @param {*} state
 */
function pickNextSickLeaveAndFMLAQuestion(state, dispatch) {
  return (
    pickNextFedSickQuestion(state, dispatch) ||
    pickNextPhillySickQuestion(state, dispatch) ||
    pickNextFMLAQuestion(state, dispatch)
  );
}

function pickNextFedSickQuestion(state, dispatch) {
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

  if (
    state.healthcareWorker.answer === null &&
    state.fedSickLeaveEmployerSize.answer === "ltFiveHundred"
  ) {
    return (
      <FedSickLeaveQuestions.HeathcareWorker
        {...props}
        questionId={state.healthcareWorker.id}
      />
    );
  }
  return null;
}

function pickNextPhillySickQuestion(state, dispatch) {
  const props = { state, dispatch };

  if (state.workInPhilly.answer === null) {
    return (
      <PhillySickLeaveQuestions.WorkInPhilly
        {...props}
        questionId={state.workInPhilly.id}
      />
    );
  }

  // No need to ask any followups if the person
  // does not work in philly.
  if (state.workInPhilly.answer === "no") {
    return null;
  }

  if (state.workingNinetyDays.answer === null) {
    return (
      <PhillySickLeaveQuestions.WorkingNinetyDays
        {...props}
        questionId={state.workingNinetyDays.id}
      />
    );
  }

  // No need to ask followups if user hasn't worked long enough.
  if (state.workingNinetyDays.answer === "no") {
    return null;
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
  return null;
}

function pickNextFMLAQuestion(state, dispatch) {
  const props = { state, dispatch };

  // if any of these are no, we'll skip the rest by returning null.

  if (state.twelveMonthsEmployed.answer === null) {
    return (
      <FMLAQuestions.TwelveMonthsEmployed
        {...props}
        questionId={state.twelveMonthsEmployed.id}
      />
    );
  }

  if (state.twelveMonthsEmployed.answer === "no") {
    return null;
  }

  if (state.workedEnoughHoursForFMLA.answer === null) {
    return (
      <FMLAQuestions.WorkedEnoughHours
        {...props}
        questionId={state.workedEnoughHoursForFMLA.id}
      />
    );
  }

  if (state.workedEnoughHoursForFMLA.answer === "no") {
    return null;
  }

  if (state.fiftyNearbyEmployees.answer === null) {
    return (
      <FMLAQuestions.FiftyNearbyEmployees
        {...props}
        questionId={state.fiftyNearbyEmployees.id}
      />
    );
  }

  if (state.fiftyNearbyEmployees.answer === "no") {
    return null;
  }

  if (state.sickPersonIsCloseRelative.answer === null) {
    return (
      <FMLAQuestions.SickPersonIsCloseRelative
        {...props}
        questionId={state.sickPersonIsCloseRelative.id}
      />
    );
  }

  return null;
}

/**
 * TODO the logic tree has the FMLA/Federal Sick Leave and Philly Sick Leave questions lead into telling the user if they've got protected or unprotected leave .. how do the questions on FMLA/Federal/Philly Sick Leave determine if leave is "protected" or not? Is leave protected if any of FMLA/Federal Sick/Philly Sick apply?
 * @param {} state
 */
function pickProtectedLeaveInformation(state) {
  if (
    checkIfEligibleForFMLA(state) ||
    checkIfEligibleForFedSick(state) ||
    checkIfEligibleForPhillySick(state)
  ) {
    return redirectToSlug("leave-is-protected", state);
  }
  return redirectToSlug("leave-not-protected", state);
}

function pickSickLeaveAndFMLAWhenCaringForRelativeInformation(state) {
  const isEligibleForFedSick = checkIfEligibleForFedSick(state);
  const isEligibleForPhillySick = checkIfEligibleForPhillySick(state);
  const isEligibleForFMLA = checkIfEligibleForFMLA(state);
  const phillyLeaveIsPaid = state.employerHasTenEmployees.answer === "yes";

  if (isEligibleForFedSick && isEligibleForPhillySick && isEligibleForFMLA) {
    if (phillyLeaveIsPaid) {
      return redirectToSlug(
        "sick-relative-fed-sick-philly-paid-sick-and-fmla",
        state
      );
    } else {
      return redirectToSlug(
        "sick-relative-fed-sick-philly-unpaid-sick-and-fmla",
        state
      );
    }
  }

  if (isEligibleForFedSick && !isEligibleForPhillySick && !isEligibleForFMLA) {
    return redirectToSlug("sick-relative-fed-sick-only", state);
  }

  if (!isEligibleForFedSick && isEligibleForPhillySick && isEligibleForFMLA) {
    if (phillyLeaveIsPaid) {
      return redirectToSlug("sick-relative-philly-paid-sick-and-fmla", state);
    } else {
      redirectToSlug("sick-relative-philly-unpaid-sick-and-fmla", state);
    }
  }
  if (!isEligibleForFedSick && isEligibleForPhillySick && !isEligibleForFMLA) {
    if (phillyLeaveIsPaid) {
      return redirectToSlug("sick-relative-philly-paid-sick", state);
    } else {
      return redirectToSlug("sick-relative-philly-unpaid-sick", state);
    }
  }
  if (!isEligibleForFedSick && !isEligibleForPhillySick && !isEligibleForFMLA) {
    return redirectToSlug(
      "sick-relative-not-fed-sick-philly-sick-or-fmla",
      state
    );
  }
  if (!isEligibleForFedSick && !isEligibleForPhillySick && isEligibleForFMLA) {
    return redirectToSlug("sick-relative-fmla", state);
  }

  return (
    <div>
      Sorry, we could not find any eligible programs This might be a bug with
      our site.
    </div>
  );
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
    if (phillyLeaveIsPaid) {
      return redirectToSlug("fed-sick-philly-paid-sick-and-fmla", state);
    } else {
      return redirectToSlug("fed-sick-philly-unpaid-sick-and-fmla", state);
    }
  }

  if (isEligibleForFedSick && !isEligibleForPhillySick && !isEligibleForFMLA) {
    return redirectToSlug("fed-sick-only", state);
  }

  if (!isEligibleForFedSick && isEligibleForPhillySick && isEligibleForFMLA) {
    if (phillyLeaveIsPaid) {
      return redirectToSlug("philly-paid-sick-and-fmla", state);
    } else {
      redirectToSlug("philly-unpaid-sick-and-fmla", state);
    }
  }
  if (!isEligibleForFedSick && isEligibleForPhillySick && !isEligibleForFMLA) {
    if (phillyLeaveIsPaid) {
      return redirectToSlug("philly-paid-sick", state);
    } else {
      return redirectToSlug("philly-unpaid-sick", state);
    }
  }
  if (!isEligibleForFedSick && !isEligibleForPhillySick && !isEligibleForFMLA) {
    return redirectToSlug("not-fed-sick-philly-sick-or-fmla", state);
  }
  if (!isEligibleForFedSick && !isEligibleForPhillySick && isEligibleForFMLA) {
    return redirectToSlug("fmla", state);
  }

  return (
    <div>
      Sorry, we could not find any eligible programs This might be a bug with
      our site.
    </div>
  );
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

  //skip the rest if No.
  if (state.daycareClosed.answer === "no") {
    return null;
  }

  if (state.anySuitableOtherChildcare.answer === null) {
    return (
      <ChildCareFMLAQuestions.AnySuitableOtherChildcare
        {...props}
        questionId={state.anySuitableOtherChildcare.id}
      />
    );
  }

  if (state.anySuitableOtherChildcare.answer === "yes") {
    return null;
  }

  if (state.employedThirtyDays.answer === null) {
    return (
      <ChildCareFMLAQuestions.EmployedThirtyDays
        {...props}
        questionId={state.employedThirtyDays.id}
      />
    );
  }

  if (state.employedThirtyDays.answer === "no") {
    return null;
  }

  if (state.healthcareWorker.answer === null) {
    return (
      <FedSickLeaveQuestions.HeathcareWorker
        {...props}
        questionId={state.healthcareWorker.id}
      />
    );
  }

  return null;
}

/** Return information about philly sick leave, if person is eligible.  */
function pickPhillySickLeaveInformation(state) {
  const isEligibleForPhillySick = checkIfEligibleForPhillySick(state);

  if (isEligibleForPhillySick) {
    return redirectToSlug("eligible-philly-leave", state);
  }
  return redirectToSlug("ineligible-philly-leave", state);
}

/**
 * Return the component that explains the childcare/fmla info that the
 * user needs.
 * @param {} state
 */
function pickChildCareAndFMLAInformation(state) {
  const {
    hasPublicEmployer,
    fedSickLeaveEmployerSize,
    daycareClosed,
    anySuitableOtherChildcare,
    employedThirtyDays,
    healthcareWorker,
  } = state;
  console.log("picking childcare fmla eligibility");
  console.log(state);
  if (
    (hasPublicEmployer.answer === "yes" ||
      (hasPublicEmployer.answer === "no" &&
        fedSickLeaveEmployerSize.answer === "ltFiveHundred")) &&
    daycareClosed.answer === "yes" &&
    anySuitableOtherChildcare.answer === "no" &&
    employedThirtyDays.answer === "yes" &&
    healthcareWorker.answer === "no"
  ) {
    return redirectToSlug("fmla-for-childcare", state);
  }
  return redirectToSlug("no-fmla-for-childcare", state);
}

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
    (haveCovid.answer === "haveCovid" ||
      haveCovid.answer === "selfQuarantine") &&
    healthcareWorker.answer === "no"
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
    sickPersonIsCloseRelative.answer === "yes"
  ) {
    return true;
  } else {
    return false;
  }
}

function checkIfEligibleForPhillySick(state) {
  const { workInPhilly, workingNinetyDays, isFulltimeEmployee } = state;

  if (
    workInPhilly.answer === "yes" &&
    workingNinetyDays.answer === "yes" &&
    isFulltimeEmployee.answer === "no"
  ) {
    return true;
  }
  return false;
}

function redirectToSlug(slug, state) {
  return (
    <Redirect
      to={{
        pathname: "/questions/" + INTERVIEW_SLUG + "/" + slug,
        state: state,
      }}
    />
  );
}
