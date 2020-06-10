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
          apply
        </ExternalLink>{" "}
        for unemployment compensation. The program provides up to 39 weeks of
        benefits.{" "}
        <b>
          Between now and July 31, 2020, everyone who receives any amount of
          unemployment compensation will automatically receive an additional
          $600 payment every week.
        </b>
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
      <p>It looks like you are not eligible for Unemployment Compensation.</p>
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
        Weekly PUA benefits range from $195 to $572.{" "}
        <b>
          Between now and July 31, 2020, everyone who receives any amount of
          unemployment compensation will automatically receive an additional
          $600 payment every week.
        </b>
      </p>
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
        If you haven't already, click to learn about eligibility for sick leave
        benefits:
        <Link to="/questions/leave-benefits"> here. </Link>
      </p>
    </div>
  );
};
