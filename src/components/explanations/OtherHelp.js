import React from "react";
import { Link } from "react-router-dom";
import { ContactCLS } from "../extras/ContactCLS";

export const OtherHelp = (props) => {
  console.log("otherhelp");
  console.log(props);
  const {
    isEligibleForPhillySick,
    isEligibleForFedSick,
    isEligibleForFMLA,
  } = props;
  return (
    <div>
      <h1>Your Eligibility.</h1>
      {isEligibleForFMLA || isEligibleForFedSick || isEligibleForPhillySick ? (
        <p> Here are your results.</p>
      ) : (
        <></>
      )}
      {isEligibleForFedSick ? (
        <p>You are likely eligible for Federal Sick leave.</p>
      ) : (
        <></>
      )}
      {isEligibleForPhillySick ? (
        <p> You are likely eligible for Philadelphia Sick Leave.</p>
      ) : (
        <></>
      )}
      {isEligibleForFMLA ? <p>You are likely eligible for FMLA.</p> : <></>}
      <p>
        You might wish to reach out to a legal services organization or a
        private lawyer, to get advice specific to your situation.
      </p>
      <ContactCLS />
      <p>
        If you haven't already, click to try the quiz about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/questions/uc-pua-benefits"> here. </Link>
      </p>
    </div>
  );
};
