import React from "react";
import {
  INTERVIEW_SLUG as benefitsUrl,
  explanations as benefitsExplanations,
} from "../interviews/LeaveBenefitsQuestions";
import {
  INTERVIEW_SLUG as ucUrl,
  explanations as ucExplanations,
} from "../interviews/UCandPUAQuestions";
import NotImplementedYet from "../extras/NotImplementedYet";

export const ExplanationPage = ({ match, location }) => {
  console.log("Explaining:");
  console.log(match);
  console.log(location);
  const { params } = match;

  const { interviewSlug, explanationSlug } = params;
  return pickExplanation(interviewSlug, explanationSlug);
};

function componentOr404(explanations) {
  if (explanations.length === 0) {
    return <NotImplementedYet />;
  } else {
    return explanations[0].component;
  }
}

function pickExplanation(interviewSlug, explanationSlug) {
  switch (interviewSlug) {
    case benefitsUrl: {
      let explanations = benefitsExplanations.filter(
        (e) => e.slug === explanationSlug
      );
      return componentOr404(explanations);
    }
    case ucUrl: {
      let explanations = ucExplanations.filter(
        (e) => e.slug === explanationSlug
      );
      return componentOr404(explanations);
    }
    default: {
      let explanations = [];
      return componentOr404(explanations);
    }
  }
}
