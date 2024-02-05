import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box padding={{ base: 3, md: 6 }}>
      <Navbar />
      <Box paddingY={3}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
