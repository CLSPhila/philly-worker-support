import React from "react";
import {
  INTERVIEW_SLUG as benefitsUrl,
  explanations as benefitsExplanations,
} from "../interviews/LeaveBenefitsQuestions";
import {
  INTERVIEW_SLUG as ucUrl,
  explanations as ucExplanations,
} from "../interviews/UCandPUAQuestions";
import { Debugger } from "../extras/debugger";

import NotImplementedYet from "../extras/NotImplementedYet";

export const ExplanationPage = ({ match, location }) => {
  const { params } = match;
  const { state = {} } = location;
  const { interviewSlug, explanationSlug } = params;
  return (
    <>
      {pickExplanation(interviewSlug, explanationSlug, state)}
      <Debugger state={state} match={match} />
    </>
  );
};

function componentOr404(explanations, state) {
  if (explanations.length === 0) {
    return <NotImplementedYet />;
  } else {
    return React.cloneElement(explanations[0].component, state);
  }
}

function pickExplanation(interviewSlug, explanationSlug, state) {
  switch (interviewSlug) {
    case benefitsUrl: {
      let explanations = benefitsExplanations.filter(
        (e) => e.slug === explanationSlug
      );
      return componentOr404(explanations, state);
    }
    case ucUrl: {
      let explanations = ucExplanations.filter(
        (e) => e.slug === explanationSlug
      );
      return componentOr404(explanations, state);
    }
    default: {
      let explanations = [];
      return componentOr404(explanations, state);
    }
  }
}
