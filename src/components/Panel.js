import React from 'react';
import styled from 'styled-components';
import { Padding } from 'styled-components-spacing';
import Container from './Container';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.bg};
  color: ${props => props.color};
  position: relative;
  overflow: hidden;

  ${props =>
    props.decorative &&
    `
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: white;
      border: 1rem solid orange;
      box-shadow: 0 0 0 1rem #ffc107;
    }
  `}
`;

const Panel = props => (
  <Wrapper bg={props.bg} color={props.color} decorative={props.decorative}>
    <Padding
      vertical={props.decorative ? 6 : { xs: 4, lg: 5 }}
      horizontal={{ xs: 3, sm: 4, xl: 5 }}
    >
      <Container width={props.width}>{props.children}</Container>
    </Padding>
  </Wrapper>
);

export default Panel;
