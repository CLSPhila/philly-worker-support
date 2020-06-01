import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  contactInfo: {
    padding: theme.spacing(2),
  },
}));

export const ContactCLS = () => {
  const styles = useStyles();

  return (
    <Box className={styles.contactInfo}>
      <h4>Reaching out to Community Legal Services of Philadelphia</h4>
      <p>
        Call us: <Link href="tel:215-981-3700">215-981-3700</Link>
      </p>
      <p>
        {" "}
        Or look for private counsel through the{" "}
        <Link href="https://lris.philadelphiabar.org/">
          Philadelphia Bar Association's Referral Service
        </Link>{" "}
      </p>
    </Box>
  );
};
