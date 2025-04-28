import React from "react";
import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DescriptionIcon from "@mui/icons-material/Description";

const Footer: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Footer Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {/* Chat Icon with Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ChatIcon sx={{ color: "dodgerblue", fontSize: 30 }} />
            <Typography variant="caption" color="text.secondary">
              Groups
            </Typography>
          </Box>

          {/* Play Icon with Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PlayArrowIcon sx={{ color: "black", fontSize: 30 }} />
            <Typography variant="caption" color="text.secondary">
              Channels
            </Typography>
          </Box>

          {/* Description Icon with Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <DescriptionIcon sx={{ color: "black", fontSize: 30 }} />
            <Typography variant="caption" color="text.secondary">
              Feed
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
