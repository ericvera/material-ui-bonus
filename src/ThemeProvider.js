// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaterialUIThemeProvider from '@material-ui/styles/ThemeProvider'
// Helpers
import getFontSize from './helpers/getFontSize'
import getFontWeight from './helpers/getFontWeight'
import getColor from './helpers/getColor'
import { Color, FontSizeLevel, FontWeight } from './helpers/constants'

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
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true
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
      colorPrimary: { backgroundColor: getColor(Color.background) }
    },
    MuiIconButton: {
      root: {
        color: getColor(Color.primary),
        '&:hover': {
          backgroundColor: getColor(Color.transparent)
        }
      }
    },
    MuiButtonBase: {
      root: {
        '&:hover': {
          backgroundColor: getColor(Color.transparent)
        },
        '&$disabled': {
          backgroundColor: getColor(Color.transparent)
        }
      }
    },
    MuiButton: {
      text: {
        borderWidth: 0,
        color: getColor(Color.primary),
        fontWeight: getFontWeight(FontWeight.bold),
        '&:hover': {
          backgroundColor: getColor(Color.transparent)
        },
        '&$disabled': {
          backgroundColor: getColor(Color.transparent)
        }
      },
      contained: {
        backgroundColor: getColor(Color.background),
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: getColor(Color.brand),
        color: getColor(Color.brand),
        //fontWeight: getFontWeight(FontWeight.regular),
        '&:hover': {
          backgroundColor: getColor(Color.background)
        }
      },
      fab: {
        // Between the mobile stepper and the AppBar
        // z-index explained here https://material-ui.com/layout/basics/
        // The fact that this is needed is likely a bug in the lib
        zIndex: 1050,
        color: getColor(Color.brand),
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
        color: getColor(Color.brand)
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: getColor(Color.transparent)
      }
    },
    MuiFormControl: {
      root: {
        display: 'block'
      }
    },
    MuiFormHelperText: {
      root: {
        color: getColor(Color.confirmAction),
        fontSize: getFontSize(FontSizeLevel.l1),
        lineHeight: 1.3,
        marginTop: 0
      }
    },
    MuiFormLabel: {
      root: {
        color: getColor(Color.primary)
      }
    },
    MuiInput: {
      root: {
        borderRadius: 4,
        color: getColor(Color.primary),
        backgroundColor: getColor(Color.inputBackground),
        '&$disabled': {
          color: getColor(Color.primaryDisabled),
          backgroundColor: getColor(Color.inputBackgroundDisabled)
        }
      },
      multiline: {
        paddingBottom: 32
      }
    },
    MuiInputBase: {
      input: {
        borderStyle: 'none',
        padding: getFontSize(FontSizeLevel.l2)
      }
    },
    MuiInputLabel: {
      root: {
        fontWeight: getFontWeight(FontWeight.bold)
      }
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: getColor(Color.transparent)
        },
        '&:focus': {
          backgroundColor: getColor(Color.transparent)
        },
        '&$disabled': {
          backgroundColor: getColor(Color.transparent)
        }
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
    MuiSnackbarContent: {
      root: {
        backgroundColor: getColor(Color.brand),
        color: getColor(Color.background),
        fontSize: getFontSize(FontSizeLevel.l2)
      }
    },
    MuiSvgIcon: {
      root: {
        color: getColor(Color.primary)
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
      fontSize: getFontSize(FontSizeLevel.l4),
      color: getColor(Color.primary),
      fontWeight: getFontWeight(FontWeight.bold),
      lineHeight: 1.1429
    },
    h2: {
      fontSize: getFontSize(FontSizeLevel.l3),
      color: getColor(Color.primary),
      fontWeight: getFontWeight(FontWeight.bold),
      lineHeight: 1.23
    },
    h3: {
      fontSize: getFontSize(FontSizeLevel.l2),
      color: getColor(Color.primary),
      fontWeight: getFontWeight(FontWeight.bold),
      lineHeight: 1.1875
    },
    body1: {
      fontSize: getFontSize(FontSizeLevel.l2),
      color: getColor(Color.primary),
      lineHeight: 1.1875
    },
    body2: {
      fontSize: getFontSize(FontSizeLevel.l1),
      color: getColor(Color.secondary),
      lineHeight: 1.3
    },
    button: {
      fontSize: getFontSize(FontSizeLevel.l1),
      fontWeight: getFontWeight(FontWeight.regular)
    },
    fontWeightRegular: getFontWeight(FontWeight.regular),
    fontWeightMedium: getFontWeight(FontWeight.bold)
  }
})

const ThemeProvider = ({ children }) => (
  <MaterialUIThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MaterialUIThemeProvider>
)

ThemeProvider.propTypes = exact({
  children: PropTypes.node
})

export default ThemeProvider
