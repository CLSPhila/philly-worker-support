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
export const UC = () => {
  const styles = useStyles();

  return (
    <Paper>
      <Box className={styles.root}>
        <h1>Unemployment Compensation</h1>
        <h2>What is it?</h2>
        <p>
          Up to 39 weeks of partial income replacement for people who have lost
          work or had their hours reduced.{" "}
        </p>
        <h2>What special issues should I keep in mind?</h2>
        <p>
          You should apply as soon as you lose work or have your hours reduced.
        </p>
        <p>
          Self-employed people, independent contractors, cash workers, and
          employees of religious institutions do not qualify. Gig workers may
          have trouble qualifying and should apply for Pandemic Unemployment
          Assistance instead.
        </p>
        <p>
          To qualify, you need to have enough work and earnings history. You
          will have to have made at least $116/week for at least 18 weeks in
          your <b>base year</b>.{" "}
        </p>
        <p>
          The Office of Unemployment Compensation calculates your{" "}
          <b>base year</b> with{" "}
          <Link href="https://uc.pa.gov/unemployment-benefits/Am-I-Eligible/financial-eligibility/Pages/Financial-eligibility.aspx">
            this chart.
          </Link>{" "}
        </p>
        <p>
          Read{" "}
          <Link href="https://uc.pa.gov/unemployment-benefits/Am-I-Eligible/financial-eligibility/Pages/Financial-eligibility.aspx">
            {" "}
            this guide{" "}
          </Link>{" "}
          to determine the <b> base year </b> for your income.
        </p>
        <p>
          You have to be “able and available” to work to collect unemployment.
          Right now, that means if you were offered remote work and given all
          the equipment and flexibility you need, you could do it.
        </p>
        <p>
          Learn more about Unemployment Compensation, including how to apply
          from{" "}
          <Link href="https://philalegal.org/">
            Philadelphia Legal Assistance
          </Link>
          .
        </p>
      </Box>
    </Paper>
  );
};
