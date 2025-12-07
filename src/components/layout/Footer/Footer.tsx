import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GlobalConstants from '../../../constants/GlobalConstants';
import './Footer.scss';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Box className="footer__links">
        <Link component={RouterLink} to="/about">
          About
        </Link>
        <Link component={RouterLink} to="/privacy">
          Privacy
        </Link>
        <Link component={RouterLink} to="/terms">
          Terms
        </Link>
        <Link component={RouterLink} to="/your-privacy-choices">
          Your Privacy Choices
        </Link>
        <Link component={RouterLink} to="/web-accessibility">
          Web Accessibility
        </Link>
      </Box>
      <Typography className="footer__copyright">
        © 2025 {GlobalConstants.APP_NAME}. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
