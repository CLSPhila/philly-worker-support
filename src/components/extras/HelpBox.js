import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  helpBox: {
    marginTop: "1rem",
  },
}));

export const HelpBox = (props) => {
  const styles = useStyles();
  return <Box className={styles.helpBox}>{props.children}</Box>;
};
