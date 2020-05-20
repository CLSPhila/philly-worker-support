import React from "react";
import ExternalLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
/**
 * Explaining benefits available when someone wants leave because of unsafe working coditions.
 */

/**
 * Option 1
 * @param {*} props
 */
export const NLRAStateOrderOSHA = (props) => {
  return (
    <div>
      <p>
        You have a right to a safe and healthy workplace.{" "}
        <ExternalLink href="https://clsphila.org/wp-content/uploads/2020/04/Workers%E2%80%99-Health-and-Safety-During-the-COVID-19-Crisis.pdf">
          Learn about your enforcing your rights to a safe workplace
        </ExternalLink>
        .
      </p>
      <p>
        Another option is to quit and file for Unemployment Compensation (UC)
        benefits. To qualify for benefits, you have to try to work things out
        with your employer first. You should discuss your concerns with your
        employer, preferably in writing. Make sure you keep a copy (and not just
        in your work email, which you could lose access to if you get fired).
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
    </div>
  );
};

/**
 * Option 2
 * @param {*} props
 */
export const NonEmployeeAdvice = (props) => {
  return (
    <div>
      <p>
        If you are an independent contractor instead of an employee, fewer
        workplace protection laws apply to you. Your best option to address
        unsafe conditions at work may be joining together with people you work
        with to talk to management, contacting an organizing group, or going to
        the press with your concerns. You do not need to be an employee to make
        a complaint about safety at a business on the{" "}
        <ExternalLink href="https://expressforms.pa.gov/apps/pa/doh/COVID-19-Complaint">
          PA Department of Health’s Covid-10 complaint site
        </ExternalLink>
      </p>
      <p>
        If you haven't already, click to learn about{" "}
        <Link to="/questions/uc-pua-benefits">
          eligibility for unemployment compensation and Pandemic Unemployment
          Assistance (PUA)
        </Link>
        .
      </p>
    </div>
  );
};
