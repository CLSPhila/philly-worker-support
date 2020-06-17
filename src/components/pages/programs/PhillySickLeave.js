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
export const PhillySickLeave = () => {
  const styles = useStyles();

  return (
    <Paper>
      <Box className={styles.root}>
        <h1>Philadelphia Sick Leave</h1>
        <h2>What is it?</h2>

        <p>
          Up to 40 hours of sick time, which is paid if your employer has 10 or
          more employees and unpaid if they have 9 or fewer.
        </p>
        <p>
          You have to accrue this time, meaning that you earn 1 hour of leave
          for every 40 hours you work.
        </p>
        <p>
          Your employer is supposed to track how much time you have accrued and
          pay you out for any unused sick time before a layoff.
        </p>
        <h2>What can I use it for?</h2>
        <p>
          You can use this leave for coronavirus-related reasons, including if
          your workplace shuts down, if you are quarantined (including
          self-quarantine), if you’re sick, if you’re caring for someone else
          who is sick, or if your child’s school or daycare is closed.
        </p>
        <p>
          This leave existed before coronavirus. You can use it if you’re sick
          or have a medical appointment or if a family member is sick or has a
          medical appointment., even if it isn’t related to coronavirus.
        </p>
        <h2>What special issues do I need to keep in mind?</h2>
        <p>
          You can’t use this leave if you have been on the job for less than 90
          days.{" "}
        </p>
        <p>
          Some categories of workers, such as seasonal workers, workers covered
          by a union contract, and state and federal employees (including SEPTA
          employees) are not covered.
        </p>
        <p>
          Learn more about{" "}
          <Link href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
            Philadelphia's Sick Leave law
          </Link>
          .
        </p>
        <p>
          If you need help with Philadelphia Sick Leave issues, contact
          Community Legal Services at{" "}
          <Link href="tel:215-981-3700">215-981-3700.</Link>
        </p>
      </Box>
    </Paper>
  );
};
