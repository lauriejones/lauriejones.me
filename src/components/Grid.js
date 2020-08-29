import styled, { css } from 'styled-components';
import BaseGrid from 'styled-components-grid';
// import { Margin, Padding } from 'styled-components-spacing';

const Grid = styled(BaseGrid)`
  ${({ gap }) => css`
    margin-left: -${gap};
    margin-right: -${gap};
  `}

  @supports (display: grid) {
    /* display: grid; */
    ${({ gap }) => css`
      gap: ${gap};
    `}
  }
`;

const GridUnit = styled(BaseGrid.Unit)`
  ${({ gap }) => css`
    padding-left: ${gap};
    padding-right: ${gap};
  `}
`;

Grid.Unit = GridUnit;

export default Grid;
