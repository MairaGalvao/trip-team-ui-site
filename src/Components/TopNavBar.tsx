import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import tripteamLogo from "../tripteamLogo.jpeg";

const TopNavBar: React.FC = () => {
  return (
    <Box>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2 }}
          >
            <img src={tripteamLogo} alt="Logo" style={{ height: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavBar;
