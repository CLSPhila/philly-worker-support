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
export const FFCRAChildcare = () => {
  const styles = useStyles();

  return (
    <Paper>
      <Box className={styles.root}>
        <h1>
          Expanded Family and Medical Leave under the Families First Coronavirus
          Response Act
        </h1>
        <h2>What is it?</h2>
        <p>
          Up to 10 weeks of leave paid at 2/3 of your normal rate (up to $200
          per day or $10,000 total)
        </p>
        <p>
          (When you add this on to paid sick leave under the Families First
          Coronavirus Response Act, you can take 12 weeks total.)
        </p>
        <h2>What can I use it for?</h2>
        <p>
          You can only use this leave to care for a child whose school or place
          of care is closed for coronavirus-related reasons or if their usual
          caregiver is unavailable. You have to be the only one available to
          care for your child.{" "}
        </p>
        <h2>What special issues should I keep in mind?</h2>
        <p>
          You need to have worked for your employer for at least 30 days before
          taking the leave.
        </p>
        <p>
          The law does not apply to employers with more than 500 employees, so
          if you work for a big company you may not be covered.
        </p>
        <p>
          If you work in the healthcare field, even if you are not a doctor or
          nurse, your employer might opt out of coverage under this law.{" "}
        </p>
        <p>
          If your employer has fewer than 50 employees, they can ask for an
          exemption from this law.{" "}
        </p>
        <p>
          If you have already taken a regular Family and Medical Leave Act leave
          in the past year, you might have fewer than 10 weeks left to take of
          the new Expanded Family and Medical Leave Act leave.{" "}
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
