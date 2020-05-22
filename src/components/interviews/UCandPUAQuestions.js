/**
 * Module for defining the UC and PUA interview.
 *
 * Needs to define two key exports: `questions`, a list of the questions
 * that make up the whole interview, and `pickQuestion`, a function that takes
 * a state of all the current questions, and returns the component
 * that should be asked, given that state.
 */
import React from "react";
import * as UCQuestions from "../questions/UCQuestions";
import * as UCEligibilityInfo from "../explanations/ApplyForUCandPUA";
import { Redirect } from "react-router-dom";
export const INTERVIEW_SLUG = "uc-pua-benefits";

export const questions = [
  {
    id: "understandsWorkAuthRequirement",
  },
  {
    id: "selfEmployed",
  },
  {
    id: "earnedEnough",
  },
  {
    id: "alreadyUsedBenefits",
  },
];

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

export const explanations = [
  {
    slug: "apply-for-uc",
    component: <UCEligibilityInfo.ApplyForUC />,
  },
  {
    slug: "uc-ineligible",
    component: <UCEligibilityInfo.NotEligibleForUC />,
  },
];

export const pickQuestion = (state, dispatch) => {
  return pickNextUCQuestion(state, dispatch) || pickUCInformation(state);
};

function pickNextUCQuestion(state, dispatch) {
  const { answers, interviewHistory } = state;
  const {
    understandsWorkAuthRequirement,
    selfEmployed,
    earnedEnough,
    alreadyUsedBenefits,
  } = answers;

  if (understandsWorkAuthRequirement.answer === null) {
    return (
      <UCQuestions.UnderstantsWorkAuthorizationRequirement
        dispatch={dispatch}
        questionId="understandsWorkAuthRequirement"
      />
    );
  }

  if (selfEmployed.answer === null) {
    return (
      <UCQuestions.SelfEmployed dispatch={dispatch} questionId="selfEmployed" />
    );
  }

  // If the user is self employed, then they should apply for PUA,
  // and we don't need the other questions.
  if (selfEmployed.answer === "yes") {
    return null;
  }

  if (earnedEnough.answer === null) {
    return (
      <UCQuestions.EarnedEnough dispatch={dispatch} questionId="earnedEnough" />
    );
  }

  if (earnedEnough.answer === "no") {
    return null;
  }

  if (alreadyUsedBenefits.answer === null) {
    return (
      <UCQuestions.AlreadyUsedBenefits
        dispatch={dispatch}
        questionId="alreadyUsedBenefits"
      />
    );
  }
}

function pickUCInformation(state) {
  const { answers } = state;
  const { selfEmployed, earnedEnough, alreadyUsedBenefits } = answers;
  if (
    selfEmployed.answer === "no" &&
    earnedEnough.answer === "yes" &&
    alreadyUsedBenefits.answer === "no"
  ) {
    return redirectToSlug("apply-for-uc", state);
  }
  return redirectToSlug("uc-ineligible", state);
}
