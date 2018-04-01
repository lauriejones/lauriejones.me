import React from 'react';
import styled from 'styled-components';
import {Padding} from 'styled-components-spacing';
import Container from '../Container';

const Wrapper = styled.div`
  background-color: ${props => props.bg};
  color: ${props => props.color};
`;

const Panel = props => (
  <Wrapper bg={props.bg} color={props.color}>
    <Padding vertical={{xs: 4}} horizontal={{xs: 3, sm: 4, xl: 5}}>
      <Container>
        {props.children}
      </Container>
    </Padding>
  </Wrapper>
);

export default Panel;
