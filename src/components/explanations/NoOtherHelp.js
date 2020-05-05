import React from "react";
import { Link } from "react-router-dom";
import { ContactCLS } from "../extras/ContactCLS";

export const NoOtherHelp = () => {
  return (
    <div>
      <div>
        Unfortunately, this system isn't able to find a program that might help
        in this situation.
      </div>
      <div>
        You might wish to reach out to a legal services organization or a
        private lawyer, to get advice specific to your situation.
      </div>
      <ContactCLS />
      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/questions/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};
