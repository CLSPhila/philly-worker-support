import React, { useState } from "react";
import { updateAnswer, goBack } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
//import Select from "@material-ui/core/Select";
//import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  fieldSet: {
    width: "100%",
  },
  questionTitle: {
    marginTop: 0,
  },
  navButton: {
    maxWidth: "100%",
    flexBasis: "5%",
  },
}));

export default function (props) {
  const styles = useStyles();

  const { dispatch, questionId, question, label, children } = props;

  const initialAnswer = "";

  const [answer, setAnswer] = useState(initialAnswer);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAnswer(questionId, answer));
  };

  const backButtonClickHandler = (e) => {
    e.preventDefault();
    dispatch(goBack());
  };

  return (
    <div>
      <h1 className={styles.questionTitle}> {question} </h1>
      <form id={questionId} onSubmit={handleSubmit}>
        <FormControl className={styles.fieldSet} component="fieldset">
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
          <Grid container spacing={2}>
            <Grid item xs={3} className={styles.navButton}>
              <Button variant="contained" onClick={backButtonClickHandler}>
                Previous
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                type="submit"
                disabled={answer === initialAnswer ? true : false}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>
    </div>
  );
}
