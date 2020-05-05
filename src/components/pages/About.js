import React from "react";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

export const About = () => {
  return (
    <Paper>
      <p>
        This site is a project of{" "}
        <Link href="https://clsphila.org">
          Community Legal Services of Philadelphia.
        </Link>
      </p>
    </Paper>
  );
};
