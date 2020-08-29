import { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const FONT_MIN = '16';
const FONT_MAX = '27';

const SCREEN_MIN = '480';
const SCREEN_MAX = '1600';

const FluidRootFontSize = createGlobalStyle`
  :root {
    font-size: ${FONT_MIN}px;
  }

  ${breakpoint('sm')`
    :root {
      font-size: calc(${FONT_MIN}px + (${FONT_MAX} - ${FONT_MIN}) * ( (100vw - ${SCREEN_MIN}px) / ( ${SCREEN_MAX} - ${SCREEN_MIN}) ));
    }
  `};

  ${breakpoint('xxxl')`
    :root {
      font-size: ${FONT_MAX}px;
    }
  `};
`;

export default FluidRootFontSize;
