import { createTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9',
  arcGrey = '#868686';

export default createTheme({
  palette: {
    common: {
      blue: arcBlue
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcGrey
    }
  }
});
