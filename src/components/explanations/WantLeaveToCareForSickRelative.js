import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "@material-ui/core/Link";

/**
 * Explaning programs available to someone looking to take time off to care for a sick relative.
 *
 */

/**
 * Option 1
 * @param {*} props
 */
export const FedSickPhillySickFMLA = (props) => {
  const { phillyLeaveIsPaid } = props;
  console.log("phillyLeaveIsPaid");
  console.log(phillyLeaveIsPaid);
  return (
    <div>
      <p>
        You appear to be qualified for Federal Sick Leave, Philly sick leave and
        FMLA. A good strategy in your situation might be:
      </p>
      <ul>
        <li>Take Families First Coronavirus Response Act leave</li>
        <li>Take Philadelphia Sick Leave (up to 40 hours)</li>
        <li>
          Take Family and Medical Leave Act leave (up to 12 weeks, unpaid) OR
          apply for unemployment compensation
        </li>
      </ul>
      <p>
        You likely qualify for partially paid sick leave under a new federal law
        called the Families First Coronavirus Response Act. You can receive 2/3
        of your normal pay 
      </p>
      <p>
        Learn more about{" "}
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          the Families First Coronavirus Response Act
        </ExternalLink>
      </p>
      <p>
        Sick leave under the FFCRA is <em> in addition to </em> any sick leave
        you may have under other laws or your employer’s policies. Your employer
        cannot require you to use any other PTO before using paid sick time
        under the FFCRA
      </p>
      <p>
        You likely qualify for Philadelphia’s paid sick leave.{" "}
        <b>
          {phillyLeaveIsPaid
            ? "You said your employer has 10 or more employees, so this leave would be paid"
            : "If your employer has 10 or more employees, this leave must be paid.  If your employer has 9 or fewer employees, this leave may be unpaid."}
        </b>{" "}
      </p>
      <p>You can use this sick leave after you take FFCRA leave first. </p>
      <p>
        If your employer has 10 or more employees, you might want to take this
        leave first, before you take leave under the FFCRA. Philly paid leave is
        paid at your full rate, while FFCRA would be paid at only 2/3 your
        normal rate if you are taking care of someone else.
      </p>
      <p>
        Learn more about{" "}
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          Philadelphia's Paid Sick Law{" "}
        </ExternalLink>
      </p>
      <p>
        If the family member you are caring for is still too sick for you to
        come back to work after taking your FFCRA leave and Philadelphia sick
        leave, you are likely eligible to take leave under the Family and
        Medical Leave Act (FMLA). You will need to get a medical certification
        form from your family member’s doctor to prove that they have a serious
        health condition. You can take up to 12 weeks of FMLA leave in a year.
        This leave is unpaid, but your job is protected, and you get to keep
        your employer-provided health insurance if you have it.
      </p>
      <p>
        Learn more about the FMLA from{" "}
        <ExternalLink href="https://clsphila.org/services/taking-leave-from-work/">
          Community Legal Services
        </ExternalLink>{" "}
        and the{" "}
        <ExternalLink href="https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/employeeguide.pdf">
          Department of Labor
        </ExternalLink>
        .
      </p>
      <p>
        Another option would be to quit and apply for unemployment compensation,
        which would mean losing your employer-provided health insurance but
        having a source of income.
        <b>
          Remember that everyone who gets unemployment compensation between now
          and July 31, 2020 gets an extra $600 per week.
        </b>
        The choice between these options might depend on how good your
        employer-provided health insurance is.
      </p>
      <p>
        If you lose health insurance from your job, you may be eligible to get
        free or low-cost health insurance through Medicaid or the Marketplace.
        You will need to apply right away. For more information, please visit
        our{" "}
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/05/Health-insurance-for-people-not-working-final-4-29-2020_flip.pdf">
          flyer about medicaid and other assistance.
        </ExternalLink>
      </p>

      <p>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/questions/uc-pua-benefits"> here. </Link>
      </p>
    </div>
  );
};

/**
 * Option 2
 * @param {*} props
 */
export const FedSickOnly = (props) => {
  return (
    <div>
      <p>
        You appear to be qualified for federal sick leave, but not Philly sick
        leave or FMLA.
      </p>
      <p>
        You likely qualify for partially paid sick leave under a new federal law
        called the Families First Coronavirus Response Act. You can take up to 2
        weeks or 80 hours of leave at 2/3 of your normal rate.
      </p>
      <p>
        Learn more about{" "}
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          the Families First Coronavirus Response Act
        </ExternalLink>
      </p>
      <p>
        Sick leave under the FFCRA is <em> in addition to </em> any sick leave
        you may have under other laws or your employer’s policies. Your employer
        cannot require you to use any other PTO before using paid sick time
        under the FFCRA.  
      </p>
      <p>
        If you lose health insurance from your job, you may be eligible to get
        free or low-cost health insurance through Medicaid or the Marketplace.
        You will need to apply right away. For more information, please visit
        our{" "}
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/05/Health-insurance-for-people-not-working-final-4-29-2020_flip.pdf">
          flyer about medicaid and other assistance.
        </ExternalLink>
      </p>

      <p>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/questions/uc-pua-benefits"> here. </Link>
      </p>
    </div>
  );
};

/**
 * Option 3
 * @param {*} props
 */
