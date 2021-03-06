import React from "react";

const simplifyState = (state) => {
  const { answers, interviewHistory } = state || {};
  let simplifiedAnswers = {};
  for (let questionId in answers) {
    if (answers[questionId].answer !== null) {
      simplifiedAnswers[questionId] = answers[questionId].answer;
    }
  }
  return {
    answers: simplifiedAnswers,
    interviewHistory,
  };
};

export const Debugger = (props) => {
  const { state, match } = props;
  return (
    <div
      style={{ backgroundColor: "grey", padding: "0.5rem", marginTop: "2rem" }}
    >
      <p>Debugging info for interview state:</p>
      {match ? <pre>{JSON.stringify(match, null, 4)}</pre> : <></>}
      <pre>{JSON.stringify(simplifyState(state), null, 4)}</pre>
    </div>
  );
};
