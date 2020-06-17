import React from "react";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    " & *": {
      marginTop: theme.spacing(2),
    },
  },
}));

/**
 * Index linking to blurbs about each benefits program this site covers
 */
export const FMLA = () => {
  const styles = useStyles();

  return (
    <Paper>
      <Box className={styles.root}>
        <h1>Family and Medical Leave Act</h1>
        <h2>What is it?</h2>
        <p>Up to 12 weeks of unpaid leave.</p>
        <p>
          Your job is protected and you get to keep employer-provided health
          insurance during the leave.
        </p>
        <h2>What can I use if for?</h2>
        <p>
          You can only use this leave for your own serious health condition, a
          family member’s serious health condition, or to care for a new baby,
          newly-adopted child, or new foster child.
        </p>
        <p>
          You can also take leave intermittently, meaning you can take leave in
          smaller chunks of time for doctor’s appointments, other treatment, or
          flare-ups related to the serious health condition.
        </p>
        <p>You could use this leave after other leaves run out.</p>
        <h2>What special issues should I keep in mind?</h2>
        <p>
          Not every employee qualifies for FMLA leave. Your employee handbook
          should tell you if you are covered, or you can ask your employer.{" "}
        </p>
        <p>
          You can only take this leave if you have been working at your job for
          at least 1 year and have worked a minimum of 1,250 hours (about
          25/hours week for 50 weeks) in the past year.
        </p>
        <p>
          You only qualify if your employer has at least 50 employees within a
          75-mile radius of your worksite.
        </p>
        <p>
          If you’re taking leave to care for someone else with a serious health
          condition, that person must be your son, daughter, spouse, or parent.{" "}
        </p>
        <p>
          You will have to get paperwork filled out from your doctor to certify
          that you have a serious health condition.
        </p>
        <p>
          Learn more about the Family Medical Leave Act from{" "}
          <Link href="https://clsphila.org/services/taking-leave-from-work/">
            Community Legal Services of Philadelphia
          </Link>{" "}
          and the{" "}
          <Link href="https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/employeeguide.pdf">
            Department of Labor
          </Link>
          .
        </p>

        <p>
          If you need help with leave issues under the Family Medical Leave Act,
          contact Community Legal Services at{" "}
          <Link href="tel:215-981-3700">215-981-3700.</Link>
        </p>
      </Box>
    </Paper>
  );
};
