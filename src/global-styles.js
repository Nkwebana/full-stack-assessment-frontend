import { createGlobalStyle } from 'styled-components';
import { theme } from './utils/theme';

const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${theme.colors.darkGrey};
  }

  .MuiCardContent-root {
    background-color: ${theme.colors.grey};
  }

  .MuiCardActionArea-root {
    color: ${theme.colors.white}
  }

  .MuiTypography-root {
    color: ${theme.colors.white}
  }
`;

export default GlobalStyles;
