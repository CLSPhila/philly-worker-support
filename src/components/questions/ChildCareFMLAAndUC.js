import React from "react";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

/**
 * Questions relating to eligibility for childcare-related FMLA and UC.
 * TODO are these really related to UC at all?
 */

export const ChildCareDaycareClosed = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Are you caring for your child whose school or daycare provider has closed due to coronavirus or whose childcare provider is unavailable due to coronavirus?"
      label="Are you caring for your child whose school or daycare provider has closed due to coronavirus or whose childcare provider is unavailable due to coronavirus?"
    >
      <FormControlLabel
        value="yes"
        control={<Radio />}
        value="Yes, I am. I miss daycare so much."
      />
      <FormControlLabel value="no" control={<Radio />} label="No, I am not." />
    </MultipleChoice>
  );
};

export const NoSuitableOtherChildcare = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Is any other suitable person available to care for your child?"
      label="Is any other suitable person available to care for your child?"
    >
      <FormControlLabel
        value="yes"
        control={<Radio />}
        label="Yes, there is someone else who could care for my child."
      />
      <FormControlLabel
        value="no"
        control={<Radio />}
        label="No, there is no other person who could care for my child."
      />
    </MultipleChoice>
  );
};

export const EmployedThirtyDays = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Have you worked for your employer for at least thirty (30) days?"
      label="Have you worked for your employer for at least thirty (30) days?"
    >
      <FormControlLabel value="yes" control={<Radio />} label="Yes, I have." />
      <FormControlLabel
        value="no"
        control={<Radio />}
        value="No, I have not."
      />
    </MultipleChoice>
  );
};
