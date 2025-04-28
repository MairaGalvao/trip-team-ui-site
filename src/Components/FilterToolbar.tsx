import React from "react";
import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";

const FilterToolbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <SearchIcon sx={{ color: "black" }} />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "black",
                textDecoration: "underline",
                textDecorationColor: "orange",
              }}
            >
              Joined
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Created
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LockIcon sx={{ color: "dodgerblue" }} />
          <Typography variant="body2" sx={{ color: "lightgray" }}>
            = Private
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FilterToolbar;
