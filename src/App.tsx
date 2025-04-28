import React from "react";
import TopNavBar from "./Components/TopNavBar";
import FilterToolbar from "./Components/FilterToolbar";
import Actions from "./Components/Actions";
import UserCardContainer from "./Components/UserCardContainer";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <>
      <Box>
        <TopNavBar />
        <FilterToolbar />
        <Actions />
        <UserCardContainer />
        <Footer />
      </Box>
    </>
  );
};

export default App;
