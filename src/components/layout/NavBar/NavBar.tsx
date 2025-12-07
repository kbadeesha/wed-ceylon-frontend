// src/components/layout/NavMenu.tsx
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import GlobalConstants from '../../../constants/GlobalConstants';
import './NavBar.scss';

const navItems = [
  { label: 'Find Vendors', path: '/vendors' },
  { label: 'Plan Your Wedding', path: '/plan-wedding' },
  { label: 'Favorites', path: '/favorites' },
  { label: 'About', path: '/about' },
];

export default function NavBar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" className="navbar__brand">
          <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            {GlobalConstants.APP_NAME}
          </NavLink>
        </Typography>
        <Box className="navbar__nav-links">
          {navItems.map((item) => (
            <Button key={item.label} component={NavLink} to={item.path}>
              {item.label}
            </Button>
          ))}
        </Box>
        <Box className="navbar__auth-buttons">
          <Button color="inherit" component={NavLink} to="/signin">
            Sign In
          </Button>
          <Button variant="contained" color="secondary" component={NavLink} to="/join-now">
            Join Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
