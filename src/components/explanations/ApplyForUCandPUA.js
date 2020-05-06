import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "@material-ui/core/Link";

/**
 * The applicant is likely eligible to apply for Unemployment compensation.
 */
export const ApplyForUC = () => {
  return (
    <div>
      <p>You are likely eligible to apply for Unemployment Compensation.</p>
      <p>
        You can apply for unemployment compensation. The program provides up to
        39 weeks of benefits.
        <b>
          Between now and July 31, 2020, everyone who receives any amount of
          unemployment compensation will automatically receive an additional
          $600 payment every week.
        </b>
      </p>
      <p>
        The fastest way to apply Pennsylvania unemployment compensation (“UC”)
        benefits is online at{" "}
        <ExternalLink href="https://www.uc.pa.gov">www.uc.pa.gov</ExternalLink>,
        but you can also call{" "}
        <ExternalLink href="tel:1-888-313-7284">1-888-313-7284</ExternalLink>.
        If at all possible, apply for UC benefits online, using a computer
        (instead of a cell phone or calling). You can apply as soon as your
        employment circumstances have changed. The earlier you apply, the
        earlier you can begin to receive benefits. Even if you are unsure that
        you are eligible for benefits, you should go ahead and apply. If you run
        into any issues with the application process, we recommend using the{" "}
        <ExternalLink href="https://www.uc.pa.gov/Chat/index.aspx">
          Department of Labor and Industry’s online chat
        </ExternalLink>
        system. If you need an interpreter, you can request one through the
        phone number above. The initial application for unemployment is
        available in Spanish online, and the website also allows you to view all
        of its pages in Spanish. You can refer to{" "}
        <ExternalLink href="https://philalegal.org/ReasonforSeparationFlowChart_UCCovid19">
          Philadelphia Legal Assistance’s “reason for separation” chart{" "}
        </ExternalLink>
        to help select the correct reason for separation on your UC application.
      </p>
      <p>
        If you lack access to a computer or need assistance with your UC
        application, you should use{" "}
        <ExternalLink href="https://philalegal.org/unemploymentcovid19">
          Philadelphia Legal Assistance’s free UC application service hotline.
        </ExternalLink>{" "}
        The hotline number is 215-999-6910, and the hours are as follows:
      </p>
      <ul>
        <li>Monday 9 am - 1 pm</li>
        <li>Tuesday 1 pm - 5 pm</li>
        <li>Wednesday 3 pm - 7 pm</li>
        <li>Thursday 3 pm - 7 pm</li>
        <li>Friday 10 am - 2 pm</li>
      </ul>
      <p>
        After applying, you will get a “financial determination” about the
        amount of your UC benefit, but you still need a final decision on
        eligibility after that.  If you are approved, you may not get a written
        eligibility decision, but the money will show up in your bank account. 
        So, after that first financial decision, 
        <b>
          keep checking your bank account to see whether UC payments have been
          deposited.
        </b>
      </p>
      <p>
        After you open an unemployment claim, every two weeks you must file a
        claim at{" "}
        <ExternalLink href="https://www.uc.pa.gov">www.uc.pa.gov</ExternalLink>{" "}
        or by calling{" "}
        <ExternalLink href="tel:1-888-255-4728">1-888-255-4728</ExternalLink> to
        report any hours you worked, any paid time off you received, and/or any
        pay you earned.
      </p>
      <p>
        If you lose health insurance from your job, you may be eligible to get
        free or low-cost health insurance through Medicaid or the Marketplace.
        You will need to apply right away. For more information, please click
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/03/Benefit-flyer_final-1.pdf">
          here.
        </ExternalLink>
      </p>
      <p>
        For more guidance on eligibility for UC benefits and how to apply, visit{" "}
        <ExternalLink href="https://philalegal.org/unemploymentcovid19">
          Philadelphia Legal Assistance’s website.
        </ExternalLink>
      </p>
      <p>
        If you haven't already, click to learn about eligibility for sick leave
        benefits:
        <Link to="/questions/leave-benefits"> here. </Link>
      </p>
    </div>
  );
};

/**
 * The applicant is likely not eligible for Unemployment Compensation, but should still apply for PUA.
 */
export const NotEligibleForUC = () => {
  return (
    <div>
      <p>It looks like you are not eligible for Unemployment Compensation.</p>
      <p>
        You can apply for a new temporary federal program called Pandemic
        Unemployment Assistance (PUA). PUA covers people who are not eligible
        for traditional unemployment compensation and provides up to 39 weeks of
        temporary unemployment benefits.
      </p>
      <p>
        Weekly PUA benefits range from $195 to $572.
        <b>
          Between now and July 31, 2020, everyone who receives any amount of
          unemployment compensation will automatically receive an additional
          $600 payment every week.
        </b>
      </p>
      <p>
        The PUA application is available online at{" "}
        <ExternalLink href="https://www.uc.pa.gov">www.uc.pa.gov</ExternalLink>.
        Select{" "}
        <ExternalLink href="https://pua.benefits.uc.pa.gov/vosnet/Default.aspx">
          "File for PUA."
        </ExternalLink>
      </p>
      <p>
        If you lose health insurance from your job, you may be eligible to get
        free or low-cost health insurance through Medicaid or the Marketplace.
        You will need to apply right away. For more information, please click
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/03/Benefit-flyer_final-1.pdf">
          here.
        </ExternalLink>
      </p>
      <p>
        If you haven't already, click to learn about eligibility for sick leave
        benefits:
        <Link to="/questions/leave-benefits"> here. </Link>
      </p>
    </div>
  );
};
