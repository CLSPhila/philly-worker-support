import React from "react";
import { updateAnswer } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MultipleChoice from "../MultipleChoice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles((theme) => ({
  questionTitle: {
    marginTop: 0,
  },
}));

export default function (props) {
  const styles = useStyles();

  const { dispatch } = props;
  const handleClick = (answer) => {
    return (e) => {
      dispatch(updateAnswer("areYouCurrentlyWorking", answer));
    };
  };

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
