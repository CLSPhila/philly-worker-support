import React from "react";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

/**
 * Questions relating to a person's eligibility for FMLA.
 */

export const TwelveMonthsEmployed = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Have you worked for your employer for at least twelve (12) months?"
      label="Have you worked for your employer for at least twelve (12) months?"
    >
      <FormControlLabel control={<Radio />} value="yes" label="Yes, I have." />

      <FormControlLabel
        control={<Radio />}
        value="no"
        label="No, I have not."
      />
    </MultipleChoice>
  );
};

export const WorkedEnoughHours = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Have you worked at least 1,250 hours in the past year?"
      label="Have you worked at least 1,250 hours in the past year (about 25 hours per week if you worked 50 weeks)?"
    >
      <FormControlLabel control={<Radio />} value="yes" label="Yes, I have." />
      <FormControlLabel
        control={<Radio />}
        value="no"
        label="No, I have not."
      />
    </MultipleChoice>
  );
};

export const FiftyNearbyEmployees = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Does your employer have at least fifty (50) employees within seventy-five (75) miles of your worksite?"
      label="Does your employer have at least fifty (50) employees within seventy-five (75) miles of your worksite?"
    >
      <FormControlLabel control={<Radio />} value="yes" label="Yes, it does." />

      <FormControlLabel
        control={<Radio />}
        value="no"
        label="No, it does not."
      />
    </MultipleChoice>
  );
};

export const SickPersonIsCloseRelative = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Is the person you need to care for your son, daughter, spouse, or parent?"
    >
      <FormControlLabel
        control={<Radio />}
        value="yes"
        label="Yes, they are."
      />

      <FormControlLabel
        control={<Radio />}
        value="no"
        label="No, they are not."
      />
    </MultipleChoice>
  );
};
