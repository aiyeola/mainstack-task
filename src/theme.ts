import '@fontsource/plus-jakarta-sans';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    brand: Record<string, unknown>;
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 321,
      md: 600,
      lg: 960,
      xl: 1200,
    },
  },
  palette: {
    brand: {
      primary: '#131316',
      secondary: '#FF5403',
      grey: '#4D5760',
      grey_secondary: '#31373D',
      secondary_light: '#FFDDCD',
      border_grey: '#EFF1F6',
      light_blue: '#599EEA',
      purple: '#844FF6',
      green: '#0FB77A',
      yellow: '#FAB70A',
      light_orange: '#F09468',
    },
  },
  typography: {
    fontFamily: 'Plus Jakarta Sans',
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: 'inherit',
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        contained: {
          backgroundColor: '#e0e0e0',
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
