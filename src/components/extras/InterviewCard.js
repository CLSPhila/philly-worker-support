import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  details: {
    flex: "auto 1",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  content: {
    flex: "1",
  },
  controls: {
    display: "flex",
    margin: "0.5rem",
    alignItems: "center",
  },
}));

export const InterviewCard = (props) => {
  const { interviewTitle, description, url } = props;
  const styles = useStyles();

  return (
    <Card className={styles.root}>
      <div className={styles.details}>
        <CardContent className={styles.content}>
          <Typography component="h6">{interviewTitle}</Typography>
          <Typography variant="body1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <div className={styles.controls}>
          <Button
            variant="contained"
            aria-label="take-quiz"
            href={url}
            startIcon={<PlayArrowIcon />}
          >
            <Typography variant="body1">Take Quiz</Typography>
          </Button>
        </div>
      </div>
    </Card>
  );
};
