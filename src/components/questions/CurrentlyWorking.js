import React from "react";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

export default function (props) {
  return (
    <MultipleChoice
      {...props}
      question="I am currently working. What if I want or need to work less?"
      label="I am currently working. What if I want or need to work less?"
    >
      <FormControlLabel
        value="IamSick"
        control={<Radio />}
        label="I need time off because I am sick."
      />
      <FormControlLabel
        value="careForSick"
        control={<Radio />}
        label="I need time off to care for someone who is sick."
      />
      <FormControlLabel
        value="childCare"
        control={<Radio />}
        label="I need time off to care for a child whose school/daycare is closed."
      />
      <FormControlLabel
        value="reducedHours"
        control={<Radio />}
        label="My job reduced my hours."
      />
      <FormControlLabel
        value="unsafeWorkingConditions"
        control={<Radio />}
        label="I am concerned about unsafe working conditions."
      />
    </MultipleChoice>
  );
}
