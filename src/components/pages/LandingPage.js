import React from "react";
import { Link } from "react-router-dom";
import { INTERVIEW_SLUG as leaveBenefitsUrl } from "../interviews/LeaveBenefitsQuestions";
import { INTERVIEW_SLUG as ucBenefitsUrl } from "../interviews/UCandPUAQuestions";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

export const LandingPage = () => {
  return (
    <div>
      <h2> (DEMO) Support for workers during the Covid-19 pandemic</h2>
      <Box bgcolor="warning.main">
        <b>
          This site is in development still. The information here isn't
          complete, or even always accurate. Don't rely on it.
        </b>
      </Box>
      <p>
        We are living through challenging times. Many of us have lost
        employment, or are concerned about staying employed. We worry about
        getting sick. We have loved ones we need to care for.
      </p>

      <p>
        For workers in Philadelphia, there are a variety of local, state, and
        federal programs that can help provide income and other benefits during
        this emergency. Navigating sick leave, family leave, and unemployment
        compensation is confusing. Who has time to untangle all the different
        eligibility rules and program benefits?
      </p>
      <p>
        The employment law experts at Community Legal Services of Philadelphia
        do.
      </p>
      <p>
        We have prepared this site to help you understand your rights as a
        worker in Philadelphia.
      </p>
      <p>
        We hope the information we present helps you and your family feel
        <b> safe and stable </b> during the crisis.
      </p>
      <p>
        Answer the questions we ask at the links below, and learn about how to
        find the right services for your family.
      </p>
      <p>
        <b>
          Are you still working and looking to take leave time? Learn about{" "}
          <Link to={"/questions/" + leaveBenefitsUrl}>
            your eligibility for sick leave and family leave.
          </Link>
        </b>
      </p>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Box p={1}>
          <Button
            href={"/questions/" + leaveBenefitsUrl}
            variant="outlined"
            color="primary"
          >
            Sick leave and FMLA
          </Button>
        </Box>
      </Box>
      <p>
        <b>
          Have you lost your job or had your hours cut? Learn about{" "}
          <Link to={"/questions/" + ucBenefitsUrl}>
            your eligibility for Unemployment Compensation and Pandemic
            Unemployment Assistance.
          </Link>
        </b>
      </p>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Box p={1}>
          <Button
            href={"/questions/" + ucBenefitsUrl}
            variant="outlined"
            color="primary"
          >
            Unemployment and PUA
          </Button>
        </Box>
      </Box>
      <p>
        This site is merely providing you with general information we hope is
        helpful. Using this site does not mean that we are your lawyers. If
        you'd like to speak with a lawyer to get personal advice about your own
        situation, visit our lawyer referrals page.
      </p>
    </div>
  );
};
