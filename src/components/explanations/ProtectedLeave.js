import React from "react";
import { Link } from "react-router-dom";
/**
 * Information explaining if leave is protected or not.
 *
 * These are the endpoints when someone is not employed because of trying to take
 * sick leave.
 */

export const LeaveIsProtected = () => {
  return (
    <div>
      <div> Good news, your leave is protected.</div>;
      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};

export const LeaveIsNotProtected = () => {
  return (
    <div>
      <div>Unfortunately, it looks like your leave is not protected.</div>;
      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};
