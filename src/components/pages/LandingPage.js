import React from "react";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <div>
      <h1> Experimental guided interview for CLS.</h1>
      <div>
        <Link to="/leave-benefits"> Check my eligibility for sick leave </Link>
      </div>
      <div>
        <Link to="/uc-pua-benefits">
          Check my eligibility for unemployment compensation (UC) and Pandemic
          Unemployment Assistance (PUA)
        </Link>
      </div>
    </div>
  );
};
