// src/components/layout/NavMenu.tsx
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import GlobalConstants from '../../../constants/GlobalConstants';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
];

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          {GlobalConstants.APP_NAME}
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button key={item.label} component={NavLink} to={item.path}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
