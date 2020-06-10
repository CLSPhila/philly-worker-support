import React from "react";
import Button from "@material-ui/core/Button";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

export const AreYouAGigWorker = (props) => {
  return (
    <MultipleChoice
      {...props}
      question="Gig worker or independent contractor"
      label="Are you a gig worker or independent contractor?"
    >
      <FormControlLabel value="yes" control={<Radio />} label="Yes, I am." />

      <FormControlLabel value="no" control={<Radio />} label="No, I am not." />
    </MultipleChoice>
  );
};
