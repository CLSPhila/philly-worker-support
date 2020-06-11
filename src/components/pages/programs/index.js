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
export const Programs = () => {
  const styles = useStyles();

  return (
    <Paper>
      <Box className={styles.root}>
        <h1>Benefits Programs for Workers in Philadelphia</h1>
        <p>
          There are a variety of benefits programs for workers in Philadelphia,
          including new programs created in response to the Pandemic.
        </p>
        <h2>Families First Coronavirus Response Act Paid Sick Leave</h2>
        <p>
          Up to 2 weeks of full or partial pay if you are taking sick time
          because of coronavirus, either because you are sick or you are caring
          for someone else.{" "}
          <Link href="/programs/ffcra-sick-leave">...more</Link>
        </p>
        <h2>
          Expanded Family and Medical Leave under the Families First Coronavirus
          Response Act
        </h2>
        <p>
          {" "}
          Up to 10 weeks of partial pay for childcare when other childcare is
          not available because of the pandemic.{" "}
          <Link href="/programs/ffcra-childcare">...more</Link>
        </p>

        <h2>Philadelphia Sick Leave</h2>
        <h3>(Includes childcare leave needed due to coronavirus)</h3>
        <p>
          Up to 40 hours of sick leave, which may or may not be paid.{" "}
          <Link href="/programs/philly-sick-leave">...more</Link>
        </p>
        <h2>Family and Medical Leave Act</h2>
        <p>
          Up to 12 weeks of unpaid leave when you are sick or caring for a
          family member. <Link href="/programs/fmla">...more</Link>
        </p>

        <h2>Unemployment Compensation</h2>
        <p>
          Up to 39 weeks of partial pay if you have lost a job or had your hours
          reduced. <Link href="/programs/uc">...more</Link>
        </p>

        <h2>Pandemic Unemployment Assistance</h2>
        <p>
          Up to 39 weeks of partial pay if you have lost work during the
          pandemic. <Link href="/programs/pua">...more</Link>
        </p>
      </Box>
    </Paper>
  );
};
