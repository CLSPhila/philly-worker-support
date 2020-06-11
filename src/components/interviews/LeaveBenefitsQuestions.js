import React from "react";
import { Redirect } from "react-router-dom";

// Questions
import AreYouCurrentlyWorking from "../questions/AreYouCurrentlyWorking";
import NotCurrentlyWorking from "../questions/NotCurrentlyWorking";
import CurrentlyWorking from "../questions/CurrentlyWorking";
import { AreYouAGigWorker } from "../questions/GigWorker";
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
import { OtherHelp } from "../explanations/OtherHelp";
import * as WantLeaveBecauseWorkClosed from "../explanations/WantLeaveBecauseWorkClosed";
import { GigWorkersExplanation } from "../explanations/GigWorkersExplanation";

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
  const { answers } = state;

  switch (answers.areYouAGigWorker.answer) {
    case null:
      return (
        <AreYouAGigWorker questionId={"areYouAGigWorker"} dispatch={dispatch} />
      );
    case "yes":
      return redirectToSlug("gig-workers", state);
    default:
      break;
  }

  switch (answers.areYouCurrentlyWorking.answer) {
    case "yes":
      switch (answers.currentlyWorkingReasonForSeekingHelp.answer) {
        case "IamSick":
          return (
            pickNextSickLeaveAndFMLAQuestion(state, dispatch) ||
            // Pick the information to provide the user about
            pickSickLeaveAndFMLAInformation(state)
          );
        case "careForSick":
          return (
            pickNextSickLeaveAndFMLAQuestionWhenCaringForRelative(
              state,
              dispatch
            ) ||
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
              questionId={answers.currentlyWorkingReasonForSeekingHelp.id}
            />
          );
      }
    case "no":
      switch (answers.notCurrentlyWorkingReasonForSeekingHelp.answer) {
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
              questionId={answers.notCurrentlyWorkingReasonForSeekingHelp.id}
            />
          );
      }
    default:
      return (
        <AreYouCurrentlyWorking
          questionId="areYouCurrentlyWorking"
          dispatch={dispatch}
        />
      );
  }

  // Default
}
// TODO Don't need to identify the components in the questions list.
export const questions = [
  {
    // N.B. this is different from "fullTimeEmployee". gigWorker is specifically about non-employee folks.
    id: "areYouAGigWorker",
  },
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
    id: "IHaveCovid",
  },
  {
    id: "relativeHasCovid",
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
    slug: "gig-workers",
    component: <GigWorkersExplanation />,
  },
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
    component: <OtherHelp />,
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
    slug: "sick-relative-fed-sick-philly-paid-sick-and-fmla",
    component: (
      <WantLeaveToCareForSickRel.FedSickPhillySickFMLA
        phillyLeaveIsPaid={true}
      />
    ),
  },
  {
    slug: "sick-relative-fed-sick-philly-unpaid-sick-and-fmla",
    component: (
      <WantLeaveToCareForSickRel.FedSickPhillySickFMLA
        phillyLeaveIsPaid={false}
      />
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
  const { answers } = state;
  if (answers.haveBoss.answer === null) {
    return (
      <EmployeeOrICQuestions.HaveBoss
        {...props}
        questionId={answers.haveBoss.id}
      />
    );
  }

  if (answers.trackHours.answer === null) {
    return (
      <EmployeeOrICQuestions.TrackHours
        {...props}
        questionId={answers.trackHours.id}
      />
    );
  }

  if (answers.ownBusiness.answer === null) {
    return (
      <EmployeeOrICQuestions.OwnBusiness
        {...props}
        questionId={answers.ownBusiness.id}
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
  const { answers } = state;
  if (
    (answers.haveBoss.answer === "yes" ||
      answers.trackHours.answer === "yes") &&
    answers.ownBusiness.answer === "no"
  ) {
    return redirectToSlug("nlra-osha", answers);
  } else {
    return redirectToSlug("unsafe-nonemployee", answers);
  }
}
/**
 * Determine the next Sick Leave / FMLA question to ask, when the user is sick.
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

/**
 * Determine the next Sick Leave / FMLA question to ask, when the user is caring for someone sick.
 *
 * If we don't need any of those questions, return null.
 * @param {*} state
 */
function pickNextSickLeaveAndFMLAQuestionWhenCaringForRelative(
  state,
  dispatch
) {
  return (
    pickNextFedSickQuestionWhenCaringForSickRelative(state, dispatch) ||
    pickNextPhillySickQuestionWhenCaringForSickRelative(state, dispatch) ||
    pickNextFMLAQuestionWhenCaringForSickRelative(state, dispatch)
  );
}

/**
 * Pick the next quesiton about federal sick leave, if the user is sick themselves.
 * @param {*} state
 * @param {*} dispatch
 */
function pickNextFedSickQuestion(state, dispatch) {
  const props = { state, dispatch };
  const { answers } = state;

  if (answers.hasPublicEmployer.answer === null) {
    return (
      <FedSickLeaveQuestions.HasPublicEmployer
        {...props}
        questionId={answers.hasPublicEmployer.id}
      />
    );
  }

  if (
    answers.fedSickLeaveEmployerSize.answer === null &&
    answers.hasPublicEmployer.answer === "no"
  ) {
    return (
      <FedSickLeaveQuestions.EmployerSize
        {...props}
        questionId={answers.fedSickLeaveEmployerSize.id}
      />
    );
  }

  if (answers.IHaveCovid.answer === null) {
    return (
      <FedSickLeaveQuestions.IHaveCovid
        {...props}
        questionId={answers.IHaveCovid.id}
      />
    );
  }

  if (
    answers.healthcareWorker.answer === null &&
    (answers.hasPublicEmployer.answer === "yes" ||
      answers.fedSickLeaveEmployerSize.answer === "ltFiveHundred")
  ) {
    return (
      <FedSickLeaveQuestions.HeathcareWorker
        {...props}
        questionId={answers.healthcareWorker.id}
      />
    );
  }
  return null;
}

function pickNextFedSickQuestionWhenCaringForSickRelative(state, dispatch) {
  const props = { state, dispatch };
  const { answers } = state;

  if (answers.hasPublicEmployer.answer === null) {
    return (
      <FedSickLeaveQuestions.HasPublicEmployer
        {...props}
        questionId={answers.hasPublicEmployer.id}
      />
    );
  }

  if (
    answers.fedSickLeaveEmployerSize.answer === null &&
    answers.hasPublicEmployer.answer === "no"
  ) {
    return (
      <FedSickLeaveQuestions.EmployerSize
        {...props}
        questionId={answers.fedSickLeaveEmployerSize.id}
      />
    );
  }

  if (answers.relativeHasCovid.answer === null) {
    return (
      <FedSickLeaveQuestions.RelativeHasCovid
        {...props}
        questionId={answers.relativeHasCovid.id}
      />
    );
  }

  if (
    answers.healthcareWorker.answer === null &&
    (answers.fedSickLeaveEmployerSize.answer === "ltFiveHundred" ||
      answers.hasPublicEmployer.answer === "yes")
  ) {
    return (
      <FedSickLeaveQuestions.HeathcareWorker
        {...props}
        questionId={answers.healthcareWorker.id}
      />
    );
  }
  return null;
}

/**
 * Pick the next question about eligibility for philadelphia sick leave, if the person is sick themselves.
 * @param {} state
 * @param {*} dispatch
 */
function pickNextPhillySickQuestion(state, dispatch) {
  const props = { state, dispatch };
  const { answers } = state;

  if (answers.workInPhilly.answer === null) {
    return (
      <PhillySickLeaveQuestions.WorkInPhilly
        {...props}
        questionId={answers.workInPhilly.id}
      />
    );
  }

  // No need to ask any followups if the person
  // does not work in philly.
  if (answers.workInPhilly.answer === "no") {
    return null;
  }

  if (answers.workingNinetyDays.answer === null) {
    return (
      <PhillySickLeaveQuestions.WorkingNinetyDays
        {...props}
        questionId={answers.workingNinetyDays.id}
      />
    );
  }

  // No need to ask followups if user hasn't worked long enough.
  if (answers.workingNinetyDays.answer === "no") {
    return null;
  }

  if (answers.isFulltimeEmployee.answer === null) {
    return (
      <PhillySickLeaveQuestions.IsFullTimeEmployee
        {...props}
        questionId={answers.isFulltimeEmployee.id}
      />
    );
  }

  if (answers.employerHasTenEmployees === null) {
    return (
      <PhillySickLeaveQuestions.EmployerHasTenEmployees
        {...props}
        questionId={answers.employerHasTenEmployees.id}
      />
    );
  }
  return null;
}

/**
 * Pick the next question about eligibility for philadelphia sick leave, if the person is caring for someonesick.
 * @param {} state
 * @param {*} dispatch
 */
function pickNextPhillySickQuestionWhenCaringForSickRelative(state, dispatch) {
  const props = { state, dispatch };
  const { answers } = state;

  if (answers.workInPhilly.answer === null) {
    return (
      <PhillySickLeaveQuestions.WorkInPhilly
        {...props}
        questionId={answers.workInPhilly.id}
      />
    );
  }

  // No need to ask any followups if the person
  // does not work in philly.
  if (answers.workInPhilly.answer === "no") {
    return null;
  }

  if (answers.workingNinetyDays.answer === null) {
    return (
      <PhillySickLeaveQuestions.WorkingNinetyDays
        {...props}
        questionId={answers.workingNinetyDays.id}
      />
    );
  }

  // No need to ask followups if user hasn't worked long enough.
  if (answers.workingNinetyDays.answer === "no") {
    return null;
  }

  if (answers.isFulltimeEmployee.answer === null) {
    return (
      <PhillySickLeaveQuestions.IsFullTimeEmployee
        {...props}
        questionId={answers.isFulltimeEmployee.id}
      />
    );
  }

  if (answers.employerHasTenEmployees.answer === null) {
    return (
      <PhillySickLeaveQuestions.EmployerHasTenEmployees
        {...props}
        questionId={answers.employerHasTenEmployees.id}
      />
    );
  }

  if (answers.sickPersonIsCloseRelative.answer === null) {
    return (
      <FMLAQuestions.SickPersonIsCloseRelative
        {...props}
        questionId={answers.sickPersonIsCloseRelative.id}
      />
    );
  }

  return null;
}

/**
 * Pick the next FMLA eligibility question, when the user is seeking leave for their own health.
 * @param {} state
 * @param {*} dispatch
 */
function pickNextFMLAQuestion(state, dispatch) {
  const props = { state, dispatch };
  const { answers } = state;

  // if any of these are no, we'll skip the rest by returning null.

  if (answers.twelveMonthsEmployed.answer === null) {
    return (
      <FMLAQuestions.TwelveMonthsEmployed
        {...props}
        questionId={answers.twelveMonthsEmployed.id}
      />
    );
  }

  if (answers.twelveMonthsEmployed.answer === "no") {
    return null;
  }

  if (answers.workedEnoughHoursForFMLA.answer === null) {
    return (
      <FMLAQuestions.WorkedEnoughHours
        {...props}
        questionId={answers.workedEnoughHoursForFMLA.id}
      />
    );
  }

  if (answers.workedEnoughHoursForFMLA.answer === "no") {
    return null;
  }

  if (answers.fiftyNearbyEmployees.answer === null) {
    return (
      <FMLAQuestions.FiftyNearbyEmployees
        {...props}
        questionId={answers.fiftyNearbyEmployees.id}
      />
    );
  }

  if (answers.fiftyNearbyEmployees.answer === "no") {
    return null;
  }

  return null;
}

/**
 * Pick the next question related to FMLA leave, when the user is seeking leave to care for someone else.
 * @param {*} state
 * @param {*} dispatch
 */
function pickNextFMLAQuestionWhenCaringForSickRelative(state, dispatch) {
  const props = { state, dispatch };
  const { answers } = state;

  // if any of these are no, we'll skip the rest by returning null.

  if (answers.twelveMonthsEmployed.answer === null) {
    return (
      <FMLAQuestions.TwelveMonthsEmployed
        {...props}
        questionId={answers.twelveMonthsEmployed.id}
      />
    );
  }

  if (answers.twelveMonthsEmployed.answer === "no") {
    return null;
  }

  if (answers.workedEnoughHoursForFMLA.answer === null) {
    return (
      <FMLAQuestions.WorkedEnoughHours
        {...props}
        questionId={answers.workedEnoughHoursForFMLA.id}
      />
    );
  }

  if (answers.workedEnoughHoursForFMLA.answer === "no") {
    return null;
  }

  if (answers.fiftyNearbyEmployees.answer === null) {
    return (
      <FMLAQuestions.FiftyNearbyEmployees
        {...props}
        questionId={answers.fiftyNearbyEmployees.id}
      />
    );
  }

  if (answers.fiftyNearbyEmployees.answer === "no") {
    return null;
  }

  if (answers.sickPersonIsCloseRelative.answer === null) {
    return (
      <FMLAQuestions.SickPersonIsCloseRelative
        {...props}
        questionId={answers.sickPersonIsCloseRelative.id}
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
  const isEligibleForFedSick = checkIfEligibleForFedSickWhenCaringForSickRelative(
    state
  );
  const isEligibleForPhillySick = checkIfEligibleForPhillySick(state);
  const isEligibleForFMLA = checkIfEligibleForFMLA(state);
  const phillyLeaveIsPaid =
    state.answers.employerHasTenEmployees.answer === "yes";

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

  return redirectToSlug("other", {
    ...state,
    isEligibleForFMLA,
    isEligibleForFedSick,
    isEligibleForPhillySick,
  });
  // return (
  //   <div>
  //     <p> Here's your results.</p>
  //     <p>
  //       {" "}
  //       You are {!isEligibleForFedSick ? "not" : ""} elegible for Federal Sick
  //       Leave.{" "}
  //     </p>
  //     .
  //     <p>
  //       {" "}
  //       You are {!isEligibleForPhillySick ? "not" : ""} elegible for Philly Sick
  //       Leave.{" "}
  //     </p>
  //     .<p> You are {!isEligibleForFMLA ? "not" : ""} elegible for FMLA. </p>.
  //   </div>
  // );
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
  const phillyLeaveIsPaid =
    state.answers.employerHasTenEmployees.answer === "yes";

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
      return redirectToSlug("philly-unpaid-sick-and-fmla", state);
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
  return redirectToSlug("other", {
    ...state,
    isEligibleForFMLA,
    isEligibleForFedSick,
    isEligibleForPhillySick,
  });
  // return (
  //   <div>
  //     <p> Here's your results.</p>
  //     <p>
  //       {" "}
  //       You are {isEligibleForFedSick ? "not" : ""} elegible for Federal Sick
  //       Leave.{" "}
  //     </p>
  //     .
  //     <p>
  //       {" "}
  //       You are {isEligibleForPhillySick ? "not" : ""} elegible for Philly Sick
  //       Leave.{" "}
  //     </p>
  //     .<p> You are {isEligibleForFMLA ? "not" : ""} elegible for FMLA. </p>.
  //   </div>
  // );
}

/**
 * Determine the next component the user should see, in the
 * sequence of questions about FMLA and childcare.
 * @param {} state
 * @param {*} dispatch
 */
function pickNextChildCareAndFMLAQuestion(state, dispatch) {
  const props = { state, dispatch };

  const { answers } = state;

  if (answers.hasPublicEmployer.answer === null) {
    return (
      <FedSickLeaveQuestions.HasPublicEmployer
        {...props}
        questionId={answers.hasPublicEmployer.id}
      />
    );
  }

  if (
    answers.fedSickLeaveEmployerSize.answer === null &&
    answers.hasPublicEmployer.answer === "no"
  ) {
    return (
      <FedSickLeaveQuestions.EmployerSize
        {...props}
        questionId={answers.fedSickLeaveEmployerSize.id}
      />
    );
  }

  if (answers.daycareClosed.answer === null) {
    return (
      <ChildCareFMLAQuestions.ChildCareDaycareClosed
        {...props}
        questionId={answers.daycareClosed.id}
      />
    );
  }

  //skip the rest if No.
  if (answers.daycareClosed.answer === "no") {
    return null;
  }

  if (answers.anySuitableOtherChildcare.answer === null) {
    return (
      <ChildCareFMLAQuestions.AnySuitableOtherChildcare
        {...props}
        questionId={answers.anySuitableOtherChildcare.id}
      />
    );
  }

  if (answers.anySuitableOtherChildcare.answer === "yes") {
    return null;
  }

  if (answers.employedThirtyDays.answer === null) {
    return (
      <ChildCareFMLAQuestions.EmployedThirtyDays
        {...props}
        questionId={answers.employedThirtyDays.id}
      />
    );
  }

  if (answers.employedThirtyDays.answer === "no") {
    return null;
  }

  if (answers.healthcareWorker.answer === null) {
    return (
      <FedSickLeaveQuestions.HeathcareWorker
        {...props}
        questionId={answers.healthcareWorker.id}
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
  const { answers } = state;
  const {
    hasPublicEmployer,
    fedSickLeaveEmployerSize,
    daycareClosed,
    anySuitableOtherChildcare,
    employedThirtyDays,
    healthcareWorker,
  } = answers;
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
 * Determine if the user is eligible for federal sick leave, when user is caring for themselves.
 * @param {} state
 */
export function checkIfEligibleForFedSick(state) {
  const { answers } = state;
  const {
    hasPublicEmployer,
    fedSickLeaveEmployerSize,
    IHaveCovid,
    healthcareWorker,
  } = answers;
  if (
    (hasPublicEmployer.answer === "yes" ||
      (hasPublicEmployer.answer === "no" &&
        fedSickLeaveEmployerSize.answer === "ltFiveHundred")) &&
    (IHaveCovid.answer === "haveCovid" ||
      IHaveCovid.answer === "selfQuarantine") &&
    healthcareWorker.answer === "no"
  ) {
    return true;
  }
  return false;
}
/**
 * Determine if the user is eligible for federal sick leave, when user is caring for a sick relative.
 * @param {} state
 */
export function checkIfEligibleForFedSickWhenCaringForSickRelative(state) {
  const { answers } = state;
  const {
    hasPublicEmployer,
    fedSickLeaveEmployerSize,
    relativeHasCovid,
    healthcareWorker,
  } = answers;
  if (
    (hasPublicEmployer.answer === "yes" ||
      (hasPublicEmployer.answer === "no" &&
        fedSickLeaveEmployerSize.answer === "ltFiveHundred")) &&
    (relativeHasCovid.answer === "haveCovid" ||
      relativeHasCovid.answer === "selfQuarantine") &&
    healthcareWorker.answer === "no"
  ) {
    console.log("Eligible for Fed Sick (when caring for sick relative)");
    return true;
  }
  console.log("Not eligibile for Fed. sick (when caring for sick relative");
  return false;
}

export function checkIfEligibleForFMLA(state) {
  const { answers } = state;
  const {
    twelveMonthsEmployed,
    workedEnoughHoursForFMLA,
    fiftyNearbyEmployees,
    sickPersonIsCloseRelative,
    currentlyWorkingReasonForSeekingHelp,
  } = answers;
  if (
    twelveMonthsEmployed.answer === "yes" &&
    workedEnoughHoursForFMLA.answer === "yes" &&
    fiftyNearbyEmployees.answer === "yes" &&
    (sickPersonIsCloseRelative.answer === "yes" ||
      currentlyWorkingReasonForSeekingHelp.answer === "IamSick")
  ) {
    console.log("eligible for FMLA");
    return true;
  } else {
    console.log("not eligible for fmla");
    return false;
  }
}

export function checkIfEligibleForPhillySick(state) {
  const { answers } = state;
  const { workInPhilly, workingNinetyDays, isFulltimeEmployee } = answers;

  if (
    workInPhilly.answer === "yes" &&
    workingNinetyDays.answer === "yes" &&
    isFulltimeEmployee.answer === "yes"
  ) {
    console.log("eligible for philly sick");
    return true;
  }
  console.log("not eligible for philly sick");
  return false;
}

function redirectToSlug(slug, state) {
  console.log("redirecting to: /questions/" + INTERVIEW_SLUG + "/" + slug);
  return (
    <Redirect
      to={{
        pathname: "/questions/" + INTERVIEW_SLUG + "/" + slug,
        state: state,
      }}
    />
  );
}
