import React from "react";
import MultipleChoice from "../MultipleChoice";

/**
 * Questions relating to eligibility for Unemployment Compensation
 */

export const SelfEmployed = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Are you self-employed, a gig worker, an independent contractor, a cash worker, or an employee of a religious institution?"
      label="Are you self-employed, a gig worker, an independent contractor, a cash worker, or an employee of a religious institution? "
    >
      <option value="yes">Yes, I am.</option>
      <option value="no">No, I am not.</option>
    </MultipleChoice>
  );
};

export const EarnedEnough = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Did you earn at least $116/week in W-2 wages for at least 18 weeks in 2019?"
      label="Did you earn at least $116/week in W-2 wages for at least 18 weeks in 2019"
    >
      <option value="yes">Yes, I did.</option>
      <option value="no">No, I did not.</option>
    </MultipleChoice>
  );
};

export const AlreadyUsedBenefits = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Have you used up all your regular unemployment compensation benefits already?"
      label="Have you used up all your regular unemployment compensation benefits already? "
    >
      <option value="yes">Yes, I have.</option>
      <option value="no">No, I have not.</option>
    </MultipleChoice>
  );
};
