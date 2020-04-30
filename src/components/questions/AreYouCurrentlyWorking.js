import React from "react";
import { updateAnswer } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
    <div>
      <h1 className={styles.questionTitle}> Welcome. </h1>
      <h2> Are you currently working? </h2>
      <form>
        <Button color="primary" onClick={handleClick("yes")}>
          Yes, I am currently working.
        </Button>
        <Button color="primary" onClick={handleClick("no")}>
          No, I am not currently working.
        </Button>
      </form>
    </div>
  );
}
