import React from "react";
import Questioner from "../Questioner";
import { questions, pickQuestion } from "../interviews/UCandPUAQuestions";

export const UCandPUAInterview = () => {
  return (
    <div>
      <h1> Explore workers' sick leave protections</h1>
      <Questioner questions={questions} pickQuestion={pickQuestion} />
    </div>
  );
};
