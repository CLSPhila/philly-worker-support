import React, { useReducer } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Debugger } from "./extras/debugger";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
  },
  h1: {
    marginTop: 0,
  },
}));

/**
 * Machinery for running a guided interview.
 */

const createQuestions = (questions) => {
  const initialState = questions.reduce(
    (qs, thisQ) => ({
      ...qs,
      [thisQ.id]: { id: thisQ.id, answer: null },
    }),
    {}
  );
  return { answers: initialState, interviewHistory: [] };
};

const questionReducer = (state, action) => {
  console.log("processing action: ");
  console.log(action);
  const { answers, interviewHistory } = state;
  console.log(interviewHistory);
  switch (action.type) {
    case "UPDATE_ANSWER":
      return {
        answers: {
          ...answers,
          [action.payload.id]: {
            ...answers[action.payload.id],
            answer: action.payload.answer,
          },
        },
        interviewHistory: [...interviewHistory, action.payload.id],
      };

    default:
      return state;
  }
};

function Questioner({ questions, pickQuestion }) {
  const styles = useStyles();

  const [state, dispatch] = useReducer(
    questionReducer,
    questions,
    createQuestions
  );
  return (
    <Box>
      <Paper className={styles.root}>{pickQuestion(state, dispatch)}</Paper>
      <Debugger state={state} />
    </Box>
  );
}

export default Questioner;
