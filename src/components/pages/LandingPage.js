import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const LandingPage = () => {
  return (
    <div>
      <h2> Support for workers during the Covid-19 pandemic</h2>
      <p>
        Navigating sick leave, family leave, and unemployment compensation is
        confusing, and our present crisis makes it harder.
      </p>
      <p>
        The employment law experts at Community Legal Services of Philadelphia
        have prepared this site to help you understand your rights as a worker
        in Philadelphia.
      </p>
      <p>
        Are you still working and looking to take leave time? Click here to
        learn about{" "}
        <Link to="/leave-benefits">
          your eligibility for sick leave and family leave.
        </Link>
      </p>
      <p>
        Have you lost your job or had your hours cut? Click here to learn about{" "}
        <Link to="/uc-pua-benefits">
          your eligibility for Unemployment Compensation and Pandemic
          Unemployment Assistance.
        </Link>
      </p>
      <p>
        This site is merely providing you with general information we hope is
        helpful. Using this site does not mean that we are your lawyers. If
        you'd like to speak with a lawyer to get personal advice about your own
        situation, visit our lawyer referrals page.
      </p>
    </div>
  );
};
