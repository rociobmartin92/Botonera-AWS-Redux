import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    primario: {
      light: '#65bcc9',
      medium: '#569ea9',
      heavy: '#427780',
    },
    secundario: {
      light: '#d47a6c',
      medium: '#A96156',
      heavy: '#7d4840',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
