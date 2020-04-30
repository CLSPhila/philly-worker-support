import React, { useState } from "react";
import { updateAnswer } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  questionTitle: {
    marginTop: 0,
  },
}));

export default function (props) {
  const styles = useStyles();

  const {
    dispatch,
    questionId,
    question,
    label,
    children,
    defaultAnswer,
  } = props;

  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    console.log("setting answer to: ");
    console.log(e.target.value);
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAnswer(questionId, answer));
  };

  return (
    <div>
      <h1 className={styles.questionTitle}> {question} </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={questionId}> {label} </label>
        <Select id={questionId} onChange={handleChange} value={answer}>
          <MenuItem disabled value="">
            -- select an option --
          </MenuItem>
          {children}
        </Select>
        <Button variant="contained" type="submit">
          Next
        </Button>
      </form>
    </div>
  );
}
