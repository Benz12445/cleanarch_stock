import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import React, { useState } from "react";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
