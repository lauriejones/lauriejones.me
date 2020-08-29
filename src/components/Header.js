import React from 'react';
import styled from 'styled-components';
import { p, Padding } from 'styled-components-spacing';
import { rainbowBg } from '../utils';
import Link from './Link';
import Logo from './Logo';
import Text from './Text';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, .02);

  overflow: hidden;

  /* border-bottom: 1px solid rgba(0, 0, 0, .1); */
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1), 0 2px 8px 0 rgba(0, 0, 0, .05); */

  line-height: 1;
  font-size: 0;

  /* background-color: hsla(0, 0%, 100%, 0.05);
  background: ${props => props.theme.colors.blue};
  animation: ${rainbowBg} 16s infinite; */
`;

const Nav = styled.nav`
  display: inline-grid;
  grid-gap: 0.5rem;
  grid-auto-flow: column;
`;

const NavLink = styled(Link)`
  ${p(2)}
  font-weight: 700;
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -1.2rem;
    left: 50%;
    transform: translate(-50%, 0) rotate(45deg);
    width: 0.4rem;
    height: 0.4rem;
    /* border-radius: 50%; */
    background-color: white;
    border: 0.2rem solid orange;
    box-shadow: 0 0 0 0.2rem #ffc107;

    opacity: 0.01;
    transition: opacity ease-in-out 0.2s;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.blue};

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0.25rem;
      left: 0.5rem;
      right: 0.5rem;
      height: 3px;
      background-color: currentColor;
      opacity: 0.75;
    }

    &::before {
      opacity: 1;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo fill="#333" to="/" />
    <Padding all={2}>
      <Text
        size="small"
        lineHeight="solid"
        color={props => props.theme.colors.black87}
        component={Nav}
      >
        <NavLink to="/" muted>
          Home
        </NavLink>
        <NavLink to="/about/" muted>
          About
        </NavLink>
        <NavLink to="/blog/" muted>
          Blog
        </NavLink>
      </Text>
    </Padding>
  </HeaderWrapper>
);

export default Header;
