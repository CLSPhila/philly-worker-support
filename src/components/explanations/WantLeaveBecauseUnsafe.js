import React from "react";

/**
 * Explaining benefits available when someone wants leave because of unsafe working coditions.
 */

/**
 * Option 1
 * @param {*} props
 */
export const NLRAStateOrderOSHA = (props) => {
  return (
    <div>You can try to get help from the NLRA, a state order, or OSHA.</div>
  );
};

/**
 * Option 2
 * @param {*} props
 */
export const NonEmployeeAdvice = (props) => {
  return (
    <div>
      f you are an independent contractor instead of an employee, fewer
      workplace protection laws apply to you. Your best option to address unsafe
      conditions at work may be joining together with people you work with to
      talk to management, contacting an organizing group, or going to the press
      with your concerns. You do not need to be an employee to make a complaint
      about safety at a business on the PA Department of Health’s Covid-10
      complaint
      <a href="https://expressforms.pa.gov/apps/pa/doh/COVID-19-Complaint">
        site
      </a>
    </div>
  );
};
