import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  helpBox: {
    marginTop: "1rem",

    "& *": {
      lineHeight: "1.4rem",
      marginBottom: theme.spacing(2),
    },
  },
}));

export const HelpBox = (props) => {
  const styles = useStyles();
  return <Box className={styles.helpBox}>{props.children}</Box>;
};
