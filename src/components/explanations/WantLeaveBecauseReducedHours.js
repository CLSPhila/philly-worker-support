import React from "react";
import { Link } from "react-router-dom";

export const ReducedHoursExplanation = () => {
  return (
    <div>
      <div>
        You can qualify for UC even with reduced hours, even when you continue
        working!
      </div>
      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};
