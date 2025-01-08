import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#151853'
    },
    secondary: {
      main: '#df42b1'
    },
    text: {
      primary: 'rgba(255,255,255,0.95)',
      secondary: 'rgba(255,255,255,0.6)'
    },
    error: { main: '#F99891' }
  },
  typography: {
    fontFamily: [
      // 'Kanit',
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),

    h1: {
      fontSize: '80px',
      lineHeight: 1.25,
      letterSpacing: '1px',
      fontWeight: 600
    },
    h2: {
      fontSize: '60px',
      lineHeight: 1.25,
      letterSpacing: '1px',
      fontWeight: 500
    },
    h3: {
      fontSize: '2.5rem',
      lineHeight: 1.25,
      letterSpacing: '1px',
      fontWeight: 500
    },
    h4: {
      fontSize: '1.25rem',
      lineHeight: 1.25,
      letterSpacing: '1px',
      fontWeight: 500
    },
    h5: {
      fontSize: '1.125rem',
      lineHeight: 1.25,
      letterSpacing: '1px',
      fontWeight: 500
    },
    h6: {
      fontSize: '0.9rem',
      lineHeight: 1.1,
      fontWeight: 500
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '1.1px',
      fontWeight: 400
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.5,
      letterSpacing: '1px',
      fontWeight: 400
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            color: 'rgba(255,255,255,0.9)',
            boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            borderRadius: '20px',
            background:
              'linear-gradient(120deg, rgba(80,90,221,1) 0%, rgba(223,66,177,1) 100%)'
          }
        }
      ]
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'rgba(255,255,255,0.2)'
          }
        }
      }
    }
  }
})

export default theme
