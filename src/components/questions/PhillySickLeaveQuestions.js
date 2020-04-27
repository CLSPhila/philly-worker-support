import React from "react";
import MultipleChoice from "../MultipleChoice";
/**
 * Questions relating to a person's eligibility for sick leave in Philadelphia.
 */

export const WorkInPhilly = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Does your job require you to work at least 40 hours per year in Philadelphia"
      label="Does your job require you to work at least 40 hours per year in Philadelphia?"
    >
      <option value="yes">Yes, it does.</option>
      <option value="no">No, it does not.</option>
    </MultipleChoice>
  );
};

export const WorkingNinetyDays = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Have you been on the job for at least 90 days?"
      label="Have you been on the job for at least 90 days?"
    >
      <option value="yes">Yes, I have.</option>
      <option value="no">No, I have not.</option>
    </MultipleChoice>
  );
};

export const IsFullTimeEmployee = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Is your job in any of these categories?"
      label="Is your job one of: gig workers, independent contractors, union members, state or federal government worker, and seasonal workers?"
    >
      <option value="yes">Yes, it is.</option>
      <option value="no">No, it is not.</option>
    </MultipleChoice>
  );
};

export const EmployerHasTenEmployees = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Does your employer have at least ten (10) employees?"
      label="Does your employer have at least ten (10) employees?"
    >
      <option value="yes">Yes, it does.</option>
      <option value="no">No, it is does not.</option>
    </MultipleChoice>
  );
};
