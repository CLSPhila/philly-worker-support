import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    paddingTop: "2rem",
  },
  content: {
    padding: "1rem",
  },
}));

export const PrivacyPolicy = () => {
  const styles = useStyles();

  return (
    <Paper>
      <h1 className={styles.title}> Privacy Policy </h1>
      <Box className={styles.content}>
        <h2> Data Collection and Sharing</h2>
        <p>
          We use{" "}
          <Link href="https://policies.google.com/technologies/partner-sites">
            Google Analytics
          </Link>{" "}
          to track how visitors use this site. This means that we share
          information about your visit to the site with Google. This helps us
          understand what parts of the site are most useful (and which still
          need work!).
        </p>
        <p>
          We do not collect personally identifying information about you. Google
          Analytics may collect information relating to your IP address,
          location, and the device and browser you are using. We use this
          information to evaluate how to improve the site for visitors such as
          yourself.
        </p>
        <p>
          You can block this site and others from tracking you with Google
          Analytics with a{" "}
          <Link href="https://support.google.com/analytics/answer/181881?hl=en">
            browser add-on
          </Link>
          .
        </p>
        <p>
          We may share aggregated statistics about visits to this site with
          others, including publicly.
        </p>
        <h2>Cookies</h2>
        <p>
          As part of our site monitoring, we are using{" "}
          <Link href="https://policies.google.com/technologies/cookies">
            cookies
          </Link>{" "}
          to collect information about the pages people visit and the types of
          devices they use. A cookie is a small file your browser downloads and
          stores automatically.
        </p>
        <p>
          {" "}
          You can block your browser from downloading cookies by following
          instructions for your broswer. (
          <Link href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox">
            Firefox
          </Link>
          ,{" "}
          <Link href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en-GB">
            Chrome
          </Link>
          ,{" "}
          <Link href="https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies">
            Edge
          </Link>
          )
        </p>
      </Box>
    </Paper>
  );
};
