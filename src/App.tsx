import React from "react";
import UserCardContainer from "./Components/UserCardContainer";
import TopNavBar from "./Components/TopNavBar";

import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <>
      <Box>
        <TopNavBar />
        <UserCardContainer />
      </Box>
    </>
  );
};

export default App;
