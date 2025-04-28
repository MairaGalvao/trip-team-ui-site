import React from "react";
import { Stack } from "@mui/material";
import UserCard from "./UserCard";

const UserCardContainer: React.FC = () => {
  const users = [
    {
      imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
      title: "City Life in London",
      subtitle: "Post",
      badgeNumber: 3,
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/43.jpg",
      title: "Tripteam Public Gallery",
      subtitle: "Noga joined the group",
      badgeNumber: 2,
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/43.jpg",
      title: "The real NYC",
      subtitle: "Post - We won",
      badgeNumber: 1,
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/43.jpg",
      title: "Yuval",
      subtitle: "Last new 1d",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/43.jpg",
      title: "Your friends group",
      subtitle: "Last new 3d",
    },

    {
      imageUrl: "https://randomuser.me/api/portraits/men/43.jpg",
      title: "Eyal",
      subtitle: "Last new 3d",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/43.jpg",
      title: "Tel Aviv Networking",
      subtitle: "Last new 4d",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/43.jpg",
      title: "Yuval",
      subtitle: "Last new 4d",
    },
  ];

  return (
    <Stack spacing={2} alignItems="center" marginTop={4}>
      {users.map((user, index) => (
        <UserCard
          key={index}
          imageUrl={user.imageUrl}
          title={user.title}
          subtitle={user.subtitle}
          badgeNumber={user.badgeNumber}
        />
      ))}
    </Stack>
  );
};

export default UserCardContainer;
