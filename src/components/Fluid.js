import { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const FluidRootFontSize = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  ${breakpoint('sm')`
    :root {
      font-size: calc(16px + (24 - 16) * ( (100vw - 480px) / ( 1600 - 480) ));
    }
  `};

  ${breakpoint('xxxl')`
    :root {
      font-size: 24px;
    }
  `};
`;

export default FluidRootFontSize;
