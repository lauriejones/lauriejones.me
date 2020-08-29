import styled from 'styled-components';
import { px, py } from 'styled-components-spacing';

const Tag = styled.span`
  ${px(3)};
  ${py(2)};
  display: inline-block;
  /* border: 3px solid #ffc107; */
  border-radius: 100px;

  background-color: ${props => props.theme.colors.yellow};
  font-size: ${props => props.theme.typeScale[6]};
  line-height: ${props => props.theme.lineHeights.solid};

  position: relative;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    background: linear-gradient(90deg, orange, #ffc107);
    position: absolute;
    inset: -2px;
    border-radius: 100px;
    z-index: -1;
  }
`;

export default Tag;
