import React from "react";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

/**
 * Questions relating to a person's eligibility for sick leave in Philadelphia.
 */

export const WorkInPhilly = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Does your job involve working in Philadelphia for at least 40 hours each year?"
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

export const WorkingNinetyDays = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Have you been on the job for at least 90 days?"
      label="Have you been on the job for at least 90 days?"
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

export const IsFullTimeEmployee = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Is your job in any of these categories?"
      label="Is your job one of: gig workers, independent contractors, union members, state or federal government worker, and seasonal workers?"
    >
      <FormControlLabel control={<Radio />} value="yes" label="Yes, it is." />

      <FormControlLabel control={<Radio />} value="no" label="No, it is not." />
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
      <FormControlLabel control={<Radio />} value="yes" label="Yes, it does." />

      <FormControlLabel
        control={<Radio />}
        value="no"
        label="No, it is does not."
      />
    </MultipleChoice>
  );
};
