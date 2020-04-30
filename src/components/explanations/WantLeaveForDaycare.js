import React from "react";

import { Link } from "react-router-dom";
/**
 * Explaining benefits available to someone who needs to take time off to provide childcare.
 */

/**
 * Option 1
 * @param {*} props
 */
export const QualifyForFMLA = (props) => {
  return (
    <div>
      <div>You appear to be qualified for FMLA.</div>);
      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};

/**
 * Option 2
 * @param {*} props
 */
export const NotQualifiedForFMLA = (props) => {
  return (
    <div>
      <div>You appear not to be qualified for FMLA.</div>;
      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};
