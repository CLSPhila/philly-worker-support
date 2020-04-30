import React from "react";
import Questioner from "../Questioner";
import { questions, pickQuestion } from "../interviews/LeaveBenefitsQuestions";
export const LeaveBenefitsInterview = () => {
  return (
    <div>
      <h1> Learn about federal, state, and local support for workers </h1>
      <Questioner questions={questions} pickQuestion={pickQuestion} />
    </div>
  );
};
