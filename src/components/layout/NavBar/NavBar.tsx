// src/components/layout/NavMenu.tsx
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          wedCeylon 💍
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={NavLink}
              to={item.path}
              sx={{ color: "#fff" }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
