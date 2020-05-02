import React from "react";
import { Link } from "react-router-dom";
/**
 * Benefits that are most applicable when I want time off because I'm sick.
 *
 * TODO make components for each type of leave. Pass {...props} down to them.
 * TODO Philly leave needs a prop explaining whether leave is paid or not.
 */

/**
 * Option 1
 * @param {*} props
 */
export const FedSickPhillySickandFMLA = (props) => {
  const { phillyLeaveIsPaid } = props;

  return (
    <div>
      <div>
        You appear to be qualified for federal sick leave/ Philly sick
        leave/FMLA
      </div>
      <div>
        {phillyLeaveIsPaid
          ? "Good news, it looks like your Philly sick leave would be <em> paid </em> sick leave."
          : "Your Philly leave would not be paid. "}
      </div>
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
export const FedSickOnly = (props) => {
  return (
    <div>
      <div>
        You appear to be qualified for federal sick leave, but not Philly sick
        leave or FMLA.
      </div>
      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};

/**
 * Option 3
 * @param {*} props
 */
export const PhillySickandFMLA = (props) => {
  const { phillyLeaveIsPaid } = props;
  return (
    <div>
      <div>
        You appear to be qualified for Philly sick leave and FMLA, but not
        Federal Sick leave
      </div>
      <div>
        {phillyLeaveIsPaid
          ? "Good news, it looks like your Philly sick leave would be <em> paid </em> sick leave."
          : "Your Philly leave would not be paid. "}
      </div>

      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};

/**
 * Option 4
 * @param {*} props
 */
export const PhillySickOnly = (props) => {
  const { phillyLeaveIsPaid } = props;
  return (
    <div>
      <div>
        You appear to be qualified for Philly sick leave, but not FMLA or
        Federal Sick Leave
      </div>
      <div>
        {phillyLeaveIsPaid
          ? "Good news, it looks like your Philly sick leave would be <em> paid </em> sick leave."
          : "Your Philly leave would not be paid. "}
      </div>

      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};

/**
 * Option 5
 * @param {*} props
 */
export const NotFedSickPhillySickOrFMLA = (props) => {
  return (
    <div>
      <div>
        You appear NOT to be qualified for federal sick leave, Philly paid sick
        leave, or FMLA.
      </div>
      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};

/**
 * Option 6
 * @param {*} props
 */
export const FMLAOnly = (props) => {
  return (
    <div>
      <div>
        You appear to be qualified for FMLA, but not federal sick leave or
        Philly paid sick leave.
      </div>
      <div>
        If you haven't already, click to learn about eligibility for
        unemployment compensation and Pandemic Unemployment Assistance (PUA):
        <Link to="/uc-pua-benefits"> here. </Link>
      </div>
    </div>
  );
};
