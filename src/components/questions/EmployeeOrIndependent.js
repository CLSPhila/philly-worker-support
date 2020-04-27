import React from "react";
import MultipleChoice from "./MultipleChoice";

/**
 * Questions relating to whether a person is an employee or independent contractor.
 */

export const HaveBoss = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Do you have a boss or supervisor who oversees your work?"
      label="Do you have a boss or supervisor who oversees your work?"
    >
      <option value="yes">Yes, I do.</option>
      <option value="no">No, I do not.</option>
    </MultipleChoice>
  );
};

export const TrackHours = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Do you clock in or report your hours?"
      label="Do you clock in or report your hours? "
    >
      <option value="yes">Yes, I do.</option>
      <option value="no">No, I do not.</option>
    </MultipleChoice>
  );
};

export const OwnBusiness = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Do you have your own independent business?"
      label="Do you have your own independent business? "
    >
      <option value="yes">Yes, I do.</option>
      <option value="no">No, I do not.</option>
    </MultipleChoice>
  );
};
