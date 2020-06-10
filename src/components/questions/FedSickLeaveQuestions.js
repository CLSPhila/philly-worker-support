/**
 * Federal sick leave, Philly sick leave, regular FMLA qualification questions & UC qualification questions
 */
import React from "react";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Box from "@material-ui/core/Box";
import { HelpBox } from "../extras/HelpBox";
import Typography from "@material-ui/core/Typography";
import ExternalLink from "@material-ui/core/Link";
export const HasPublicEmployer = (props) => {
  return (
    <Box>
      <MultipleChoice
        {...props}
        question="Do you work for a qualifying public employer?"
        label="Do you work for a public employer that is covered by Federal Sick Leave laws?"
      >
        <FormControlLabel control={<Radio />} value="yes" label="Yes, I do." />

        <FormControlLabel
          control={<Radio />}
          value="no"
          label="No, I do not."
        />
      </MultipleChoice>
      <HelpBox>
        <Typography variant="body2">
          Working for a public employer means you work for federal, state, or
          local government, including government agencies. Unfortunately there
          are some public employers that aren't covered by the sick leave laws.
        </Typography>
        <Typography variant="body2">
          Public employees can learn more about their eligibility in questions
          52-54 of the Department of Labor’s{" "}
          <ExternalLink href="https://www.dol.gov/agencies/whd/pandemic/ffcra-questions#52">
            Families First Coronavirus Response Act {"Q&A"}
          </ExternalLink>
          . Federal employees can read more specific information about their
          eligibility from the{" "}
          <ExternalLink href="https://www.opm.gov/policy-data-oversight/covid-19/opm-fact-sheet-federal-employee-coverage-under-the-leave-provisions-of-the-families-first-coronavirus-response-act-ffcra.pdf">
            Office of Personnel Management’s Fact Sheet
          </ExternalLink>
          .{" "}
        </Typography>
      </HelpBox>
    </Box>
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

export const IHaveCovid = (props) => {
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
      <HelpBox>
        <Typography variant="body2">
          The definition of healthcare worker in the federal sick leave law is
          very broad. It includes not just doctors, nurses, and medical
          assistants, but many people whose work keeps hospitals, research
          facilities, and doctor’s offices running.
        </Typography>
        <Typography variant="body2">
          A healthcare worker is anyone employed at any doctor’s office,
          hospital, health care center, clinic, post-secondary educational
          institution offering health care instruction, medical school, local
          health department or agency, nursing facility, retirement facility,
          nursing home, home health care provider, any facility that performs
          laboratory or medical testing, pharmacy, or any similar institution.
        </Typography>
        <Typography variant="body2">
          An emergency responder includes military or national guard, law
          enforcement officers, correctional institution personnel, fire
          fighters, emergency medical services personnel, physicians, nurses,
          public health personnel, emergency medical technicians, paramedics,
          emergency management personnel, 911 operators, child welfare workers
          and service providers, public works personnel, and persons with skills
          or training in operating specialized equipment or other skills needed
          to provide aid in a declared emergency.
        </Typography>
        <Typography variant="body2">
          Employers can exclude healthcare workers and emergency responders from
          paid sick leave and expanded FMLA coverage.
        </Typography>
      </HelpBox>
    </div>
  );
};
