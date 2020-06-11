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
export const PUA = () => {
  const styles = useStyles();

  return (
    <Paper>
      <Box className={styles.root}>
        <h1>Pandemic Unemployment Assistance</h1>
        <h2>What is it?</h2>
        <p>
          Up to 39 weeks of partial income replacement, ranging from $195 to
          $572 per week
        </p>
        <p>
          Until July 31, 2020, everyone receiving any amount of Pandemic
          Unemployment Assistance will also get an extra $600 per week in
          Pandemic Unemployment Compensation.
        </p>
        <h2>What can I use it for?</h2>
        <p>
          You can{" "}
          <Link href="https://www.uc.pa.gov/unemployment-benefits/file/Pages/Filing-for-PUA.aspx">
            apply
          </Link>{" "}
          for Pandemic Unemployment Assistance if you have lost your job or had
          your hours reduced. You can also apply if you have been unable to work
          at your job or had to quit for coronavirus-related reasons. If you had
          a job offer that disappeared because of the coronavirus crisis, you
          may also be eligible.
        </p>
        <p>
          Self-employed people, gig workers, employees of religious
          institutions, people without enough work history to qualify for
          regular unemployment compensation, and people whose regular
          unemployment compensation has run out can all get Pandemic
          Unemployment Assistance.
        </p>
        <h2>What special issues should I keep in mind?</h2>
        <p>
          The system to apply for Pandemic Unemployment Assistance online has a
          lot of glitches, so you may need to be very persistent to apply.{" "}
        </p>
        <p>
          To learn about Pandemic Unemployment Assistance, how to apply, and to
          get help, reach out to{" "}
          <Link href="https://philalegal.org/">
            Philadelphia Legal Assistace
          </Link>
        </p>
      </Box>
    </Paper>
  );
};
