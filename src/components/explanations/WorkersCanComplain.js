import React from "react";

import { Link } from "react-router-dom";
export const WorkersRightToComplain = () => {
  return (
    <div>
      <p>
        Workers’ rights to complain/refuse unsafe work are sometimes protected.
        Call CLS!
      </p>
      <p>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/questions/uc-pua-benefits"> here. </Link>
      </p>
    </div>
  );
};
