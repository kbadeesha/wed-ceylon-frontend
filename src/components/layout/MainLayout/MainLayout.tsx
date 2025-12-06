import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3, mb: 3, minHeight: "80vh" }}>
        <Outlet />
      </Container>

      <Footer />
    </Box>
  );
}