export const PhillySickandFMLA = (props) => {
  const { phillyLeaveIsPaid } = props;

  return (
    <div>
      <p>
        You appear to be qualified for Philly sick leave and FMLA, but not
        Federal sick leave.
      </p>
      <p>
        You likely qualify for Philadelphia’s paid sick leave.{" "}
        <b>
          {phillyLeaveIsPaid
            ? "You said your employer has 10 or more employees, so this leave would be paid."
            : "If your employer has 10 or more employees, this leave must be paid.  If your employer has 9 or fewer employees, this leave may be unpaid."}
        </b>{" "}
      </p>
      <p>
        Learn more about{" "}
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          Philadelphia's Paid Sick Law.
        </ExternalLink>
      </p>
      <p>
        If the family member you are caring for is still too sick to come back
        to work after taking your Philadelphia sick leave, you are likely
        eligible to take leave under the Family and Medical Leave Act (FMLA).
        You will need to get a medical certification form from your doctor to
        prove that you have a serious health condition that prevents you from
        doing your job. You can take up to 12 weeks of FMLA leave in a year.
        This leave is unpaid, but your job is protected, and you get to keep
        your employer-provided health insurance if you have it.
      </p>
      <p>
        Learn more about the FMLA from{" "}
        <ExternalLink href="https://clsphila.org/services/taking-leave-from-work/">
          Community Legal Services
        </ExternalLink>{" "}
        and the{" "}
        <ExternalLink href="https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/employeeguide.pdf">
          Department of Labor
        </ExternalLink>
        .
      </p>
      <p>
        Another option would be to apply for unemployment compensation, which
        would mean losing your employer-provided health insurance but having a
        source of income.{" "}
        <b>
          Remember that everyone who gets unemployment compensation between now
          and July 31, 2020 gets an extra $600 per week.
        </b>{" "}
        The choice between these options might depend on how good your
        employer-provided health insurance is.
      </p>
      <p>
        If you lose health insurance from your job, you may be eligible to get
        free or low-cost health insurance through Medicaid or the Marketplace.
        You will need to apply right away. For more information, please visit
        our{" "}
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/05/Health-insurance-for-people-not-working-final-4-29-2020_flip.pdf">
          flyer about medicaid and other assistance.
        </ExternalLink>
      </p>
      <p>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/questions/uc-pua-benefits"> here. </Link>
      </p>
    </div>
  );
};

/**
 * Option 4
 * @param {*} props
 */
export const PhillySickOnly = (props) => {
  const { phillyLeaveIsPaid } = props;

  return (
    <div>
      <p>
        You appear to be qualified for Philly sick leave, but not FMLA or
        Federal Sick Leave
      </p>

      <p>
        You likely qualify for Philadelphia’s paid sick leave.{" "}
        <b>
          {phillyLeaveIsPaid
            ? "You said your employer has 10 or more employees, so this leave would be paid"
            : "If your employer has 10 or more employees, this leave must be paid.  If your employer has 9 or fewer employees, this leave may be unpaid."}
        </b>{" "}
      </p>
      <p>
        Learn more about{" "}
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          Philadelphia's Paid Sick Law{" "}
        </ExternalLink>
      </p>
      <p>
        If you lose health insurance from your job, you may be eligible to get
        free or low-cost health insurance through Medicaid or the Marketplace.
        You will need to apply right away. For more information, please visit
        our{" "}
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/05/Health-insurance-for-people-not-working-final-4-29-2020_flip.pdf">
          flyer about medicaid and other assistance.
        </ExternalLink>
      </p>

      <p>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/questions/uc-pua-benefits"> here. </Link>
      </p>
    </div>
  );
};

/**
 * Option 5
 * @param {*} props
 */
export const NotFedSickPhillySickOrFMLA = (props) => {
  return (
    <div>
      <p>
        You appear NOT to be qualified for federal sick leave, Philly paid sick
        leave, or FMLA.
      </p>
      <p>
        You may be able to access Unemployment Compensation or Pandemic
        Unemployment Assistance (PUA)
      </p>
      <p>
        If you haven't already, learn about{" "}
        <Link to="/questions/uc-pua-benefits">
          eligibility for unemployment compensation and Pandemic Unemployment
          Assistance (PUA){" "}
        </Link>
      </p>
    </div>
  );
};

/**
 * Option 6
 * @param {*} props
 */
export const FMLAOnly = (props) => {
  return (
    <div>
      <p>
        You appear to be qualified for FMLA, but not Federal sick leave or
        Philly sick leave.
      </p>
      <p>
        You are likely eligible to take leave under the Family and Medical Leave
        Act (FMLA). You will need to get a medical certification form from your
        doctor to prove that the family member you are caring for has a serious
        health condition. You can take up to 12 weeks of FMLA leave in a year.
        This leave is unpaid, but your job is protected, and you get to keep
        your employer-provided health insurance if you have it.
      </p>
      <p>
        Learn more about the FMLA from{" "}
        <ExternalLink href="https://clsphila.org/services/taking-leave-from-work/">
          Community Legal Services
        </ExternalLink>{" "}
        and the{" "}
        <ExternalLink href="https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/employeeguide.pdf">
          Department of Labor
        </ExternalLink>
        .
      </p>
      <p>
        Another option would be to quit and apply for unemployment compensation,
        which would mean losing your employer-provided health insurance but
        having a source of income.{" "}
        <b>
          Remember that everyone who gets unemployment compensation between now
          and July 31, 2020 gets an extra $600 per week.
        </b>{" "}
        The choice between these options might depend on how good your
        employer-provided health insurance is.
      </p>
      <p>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/questions/uc-pua-benefits"> here. </Link>
      </p>
    </div>
  );
};
