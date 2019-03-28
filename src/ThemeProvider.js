import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaterialUIThemeProvider from '@material-ui/styles/ThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Colors from './helpers/Colors'
import FontWeight from './helpers/FontWeight'
import getFontSize from './helpers/getFontSize'
// TODO: Figure out how to pass Colors, Font, and other configurable things in

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  // NOTE: shadows uses 25 levels of shadows. Setting
  //  them all to avoid the warning and disable them all.
  shadows: Array(25).fill('none'),
  props: {
    MuiAppBar: {
      position: 'fixed',
      elevation: 0
    },
    MuiButton: {
      variant: 'contained',
      size: 'large',
      disableFocusRipple: true,
      disableTouchRipple: true
    },
    MuiIconButton: {
      disableRipple: true,
      disableTouchRipple: true
    },
    MuiInputBase: {
      fullWidth: true
    },
    MuiInput: {
      disableUnderline: true,
      fullWidth: true
    },
    MuiInputLabel: {
      shrink: true,
      disableAnimation: true,
      focused: false
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
      colorPrimary: { backgroundColor: Colors.background }
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
        },
        '&$disabled': {
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
          backgroundColor: Colors.background
        }
      },
      fab: {
        // Between the mobile stepper and the AppBar
        // z-index explained here https://material-ui.com/layout/basics/
        // The fact that this is needed is likely a bug in the lib
        zIndex: 1050,
        color: Colors.brand,
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
        color: Colors.brand
      }
    },
    MuiFormControl: {
      root: {
        display: 'block'
      }
    },
    MuiFormHelperText: {
      root: {
        color: Colors.confirmAction,
        fontSize: getFontSize(1),
        lineHeight: 1.3,
        marginTop: 0
      }
    },
    MuiFormLabel: {
      root: {
        color: Colors.primary
      }
    },
    MuiInput: {
      root: {
        borderRadius: 4,
        color: Colors.primary,
        backgroundColor: Colors.inputBackground,
        '&$disabled': {
          color: Colors.primaryDisabled,
          backgroundColor: Colors.inputBackgroundDisabled
        }
      },
      multiline: {
        paddingBottom: 32
      }
    },
    MuiInputBase: {
      input: {
        borderStyle: 'none',
        padding: getFontSize(2)
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
    MuiSnackbar: {
      root: {
        backgroundColor: Colors.primary
      }
    },
    MuiSnackbarContent: {
      root: {
        color: Colors.background,
        fontSize: '80%'
      }
    },
    MuiSvgIcon: {
      root: {
        color: Colors.primary
      }
    }
  },
  typography: {
    useNextVariants: true,
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
      color: Colors.secondary,
      lineHeight: 1.3
    },
    button: {
      fontSize: getFontSize(1),
      fontWeight: FontWeight.Regular
    },
    fontWeightRegular: FontWeight.Regular,
    fontWeightMedium: FontWeight.Bold
  }
})

const ThemeProvider = ({ children }) => (
  <CssBaseline>
    <MaterialUIThemeProvider theme={theme} children={children} />
  </CssBaseline>
)

export default ThemeProvider
