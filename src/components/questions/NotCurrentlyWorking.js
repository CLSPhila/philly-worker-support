import React from "react";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

export default function (props) {
  return (
    <MultipleChoice
      {...props}
      question="i am not currently working, and i'm looking for help because:"
      label=""
    >
      <FormControlLabel
        control={<Radio />}
        value="sickleave"
        label="I was fired for taking sick leave or trying to take sick leave."
      />

      <FormControlLabel
        control={<Radio />}
        value="sickcare"
        label="I was fired because i couldn’t work, had to care for someone who was sick."
      />

      <FormControlLabel
        control={<Radio />}
        value="childcare"
        label="I was fired because i couldn’t work due to childcare"
      />

      <FormControlLabel
        control={<Radio />}
        value="workingconditions"
        label="I was fired because i complained about working conditions or refused to work
        under bad conditions"
      />

      <FormControlLabel
        control={<Radio />}
        value="other"
        label="I am not working for any other reason"
      />
    </MultipleChoice>
  );
}
