import React from "react";
import { Link } from "react-router-dom";
import { ContactCLS } from "../extras/ContactCLS";

export const OtherHelp = (props) => {
  const { state = {} } = props;
  const { isEligiblePhillySick, isEligibleFedSick, isEligibleFMLA } = state;
  return (
    <div>
      <p> Here's your results.</p>
      {isEligibleFedSick ? (
        <p>You are likely eligible for Federal Sick leave.</p>
      ) : (
        <></>
      )}
      {isEligiblePhillySick ? (
        <p> Your are likely eligible for Philadelphia Sick Leave.</p>
      ) : (
        <></>
      )}
      {isEligibleFMLA ? <p>You are likely eligible for FMLA.</p> : <></>}

      <p>
        Unfortunately we don't have any other information for you at the moment.
      </p>
      <p>
        You might wish to reach out to a legal services organization or a
        private lawyer, to get advice specific to your situation.
      </p>
      <ContactCLS />
      <p>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/questions/uc-pua-benefits"> here. </Link>
      </p>
    </div>
  );
};
