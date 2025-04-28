import React from "react";
import UserCardContainer from "./Components/UserCardContainer";
import TopNavBar from "./Components/TopNavBar";

import { Box } from "@mui/material";
import Footer from "./Components/Footer";
import FilterToolbar from "./Components/FilterToolbar";

const App: React.FC = () => {
  return (
    <>
      <Box>
        <TopNavBar />
        <FilterToolbar />
        <UserCardContainer />
        <Footer />
      </Box>
    </>
  );
};

export default App;
