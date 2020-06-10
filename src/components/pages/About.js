import React from "react";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import { ContactCLS } from "../extras/ContactCLS";
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
export const About = () => {
  const styles = useStyles();

  return (
    <Paper>
      <Box className={styles.root}>
        <Typography variant="h5">
          This site is a project of{" "}
          <Link href="https://clsphila.org">
            Community Legal Services of Philadelphia.
          </Link>
        </Typography>
        <Typography variant="body2">
          Community Legal Services is a 501(c)(3) nonprofit. We provide{" "}
          <Link href="https://clsphila.org/services/">free legal services</Link>{" "}
          to low-income residents of Philadelphia. We also advocate for{" "}
          <Link href="https://clsphila.org/news/">policy reforms</Link> to
          protect Philadelphians' rights to health, housing, and income.
        </Typography>
        <Typography variant="body2">
          We were inspired to create this interactive guide for workers in
          Philadelphia by{" "}
          <Link href="https://familyvaluesatwork.org/rights">
            {" "}
            Family Values @ Work
          </Link>
        </Typography>
        <Typography variant="body2">
          If you are a resident of Philadelphia looking for legal services,
          visit our <Link href="/referrals">Find Legal Help</Link> page for
          resources.
        </Typography>
      </Box>
    </Paper>
  );
};
