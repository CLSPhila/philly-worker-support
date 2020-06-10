import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ExternalLink from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    " & > p": {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    textAlign: "center",
    paddingTop: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(1),
  },
  contactButtonContainer: {
    textAlign: "center",
  },
  contactButton: {
    margin: "auto",
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export const Referrals = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <Box>
        <h1 className={styles.title}>Finding Legal Help in Philadelphia</h1>
        <p>
          There are lots of ways for workers in Philadelphia to find legal help.
        </p>
        <h2>Community Legal Services</h2>
        <p>
          <ExternalLink href="https://clsphila.org">
            Community Legal Services (CLS)
          </ExternalLink>{" "}
          is a nonprofit law firm. We provide free legal services to low-income
          Philadelphians.
        </p>
        <p>
          {" "}
          You can give us a call at{" "}
          <ExternalLink href="tel:215-981-3789">215-981-3789</ExternalLink> to
          find out if we can help with your legal needs.
        </p>
        <Box className={styles.contactButtonContainer}>
          <Button
            className={styles.contactButton}
            color="primary"
            variant="contained"
            href="tel:215-981-3700"
          >
            Call CLS
          </Button>
        </Box>
        <h2>Philadelphia Legal Services</h2>
        <p>
          <ExternalLink href="https://philalegal.org">
            Philadelphia Legal Assistance (PLA)
          </ExternalLink>{" "}
          is also a nonprofit law firm that provides free legal assistance to
          low-income Philadephians.
        </p>
        <p>
          Visit their{" "}
          <ExternalLink href="https://philalegal.org">website</ExternalLink> or
          give them a <ExternalLink href="tel:215.981.3800">call</ExternalLink>
        </p>
        <Box className={styles.contactButtonContainer}>
          <Button
            className={styles.contactButton}
            color="primary"
            variant="contained"
            href="tel:215-981-3800"
          >
            Call PLA
          </Button>
        </Box>
        .<h2> Philadelphia Bar Association Lawyer Referral Service</h2>
        <p>
          {" "}
          The Philadelphia Bar Association can help you find the right lawyer
          for just about any legal need.
        </p>
        <p>
          Visit the{" "}
          <ExternalLink href="https://lris.philadelphiabar.org/">
            Referral Service
          </ExternalLink>{" "}
          to get started.
        </p>
        <Box className={styles.contactButtonContainer}>
          <Button
            className={styles.contactButton}
            color="primary"
            variant="contained"
            href="https://lris.philadelphiabar.org/"
          >
            Bar Association Referral Service
          </Button>
        </Box>
        <h2>More</h2>
        <p>
          You can find up-to-date resources on legal help and coronavirus at{" "}
          <ExternalLink href="https://clsphila.org/coronavirus/">
            https://clsphila.org/coronavirus/
          </ExternalLink>
        </p>
      </Box>
    </Paper>
  );
};
