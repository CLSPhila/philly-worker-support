import React from "react";
import { Link } from "react-router-dom";

export const ApplyForPUA = () => {
  return (
    <div>
      <div>Yes, you should apply for PUA.</div>;
      <div>
        If you haven't already, click to learn about eligibility for sick leave
        benefits:
        <Link to="/questions/leave-benefits"> here. </Link>
      </div>
    </div>
  );
};

export const NotEligibleForPUA = () => {
  return (
    <div>
      <div>It looks like you are not eligible for PUA. Sorry.</div>
      <div>
        If you haven't already, click to learn about eligibility for sick leave
        benefits:
        <Link to="/questions/leave-benefits"> here. </Link>
      </div>
    </div>
  );
};
