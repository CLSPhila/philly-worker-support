import React from "react";
import Box from "@material-ui/core/Box";

export const DemoWarning = () => {
  return (
    <Box bgcolor="warning.main">
      <b>
        This site is in development still. The information here isn't complete,
        or even always accurate. Don't rely on it.
      </b>
    </Box>
  );
};
