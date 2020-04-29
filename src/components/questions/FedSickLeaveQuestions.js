/**
 * Federal sick leave, Philly sick leave, regular FMLA qualification questions & UC qualification questions
 */
import React from "react";
import MultipleChoice from "../MultipleChoice";

export const HasPublicEmployer = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Do you work for a public employer?"
      label="Do you work for a public employer?"
    >
      <option value="yes">Yes, I do.</option>
      <option value="no">No, I do not.</option>
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
      <option value="gteFiveHundred">Five hundred (500) or more?</option>
      <option value="ltFiveHundred">Fewer than five hundred (500)?</option>
    </MultipleChoice>
  );
};

export const HaveCovid = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Do you meet one of these criteria?"
      label="Do you either,"
    >
      <option value="haveCovid">
        I think I have covid-19, and I need need time off to get tested or see a
        doctor.
      </option>
      <option value="selfQuarantine">
        A doctor told me to self quarantine.
      </option>
      <option value="neither">Neither of these.</option>
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
        <option value="yes">Yes, I do.</option>
        <option value="no">No, I do not.</option>
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
