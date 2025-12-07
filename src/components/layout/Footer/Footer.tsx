import { Typography } from '@mui/material';
import GlobalConstants from '../../../constants/GlobalConstants';

const Footer = () => {
  return (
    <div>
      <Typography variant="body2" color="text.secondary">
        2025 {GlobalConstants.APP_NAME}. All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
