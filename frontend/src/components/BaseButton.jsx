import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useApp } from "../context/AppContext";

function BaseButton(props) {
  const { children, ...otherProps } = props;

  const { globalState } = useApp();

  return (
    <Button disabled={globalState.loading} {...otherProps}>
      {children}
    </Button>
  );
}

export default BaseButton;
