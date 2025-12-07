// Color constants - mirrors _variables.scss
export const colors = {
  // Basic colors
  black: '#000000',
  white: '#ffffff',
  lightGray: '#f5f5f5',
  darkGray: '#333333',
  darkerGray: '#1a1a1a',
  darkest: '#121212',

  // Semantic colors (matching SCSS variables)
  primary: '#ffffff', // $primary-color - white for dark theme
  secondary: '#000000', // $secondary-color - black for dark theme
  background: '#121212', // $background-color - dark background
  surface: '#1a1a1a', // $surface-color - slightly lighter dark
  textPrimary: '#ffffff', // $text-primary-color - white text
  textSecondary: '#f5f5f5', // $text-secondary-color - light gray text
} as const;
