import React from "react";

import { Link } from "react-router-dom";
export const WorkersRightToComplain = () => {
  return (
    <div>
      <div>
        Workers’ rights to complain/refuse unsafe work are sometimes protected.
        Call CLS!
      </div>
      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};
