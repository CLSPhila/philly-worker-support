import React from "react";
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
  return (
    <div>
      You appear to be qualified for federal sick leave/ Philly paid sick
      leave/FMLA
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
      You appear to be qualified for federal sick leave, but not Philly sick
      leave or FMLA.
    </div>
  );
};

/**
 * Option 3
 * @param {*} props
 */
export const PhillySickandFMLA = (props) => {
  return (
    <div>
      You appear to be qualified for Philly sick leave and FMLA, but not Federal
      Sick leave
    </div>
  );
};

/**
 * Option 4
 * @param {*} props
 */
export const PhillySickOnly = (props) => {
  return (
    <div>
      You appear to be qualified for Philly sick leave, but not FMLA or Federal
      Sick Leave
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
      You appear NOT to be qualified for federal sick leave, Philly paid sick
      leave, or FMLA.
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
      You appear to be qualified for FMLA, but not federal sick leave or Philly
      paid sick leave.
    </div>
  );
};
