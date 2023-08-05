import React from "react";
import Loading from "./Loading";
import MenuAppBar from "./MenuAppBar";
import { useApp } from "../context/AppContext";
import { Container } from "@mui/material";

function BaseLayout({ children }) {
  const { globalState, setGlobalState } = useApp();

  console.log(`globalstate`, globalState);

  const renderProperView = () => {
    if (globalState.loading == true) {
      return <Loading />;
    } else {
      return <Container sx={{ padding: 2 }}>{children}</Container>;
    }
  };
  return (
    <>
      <MenuAppBar />
      {renderProperView()}
    </>
  );
}

export default BaseLayout;
