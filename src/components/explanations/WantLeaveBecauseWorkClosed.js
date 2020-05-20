import React from "react";
import ExternalLink from "@material-ui/core/Link";
export const EligibleForPhillyLeave = () => {
  return (
    <div>
      <p>
        You likely qualify for Philadelphia’s paid sick leave.{" "}
        <b>
          If your employer has 10 or more employees, this leave must be paid. 
          If your employer has 9 or fewer employees, this leave may be unpaid.
        </b>
      </p>
      <p>
        <ExternalLink href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
          Learn more about Philadelphia’s sick leave law.
        </ExternalLink>
      </p>
    </div>
  );
};

export const NotEligibleForPhillyLeave = () => {
  return (
    <div>
      <p>You are not eligible for Philadelphia sick leave.</p>
    </div>
  );
};
