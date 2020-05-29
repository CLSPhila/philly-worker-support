import React from "react";

import { Link } from "react-router-dom";
import { ContactCLS } from "../extras/ContactCLS";
export const WorkersRightToComplain = () => {
  return (
    <div>
      <p>
        Workers have rights to complain or refuse unsafe work. We may be able to
        provide you with more information about your specific circumstances.
        Give us a call.
      </p>
      <ContactCLS />
      <p>
        If you haven't already, click to{" "}
        <Link to="/questions/uc-pua-benefits">
          learn about eligibility for unemployment compensation and Pandemic
          Unemployment Assistance (PUA){" "}
        </Link>
      </p>
    </div>
  );
};
