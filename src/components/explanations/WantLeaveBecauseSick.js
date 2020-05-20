import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "@material-ui/core/Link";

/**
 *
 * Benefits that are most applicable when I want time off because I'm sick.
 *
 * TODO make components for each type of leave. Pass {...props} down to them.
 * TODO Philly leave needs a prop explaining whether leave is paid or not.
 */

/**
 * Option 1
 * @param {*} props
 */
export const FedSickPhillySickandFMLA = (props) => {
  const { phillyLeaveIsPaid } = props;

  return (
    <div>
      <p>
        You appear to be qualified for federal sick leave, Philadelphia sick
        leave, and Family and Medical Leave (FMLA).
      </p>
      <p>
        If we are correct about this, then to get the most support, you might
        want to take the following steps.
      </p>
      <ol>
        <li> Take Families First Coronavirus Response Act leave (2 weeks) </li>
        <li> Take Philadelphia Sick Leave (up to 40 hours) </li>
        <li>
          Take Family and Medical Leave Act leave (up to 12 weeks, unpaid) OR
          apply for unemployment compensation
        </li>
      </ol>
      <p>
        You likely qualify for paid sick leave under a new federal law called
        the Families First Coronavirus Response Act. You can receive your full
        pay.{" "}
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          Learn more about this new law.
        </ExternalLink>
         
      </p>
      <p>
        Sick leave under the FFCRA is <em> in addition </em> to any sick leave
        you may have under other laws or your employer’s policies. Your employer
        cannot require you to use any other PTO before using paid sick time
        under the FFCRA.
      </p>
      <p>
        You likely also qualify for Philadelphia’s paid sick leave. You can use
        this sick leave after you take FFCRA leave first.
        <b>
          {phillyLeaveIsPaid
            ? "You said your employer has 10 or more employees, so this leave would be paid"
            : phillyLeaveIsPaid === false
            ? "You said your employer has 9 or fewer employees, so this leave would be unpaid."
            : "If your employer has 10 or more employees, this leave must be paid.  If your employer has 9 or fewer employees, this leave may be unpaid."}
        </b>{" "}
      </p>
      <p>
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          Learn more about Philadelphia’s sick leave law.
        </ExternalLink>
      </p>
      <p>
        If you are still too sick to come back to work after taking your FFCRA
        leave and Philadelphia sick leave, you are likely eligible to take leave
        under the Family and Medical Leave Act (FMLA). You will need to get a
        medical certification form from your doctor to prove that you have a
        serious health condition that prevents you from doing your job. You can
        take up to 12 weeks of FMLA leave in a year. This leave is unpaid, but
        your job is protected, and you get to keep your employer-provided health
        insurance if you have it.
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
        source of income. The choice between these options might depend on how
        good your employer-provided health insurance is.
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
        You likely qualify for paid sick leave under a new federal law called
        the Families First Coronavirus Response Act. You can receive your full
        pay.{" "}
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          Learn more about this new law.
        </ExternalLink>
         
      </p>
      <p>
        Sick leave under the FFCRA is <em>in addition</em> to any sick leave you
        may have under other laws or your employer’s policies. Your employer
        cannot require you to use any other PTO before using paid sick time
        under the FFCRA.
      </p>
      <p>
        Another option would be to apply for unemployment compensation, which
        would mean losing your employer-provided health insurance but having a
        source of income. The choice between these options might depend on how
        good your employer-provided health insurance is.
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
        Federal Sick leave.
      </p>
      <p>
        You likely qualify for Philadelphia’s paid sick leave.{" "}
        <b>
          {phillyLeaveIsPaid
            ? "You said your employer has 10 or more employees, so this leave would be paid"
            : phillyLeaveIsPaid === false
            ? "You said your employer has 9 or fewer employees, so this leave would be unpaid."
            : "If your employer has 10 or more employees, this leave must be paid.  If your employer has 9 or fewer employees, this leave may be unpaid."}
        </b>{" "}
      </p>
      <p>
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          Learn more about Philadelphia’s sick leave law.
        </ExternalLink>
      </p>
      <p>
        If you are still too sick to come back to work after taking your sick
        leave, you are likely eligible to take leave under the Family and
        Medical Leave Act (FMLA). You will need to get a medical certification
        form from your doctor to prove that you have a serious health condition
        that prevents you from doing your job. You can take up to 12 weeks of
        FMLA leave in a year. This leave is unpaid, but your job is protected,
        and you get to keep your employer-provided health insurance if you have
        it.{" "}
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
        source of income. The choice between these options might depend on how
        good your employer-provided health insurance is.
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
        Federal Sick Leave.
      </p>
      <p>
        You likely qualify for Philadelphia’s paid sick leave.{" "}
        <b>
          {phillyLeaveIsPaid
            ? "You said your employer has 10 or more employees, so this leave would be paid."
            : phillyLeaveIsPaid === false
            ? "You said your employer has 9 or fewer employees, so this leave would be unpaid."
            : "If your employer has 10 or more employees, this leave must be paid.  If your employer has 9 or fewer employees, this leave may be unpaid."}
        </b>{" "}
      </p>
      <p>
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          Learn more about Philadelphia’s sick leave law.
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
        There might be other programs that could offer you support. If you
        haven't already, click to learn about
        <Link to="/questions/uc-pua-benefits">
          {" "}
          eligibility for unemployment compensation and Pandemic Unemployment
          Assistance (PUA).
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
        You appear to be qualified for FMLA, but not federal sick leave or
        Philly paid sick leave.
      </p>
      <p>
        You are likely eligible to take leave under the Family and Medical Leave
        Act (FMLA). You will need to get a medical certification form from your
        doctor to prove that you have a serious health condition that prevents
        you from doing your job. You can take up to 12 weeks of FMLA leave in a
        year. This leave is unpaid, but your job is protected, and you get to
        keep your employer-provided health insurance if you have it.
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
        source of income. The choice between these options might depend on how
        good your employer-provided health insurance is.
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
