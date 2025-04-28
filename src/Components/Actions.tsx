import React from "react";
import { Box, Typography } from "@mui/material";
import { Circle } from "@mui/icons-material";

const Actions: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        paddingLeft: 5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Circle sx={{ color: "dodgerblue", fontSize: 24 }} />
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "black" }}>
          Create a group chat and album &gt;
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Circle sx={{ color: "darkblue", fontSize: 24 }} />
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "black" }}>
          Invite a friend to a 1:1 chat and album &gt;
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Circle sx={{ color: "orange", fontSize: 24 }} />
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "black" }}>
          Join Tel Aviv Communities &gt;
        </Typography>
      </Box>
    </Box>
  );
};

export default Actions;
