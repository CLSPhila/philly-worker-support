import React from "react";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

export default function (props) {
  return (
    <MultipleChoice
      {...props}
      question="Current employment status"
      label="Are you currently working?"
    >
      <FormControlLabel value="yes" control={<Radio />} label="Yes, I am." />

      <FormControlLabel value="no" control={<Radio />} label="No, I am not." />
    </MultipleChoice>
  );
}
