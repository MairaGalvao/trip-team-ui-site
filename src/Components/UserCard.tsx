import React from "react";
import { Box, Avatar, Typography, IconButton, Badge } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface UserCardProps {
  imageUrl?: string;
  title?: string;
  subtitle?: string;
  badgeNumber?: number;
}

const UserCard: React.FC<UserCardProps> = ({
  imageUrl,
  title,
  subtitle,
  badgeNumber,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={1}
      bgcolor="background.paper"
      width="100%"
      maxWidth={400}
    >
      <Avatar src={imageUrl} alt={title} sx={{ width: 56, height: 56 }} />

      <Box flex="1" mx={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        {badgeNumber && (
          <Badge
            badgeContent={badgeNumber}
            color="warning"
            overlap="circular"
            sx={{
              "& .MuiBadge-badge": {
                right: -3,
                border: `2px solid white`,
                padding: "0 4px",
              },
            }}
          ></Badge>
        )}

        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UserCard;
