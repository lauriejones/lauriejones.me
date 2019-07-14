import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Padding} from 'styled-components-spacing';
import Link from '../Link';
import Logo from '../Logo';
import Copy from '../Copy';
import {rainbowBg} from '../../utils';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  
  @supports (display: grid) {
    ${breakpoint('md')`
      flex-direction: column;
    `}
    grid-row: 1 / span 1;
    grid-column: 1 / span 2;
  }

  border-bottom: 1px solid rgba(0, 0, 0, .1);

  @supports (display: grid) {
    ${breakpoint('md')`
      grid-row: 1 / span 3;
      grid-column: 1 / span 1;
      border-bottom: 0;
      border-right: 1px solid rgba(0, 0, 0, .1);
    `}
  }

  line-height: 1;
  font-size: 0;

  /* background-color: hsla(0, 0%, 100%, 0.05); */
  /* background: ${props => props.theme.colors.blue}; */
  /* animation: ${rainbowBg} 16s infinite; */
`;

const Vertical = styled.div`

  @supports (display: grid) {

    ${breakpoint('md')`
      transform: rotate(-90deg);
      white-space: nowrap;
    `}
  
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo fill="#333"/>
    <Vertical>
      <Padding all={3}>
        <Copy size="small" lineHeight="solid" color={props => props.theme.colors.black87}>
          <Link muted href="https://twitter.com/laurie_jones">Twitter</Link>
          <span> &middot; </span> 
          <Link muted href="https://github.com/lauriejones">GitHub</Link>
          <span> &middot; </span> 
          <Link muted href="https://www.npmjs.com/~lauriejones">npm</Link>
          <span> &middot; </span> 
          <Link muted href="https://au.linkedin.com/in/lauriejonesme">Linked In</Link>
        </Copy>
      </Padding>
    </Vertical>
  </HeaderWrapper>
);

export default Header;
