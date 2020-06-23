import React from "react";
import { InterviewCard } from "../extras/InterviewCard";
import ExternalLink from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { INTERVIEW_SLUG as ucBenefitsUrl } from "../interviews/UCandPUAQuestions";

export const GigWorkersExplanation = (props) => {
  return (
    <div>
      <h1>Leave benefits for gig workers and independent contractors</h1>
      <p>
        In general, gig workers and independent contractors are not covered
        under the leave laws this quiz asks about. These laws only apply to
        employees. You can find out more about rights for gig workers and
        independent contractors during Covid-19 from{" "}
        <ExternalLink href="https://clsphila.org/employment/gig-workers-contractors-rights-covid-19/">
          this flyer
        </ExternalLink>
        .
      </p>
      <p>
        If you are a gig worker or independent contractor and lost work or lost
        hours due to Covid-19, you are likely to qualify for unemployment
        benefits through a new program called Pandemic Unemployment Assistance.
      </p>
      <Box>
        <InterviewCard
          interviewTitle="Unemployment and Pandemic Benefit Eligibility"
          description="Eligibility for Unemployment Compensation and Pandemic Unemployment Assistance"
          url={"/questions/" + ucBenefitsUrl}
        />
      </Box>
      <h2>Misclassification</h2>
      <p>
        Many employers try to save money by calling gig workers independent
        contractors when they are really employees. This is called{" "}
        <ExternalLink href="https://www.philalegal.org/sites/default/files/Misclassification%20for%20taxpayers.pdf">
          misclassification
        </ExternalLink>
        . If you have been misclassified, you may have rights to leave time. If
        you think you have been misclassified, contact{" "}
        <ExternalLink href="https://clsphila.org">CLS</ExternalLink> for help.
      </p>
    </div>
  );
};
