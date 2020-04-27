import React from "react";
import MultipleChoice from "../MultipleChoice";

/**
 * Questions relating to eligibility for childcare-related FMLA and UC.
 */

export const ChildCareDaycareClosed = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Are you caring for your child whose school or daycare provider has closed due to coronavirus or whose childcare provider is unavailable due to coronavirus?"
      label="Are you caring for your child whose school or daycare provider has closed due to coronavirus or whose childcare provider is unavailable due to coronavirus?"
    >
      <option value="yes">Yes, I am. I miss daycare.</option>
      <option value="no">No, I am not.</option>
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
      <option value="yes">
        Yes, there is someone else who could care for my child.
      </option>
      <option value="no">
        No, there is no other person who could care for my child.
      </option>
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
      <option value="yes">Yes, I have.</option>
      <option value="no">No, I have not.</option>
    </MultipleChoice>
  );
};
