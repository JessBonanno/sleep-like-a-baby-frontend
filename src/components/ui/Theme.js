import {createMuiTheme} from '@material-ui/core/styles';

/**
 * initializes colors and font settings for app theme
 *
 *
 * @returns {default theme css}
 * @constructor
 */

// * fonts
const comfortaa = 'Comfortaa, sans-serif';
const inter = 'Inter, sans-serif';

// * colors
const astral = '#39869D';
const astralLight = '#D7E7EB';
const codGray = '#121212';
const mineShaft = '#1E1E1E'
const mineShaft7p = '#232323'
const mineshaft9p = '#272727'
const mineshaft11p = '#2C2C2C'
const mineshaft12p = '#2E2E2E'
const mineshaft15p = '#363636'
const mineshaft16p = '#383838'
const gray = '#727272'
const orange = '#ff7300'
const smile = '#FF7300'


export default createMuiTheme({
  palette: {
    common: {
      astral: astral,
      astralLight: astralLight,
      codGray: codGray,
      mineShaft: mineShaft,
      mineShaft7p: mineShaft7p,
      mineShaft9p: mineshaft9p,
      mineShaft11p: mineshaft11p,
      mineShaft12p: mineshaft12p,
      mineShaft15p: mineshaft15p,
      mineShaft16p: mineshaft16p,
      gray: gray,
      orange: orange,
      smile: smile,
    },
    action: {
      //       active:
      // rgba(0, 0, 0, 0.54)
      // hover:
      // rgba(0, 0, 0, 0.04)
      // hoverOpacity: 0.04
      // selected:
      // rgba(0, 0, 0, 0.08)
      // selectedOpacity: 0.08
      // disabled:
      // rgba(0, 0, 0, 0.26)
      // disabledBackground:
      // rgba(0, 0, 0, 0.12)
      // disabledOpacity: 0.38
      // focus:
      // rgba(0, 0, 0, 0.12)
      // focusOpacity: 0.12
      // activatedOpacity: 0.12
    },
    primary: {
      main: astral
    },
    secondary: {
      main: mineShaft
    },
  },
  typography: {
    h1: {
      color: 'white',
    },
    h2: {
      color: 'white',
    },
    h3: {
      color: 'white',
    },
    h4: {
      color: 'white',
    },
    h5: {
      color: 'white',
      fontFamily: comfortaa,
      fontSize: '1.8rem',
    },
    h6: {
      color: 'white',
      fontSize: '1rem',
      fontFamily: comfortaa,
    },
    p: {
      color: 'white',
    },
    subtitle1: {
      color: 'white',
      fontSize: '.8rem',
    },
    subtitle2: {
      color: gray,
    },
    body1: {color: 'white'},
    body2: {color: 'white'},
    button: {
      color: 'white',
    },
    tab: {
      color: 'white',
    },
    navLink: {
      color: gray,
      fontFamily: comfortaa,
      textDecoration: 'none',
    },
    caption: {
      fontFamily: inter,
      color: astral,
    },
  },
  overrides: {

    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: astral,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDatePickerRoot: {
      backgroundColor: mineShaft7p,
    },
    MuiPickersDay: {
      day: {
        color: astral,
      },
      daySelected: {
        backgroundColor: astral,
      },
      dayDisabled: {
        color: astral,
      },
      current: {
        color: orange,
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: astral,
        backgroundColor: mineShaft7p,

      },
    },
    MuiSvgIcon: {
      root: {
        fill: smile,
      },
    },
  },
});
