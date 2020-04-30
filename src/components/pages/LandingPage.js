import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const LandingPage = () => {
  return (
    <div>
      <h1> Experimental guided interview for CLS.</h1>
      <Paper>
        <div>
          <Link to="/leave-benefits">
            {" "}
            Check my eligibility for sick leave{" "}
          </Link>
        </div>
        <div>
          <Link to="/uc-pua-benefits">
            Check my eligibility for unemployment compensation (UC) and Pandemic
            Unemployment Assistance (PUA)
          </Link>
        </div>
      </Paper>
    </div>
  );
};
