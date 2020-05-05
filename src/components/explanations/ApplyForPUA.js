import React from "react";
import { Link } from "react-router-dom";

export const ApplyForPUA = () => {
  return (
    <div>
      <p>Yes, you should apply for PUA.</p>;
      <p>
        If you haven't already, click to learn about eligibility for sick leave
        benefits:
        <Link to="/questions/leave-benefits"> here. </Link>
      </p>
    </div>
  );
};

export const NotEligibleForPUA = () => {
  return (
    <div>
      <p>It looks like you are not eligible for PUA. Sorry.</p>
      <p>
        If you haven't already, click to learn about eligibility for sick leave
        benefits:
        <Link to="/questions/leave-benefits"> here. </Link>
      </p>
    </div>
  );
};
