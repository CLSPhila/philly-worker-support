import React from "react";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
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
export const FFCRASickLeave = () => {
  const styles = useStyles();

  return (
    <Paper>
      <Box className={styles.root}>
        <h1>Families First Coronavirus Act Paid Sick Leave</h1>
        <h2>What is it?</h2>
        <p>
          Up to 2 weeks or 80 hours of sick leave at your full pay rate to take
          care of yourself (up to $511 per day and $5,110 in total)
        </p>
        <p>
          Up to 2 weeks or 80 hours of sick leave at 2/3 of your pay rate to
          take care of a family member (up to $200 per day or $2,000 total)
        </p>
        <h2>What can I use it for?</h2>
        <p>You can use this leave if:</p>
        <ul>
          <li>A doctor requires you to be quarantined.</li>
          <li>You have coronavirus symptoms and are seeking a diagnosis.</li>
          <li>You are caring for a family member who is quarantined</li>
          <li>
            You are staying home with your children when their school is closed
            for coronavirus-related reasons.
          </li>
        </ul>
        <h2>What special issues should I keep in mind?</h2>
        <p>
          The law does not apply to employers with more than 500 employees, so
          if you work for a big company you may not be covered.
        </p>
        <p>
          If you work in the healthcare field, even if you are not a doctor or
          nurse, your employer might opt out of coverage under this law.{" "}
        </p>
        <h3>
          Learn more about the{" "}
          <Link href="https://clsphila.org/employment/paid-sick-leave-philadelphia/">
            Families First Coronavirus Response Act
          </Link>
        </h3>
        <p>
          If you need help with leave issues under the FFCRA, contact Community
          Legal Services at <Link href="tel:215-981-3700">215-981-3700.</Link>
        </p>
      </Box>
    </Paper>
  );
};
