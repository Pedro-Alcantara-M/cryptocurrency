import { createTheme, PaletteOptions, Theme, TypographyVariantsOptions } from '@mui/material';

interface CustomTheme extends PaletteOptions {
  palette: {
    primary: {
      main: string;
      light: string;
      100: string;
      200: string;
      300: string;
      400: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondary: {
      main: string;
      light: string;
      100: string;
      200: string;
      300: string;
      400: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    success: {
      main: string;
      contrastText: string;
      100: string;
      200: string;
      300: string;
      400: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    error: {
      main: string;
      contrastText: string;
      100: string;
      200: string;
      300: string;
      400: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  typography: TypographyVariantsOptions;
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    },
  },
}

const themeOptions: CustomTheme = {
    palette: {
      primary: {
        main: '#FBAB34',
        light: '#FFE1B5',
        100: '#FFF6E8',
        200: '#FFE1B5',
        300: '#FFCD82',
        400: '#FFB94F',
        600: '#FFB94F',
        700: '#AD721A',
        800: '#7A4E0C',
        900: '#472C04',
      },
      secondary: {
        main: '#8C8A97',
        light: '#E0DEEA',
        100: '#F6F6F6',
        200: '#F4F3F8',
        300: '#E0DEEA',
        400: '#ACABB7',
        600: '#716F7A',
        700: '#5F5C6B',
        800: '#4E4B59',
        900: '#33303E',
      },
      success: {
        main: '#1BD171',
        contrastText: '#149E55',
        100: '#E8FAF1',
        200: '#D1F6E3',
        300: '#A4EDC6',
        400: '#8DE8B8',
        600: '#18B863',
        700: '#149E55',
        800: '#0E6B3A',
        900: '#07381E',
      },
      error: {
        main: '#EC3237',
        contrastText: '#A12226',
        100: '#FFF2F3',
        200: '#FFCFD0',
        300: '#FF9497',
        400: '#FA7D80',
        600: '#D42D31',
        700: '#A12226',
        800: '#6E171A',
        900: '#3B0C0E',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: {
        fontSize: '3em',
        letterSpacing: '-1px',
      },
      h2: {
        fontSize: '2.5em',
        letterSpacing: '-1px',
      },
      h3: {
        fontSize: '2em',
        letterSpacing: '0px',
      },
      h4: {
        fontSize: '1.5em',
        letterSpacing: '0px',
      },
      h5: {
        fontSize: '1.25em',
        letterSpacing: '0px',
      },
      body1: {
        fontSize: '1em',
        letterSpacing: '0px',
      },
      subtitle1: {
        fontSize: '0.875em',
        letterSpacing: '0px',
      },
      subtitle2: {
        fontSize: '0.75em',
        lineHeight: 0.875,
        letterSpacing: '0px',
      },
    },
    breakpoints: {
      values: {
        xs: 320,
        sm: 600,
        md: 768,
        lg: 1200,
        xl: 1440,
      },
    },
  };

const theme: Theme = createTheme(themeOptions);

export default theme;