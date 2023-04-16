import { createTheme } from '@mui/material/styles';
import { fontConfig } from './fonts';
import { paletteConfig } from './palette';
const theme = createTheme({
  typography: fontConfig,
  palette: paletteConfig,
});
export default theme;
