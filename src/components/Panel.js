import React from 'react';
import styled from 'styled-components';
import { Padding } from 'styled-components-spacing';
import Container from './Container';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.bg};
  color: ${props => props.color};
`;

const Panel = props => (
  <Wrapper bg={props.bg} color={props.color}>
    <Padding vertical={{ xs: 4, lg: 5 }} horizontal={{ xs: 3, sm: 4, xl: 5 }}>
      <Container width={props.width}>{props.children}</Container>
    </Padding>
  </Wrapper>
);

export default Panel;
