import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "@material-ui/core/Link";
/**
 * Information explaining if leave is protected or not.
 *
 * These are the endpoints when someone is not employed because of trying to take
 * sick leave.
 */

export const LeaveIsProtected = () => {
  return (
    <div>
      <p>
        Your employer may have violated the law when they fired you for taking
        sick leave or for asking to take sick leave. There are federal and local
        laws that protect some workers against retaliation for taking/requesting
        sick leave. Learn more about{" "}
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          laws protecting your right to take sick leave
        </ExternalLink>
        . Call Community Legal Services at 215-981-3700 to learn more about your
        rights and discuss your options.
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

export const LeaveIsNotProtected = () => {
  return (
    <div>
      <p>Unfortunately, it looks like your leave is not protected.</p>
      <p> There may be other programs that could help you.</p>
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
