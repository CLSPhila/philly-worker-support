import React, { useReducer } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

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
  return initialState;
};

const questionReducer = (state, action) => {
  console.log("processing action: ");
  console.log(action);
  switch (action.type) {
    case "UPDATE_ANSWER":
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          answer: action.payload.answer,
        },
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
  return <Paper className={styles.root}>{pickQuestion(state, dispatch)}</Paper>;
}

export default Questioner;
