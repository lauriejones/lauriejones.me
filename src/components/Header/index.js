import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {Padding} from 'styled-components-spacing';
import Container from '../Container';
import Logo from '../Logo';
import {rainbowBg, TextCenter} from '../../utils';

const HeaderWrapper = styled.header`
  background: ${props => props.theme.colors.blue};
  animation: ${rainbowBg} 8s infinite;
`;

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <Padding inline all={3}>
        <Logo fill="white"/>
      </Padding>
    </Link>
  </HeaderWrapper>
);

export default Header;
