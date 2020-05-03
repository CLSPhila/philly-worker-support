import React from "react";
import { Link } from "react-router-dom";
import { INTERVIEW_SLUG as leaveBenefitsUrl } from "../interviews/LeaveBenefitsQuestions";
import { INTERVIEW_SLUG as ucBenefitsUrl } from "../interviews/UCandPUAQuestions";

export const LandingPage = () => {
  return (
    <div>
      <h2> (DEMO) Support for workers during the Covid-19 pandemic</h2>
      <p>
        <b>
          This site is in development still. The information here isn't
          complete, or even always accurate. Don't rely on it.
        </b>
      </p>
      <p>
        Navigating sick leave, family leave, and unemployment compensation is
        confusing, and our present crisis makes it harder.
      </p>
      <p>
        The employment law experts at Community Legal Services of Philadelphia
        have prepared this site to help you understand your rights as a worker
        in Philadelphia.
      </p>
      <p>
        <b>
          Are you still working and looking to take leave time? Learn about{" "}
          <Link to={"/" + leaveBenefitsUrl}>
            your eligibility for sick leave and family leave.
          </Link>
        </b>
      </p>
      <p>
        <b>
          Have you lost your job or had your hours cut? Learn about{" "}
          <Link to={"/" + ucBenefitsUrl}>
            your eligibility for Unemployment Compensation and Pandemic
            Unemployment Assistance.
          </Link>
        </b>
      </p>
      <p>
        This site is merely providing you with general information we hope is
        helpful. Using this site does not mean that we are your lawyers. If
        you'd like to speak with a lawyer to get personal advice about your own
        situation, visit our lawyer referrals page.
      </p>
    </div>
  );
};
