import React from "react";
import { render } from "@testing-library/react";
import * as interview from "./LeaveBenefitsQuestions";
import { Questioner, createQuestions } from "../Questioner";

test("updateState helper updates state", () => {
  const initialState = createQuestions(interview.questions);

  const dummyDispatch = () => {};
  const modifiedState = updateState(initialState, {
    areYouCurrentlyWorking: "yes",
    currentlyWorkingReasonForSeekingHelp: "careForSick",
    hasPublicEmployer: "yes",
  });
  expect(modifiedState.answers.areYouCurrentlyWorking.answer).toMatch(/yes/i);
});

describe("pickQuestion returns the appropriate component given a certain interview state", () => {
  const initialState = createQuestions(interview.questions);
  const dummyDispatch = () => {};

  test("After selecting you need time to care for someone who is sick, we ask if the sick relative has a medical reason for isolating", () => {
    // Originally, we asked about the user's medical needs, (1) when the user was taking time off for themselves and (2) for another.
    const modifiedState = updateState(initialState, {
      areYouCurrentlyWorking: "yes",
      currentlyWorkingReasonForSeekingHelp: "careForSick",
      hasPublicEmployer: "yes",
    });
    const { getByText } = render(
      interview.pickQuestion(modifiedState, dummyDispatch)
    );
    expect(getByText(/The person thinks they have/i)).toBeInTheDocument();
  });

  test("Ask about person you're caring for, if you're seeking leave to care for someone.", () => {
    const modifiedState = updateState(initialState, {
      areYouCurrentlyWorking: "yes",
      currentlyWorkingReasonForSeekingHelp: "careForSick",
      hasPublicEmployer: "yes",
      isFulltimeEmployee: "yes",
      IHaveCovid: null,
      relativeHasCovid: "haveCovid",
      workInPhilly: "yes",
      workingNinetyDays: "yes",
    });

    const { getByText } = render(
      interview.pickQuestion(modifiedState, dummyDispatch)
    );
    expect(getByText(/the person you need to care for/i)).toBeInTheDocument();
  });

  test("Don't ask about the person you're caring for, if you're caring for yourself", () => {
    const modifiedState = updateState(initialState, {
      areYouCurrentlyWorking: "yes",
      currentlyWorkingReasonForSeekingHelp: "IamSick",
      hasPublicEmployer: "yes",
      isFulltimeEmployee: "yes",
      IHaveCovid: "haveCovid",
      relativeHasCovid: null,
      workInPhilly: "yes",
      workingNinetyDays: "yes",
    });

    const { queryAllByText } = render(
      interview.pickQuestion(modifiedState, dummyDispatch)
    );
    expect(queryAllByText(/the person you need to care for/i)).toHaveLength(0);
  });
});
