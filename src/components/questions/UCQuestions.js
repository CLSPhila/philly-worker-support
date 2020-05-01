import React from "react";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

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
      <FormControlLabel control={<Radio />} value="yes" label="Yes, I am." />

      <FormControlLabel control={<Radio />} value="no" label="No, I am not." />
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
      <FormControlLabel control={<Radio />} value="yes" label="Yes, I did." />

      <FormControlLabel control={<Radio />} value="no" label="No, I did not." />
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
      <FormControlLabel control={<Radio />} value="yes" label="Yes, I have." />

      <FormControlLabel
        control={<Radio />}
        value="no"
        label="No, I have not."
      />
    </MultipleChoice>
  );
};
