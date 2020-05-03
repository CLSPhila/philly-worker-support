import React, { useState } from "react";
import { updateAnswer } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
//import Select from "@material-ui/core/Select";
//import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  questionTitle: {
    marginTop: 0,
  },
}));

export default function (props) {
  const styles = useStyles();

  const { dispatch, questionId, question, label, children } = props;

  const initialAnswer = "";

  const [answer, setAnswer] = useState(initialAnswer);

  const handleChange = (e) => {
    console.log("setting answer to: ");
    console.log(e.target.value);
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("form submitting");
    e.preventDefault();
    dispatch(updateAnswer(questionId, answer));
  };

  return (
    <div>
      <h1 className={styles.questionTitle}> {question} </h1>
      <form id={questionId} onSubmit={handleSubmit}>
        <FormControl component="fieldset">
          <FormLabel component="legend" htmlFor={questionId}>
            {label}
          </FormLabel>
          <RadioGroup
            aria-label="questionId"
            name={questionId}
            onChange={handleChange}
            value={answer}
          >
            {children}
          </RadioGroup>
          <Button
            variant="contained"
            type="submit"
            disabled={answer === initialAnswer ? true : false}
          >
            Next
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
