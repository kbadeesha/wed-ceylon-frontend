import { createTheme } from '@mui/material/styles';
import { colors } from './styles/themeColors';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
      contrastText: colors.secondary,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.primary,
    },
    background: {
      default: colors.background,
      paper: colors.surface,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1.1rem',
          padding: '12px 32px',
          transition: 'all 0.3s ease',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
          '&:focus': {
            outline: 'none',
          },
          '&.button--primary': {
            backgroundColor: colors.beige,
            color: colors.textPrimary,
            '&:hover': {
              backgroundColor: colors.beige,
            },
          },
          '&.button--secondary': {
            backgroundColor: colors.white,
            color: colors.textPrimary,
            border: `1px solid ${colors.textPrimary}`,
            fontWeight: 400,
            '&:hover': {
              backgroundColor: colors.beige,
              borderColor: colors.black,
            },
          },
          '&.button--outline': {
            backgroundColor: 'transparent',
            color: colors.textPrimary,
            border: `1px solid ${colors.textPrimary}`,
            '&:hover': {
              backgroundColor: colors.beige,
              borderColor: colors.black,
            },
          },
        },
      },
    },
  },
});

export default theme;
