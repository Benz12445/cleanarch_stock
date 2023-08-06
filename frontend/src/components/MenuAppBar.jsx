import { useEffect, useState } from "react";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useApp, useSetAppCtx } from "../context/AppContext";
import { useLocation } from "react-router-dom";
import { routes } from "../constants/route";

export default function MenuAppBar() {
  const location = useLocation();
  const { setGlobalState, logout } = useSetAppCtx();
  const { globalState } = useApp();

  const [auth, setAuth] = useState(globalState.auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    console.log(`openmenu`);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // navigate(`/login`);
    logout();
  };

  const toggleDrawer = () => {
    console.log(`asdasd`);
    setGlobalState((prev) => ({ ...prev, isDrawerOpen: !prev.isDrawerOpen }));
    // console.log(`after set global state`);
    console.log(`after set global`, globalState);
  };

  const parseRouteName = () => {
    return "Product CRUD";
    // const replace = location.pathname.toUpperCase().replace(/\//g, "");
    const replace = location.pathname.toUpperCase().split("/");
    console.log(`replace`, replace[1]);
    return replace[1] == "" ? "Home" : routes[replace].name;
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {parseRouteName()}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
