import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "@material-ui/core/Link";
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
        <p>
          You may be eligible for{" "}
          <ExternalLink href="/programs/ffcra-sick-leave">
            {" "}
            Federal Sick leave
          </ExternalLink>{" "}
          (or{" "}
          <ExternalLink href="/programs/ffcra-childcare">
            child-care related sick leave
          </ExternalLink>
          ).
        </p>
      ) : (
        <></>
      )}
      {isEligibleForPhillySick ? (
        <p>
          {" "}
          You may be eligible for{" "}
          <ExternalLink href="/programs/philly-sick-leave">
            Philadelphia Sick Leave.
          </ExternalLink>
        </p>
      ) : (
        <></>
      )}
      {isEligibleForFMLA ? (
        <p>
          You may be eligible for{" "}
          <ExternalLink href="/programs/fmla">
            Family Medical Leave.
          </ExternalLink>
        </p>
      ) : (
        <></>
      )}
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
