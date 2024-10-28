// theme/theme.js
import { extendTheme } from '@gluestack-ui/themed';

const customTheme = extendTheme({
  colors: {
    primary: {
      500: '#6200ee', // Example color
    },
    text: {
      500: '#000000', // Example default text color
    },
  },
  fontSizes: {
    xl: 24,
  },
});

export default customTheme;
