import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
  textarea: {
    width: "80%",
    minHeight: "80px",
  },
}));

export const Feedback = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.paper}>
      <h3> We appreciate your feedback.</h3>
      <p> If you notice errors, or have other comments, please let us know.</p>
      <p>
        We will not be able to respond to feedback, but we'll do our best to
        incorporate it into this site as it develops.
      </p>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label htmlFor="message">Message:</label>
        </p>
        <p>
          <textarea className={styles.textarea} name="message"></textarea>
        </p>
        <p>
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </p>
      </form>
    </Paper>
  );
};
