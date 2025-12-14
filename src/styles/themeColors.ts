// Color constants - mirrors _variables.scss
export const colors = {
  // Basic colors
  black: '#000000',
  white: '#ffffff',
  beige: '#DDD0C8',
  darkGrey: '#323232',

  // Legacy mappings for compatibility
  lightGray: '#ffffff',
  darkGray: '#323232',
  darkerGray: '#323232',
  darkest: '#DDD0C8',

  // Semantic colors (matching SCSS variables)
  primary: '#DDD0C8', // beige
  secondary: '#323232', // dark grey
  background: '#DDD0C8', // beige
  surface: '#ffffff', // white
  textPrimary: '#323232', // dark grey
  textSecondary: '#000000', // black
} as const;
