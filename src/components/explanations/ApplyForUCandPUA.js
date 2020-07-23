import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "@material-ui/core/Link";

/**
 * The applicant is likely eligible to apply for Unemployment compensation.
 */
export const ApplyForUC = () => {
  return (
    <div>
      <h1>Unemployment Compensation</h1>
      <p>You are likely eligible to apply for Unemployment Compensation.</p>
      <p>
        You can{" "}
        <ExternalLink href="https://www.uc.pa.gov/Pages/default.aspx">
          apply here
        </ExternalLink>{" "}
        for unemployment compensation. The program provides up to 39 weeks of
        benefits.{" "}
      </p>
      <p>
        However, financial eligibility for unemployment compensation is{" "}
        <ExternalLink href="https://www.uc.pa.gov/unemployment-benefits/Am-I-Eligible/financial-eligibility/Pages/Financial-eligibility.aspx">
          complicated
        </ExternalLink>
        . If you are found financially ineligible for unemployment compensation
        and lost work for reasons related to Covid-19, you can apply for{" "}
        <ExternalLink href="/programs/pua">
          Pandemic Unemployment Assistance.
        </ExternalLink>
      </p>
      <p>
        To learn more about unemployment compensation, how to apply, and how to
        get help, visit{" "}
        <ExternalLink href="https://philalegal.org">
          Philadelphia Legal Assistance
        </ExternalLink>
      </p>
      <p>
        If you lose health insurace from your job, you may be eligible to get
        free or low-cost health insurance through{" "}
        <ExternalLink href="https://www.compass.state.pa.us/compass.web/Public/CMPHome">
          Medicaid
        </ExternalLink>{" "}
        or the{" "}
        <ExternalLink href="https://www.healthcare.gov/">
          Marketplace
        </ExternalLink>
        . You will need to apply right away. For more information, visit{" "}
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/05/Health-insurance-for-people-not-working-final-4-29-2020_flip.pdf">
          Community Legal Services
        </ExternalLink>
        .
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
      <h1>Unemployment Compensation</h1>
      <p>
        It looks like you are likely not eligible for Unemployment Compensation.
      </p>
      <p>
        You can{" "}
        <ExternalLink href="https://www.uc.pa.gov/unemployment-benefits/file/Pages/Filing-for-PUA.aspx">
          apply
        </ExternalLink>{" "}
        for a new temporary federal program called Pandemic Unemployment
        Assistance (PUA). PUA covers people who are not eligible for traditional
        unemployment compensation and provides up to 39 weeks of temporary
        unemployment benefits.
      </p>
      <p>
        To be eligible for PUA, you must have lost work for a reason related to
        Covid-19. This includes if your workplace shut down or had less business
        due to the pandemic.
      </p>
      <p>Weekly PUA benefits range from $195 to $572. </p>
      <p>
        To learn more about PUA, how to apply, and how to get help, visit{" "}
        <ExternalLink href="https://philalegal.org">
          Philadelphia Legal Assistance
        </ExternalLink>
        .
      </p>
      <p>
        If you lose health insurace from your job, you may be eligible to get
        free or low-cost health insurance through{" "}
        <ExternalLink href="https://www.compass.state.pa.us/compass.web/Public/CMPHome">
          Medicaid
        </ExternalLink>{" "}
        or the{" "}
        <ExternalLink href="https://www.healthcare.gov/">
          Marketplace
        </ExternalLink>
        . You will need to apply right away. For more information, visit{" "}
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/05/Health-insurance-for-people-not-working-final-4-29-2020_flip.pdf">
          Community Legal Services
        </ExternalLink>
        .
      </p>{" "}
      <p>
        If you haven't already, click to try the quiz about eligibility for sick
        leave benefits:
        <Link to="/questions/leave-benefits"> here. </Link>
      </p>
    </div>
  );
};
