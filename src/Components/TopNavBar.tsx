import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";

import tripteamLogo from "../tripteamLogo.jpeg";

const TopNavBar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: Logo */}
        <IconButton>
          <img src={tripteamLogo} alt="Logo" style={{ height: 40 }} />
        </IconButton>

        {/* Right: Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <SearchIcon sx={{ color: "dodgerblue", fontSize: 30 }} />
          <Box
            sx={{
              bgcolor: "dodgerblue",
              borderRadius: "50%",
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddIcon sx={{ color: "white" }} />
          </Box>
          <FavoriteIcon sx={{ color: "red", fontSize: 30 }} />
          <MenuIcon sx={{ color: "black", fontSize: 30 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
