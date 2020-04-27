import React from "react";
import MultipleChoice from "../MultipleChoice";
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
      <option value="yes">Yes, I have.</option>
      <option value="no">No, I have not.</option>
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
      <option value="yes">Yes, I have.</option>
      <option value="no">No, I have not.</option>
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
      <option value="yes">Yes, it does.</option>
      <option value="no">No, it does not.</option>
    </MultipleChoice>
  );
};

export const SickPersonIsCloseRelative = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="If you are taking a leave to care for someone else who is sick, is that person your son, daughter, spouse, or parent?"
      label="If you are taking a leave to care for someone else who is sick, is that person your son, daughter, spouse, or parent?"
    >
      <option value="yes">Yes, they are.</option>
      <option value="no">No, they are not.</option>
      <option value="notapplicable">
        I'm not taking leave to care for someone else.
      </option>
    </MultipleChoice>
  );
};
