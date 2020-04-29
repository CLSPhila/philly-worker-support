import React from "react";
/**
 * Information explaining if leave is protected or not.
 *
 * These are the endpoints when someone is not employed because of trying to take
 * sick leave.
 */

export const LeaveIsProtected = () => {
  return <div> Good news, your leave is protected.</div>;
};

export const LeaveIsNotProtected = () => {
  return <div>Unfortunately, it looks like your leave is not protected.</div>;
};
