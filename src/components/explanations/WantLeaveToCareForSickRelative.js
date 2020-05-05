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
        pay (up to $200 per day or $2,000 total) if you are unable to work
        (including telework) because you are caring for someone who was told by
        their health care provider or a public health official to
        self-quarantine because of concerns related to coronavirus or who is
        under a federal, state, or local quarantine or isolation order.
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
            : phillyLeaveIsPaid === false
            ? "You said your employer has 9 or fewer employees, so this leave would be unpaid."
            : "If your employer has 10 or more employees, this leave must be paid.  If your employer has 9 or fewer employees, this leave may be unpaid."}
        </b>{" "}
      </p>
      <p>
        You have to accrue sick leave under the Philadelphia law. You earn 1
        hour of sick time for every 40 hours of work, and you can earn up to 40
        hours of sick leave in total. It is your employer’s responsibility to
        keep track of how much sick time you have left. Your employer might give
        you more leave than the Philadelphia law requires, so you should check
        what their policy is.
      </p>
      <p>
        If your employer terminates your employment, the city agency that
        enforces the Philadelphia sick leave ordinance 
        <em>
          requires that your employer pay you any accrued but unused sick time
          upon termination.
        </em>
          [If your employer denies you sick leave, if you are laid off and your
        employer refuses to pay you for any accrued but unused sick leave upon
        termination, or if you are retaliated against for requesting or using
        sick leave, you should immediately file a complaint with the 
        <ExternalLink href="https://www.phila.gov/services/working-jobs/paid-sick-leave/">
          Philadelphia Mayor’s Office of Labor
        </ExternalLink>
        .  Complaint forms are available on their website, and may be emailed or
        mailed.  You can also call{" "}
        <ExternalLink href="tel:215-686-0802">215-686-0802</ExternalLink>.  If
        you need further assistance, please contact CLS at{" "}
        <ExternalLink href="tel:215-981-3700">215-981-3700</ExternalLink>.]
      </p>

      <p>
        If the family member you are caring for is still too sick for you to
        come back to work after taking your FFCRA leave and Philadelphia sick
        leave, you are likely eligible to take leave under the Family and
        Medical Leave Act (FMLA). You will need to get a medical certification
        form from your family member’s doctor to prove that they have a serious
        health condition. You can take up to 12 weeks of FMLA leave in a year.
        This leave is unpaid, but your job is protected, and you get to keep
        your employer-provided health insurance if you have it. Another option
        would be to apply for unemployment compensation, which would mean losing
        your employer-provided health insurance but having a source of income.
        The choice between these options might depend on how good your
        employer-provided health insurance is.
      </p>

      <p>
        If you lose health insurance from your job, you may be eligible to get
        free or low-cost health insurance through Medicaid or the Marketplace.
        You will need to apply right away. For more information, please visit
        our{" "}
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/03/Benefit-flyer_final-1.pdf">
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
  const { phillyLeaveIsPaid } = props;

  return (
    <div>
      <p>
        You appear to be qualified for federal sick leave, but not Philly sick
        leave or FMLA.
      </p>
      <p>
        You likely qualify for paid sick leave under a new federal law called
        the Families First Coronavirus Response Act (FFCRA). You can receive
        your full pay (up to $511 per day or $5,110 total) if you are unable to
        work (including telework) because: 
      </p>
      <ul>
        <li>
          You think you have coronavirus and need to get tested or seen by a
          doctor;
        </li>
        <li>A health care provider has told you to self-quarantine;</li>
        <li>
          You are under a federal, state, or local quarantine or isolation
          order; or 
        </li>
        <li>
          You are complying with recommendations from a public health official.
        </li>
      </ul>
      <p>
        Sick leave under the FFCRA is <em> in addition to </em> any sick leave
        you may have under other laws or your employer’s policies. Your employer
        cannot require you to use any other PTO before using paid sick time
        under the FFCRA.  
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
        You have to accrue sick leave under the Philadelphia law. You earn 1
        hour of sick time for every 40 hours of work, and you can earn up to 40
        hours of sick leave in total. It is your employer’s responsibility to
        keep track of how much sick time you have left. Your employer might give
        you more leave than the Philadelphia law requires, so you should check
        what their policy is.
      </p>
      <p>
        If your employer terminates your employment, the city agency that
        enforces the Philadelphia sick leave ordinance 
        <em>
          requires that your employer pay you any accrued but unused sick time
          upon termination.
        </em>
          [If your employer denies you sick leave, if you are laid off and your
        employer refuses to pay you for any accrued but unused sick leave upon
        termination, or if you are retaliated against for requesting or using
        sick leave, you should immediately file a complaint with the 
        <ExternalLink href="https://www.phila.gov/services/working-jobs/paid-sick-leave/">
          Philadelphia Mayor’s Office of Labor
        </ExternalLink>
        .  Complaint forms are available on their website, and may be emailed or
        mailed.  You can also call{" "}
        <ExternalLink href="tel:215-686-0802">215-686-0802</ExternalLink>.  If
        you need further assistance, please contact CLS at{" "}
        <ExternalLink href="tel:215-981-3700">215-981-3700</ExternalLink>.]
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
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/03/Benefit-flyer_final-1.pdf">
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
        Federal Sick leave
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
        You have to accrue sick leave under the Philadelphia law. You earn 1
        hour of sick time for every 40 hours of work, and you can earn up to 40
        hours of sick leave in total. It is your employer’s responsibility to
        keep track of how much sick time you have left. Your employer might give
        you more leave than the Philadelphia law requires, so you should check
        what their policy is.
      </p>
      <p>
        If your employer terminates your employment, the city agency that
        enforces the Philadelphia sick leave ordinance 
        <em>
          requires that your employer pay you any accrued but unused sick time
          upon termination.
        </em>
        [If your employer denies you sick leave, if you are laid off and your
        employer refuses to pay you for any accrued but unused sick leave upon
        termination, or if you are retaliated against for requesting or using
        sick leave, you should immediately file a complaint with the 
        <ExternalLink href="https://www.phila.gov/services/working-jobs/paid-sick-leave/">
          Philadelphia Mayor’s Office of Labor
        </ExternalLink>
        .  Complaint forms are available on their website, and may be emailed or
        mailed.  You can also call{" "}
        <ExternalLink href="tel:215-686-0802">215-686-0802</ExternalLink>.  If
        you need further assistance, please contact CLS at{" "}
        <ExternalLink href="tel:215-981-3700">215-981-3700</ExternalLink>.]
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
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/03/Benefit-flyer_final-1.pdf">
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
            : phillyLeaveIsPaid === false
            ? "You said your employer has 9 or fewer employees, so this leave would be unpaid."
            : "If your employer has 10 or more employees, this leave must be paid.  If your employer has 9 or fewer employees, this leave may be unpaid."}
        </b>{" "}
      </p>
      <p>
        You have to accrue sick leave under the Philadelphia law. You earn 1
        hour of sick time for every 40 hours of work, and you can earn up to 40
        hours of sick leave in total. It is your employer’s responsibility to
        keep track of how much sick time you have left. Your employer might give
        you more leave than the Philadelphia law requires, so you should check
        what their policy is.
      </p>
      <p>
        If your employer terminates your employment, the city agency that
        enforces the Philadelphia sick leave ordinance 
        <em>
          requires that your employer pay you any accrued but unused sick time
          upon termination.
        </em>
        [If your employer denies you sick leave, if you are laid off and your
        employer refuses to pay you for any accrued but unused sick leave upon
        termination, or if you are retaliated against for requesting or using
        sick leave, you should immediately file a complaint with the 
        <ExternalLink href="https://www.phila.gov/services/working-jobs/paid-sick-leave/">
          Philadelphia Mayor’s Office of Labor
        </ExternalLink>
        .  Complaint forms are available on their website, and may be emailed or
        mailed.  You can also call{" "}
        <ExternalLink href="tel:215-686-0802">215-686-0802</ExternalLink>.  If
        you need further assistance, please contact CLS at{" "}
        <ExternalLink href="tel:215-981-3700">215-981-3700</ExternalLink>.]
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
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/03/Benefit-flyer_final-1.pdf">
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
        You appear to be qualified for FMLA, but not federal sick leave or
        Philly paid sick leave.
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
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/questions/uc-pua-benefits"> here. </Link>
      </p>
    </div>
  );
};
