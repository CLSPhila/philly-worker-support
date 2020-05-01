import React from "react";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

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
      <FormControlLabel control={<Radio />} value="yes" label="Yes, I do." />
      <FormControlLabel control={<Radio />} value="no" label="No, I do not." />
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
      <FormControlLabel control={<Radio />} value="yes" label="Yes, I do." />

      <FormControlLabel control={<Radio />} value="no" label="No, I do not." />
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
      <FormControlLabel control={<Radio />} value="yes" label="Yes, I do." />

      <FormControlLabel control={<Radio />} value="no" label="No, I do not." />
    </MultipleChoice>
  );
};
