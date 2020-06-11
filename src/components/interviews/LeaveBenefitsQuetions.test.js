import React from "react";
import { Router } from "react-router-dom";
import * as interview from "./LeaveBenefitsQuestions";
import { Questioner, createQuestions } from "../Questioner";

const initialState = createQuestions(interview.questions);
const dummyDispatch = () => {};

test("updateState helper updates state", () => {
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
      areYouAGigWorker: "no",
      areYouCurrentlyWorking: "yes",
      currentlyWorkingReasonForSeekingHelp: "careForSick",
      hasPublicEmployer: "yes",
    });
    const { getByText } = renderWithRouter(
      interview.pickQuestion(modifiedState, dummyDispatch)
    );
    expect(getByText(/The person thinks they have/i)).toBeInTheDocument();
  });

  test("Ask about person you're caring for, if you're seeking leave to care for someone.", () => {
    const modifiedState = updateState(initialState, {
      areYouAGigWorker: "no",
      areYouCurrentlyWorking: "yes",
      currentlyWorkingReasonForSeekingHelp: "careForSick",
      hasPublicEmployer: "yes",
      isFulltimeEmployee: "yes",
      healthcareWorker: "no",
      IHaveCovid: null,
      relativeHasCovid: "haveCovid",
      workInPhilly: "yes",
      workingNinetyDays: "yes",
      employerHasTenEmployees: "yes",
    });

    const { getByText } = renderWithRouter(
      interview.pickQuestion(modifiedState, dummyDispatch)
    );
    expect(getByText(/the person you need to care for/i)).toBeInTheDocument();
  });

  test("Don't ask about the person you're caring for, if you're caring for yourself", () => {
    const modifiedState = updateState(initialState, {
      areYouAGigWorker: "no",
      areYouCurrentlyWorking: "yes",
      currentlyWorkingReasonForSeekingHelp: "IamSick",
      hasPublicEmployer: "yes",
      isFulltimeEmployee: "yes",
      IHaveCovid: "haveCovid",
      healthcareWorker: "no",
      relativeHasCovid: null,
      workInPhilly: "yes",
      workingNinetyDays: "yes",
      employerHasTenEmployees: "yes",
    });

    const { queryAllByText } = renderWithRouter(
      interview.pickQuestion(modifiedState, dummyDispatch)
    );
    expect(queryAllByText(/the person you need to care for/i)).toHaveLength(0);
  });
});

describe("Pick the right endpoint information", () => {
  const initialState = createQuestions(interview.questions);
  const dummyDispatch = () => {};

  test("Eligible for FMLA", () => {
    const modifiedState = updateState(initialState, {
      areYouAGigWorker: "no",
      areYouCurrentlyWorking: "yes",
      currentlyWorkingReasonForSeekingHelp: "IamSick",
      hasPublicEmployer: "yes",
      IHaveCovid: "haveCovid",
      healthcareWorker: "no",
      workInPhilly: "yes",
      workingNinetyDays: "yes",
      isFulltimeEmployee: "yes",
      twelveMonthsEmployed: "yes",
      workedEnoughHoursForFMLA: "yes",
      fiftyNearbyEmployees: "yes",
    });
    expect(
      interview.pickQuestion(modifiedState, dummyDispatch).props.to.pathname
    ).toMatch("/questions/leave-benefits/fed-sick-philly-unpaid-sick-and-fmla");
  });
});

describe("checkEligibility functions explain whether a user is eligible for a service", () => {
  test("eligible for federal sick leave if public employer", () => {
    const miniState = {
      answers: {
        hasPublicEmployer: { answer: "yes" },
        IHaveCovid: { answer: "haveCovid" },
        healthcareWorker: { answer: "no" },
      },
    };
    expect(interview.checkIfEligibleForFedSick(miniState)).toBe(true);
  });

  test("eligible for federal sick leave if private employer with less than 500 employees", () => {
    const miniState = {
      answers: {
        hasPublicEmployer: { answer: "no" },
        IHaveCovid: { answer: "selfQuarantine" },
        fedSickLeaveEmployerSize: { answer: "ltFiveHundred" },
        healthcareWorker: { answer: "no" },
      },
    };

    expect(interview.checkIfEligibleForFedSick(miniState)).toBe(true);
  });
  test("NOT eligible for federal sick leave if private employer with more than 500 employees", () => {
    const miniState = {
      answers: {
        hasPublicEmployer: { answer: "no" },
        IHaveCovid: { answer: "selfQuarantine" },
        fedSickLeaveEmployerSize: { answer: "gtFiveHundred" },
        healthcareWorker: { answer: "no" },
      },
    };

    expect(interview.checkIfEligibleForFedSick(miniState)).toBe(false);
  });

  test("eligible for philly leave only.", () => {
    const modifiedState = updateState(initialState, {
      areYouAGigWorker: "no",
      areYouCurrentlyWorking: "yes",
      currentlyWorkingReasonForSeekingHelp: "IamSick",
      hasPublicEmployer: "no",
      fedSickLeaveEmployerSize: "ltFiveHundred",
      IHaveCovid: "haveCovid",
      healthcareWorker: "no",
      workInPhilly: "yes",
      workingNinetyDays: "yes",
      isFulltimeEmployee: "yes",
      twelveMonthsEmployed: "no",
    });

    expect(interview.checkIfEligibleForFedSick(modifiedState)).toBe(true);
    expect(interview.checkIfEligibleForPhillySick(modifiedState)).toBe(true);
    expect(interview.checkIfEligibleForFMLA(modifiedState)).toBe(false);
  });
});
