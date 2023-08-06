import React from "react";
import Loading from "./Loading";
import MenuAppBar from "./MenuAppBar";
import { useApp } from "../context/AppContext";
import { Container } from "@mui/material";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

function BaseLayout({ children }) {
  const { globalState } = useApp();

  const renderProperView = () => {
    if (globalState.loading == true) {
      return (
        <Container sx={{ padding: 2, height: "100vh" }}>
          <Loading />
        </Container>
      );
    } else {
      return <Container sx={{ padding: 2 }}>{children}</Container>;
    }
  };
  return (
    <>
      <MenuAppBar />
      <SwipeableTemporaryDrawer display={globalState.isDrawerOpen} />
      {renderProperView()}
    </>
  );
}

export default BaseLayout;
