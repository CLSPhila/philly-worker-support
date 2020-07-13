import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export const DemoWarning = () => {
  return (
    <Box bgcolor="warning.main">
      <b>
        This site is a work in progress. There may be omissions or errors. If
        you find any, please <Link href="/feedback">let us know.</Link>
      </b>
    </Box>
  );
};
