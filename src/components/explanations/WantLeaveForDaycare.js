import React from "react";
import ExternalLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
/**
 * Explaining benefits available to someone who needs to take time off to provide childcare.
 */

/**
 * Option 1
 * @param {*} props
 */
export const QualifyForFMLA = (props) => {
  return (
    <div>
      <p>
        You are likely eligible for paid leave to care for your child under a
        new federal law called the Families First Coronavirus Act (FFCRA). There
        are two parts of the law that allow you to take paid leave:
      </p>
      <ol>
        <li>
          You can receive 2/3 of your normal pay (up to $200 per day or $2,000
          total) if you are unable to work (including telework) because you are
          caring for your child if their school or place of care is closed, or
          if the person who usually takes care of your child is not available. 
        </li>
        <li>
          If you still need leave time after that, you can qualify for up to 10
          weeks of additional leave paid at 2/3 of your normal pay (up to $200
          per day or $10,000 total).
        </li>
      </ol>
      <p>
        {" "}
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          Learn more about the FFCRA.
        </ExternalLink>
      </p>
      <p>
        The 10 weeks of additional leave counts toward your total Family and
        Medical Leave Act (FMLA) leave for the year. So if you have recently
        taken FMLA leave, for instance for the birth of a child or a serious
        illness, you may have less leave time available to use.
      </p>
      <p>
        During this leave, you get to keep your employer-provided health
        insurance if you have it.{" "}
      </p>
      <p>
        Another option would be to apply for unemployment compensation, which
        would mean losing your employer-provided health insurance but might
        provide a higher amount of income.{" "}
        <b>
          Rembember. everyone receiving unemployment compensation between now
          and July 25, 2020 will automatically receive an additional $600 per
          week.
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
        If you haven't already, click to try the quiz about{" "}
        <Link to="/questions/uc-pua-benefits">
          eligibility for unemployment compensation and Pandemic Unemployment
          Assistance (PUA).
        </Link>
      </p>
    </div>
  );
};

/**
 * Option 2
 * @param {*} props
 */
export const NotQualifiedForFMLA = (props) => {
  return (
    <div>
      <p>You appear not to be qualified for a childcare leave.</p>
      <p>
        Unemployment Compensation and Pandemic Unemployment Assistance might
        still be good options.
      </p>
      <p>
        If you haven't already, click to try the quiz about{" "}
        <Link to="/questions/uc-pua-benefits">
          eligibility for unemployment compensation and Pandemic Unemployment
          Assistance (PUA).{" "}
        </Link>
      </p>
    </div>
  );
};
