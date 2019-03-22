import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaterialUIThemeProvider from '@material-ui/styles/ThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Colors from './helpers/Colors'
// TODO: Figure out how to pass Colors, Font, and other configurable things in

// Based on Golden Ratio with base 16
const Base = 16
const FontSizes = [0, 0.618, 1, 1.618, 2.617]

const FontWeight = {
  Regular: 400,
  Bold: 700
}

/**
 * @param {1,2,3,4} level
 */
const getFontSize = level => {
  return `${Base * FontSizes[level]}px`
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  // NOTE: shadows uses 25 levels of shadows. Setting
  //  them all to avoid the warning and disable them all.
  shadows: Array(25).fill('none'),
  props: {
    MuiAppBar: {
      position: 'static',
      elevation: 0
    },
    MuiButton: {
      variant: 'contained',
      size: 'large',
      disableFocusRipple: true,
      disableTouchRipple: true
    },
    MuiFormControl: {
      margin: 'normal'
    },
    MuiIconButton: {
      disableRipple: true,
      disableTouchRipple: true
    },
    MuiInput: {
      disableUnderline: true
    },
    MuiInputLabel: {
      shrink: true,
      disableAnimation: true,
      focused: false
    },
    MuiList: {
      //disablePadding: true
    },
    MuiListItem: {
      disableGutters: true
    },
    MuiListItemText: {
      primaryTypographyProps: {
        variant: 'h3'
      },
      primaryTypographyProps: {
        variant: 'body1'
      }
    },
    MuiMenu: {
      elevation: 0
    },
    MuiPaper: {
      elevation: 0
    }
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: { backgroundColor: Colors.transparent }
    },
    MuiIconButton: {
      root: {
        color: Colors.primary,
        '&:hover': {
          backgroundColor: Colors.transparent
        }
      }
    },
    MuiButton: {
      text: {
        borderWidth: 0,
        color: Colors.primary,
        fontWeight: FontWeight.Bold,
        '&:hover': {
          backgroundColor: Colors.transparent
        }
      },
      contained: {
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.brand,
        color: Colors.brand,
        //fontWeight: FontWeight.Regular,
        '&:hover': {
          //backgroundColor: Colors.muted
        }
      },
      fab: {
        // Between the mobile stepper and the AppBar
        // z-index explained here https://material-ui.com/layout/basics/
        // The fact that this is needed is likely a bug in the lib
        zIndex: 1050,
        color: Colors.action,
        position: 'fixed',
        bottom: 16,
        right: 16
      },
      label: {
        textTransform: 'none'
      }
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: Colors.actionBorder
      }
    },
    MuiInput: {
      root: {
        fontWeight: 100,
        color: Colors.primary
      },
      multiline: {
        paddingBottom: 32
      }
    },
    MuiInputBase: {
      input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.muted,
        padding: 12
      }
    },
    MuiInputLabel: {
      root: {
        fontWeight: FontWeight.Bold
      }
    },
    MuiListItemText: {
      root: {
        whiteSpace: 'pre-wrap'
      },
      primary: {
        overflowWrap: 'break-word'
      },
      secondary: {
        overflowWrap: 'break-word'
      }
    },
    MuiListSubheader: {
      root: {
        lineHeight: `24px`,
        paddingTop: 32,
        textTransform: 'uppercase',
        fontWeight: 500,
        fontSize: '75%',
        cursor: 'pointer'
      }
    },
    MuiSnackbarContent: {
      root: {
        color: Colors.actionBorder,
        fontSize: '80%'
      }
    }
  },
  palette: {
    text: { main: 'red' },
    primary: { main: Colors.brand, contrastText: 'green' },
    action: { main: Colors.action },
    background: { default: Colors.background, contrastText: 'pink' }
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Montserrat',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontSize: getFontSize(4),
      color: Colors.primary,
      fontWeight: FontWeight.Bold,
      lineHeight: 1.1429
    },
    h2: {
      fontSize: getFontSize(3),
      color: Colors.primary,
      fontWeight: FontWeight.Bold,
      lineHeight: 1.23
    },
    h3: {
      fontSize: getFontSize(2),
      color: Colors.primary,
      fontWeight: FontWeight.Bold,
      lineHeight: 1.1875
    },
    body1: {
      fontSize: getFontSize(2),
      color: Colors.primary,
      lineHeight: 1.1875
    },
    body2: {
      fontSize: getFontSize(1),
      color: Colors.primaryLight,
      lineHeight: 1.3
    },
    button: {
      fontSize: getFontSize(1),
      fontWeight: FontWeight.Regular
    },
    caption: {
      color: Colors.muted
    },
    overline: {
      color: Colors.primary
    },
    fontWeightLight: 200,
    fontWeightRegular: FontWeight.Regular,
    fontWeightMedium: FontWeight.Regular
  }
})

const ThemeProvider = props => (
  <CssBaseline>
    <MaterialUIThemeProvider theme={theme} {...props} />
  </CssBaseline>
)

export default ThemeProvider
