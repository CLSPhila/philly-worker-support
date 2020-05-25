/**
 * Federal sick leave, Philly sick leave, regular FMLA qualification questions & UC qualification questions
 */
import React from "react";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

export const HasPublicEmployer = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Do you work for a public employer?"
      label="Do you work for a public employer?"
    >
      <FormControlLabel control={<Radio />} value="yes" label="Yes, I do." />

      <FormControlLabel control={<Radio />} value="no" label="No, I do not." />
    </MultipleChoice>
  );
};

export const EmployerSize = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="How large is your employer?"
      label="How many employees work for your employer?"
    >
      <FormControlLabel
        control={<Radio />}
        value="gteFiveHundred"
        label="Five hundred (500) or more?"
      />

      <FormControlLabel
        control={<Radio />}
        value="ltFiveHundred"
        label="Fewer than five hundred (500)?"
      />
    </MultipleChoice>
  );
};

export const RelativeHasCovid = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Does the person you are caring for meet one of these criteria?"
    >
      <FormControlLabel
        control={<Radio />}
        value="haveCovid"
        label="The person thinks they have Covid-19, and I need need time off to help them get tested or see a
        doctor."
      />
      <FormControlLabel
        control={<Radio />}
        value="selfQuarantine"
        label="A doctor told them to self quarantine."
      />
      <FormControlLabel
        control={<Radio />}
        value="neither"
        label="Neither of these."
      />
    </MultipleChoice>
  );
};

export const HaveCovid = (props) => {
  return (
    <MultipleChoice {...props} question="Do you meet one of these criteria?">
      <FormControlLabel
        control={<Radio />}
        value="haveCovid"
        label="I think I have Covid-19, and I need need time off to get tested or see a
        doctor."
      />
      <FormControlLabel
        control={<Radio />}
        value="selfQuarantine"
        label="A doctor told me to self quarantine."
      />
      <FormControlLabel
        control={<Radio />}
        value="neither"
        label="Neither of these."
      />
    </MultipleChoice>
  );
};

export const HeathcareWorker = (props) => {
  return (
    <div>
      <MultipleChoice
        {...props}
        question="Do you work as a health care provider, or as an emergency responder?"
        label="Do you work as a health care provider, or as an emergency responder?"
      >
        <FormControlLabel control={<Radio />} value="yes" label="I do." />

        <FormControlLabel
          control={<Radio />}
          value="no"
          label="No, I do not."
        />
      </MultipleChoice>
      <div>
        A healthcare worker is anyone employed at any doctor’s office, hospital,
        health care center, clinic, post-secondary educational institution
        offering health care instruction, medical school, local health
        department or agency, nursing facility, retirement facility, nursing
        home, home health care provider, any facility that performs laboratory
        or medical testing, pharmacy, or any similar institution.
      </div>
      <div>
        An emergency responder includes military or national guard, law
        enforcement officers, correctional institution personnel, fire fighters,
        emergency medical services personnel, physicians, nurses, public health
        personnel, emergency medical technicians, paramedics, emergency
        management personnel, 911 operators, child welfare workers and service
        providers, public works personnel, and persons with skills or training
        in operating specialized equipment or other skills needed to provide aid
        in a declared emergency.
      </div>
      <div>
        Employers can exclude healthcare workers and emergency responders from
        paid sick leave and expanded FMLA coverage.
      </div>
    </div>
  );
};
