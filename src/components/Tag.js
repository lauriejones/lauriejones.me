import styled from 'styled-components';
import { px, py } from 'styled-components-spacing';

const Tag = styled.span`
  ${px(3)};
  ${py(2)};
  display: inline-block;
  border: 2px solid ${props => props.theme.colors.black06};
  border-radius: 100px;

  /* background-color: ${props => props.theme.colors.black06}; */
  font-size: ${props => props.theme.typeScale[6]};
  line-height: ${props => props.theme.lineHeights.solid};
`;

export default Tag;
